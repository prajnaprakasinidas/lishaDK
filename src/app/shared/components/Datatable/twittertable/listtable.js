import React, { Component } from 'react'
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import './listtable.scss'


const columns = [
    {
        dataField: "name",
        text: "Top List",
        sort: true
    },
    {
        dataField: "members",
        text: "Members",
        sort: true
    },
    {
        dataField: "followers",
        text: "Followers",
        sort: true
    }
];

const data = [
    {
        id: 1,
        name: "Client Name",
        members: "7,73,366",
        followers: "3,062",
       
    },
    {
        id: 2,
        name: "Client Name",
        members: "7,73,366",
        followers: "3,062",
    },
    {
        id: 3,
        name: "Client Name",
        members: "7,73,366",
        followers: "3,062",
    },
    {
        id: 4,
        name: "Client Name",
        members: "7,73,366",
        followers: "3,062",
    },
    {
        id: 5,
        name: "Client Name",
        members: "7,73,366",
        followers: "3,062",
    },
    {
        id: 6,
        name: "Client Name",
        members: "7,73,366",
        followers: "3,062",
    },
    {
        id: 7,
        name: "Client Name",
        members: "7,73,366",
        followers: "3,062",
    },
    {
        id: 8,
        name: "Client Name",
        members: "7,73,366",
        followers: "3,062",
    },
    {
        id: 9,
        name: "Client Name",
        members: "7,73,366",
        followers: "3,062",
    },
    {
        id: 10,
        name: "Client Name",
        members: "7,73,366",
        followers: "3,062",
    }
];



export class ListDataTable extends Component {
    render() {
        return (
            <div className="MainDiv">
                <BootstrapTable
                    bootstrap4
                    keyField="id"
                    data={data}
                    columns={columns}
                    pagination={paginationFactory({ sizePerPage: 5 })}
                    striped
                    bordered={false}
                    wrapperClasses="table-responsive"
                />

            </div>
        )
    }
}
