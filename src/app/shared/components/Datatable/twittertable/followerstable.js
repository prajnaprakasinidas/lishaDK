import React, { Component } from 'react'
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import './listtable.scss'

const columns = [
    {
        dataField: "name",
        text: "Followers Name",
        sort: true
    },
    {
        dataField: "followers",
        text: "Followers (count)",
        sort: true
    },
    {
        dataField: "ratio",
        text: "Followers/Following Ratio",
        sort: true
    },
    {
        dataField: "count",
        text: "Tweet Count",
        sort: true
    }
];

const data = [
    {
        id: 1,
        name: "Client Name",
        followers: "3,062",
        ratio:"11,342",
        count:"0.00",
    },
    {
        id: 2,
        name: "Client Name",
        followers: "3,062",
        ratio:"11,342",
        count:"0.00",
    },
    {
        id: 3,
        name: "Client Name",
        followers: "3,062",
        ratio:"11,342",
        count:"0.00",
    },
    {
        id: 4,
        name: "Client Name",
        followers: "3,062",
        ratio:"11,342",
        count:"0.00",
    },
    {
        id: 5,
        name: "Client Name",
        followers: "3,062",
        ratio:"11,342",
        count:"0.00",
    },
    {
        id: 6,
        name: "Client Name",
        followers: "3,062",
        ratio:"11,342",
        count:"0.00",
    },
    {
        id: 7,
        name: "Client Name",
        followers: "3,062",
        ratio:"11,342",
        count:"0.00",
    },
    {
        id: 8,
        name: "Client Name",
        followers: "3,062",
        ratio:"11,342",
        count:"0.00",
    },
    {
        id: 9,
        name: "Client Name",
        followers: "3,062",
        ratio:"11,342",
        count:"0.00",
    },
    {
        id: 10,
        name: "Client Name",
        followers: "3,062",
        ratio:"11,342",
        count:"0.00",
    }
];

export class FollowersTable extends Component {
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
