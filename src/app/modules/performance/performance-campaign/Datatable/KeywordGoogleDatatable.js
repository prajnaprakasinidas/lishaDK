import React, { Component } from 'react';
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import './datatable.scss'


const columns = [
  {
    dataField: "name",
    text: "Campaign Name",
    sort: true
  },
  {
    dataField: "impressions",
    text: "Impressions",
    sort: true
  },
  {
    dataField: "clicks",
    text: "Clicks",
    sort: true
  },
  {
    dataField: "ctr",
    text: "CTR(%)",
    sort: true
  },
  {
    dataField: "spends",
    text: "Spends",
    sort: true
  },
  {
    dataField: "convrate",
    text: "Conv Rate",
    sort: true
  },
  {
    dataField: "cpc",
    text: "Avg CPC",
    sort: true
  },
  {
    dataField: "avgposition",
    text: "Avg Position",
    sort: true
  }
];

const data = [
  {
    id: 1,
    name: "Client Name",
    impressions: "7,73,366",
    clicks: "3,062",
    ctr: "0.00",
    spends: "11,342",
    convrate: "200",
    cpc: "0.00",
    avgposition: "0.00"
  },
  {
    id: 2,
    name: "Client Name 2",
    impressions: "7,73,366",
    clicks: "3,062",
    ctr: "0.00",
    spends: "11,342",
    convrate: "200",
    cpc: "0.00",
    avgposition: "0.00"
  },
  {
    id: 3,
    name: "Client Name 3",
    impressions: "7,73,366",
    clicks: "3,062",
    ctr: "0.00",
    spends: "11,342",
    convrate: "200",
    cpc: "0.00",
    avgposition: "0.00"
  },
  {
    id: 4,
    name: "Client Name 4",
    impressions: "7,73,366",
    clicks: "3,062",
    ctr: "0.00",
    spends: "11,342",
    convrate: "200",
    cpc: "0.00",
    avgposition: "0.00"
  },
  {
    id: 5,
    name: "Client Name 5",
    impressions: "7,73,366",
    clicks: "3,062",
    ctr: "0.00",
    spends: "11,342",
    convrate: "200",
    cpc: "0.00",
    avgposition: "0.00"
  },
  {
    id: 6,
    name: "Client Name 6",
    impressions: "7,73,366",
    clicks: "3,062",
    ctr: "0.00",
    spends: "11,342",
    convrate: "200",
    cpc: "0.00",
    avgposition: "0.00"
  },
  {
    id: 7,
    name: "Client Name 7",
    impressions: "7,73,366",
    clicks: "3,062",
    ctr: "0.00",
    spends: "11,342",
    convrate: "200",
    cpc: "0.00",
    avgposition: "0.00"
  },
  {
    id: 8,
    name: "Client Name 8",
    impressions: "7,73,366",
    clicks: "3,062",
    ctr: "0.00",
    spends: "11,342",
    convrate: "200",
    cpc: "0.00",
    avgposition: "0.00"
  },
  {
    id: 9,
    name: "Client Name 9",
    impressions: "7,73,366",
    clicks: "3,062",
    ctr: "0.00",
    spends: "11,342",
    convrate: "200",
    cpc: "0.00",
    avgposition: "0.00"
  },
  {
    id: 10,
    name: "Client Name 10",
    impressions: "7,73,366",
    clicks: "3,062",
    ctr: "0.00",
    spends: "11,342",
    convrate: "200",
    cpc: "0.00",
    avgposition: "0.00"
  }
];



export class KeywordGoogleDatatable extends Component {

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
