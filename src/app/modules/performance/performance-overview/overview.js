import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import { Col } from 'react-bootstrap';
import IconGoogle from '../../../../assets/images/icons/googleIcon'
import IconFacebook from '../../../../assets/images/icons/facebookIcon';
import IconTwitter from '../../../../assets/images/icons/twitterIcon'
import IconInstagram from '../../../../assets/images/icons/instagramIcon';
import IconImpressions from '../../../../assets/images/icons/impressionsIcon';
import { NumberFormatter } from "../../../shared/utilities/numberformatter";
import { OverviewDropdown } from '../../../shared/components/dropdown/overviewdropdown'
import MultiLine_LineChart from '../../../shared/components/charts/MultiLine_LineChart';
import { OverviewTable } from "./Datatable/OverviewTable";
import { DailydataDropdown } from '../../../shared/components/dropdown/dailydatadropdown';

import './performance.scss';


export class Overview extends Component {

    constructor(props) {
        super(props);
        this.state = {
            social: '[{"year":"2016","google":1,"facebook":5,"instagram":3,"twitter":2,"linkedin":4},{"year":"2017","google":3,"facebook":6,"instagram":4,"twitter":7,"linkedin":5},{"year":"2018","google":5,"facebook":4,"instagram":5,"twitter":6,"linkedin":7},{"year":"2019","google":7,"facebook":6,"instagram":6,"twitter":4,"linkedin":5},{"year":"2020","google":8,"facebook":7,"instagram":5,"twitter":6,"linkedin":7},{"year":"2021","google":7,"facebook":6,"instagram":3,"twitter":5,"linkedin":5}]',
            is_select_data_loaded: false,
            select_source_data: [],

            is_graph_data_loaded: false,
            campaign_graph_data: [],
            source_dropdown_options: [{ "value": "impression", "label": "Impression" }, { "value": "leads", "label": "leads" }, { "value": "click", "label": "Clicks" }, { "value": "spends", "label": "Spends" }, { "value": "conversion", "label": "Leads" }, { "value": "is_app_install", "label": "App Installs" }],
            source_metrices_dropdown_value: "impression",
            icon_class: {
                "Google": <IconGoogle className="icz-icon" />,
                "Facebook": <IconFacebook className="icz-icon" />,
                "Instagram": <IconInstagram className="icz-icon" />,
                "Linkedin": <IconInstagram className="icz-icon" />,
                "Twitter": <IconTwitter className="icz-icon" />,
            },

            action_short_code: {
                "impression": "CTR",
                "click": "CPC",
                "spends": "Conversions",
                "leads": "CPL",
                "conversion": "CPL",
                "is_app_install": "CPI",
            },
            source_column_name: {
                "impression": "impressions",
                "click": "clicks",
                "spends": "spends_money",
                "leads": "conversions_money",
                "conversion": "conversions_money",
                "is_app_install": "app_installed",
            },
            total_source: 0,
            final_calc: 0,

        }
    }

    componentDidMount() {
        this.getSelectData();
        this.getMultilineGraphData();

    }
    getSelectData() {
        const data = {
            'start_date': '2021-10-01',
            'end_date': '2021-12-31',
        }
        fetch("https://api1.icogz.com/api/performance/select-metrices/")
            .then((res) => res.json())
            .then((data) => {

                console.log("data sss== ", data);
                let data_list = data['graph_list_data']
                let total = 0;
                let total_calc = 0;

                let total_impression = 0
                let total_click = 0
                let total_leads = 0
                let total_conversion = 0
                let total_spends = 0
                let total_app_install = 0

                data_list.map((item, index) => {

                    total_impression += item.impressions;
                    total_click += item.clicks;
                    total_leads += item.conversions_money;
                    total_conversion += item.conversions_money;
                    total_spends += item.spends_money;
                    total_app_install += item.is_app_install;

                    if (this.state.source_metrices_dropdown_value == 'impression') {
                        total += item.impressions;
                        console.log("impression block exicute");
                    } else if (this.state.source_metrices_dropdown_value == 'clicks') {
                        total += item.clicks;
                        console.log("clicks block exicute");
                    } else if (this.state.source_metrices_dropdown_value == "leads") {
                        total += item.conversions_money;
                        console.log("leads block exicute");
                    } else if (this.state.source_metrices_dropdown_value == "spends") {
                        total += item.spends_money;
                        console.log("spends block exicute")
                    } else if (this.state.source_metrices_dropdown_value == "conversion") {
                        total += item.conversions_money;
                        console.log("conversion block exicute")
                    } else if (this.state.source_metrices_dropdown_value == "is_app_install") {
                        total += item.is_app_install;
                        console.log("is_app_install block exicute")
                    }
                })

                console.log("Total = ", total)
                console.log("total_impression = ", total_impression)
                console.log("total_click = ", total_click)
                console.log("total_leads = ", total_leads)
                console.log("total_conversion = ", total_conversion)
                console.log("total_spends = ", total_spends)
                console.log("total_app_install = ", total_app_install)

                let final_calc = 0;

                if (this.state.source_metrices_dropdown_value == 'impression') {
                    final_calc = ((total_click / total_impression) * 100).toFixed(2) + "%";

                } else if (this.state.source_metrices_dropdown_value == 'clicks') {
                    final_calc = "₹: " + (total_spends / total_click).toFixed(2);
                } else if (this.state.source_metrices_dropdown_value == "leads") {
                    final_calc = "₹: " + (total_spends / total_conversion).toFixed(2);
                } else if (this.state.source_metrices_dropdown_value == "spends") {
                    final_calc = total_spends;
                } else if (this.state.source_metrices_dropdown_value == "conversion") {
                    final_calc = "₹: " + total_conversion.toFixed(2);
                } else if (this.state.source_metrices_dropdown_value == "is_app_install") {
                    if (total_app_install == 0) { final_calc = "INR: 0"; }
                    final_calc = "₹: " + (total_spends / total_app_install).toFixed(2);
                }


                this.setState({
                    select_source_data: data,
                    is_select_data_loaded: true,
                    total_source: total,
                    final_calc: final_calc
                })
                console.log("===============list select data==========", this.state.select_source_data)


            });

    }


    getMultilineGraphData() {

        console.log("source_metrices_dropdown_value ", this.state.source_metrices_dropdown_value)

        const data = {
            'start_date': '2021-10-01',
            'end_date': '2021-12-31',

        }
        const url = "https://api1.icogz.com/api/performance/campaign-graph_matrix/"
        fetch(url, {
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(res => res.json())
            .then((result) => {
                // console.log("====campaign-graph_matrix=======", result)
                let source_list = result['graph_data'];

                let data_list = [];

                let facebook_list = [];
                let insta_list = []
                let twitter_list = []
                let linkedin_list = []
                let google_list = []
                let date_list = []


                source_list.map((info, index) => {
                    try {

                        if (!date_list.includes(source_list[index]['date_to_be_considered'])) {
                            date_list.push(source_list[index]['date_to_be_considered']);
                        }

                        let a = {
                            "date": source_list[index]['date_to_be_considered'],
                            "impression": source_list[index]['impressions'],
                            "click": source_list[index]['clicks'],
                            "spends": source_list[index]['spends_money'],
                            "is_app_install": source_list[index]['is_mobile_app_install'],
                            "conversion": source_list[index]['conversions_money']
                        }

                        if (source_list[index]['source'] == "Twitter") {
                            twitter_list.push(a);
                        } else if (source_list[index]['source'] == "Linkedin") {
                            linkedin_list.push(a);
                        } else if (source_list[index]['source'] == "Facebook") {
                            facebook_list.push(a);
                        } else if (source_list[index]['source'] == "Instagram") {
                            insta_list.push(a);
                        } else if (source_list[index]['source'] == "Google") {
                            google_list.push(a);
                        }
                    } catch {

                    }


                });

                // Prepar data for the graph
                // Iterating Date List
                date_list.map((info, index) => {

                    let facebook_val = 0;
                    let twitter_val = 0;
                    let likedin_val = 0;
                    let insta_val = 0;
                    let google_val = 0;

                    // Facebook
                    try {
                        facebook_val = facebook_list[index][this.state.source_metrices_dropdown_value];
                    } catch {
                        facebook_val = 0;
                    }

                    // Twitter
                    try {
                        twitter_val = twitter_list[index][this.state.source_metrices_dropdown_value];
                    } catch {
                        twitter_val = 0;
                    }

                    // Linkedin
                    try {
                        likedin_val = linkedin_list[index][this.state.source_metrices_dropdown_value];
                    } catch {
                        likedin_val = 0;
                    }

                    // Instagram

                    try {
                        insta_val = insta_list[index][this.state.source_metrices_dropdown_value];
                    } catch {
                        insta_val = 0;
                    }


                    // Google
                    try {
                        google_val = google_list[index][this.state.source_metrices_dropdown_value];
                    } catch {
                        google_val = 0;
                    }

                    let a = {
                        "year": info,
                        "google": google_val,
                        "facebook": facebook_val,
                        "instagram": insta_val,
                        "twitter": twitter_val,
                        "linkedin": likedin_val
                    };

                    data_list.push(a);
                });

                this.setState({ is_graph_data_loaded: true, social: data_list });

            },
                (error) => {
                    //   console.log("Error Result = ", error)
                }
            )
    }


    calculateSocialMetrices = (action, info) => {
        let result = 0;


        if (action == "CTR") {
            return result = ((info.clicks / info.impressions) * 100).toFixed(2) + "%";
        } else if (action == "CPC") {
            return result = "₹: " + (info.spends_money / info.clicks).toFixed(2);
        } else if (action == "Conversions") {
            return result = info.conversions_money.toFixed(2);
        } else if (action == "CPL") {
            return result = "₹: " + (info.spends_money / info.conversions_money).toFixed(2);
        } else if (action == "CPI") {
            if (info.app_installed == 0) { return result = "INR: 0"; }
            return result = "₹: " + (info.spends_money / info.app_installed).toFixed(2);
        }


    }

    handleCallback = (childData) => {
        // console.log("Child Data ============================================ ", childData);

        this.state.source_metrices_dropdown_value = childData
        this.setState({ is_graph_data_loaded: false });

        this.getSelectData();
        this.getMultilineGraphData();
    }

    render() {
        if (!this.state.is_select_data_loaded) {
            return <div></div>
        }
        console.log(" ---------- 22(select data) ------- ", this.state.select_source_data);


        // let filter_data_list = this.state.select_source_data;

        // let total_click = 0;
        // let total_impression = 0;
        // // let total_ctr = 0;
        // // let total_source_value = 0;
        // let final_ctr = 0;

        // if (this.state.is_select_data_loaded == true) {
        //     total_click = this.state.select_source_data['graph_list_data'][0]['clicks'] + this.state.select_source_data['graph_list_data'][1]['clicks'] + this.state.select_source_data['graph_list_data'][2]['clicks'] + this.state.select_source_data['graph_list_data'][3]['clicks'] + this.state.select_source_data['graph_list_data'][4]['clicks'];
        //     total_impression = this.state.select_source_data['graph_list_data'][0]['impressions'] + this.state.select_source_data['graph_list_data'][1]['impressions'] + this.state.select_source_data['graph_list_data'][2]['impressions'] + this.state.select_source_data['graph_list_data'][3]['impressions'] + this.state.select_source_data['graph_list_data'][4]['impressions'];
        //     final_ctr = ((total_click / total_impression) * 100).toFixed(2)
        // }


        return (
            <Container className="p-0" fluid>
                <div className="icz-row">
                    <Col className="icz-sectioncardwrapper" sm={12} lg={12}>
                        <div className="icz-sectioncard">
                            <div className="icz-cardheader">
                                <Col className="icz-cardtitle">
                                    Performance by Source
                                </Col>
                                <Col className="icz-cardfilter">
                                    {/* <OverviewDropdown /> */}

                                    <DailydataDropdown dropdown_options={this.state.source_dropdown_options} dropdown_placeholder="Impression" parentCallback={this.handleCallback} />
                                </Col>
                            </div>
                            <div className="icz-dchartsection">
                                {this.state.is_graph_data_loaded == true ?
                                    <Col className="" sm={12} lg={9}>
                                        <MultiLine_LineChart chart_id="icz-sourcegraph" chart_class="icz-sectionchart" graph-data={this.state.social} />

                                    </Col>
                                    : ""}

                                {this.state.is_graph_data_loaded == true ?
                                    <Col className="icz-chartdetailssection" sm={12} lg={3}>
                                        <div className="icz-detailsdatasection w-100">

                                            {this.state.select_source_data['graph_list_data'].map((info, index) =>
                                                <div className="icz-detailsdatatab d-flex justify-content-between align-items-end">
                                                    <div className="d-flex align-items-center">
                                                        <div className="icz-iconwrapper">
                                                            {this.state.icon_class[info.source]}
                                                        </div>
                                                        <div className="icz-titlewrapper">
                                                            <div className="icz-title">{info.source}</div>
                                                        </div>
                                                    </div>
                                                    <div className="icz-titlewrapper">
                                                        <div className="icz-title">
                                                            <NumberFormatter Number={info[this.state.source_column_name[this.state.source_metrices_dropdown_value]]} IsNumber={true} />


                                                        </div>
                                                        <div className="icz-subtitle">
                                                            {this.state.action_short_code[this.state.source_metrices_dropdown_value]}:  {this.calculateSocialMetrices(this.state.action_short_code[this.state.source_metrices_dropdown_value], info)}
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            <div className="icz-detailsdatatab d-flex justify-content-between align-items-end">
                                                <div className="d-flex align-items-center">
                                                    <div className="icz-iconwrapper">
                                                        <IconImpressions className="icz-icon" />
                                                    </div>
                                                    <div className="icz-titlewrapper">
                                                        <div className="icz-title">
                                                            Total
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="icz-titlewrapper">
                                                    <div className="icz-title icz-highlight">
                                                        <NumberFormatter Number={this.state.total_source} IsNumber={true} />
                                                    </div>
                                                    <div className="icz-subtitle">{this.state.action_short_code[this.state.source_metrices_dropdown_value]}:{this.state.final_calc}%</div>
                                                </div>
                                            </div>


                                        </div>
                                    </Col>
                                    : ""}

                            </div>
                        </div>
                    </Col>
                </div>
                <div className="icz-row">
                    <div className="icz-sectioncardwrapper w-100">
                        <div className="icz-sectioncard">
                            <div className="icz-cardheader">
                                <Col className="icz-cardtitle">
                                    Summary
                                </Col>
                            </div>
                            <div className="">
                                <OverviewTable />
                            </div>
                        </div>
                    </div>
                </div>

            </Container>
        )
    }
}
