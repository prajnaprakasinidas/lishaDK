import React, { Component } from 'react'
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
        dataField: "leads",
        text: "Leads",
        sort: true
    },
    {
        dataField: "cpc",
        text: "Avg CPC",
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
        leads: "2",
        cpc: "0.00",
    },
    {
        id: 2,
        name: "Client Name 2",
        impressions: "7,73,366",
        clicks: "3,062",
        ctr: "0.00",
        spends: "11,342",
        leads: "2",
        cpc: "0.00",
    },
    {
        id: 3,
        name: "Client Name 3",
        impressions: "7,73,366",
        clicks: "3,062",
        ctr: "0.00",
        spends: "11,342",
        leads: "2",
        cpc: "0.00",
    },
    {
        id: 4,
        name: "Client Name 4",
        impressions: "7,73,366",
        clicks: "3,062",
        ctr: "0.00",
        spends: "11,342",
        leads: "2",
        cpc: "0.00",
    },
    {
        id: 5,
        name: "Client Name 5",
        impressions: "7,73,366",
        clicks: "3,062",
        ctr: "0.00",
        spends: "11,342",
        leads: "2",
        cpc: "0.00",
    },
    {
        id: 6,
        name: "Client Name 6",
        impressions: "7,73,366",
        clicks: "3,062",
        ctr: "0.00",
        spends: "11,342",
        leads: "2",
        cpc: "0.00",
    },
    {
        id: 7,
        name: "Client Name 7",
        impressions: "7,73,366",
        clicks: "3,062",
        ctr: "0.00",
        spends: "11,342",
        leads: "2",
        cpc: "0.00",
    },
    {
        id: 8,
        name: "Client Name 8",
        impressions: "7,73,366",
        clicks: "3,062",
        ctr: "0.00",
        spends: "11,342",
        leads: "2",
        cpc: "0.00",
    },
    {
        id: 9,
        name: "Client Name 9",
        impressions: "7,73,366",
        clicks: "3,062",
        ctr: "0.00",
        spends: "11,342",
        leads: "2",
        cpc: "0.00",
    },
    {
        id: 10,
        name: "Client Name 10",
        impressions: "7,73,366",
        clicks: "3,062",
        ctr: "0.00",
        spends: "11,342",
        leads: "2",
        cpc: "0.00",
    }
];

export class LinkedinDatatable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            table_data: data,
            is_data_loaded: false
        }

    }
    componentDidMount() {
        this.getTwitterCampaignDataTable();

    }

    getTwitterCampaignDataTable() {
        const data = {
            'start_date': '2021-10-01',
            'end_date': '2021-12-31',
        }
        const url = "http://127.0.0.1:8000/api/performance/linkedin-campain-datatable/"
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(res => res.json())
            .then((result) => {
                let campaign_matrix_list = result['campain_table_data'];

                let data_list = [];
                campaign_matrix_list.map((info, index) => {
                    try {
                        let a = {
                            "name": campaign_matrix_list[index]['campaign_name'],
                            "impressions": campaign_matrix_list[index]['impressions'],
                            "clicks": campaign_matrix_list[index]['clicks'],
                            "ctr": (campaign_matrix_list[index]['clicks'] / campaign_matrix_list[index]['impressions'] * 100).toFixed(2) == "NaN" || "Infinity" ? "0" : (campaign_matrix_list[index]['clicks'] / campaign_matrix_list[index]['impressions'] * 100).toFixed(2),
                            "spends": campaign_matrix_list[index]['spends_money'],
                            "leads": campaign_matrix_list[index]['conversions_money'],
                            "cpc": (campaign_matrix_list[index]['spends_money'] / campaign_matrix_list[index]['clicks'] * 100).toFixed(2) == "NaN" || "Infinity" ? "0" : (campaign_matrix_list[index]['spends_money'] / campaign_matrix_list[index]['clicks'] * 100).toFixed(2),

                        }
                        data_list.push(a);
                    } catch {
                        // 
                    }
                });

                console.log("-------- campaign_list_lINKDIN_datatables ----------- ", data_list);
                this.setState({ is_data_loaded: true, table_data: data_list })
            });
    }


    render() {

        if (!this.state.is_data_loaded) {
            return <div></div>
        }

        return (
            <div className="MainDiv">
                <BootstrapTable
                    bootstrap4
                    keyField="id"
                    data={this.state.table_data}
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
