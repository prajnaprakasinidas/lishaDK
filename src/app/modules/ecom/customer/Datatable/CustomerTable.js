import React, { Component } from 'react';
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
// import '../../../performance/performance-campaign/Datatable/datatable.scss';

const columns = [
    {
        dataField: "name",
        text: "Personas",
        sort: true
    },
    {
        dataField: "count",
        text: "Count",
        sort: true
    },
    {
        dataField: "sales",
        text: "Sales",
        sort: true
    },
    {
        dataField: "bills",
        text: "Bills",
        sort: true
    },
    {
        dataField: "ats",
        text: "ATS",
        sort: true
    },
    {
        dataField: "nsu",
        text: "NSU",
        sort: true
    },
    {
        dataField: "topcategory",
        text: "Top Category",
        sort: true
    },
    {
        dataField: "topbrand",
        text: "Top Brand",
        sort: true
    },
    {
        dataField: "avgtimepurchases",
        text: "Avg Time Between Purchases",
        sort: true
    },
    {
        dataField: "recency",
        text: "Recency",
        sort: true
    },
    {
        dataField: "couponpenetration",
        text: "Coupon Penetration",
        sort: true
    }


];

const data = [
    {
        id: 1,
        name: "Bargain hunters",
        count: "120K",
        sales: "250M",
        bills: "30%",
        ats: "45",
        nsu: "15",
        topcategory: "Electronics",
        topbrand: "Mobile",
        avgtimepurchases: "10",
        recency: "20",
        couponpenetration: "10",
    },
    {
        id: 2,
        name: "Need Attention",
        count: "120K",
        sales: "250M",
        bills: "30%",
        ats: "45",
        nsu: "20",
        topcategory: "Electronics",
        topbrand: "Mobile",
        avgtimepurchases: "10",
        recency: "20",
        couponpenetration: "10",
    },
    {
        id: 3,
        name: "Lost",
        count: "120K",
        sales: "250M",
        bills: "30%",
        ats: "45",
        nsu: "20",
        topcategory: "Electronics",
        topbrand: "Mobile",
        avgtimepurchases: "10",
        recency: "20",
        couponpenetration: "10",
    },
    {
        id: 4,
        name: "Loyalists",
        count: "120K",
        sales: "250M",
        bills: "30%",
        ats: "45",
        nsu: "20",
        topcategory: "Electronics",
        topbrand: "Mobile",
        avgtimepurchases: "10",
        recency: "20",
        couponpenetration: "10",
    },
    {
        id: 5,
        name: "Promising",
        count: "120K",
        sales: "250M",
        bills: "30%",
        ats: "45",
        nsu: "20",
        topcategory: "Electronics",
        topbrand: "Mobile",
        avgtimepurchases: "10",
        recency: "20",
        couponpenetration: "10",
    },
    {
        id: 6,
        name: "At Risk",
        count: "120K",
        sales: "250M",
        bills: "30%",
        ats: "45",
        nsu: "20",
        topcategory: "Electronics",
        topbrand: "Mobile",
        avgtimepurchases: "10",
        recency: "20",
        couponpenetration: "10",
    },
    {
        id: 7,
        name: "Champions",
        count: "120K",
        sales: "250M",
        bills: "30%",
        ats: "45",
        nsu: "20",
        topcategory: "Electronics",
        topbrand: "Mobile",
        avgtimepurchases: "10",
        recency: "20",
        couponpenetration: "10",
    },
    {
        id: 8,
        name: "Potential Loyalists",
        count: "120K",
        sales: "250M",
        bills: "30%",
        ats: "45",
        nsu: "20",
        topcategory: "Electronics",
        topbrand: "Mobile",
        avgtimepurchases: "10",
        recency: "20",
        couponpenetration: "10",
    }

];


export class CustomerTable extends Component {

    render() {
        return (
            <div className="MainDiv icz-table">
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
