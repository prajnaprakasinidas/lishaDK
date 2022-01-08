import React, { Component } from 'react';
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import './overviewtable.scss'

//columns = []; to empty columns 
//if dropwdown is adgroup or campaign ,etc... then write if else code for columns variable.


const columns = [
    {
        dataField: "name",
        text: "Campaign Name",
        sort: true
    },
    {
        dataField: "platform",
        text: "Platform",
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
        text: "Leads/Result",
        sort: true
    },
    {
        dataField: "cpl",
        text: "CPL(₹)",
        sort: true
    },
    {
        dataField: "views",
        text: "Views",
        sort: true
    },
    {
        dataField: "rate",
        text: "View Rate(%)",
        sort: true
    }


];

const data = [
    {
        id: 1,
        name: "Client Name",
        platform: "Google",
        impressions: "7,73,366",
        clicks: "3,062",
        spends: "11,342",
        leads: "2",
        cr: "0.00",
        cpl: "5,671",
        views: "0",
        rate: "0.00",
    },
    {
        id: 2,
        name: "Client Name",
        platform: "Google",
        impressions: "7,73,366",
        clicks: "3,062",
        ctr: "0.00",
        spends: "11,342",
        leads: "2",
        cpl: "5,671",
        views: "0",
        rate: "0.00",
    },
    {
        id: 3,
        name: "Client Name",
        platform: "Google",
        impressions: "7,73,366",
        clicks: "3,062",
        ctr: "0.00",
        spends: "11,342",
        leads: "2",
        cpl: "5,671",
        views: "0",
        rate: "0.00",
    },
    {
        id: 4,
        name: "Client Name",
        platform: "Google",
        impressions: "7,73,366",
        clicks: "3,062",
        ctr: "0.00",
        spends: "11,342",
        leads: "2",
        cpl: "5,671",
        views: "0",
        rate: "0.00",
    },
    {
        id: 5,
        name: "Client Name",
        platform: "Google",
        impressions: "7,73,366",
        clicks: "3,062",
        ctr: "0.00",
        spends: "11,342",
        leads: "2",
        cpl: "5,671",
        views: "0",
        rate: "0.00",
    },
    {
        id: 6,
        name: "Client Name",
        platform: "Google",
        impressions: "7,73,366",
        clicks: "3,062",
        ctr: "0.00",
        spends: "11,342",
        leads: "2",
        cpl: "5,671",
        views: "0",
        rate: "0.00",
    },
    {
        id: 7,
        name: "Client Name",
        platform: "Google",
        impressions: "7,73,366",
        clicks: "3,062",
        spends: "11,342",
        leads: "2",
        cr: "0.00",
        cpl: "5,671",
        views: "0",
        rate: "0.00",
    },
    {
        id: 8,
        name: "Client Name",
        platform: "Google",
        impressions: "7,73,366",
        clicks: "3,062",
        ctr: "0.00",
        spends: "11,342",
        leads: "2",
        cpl: "5,671",
        views: "0",
        rate: "0.00",
    },
    {
        id: 9,
        name: "Client Name",
        platform: "Google",
        impressions: "7,73,366",
        clicks: "3,062",
        ctr: "0.00",
        spends: "11,342",
        leads: "2",
        cpl: "5,671",
        views: "0",
        rate: "0.00",
    },
    {
        id: 10,
        name: "Client Name",
        platform: "Google",
        impressions: "7,73,366",
        clicks: "3,062",
        ctr: "0.00",
        spends: "11,342",
        leads: "2",
        cpl: "5,671",
        views: "0",
        rate: "0.00",
    }
];


export class OverviewTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            table_data: data,
            is_data_loaded: false
        }

    }
    componentDidMount() {
        this.getCampaignDataTable();

    }


    getCampaignDataTable() {
        const data = {
            'start_date': '2021-10-01',
            'end_date': '2021-12-31',
        }
        const url = "https://api1.icogz.com/api/performance/campaign-metrices/"
        fetch(url, {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(res => res.json())
            .then((result) => {
                let campaign_matrix_list = result['campaign'];

                let data_list = [];
                campaign_matrix_list.map((info, index) => {
                    try {
                        let a = {
                            "name": campaign_matrix_list[index]['campaign_name'],
                            "platform": campaign_matrix_list[index]['platform'],
                            "impressions": campaign_matrix_list[index]['impressions'],
                            "clicks": campaign_matrix_list[index]['clicks'],
                            "ctr": (campaign_matrix_list[index]['clicks'] / campaign_matrix_list[index]['impressions'] * 100).toFixed(2) == "NaN" || "Infinity" ? "0" : (campaign_matrix_list[index]['clicks'] / campaign_matrix_list[index]['impressions'] * 100).toFixed(2),
                            "spends": campaign_matrix_list[index]['spends_money'],
                            "leads": campaign_matrix_list[index]['conversions_money'],
                            "cpl": (campaign_matrix_list[index]['spends_money'] / campaign_matrix_list[index]['conversions_money'] * 100).toFixed(2) == "NaN" || "Infinity" ? "0" : (campaign_matrix_list[index]['spends_money'] / campaign_matrix_list[index]['conversions_money'] * 100).toFixed(2),
                            "views": campaign_matrix_list[index]['views'],
                            "rate": campaign_matrix_list[index]['view_rate'],

                        }
                        data_list.push(a);
                    } catch {
                        // 
                    }
                });


                console.log("-------- campaign_list_datatables ----------- ", data_list);
                this.setState({ is_data_loaded: true, table_data: data_list })
            });
    }


    render() {

        if (!this.state.is_data_loaded) {
            return <div></div>
        }

        let table_data_list = this.state.data;

        console.log("Data Table list", table_data_list)

        return (
            <div className="MainDiv">
                <BootstrapTable className="icz-tbloverview"
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