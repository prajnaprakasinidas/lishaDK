import React, { useEffect, useState, useMemo } from "react";
import Pagination from 'react-bootstrap/Pagination'

const TablePagination = ({ total = 0, itemsPerPage = 10, currentPage = 1, onPageChange, initialPage = 1 }) => {

    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {

        if (total > 0 && itemsPerPage > 0)
            setTotalPages(Math.ceil(total / itemsPerPage));

    }, [total, itemsPerPage])

    const paginationItems = useMemo(() => {

        const pages = [];
        for (let i = 0; i <= totalPages; i++) {
            pages.push(
                <Pagination.Item
                    key={i}
                    active={i === currentPage}
                    onClick={() => onPageChange(i)}>
                    {i}
                </Pagination.Item>
            );
        }

        return pages;
    }, [totalPages, currentPage])

    if (totalPages === 1) return null;

    return (

        <Pagination>
            <Pagination.Item onClick={() => onPageChange(currentPage = 1)} disabled={currentPage === 1}>1</Pagination.Item>
            <Pagination.Prev onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} />
            <Pagination.Item active>{currentPage}</Pagination.Item>
            <Pagination.Next onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} />
            <Pagination.Item onClick={() => onPageChange(totalPages)}  disabled={currentPage === totalPages}>{totalPages}</Pagination.Item>
        </Pagination>

    )
}

export default TablePagination;