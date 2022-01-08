import React, { useState, useEffect, useMemo } from "react"
import Table from 'react-bootstrap/Table'

import Wrapper from "../../../helpers/wrapper"
import UseLoader from "../loader/useLoader"
import TableHeader from "./TableHeader"
import TablePagination from "./TablePagination"
import TableSearch from "./TableSearch"

const DataTable = (props) => {

    const [comments, setComments] = useState([]);
    const [loader, showLoader, hideLoader] = UseLoader();
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [sorting, setSorting] = useState({ field: "", order: "" })

    const [search, setSearch] = useState("");

    const ITEMS_PER_PAGE = props.TableSize;

    const headers = props.Headers;

    useEffect(() => {
        const getData = () => {
            showLoader();

            fetch("https://jsonplaceholder.typicode.com/comments")
                .then(response => response.json())
                .then(json => {
                    hideLoader();
                    setComments(json);
                    console.log(json);
                });
        };
        getData();
    }, []);

    const commentsData = useMemo(() => {
        let computedComments = comments;

        if (search) {
            computedComments = computedComments.filter(
                comment =>
                    comment.id.toString().includes(search.toLowerCase()) ||
                    comment.name.toLowerCase().includes(search.toLowerCase()) ||
                    comment.email.toLowerCase().includes(search.toLowerCase()) ||
                    comment.body.toLowerCase().includes(search.toLowerCase())
            )
        }
        setTotalItems(computedComments.length);

        // SORTING
        if (sorting.field) {
            const reversed = sorting.order === "asc" ? 1 : -1;
            computedComments = computedComments.sort(
                (a, b) =>
                    reversed * a[sorting.field].localeCompare(b[sorting.field]))
        }

        // CURRENT PAGE SLICE
        return computedComments.slice(
            (currentPage - 1) * ITEMS_PER_PAGE,
            (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
        );
    }, [comments, currentPage, search, sorting]);

    return (
        <Wrapper>
            <div>
                <div className="">
                    <div className="">
                        <div className="w-100 d-flex justify-content-end">
                            <TableSearch
                                onSearch={
                                    (value) => {
                                        setSearch(value);
                                        setCurrentPage(1)
                                    }
                                }
                            />
                        </div>
                    </div>
                    <Table>
                        <TableHeader
                            headers={headers}
                            onSorting={(field, order) =>
                                setSorting({ field, order })}
                        />
                        {totalItems === 0 ?
                            "sorry"
                            :
                            <tbody>
                                {commentsData.map(comment => (<tr key={comment.id}>
                                    <td scrop="row">{comment.id}</td>
                                    <td>{comment.name}</td>
                                    <td>{comment.email}</td>
                                    <td>{comment.body}</td>
                                </tr>))}
                            </tbody>}
                    </Table>
                    <div className="w-100 d-flex justify-content-between">
                        <div className="">
                            Page {currentPage} of {totalItems / ITEMS_PER_PAGE}
                        </div>
                        <div className="">
                            <TablePagination
                                total={totalItems}
                                itemsPerPage={ITEMS_PER_PAGE}
                                currentPage={currentPage}
                                onPageChange={page => setCurrentPage(page)}
                                initialPage
                            />
                        </div>
                    </div>
                </div>
                {/* {loader} */}
            </div>
        </Wrapper>
    )
}

export default DataTable;