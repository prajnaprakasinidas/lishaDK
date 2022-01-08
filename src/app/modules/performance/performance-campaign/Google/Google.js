import React, { Component } from 'react';
import Col from "react-bootstrap/esm/Col";
import Wrapper from "../../../../helpers/wrapper";
import { LocationDropdown } from "../../../../shared/components/dropdown/locationdropdown";
import { SourceDropdown } from "../../../../shared/components/dropdown/sourcedropdown";
import { DonutChart } from '../../../../shared/components/charts/DonutChart';
import { LocationBarChart } from '../../../../shared/components/charts/LocationBarChart';
import { MetricsLineChart } from '../../../../shared/components/charts/MetricsLineChart';
import { SourceDatatable } from '../Datatable/SourceDatatable';
import { AdGoogleDatatable } from '../Datatable/AdGoogleDatatable';
import { KeywordGoogleDatatable } from '../Datatable/KeywordGoogleDatatable';
import { NumberFormatter } from "../../../../shared/utilities/numberformatter";
import IconDesktop from '../../../../../assets/images/icons/desktopIcon'
import IconMobile from '../../../../../assets/images/icons/mobileIcon';
import IconTablet from '../../../../../assets/images/icons/tabletIcon';
import IconLaptop from '../../../../../assets/images/icons/laptopIcon';
import IconGoogleSearch from '../../../../../assets/images/icons/googlesearchIcon';
import IconGoogleDisplay from '../../../../../assets/images/icons/googledisplayIcon';
import IconAllDevices from '../../../../../assets/images/icons/alldevicesIcon';
import IconLeads from '../../../../../assets/images/icons/leadsIcon';
import IconCTR from '../../../../../assets/images/icons/ctrIcon';
import IconCTC from '../../../../../assets/images/icons/ctcIcon'
import IconSearch from '../../../../../assets/images/icons/searchIcon';
import IconConversion from '../../../../../assets/images/icons/conversionIcon';
import IconCPL from '../../../../../assets/images/icons/cplIcon'
import IconImpressions from '../../../../../assets/images/icons/impressionsIcon';
import { MetricsDropdown } from '../../../../shared/components/dropdown/metricsdropdown';
import { DailydataDropdown } from '../../../../shared/components/dropdown/dailydatadropdown';


import './google.scss'
import IconClicks from '../../../../../assets/images/icons/clicksIcon';


export class Google extends Component {

    constructor(props) {
        super(props);
        this.state = {
            leadspiedata: [{ "name": "Google Search", "value": 39 }, { "name": "Google Display", "value": 32 }, { "name": "Remarketing", "value": 7 }],

            locationdata: [],

            metrics: [{ "date": "2016", "value": 13 }, { "date": "2017", "value": 23 }, { "date": "2018", "value": 25 }, { "date": "2019", "value": 31 }, { "date": "2020", "value": 29 }, { "date": "2021", "value": 33 }],
            source_dropdown_options: [{ "value": "impression", "label": "Impression" }, { "value": "leads", "label": "leads" }, { "value": "click", "label": "Clicks" }, { "value": "spends", "label": "Spends" }, { "value": "conversion", "label": "Leads" }, { "value": "is_app_install", "label": "App Installs" }],
            source_metrices_dropdown_value: "impression",

            graphData: [],
            dropdownData: [],
            selectedOptions: null,
            id: "",
            name: '',

            is_select_data_loaded: false,
            select_google_data: [],
            // is_impression_loaded: false,
            // social_multiline_data: [],
            is_social_multiline_loaded: false,
            device_data: [],
            is_device_loaded: false,
            is_location_loaded: false,

            is_google_lead_source_loaded: false,
            total_leads_count: 0,
            top_source_val: 0,
            top_source_name: "",
            daily_metrics_name: "total_mention",


            is_graph_data_loaded: false,
            google_graph_data: [],

            statelist: [],

            source_column_name: {
                "impression": "impressions",
                "click": "clicks",
                "spends": "spends_money",
                "leads": "conversions_money",
                "conversion": "conversions_money",
                "is_app_install": "app_installed",
            },


        }

    }

    componentDidMount() {
        this.getGoogleSelectMetrices();
        this.getGoogleDevicematrix();
        this.getLocationTypeData();
        this.getGoogleLeadSource();
        this.getMultilineGraphData();
    }

    getGoogleSelectMetrices() {
        console.log("source_metrices_dropdown_value ", this.state.source_metrices_dropdown_value)

        const data = {
            'start_date': "2021-01-01",
            'end_date': "2021-12-31",
            'source': 'Google',
        }

        const url = "https://api1.icogz.com/api/performance/google_source_select/"
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(res => res.json())
            .then((result) => {
                this.setState({
                    is_device_loaded: true,
                    select_google_data: result
                });
            })
    }

    getGoogleDevicematrix() {
        const data = {
            'source': 'Google',
        }
        const url = "https://api1.icogz.com/api/performance/device/"
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(res => res.json())
            .then((result) => {
                this.setState({
                    is_select_data_loaded: true,
                    device_data: result
                });
            })
    }

    // getImpression() {
    //     const data = {
    //         'start_date': "2021-01-01",
    //         'end_date': "2021-12-31",
    //         'source': 'Google',

    //     }

    //     const url = "https://api1.icogz.com/api/performance/google_graph_matrix/"
    //     fetch(url, {
    //         method: 'POST',
    //         body: JSON.stringify(data),
    //         headers: {
    //             'Content-Type': 'application/json',
    //         }
    //     }).then(res => res.json())
    //         .then((result) => {
    //             let current_impression_list = result['current_impression_list'];

    //             let data_list = [];
    //             current_impression_list.map((info, index) => {
    //                 try {
    //                     let a = {
    //                         "date": new Date(current_impression_list[index]['date_to_be_considered']),
    //                         "value": current_impression_list[index]['impressions'],
    //                     }
    //                     data_list.push(a);
    //                 } catch {
    //                     // 
    //                 }
    //             });

    //             console.log("-------- data_list prajna ----------- ", data_list);
    //             this.setState({
    //                 is_social_multiline_loaded: true,
    //                 metrics: data_list,

    //                 final_impression: result['final_impression']
    //             })
    //         },
    //             (error) => {
    //                 console.log("Error Result = ", error)
    //             }
    //         )
    // }


    handleStateOnChange(value) {
        console.log(`locationdata`, this?.state?.locationdata, value)
        const selectedStateGraphData = this?.state?.locationdata?.filter((item) => item?.state === value?.value)
        console.log(`selectedStateGraphData`, selectedStateGraphData)
        this.setState({ selectedOptions: value, graphData: selectedStateGraphData })
    }


    getLocationTypeData() {
        const data = {
            'start_date': '2021-10-01',
            'end_date': '2021-12-31',
            'source': 'Google',
        }
        // const url = "https://api1.icogz.com/api/performance/location/"

        const url = "https://api1.icogz.com/api/performance/location/"
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(res => res.json())
            .then((result) => {

                let location_list = result['location_data'];

                let data_list = [];
                let stateData_list = location_list?.map((item, index) => { return { value: item?.state, label: item?.state } })

                console.log("hi lisha", stateData_list);
                console.log(`location_list`, location_list)

                location_list.map((info, index) => {

                    try {
                        let a = {
                            name: location_list[index]['location'],
                            state: location_list[index]['state'],
                            points: location_list[index]['total_conversion'],
                        }
                        data_list.push(a);

                    } catch {
                        // 
                    }

                });
                // console.log("========location_list_wwww=====", typeof (location_list), data_list)

                // console.log("========location_list_wwww_yyyyy=====", typeof (uniquestate))

                let graphShowData = data_list.filter(item => item?.state === stateData_list[0]?.value)

                this.setState({ is_location_loaded: true, dropdownData: stateData_list, selectedOptions: stateData_list[0], locationdata: data_list, graphData: graphShowData })
            });
    }

    getGoogleLeadSource() {
        const data = {
            'start_date': '2021-10-01',
            'end_date': '2021-12-31',
            'source': 'Google',
        }
        const url = "https://api1.icogz.com/api/performance/google-lead-source/"
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(res => res.json())
            .then((result) => {

                console.log("Result Lead Souce = ", result);
                let source_list = result['lead_source_list'];

                let data_list = [];
                let total_leads = 0;
                let temp_val = 0;
                let temp_name = "";
                source_list.map((info, index) => {
                    try {
                        let a = {

                            // "name": info['type'],
                            "name": (info['type'] == "NULL" ? "Others" : info['type']) || (info['type'] == "" ? "Others" : info['type']),
                            "value": info['total_conversion']
                        }
                        total_leads = total_leads + info['total_conversion'];
                        data_list.push(a);

                        if (temp_val < info['total_conversion']) {
                            temp_val = info['total_conversion'];
                            temp_name = (info['type'] == "NULL" ? "Others" : info['type']);
                        }

                    } catch {
                        // 
                    }
                });

                console.log("--------Lead Source ----------- ", data_list);
                this.setState({
                    is_google_lead_source_loaded: true,
                    total_leads_count: total_leads,
                    leadspiedata: data_list,
                    top_source_val: temp_val,
                    top_source_name: temp_name
                })
            });
    }
    getMultilineGraphData() {
        const data = {
            'start_date': '2021-10-01',
            'end_date': '2021-12-31',

        }
        const url = "https://api1.icogz.com/api/performance/google_graph_matrix/"
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(res => res.json())
            .then((result) => {

                let source_list = result['current_impression_list'];

                let data_list = [];

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
                        // console.log("===============16=========", source_list)


                        if (source_list[index]['source'] == "Google") {
                            google_list.push(a);
                        }
                    } catch {

                    }

                });


                // Prepar data for the graph
                // Iterating Date List
                date_list.map((info, index) => {

                    let google_val = 0;

                    // Google
                    try {
                        google_val = google_list[index][this.state.source_metrices_dropdown_value];

                    } catch {
                        google_val = 0;
                    }

                    let a = {
                        "date": info,
                        "value": google_val,
                    };

                    data_list.push(a);
                });
                // console.log("===============12=========", data_list)

                this.setState({ is_graph_data_loaded: true, metrics: data_list });

            },
                (error) => {
                }
            )
    }
    handleCallback = (childData) => {
        // console.log("Child Data ============================================ ", childData);

        this.state.source_metrices_dropdown_value = childData
        this.setState({ is_graph_data_loaded: false });

        this.getMultilineGraphData();
    }



    render() {

        if (!this.state.is_google_lead_source_loaded || !this.state.is_select_data_loaded || !this.state.is_device_loaded || !this.state.is_location_loaded) {
            return <div></div>
        }

        let lead_list = this.state.leadspiedata;

        // console.log("google_total_conversion ", total_conversion);
        let total_conversion = 0;
        return (
            <Wrapper>
                <div className="icz-row">
                    <Col className="icz-sectioncardwrapper" sm={12} lg={6}>
                        <div className="icz-sectioncard">
                            <div className="icz-cardheader">
                                <Col className="icz-cardtitle">
                                    Leads
                                </Col>
                            </div>

                            <div className="icz-dchartsection icz-leadchartsection">
                                <Col className="" sm={12} lg={8}>
                                    <DonutChart card_id="leads-chart" card_class="icz-sectionchart" card_value={this.state.top_source_val} center_title={this.state.top_source_name}
                                        graph-data={this.state.leadspiedata} />
                                </Col>
                                <Col sm={12} lg={4} className="icz-chartdetailssection icz-chartscroll">
                                    <div className="icz-detailsdatasection  w-100">

                                        {lead_list.map((info, index) =>
                                            <div className="icz-detailsdatatab icz-detailchartscroll">
                                                <div className="icz-iconwrapper">
                                                    <IconClicks className="icz-icon" />
                                                </div>
                                                <div className="icz-titlewrapper">
                                                    <div className="icz-title">
                                                        <NumberFormatter Number={info.value} IsNumber={true} />
                                                    </div>
                                                    <div className="icz-subtitle">
                                                        {(info.name == "NULL" ? "Unknown" : info.name)}
                                                    </div>
                                                </div>
                                            </div>

                                        )}

                                        <div className="icz-detailsdatatab">
                                            <div className="icz-iconwrapper">
                                                <IconClicks className="icz-googlescreenicon" />
                                            </div>
                                            <div className="icz-titlewrapper">
                                                <div className="icz-title icz-highlight">
                                                    <NumberFormatter Number={this.state.total_leads_count} IsNumber={true} />
                                                </div>
                                                <div className="icz-subtitle">
                                                    Total Leads
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </Col>
                            </div>

                        </div>
                    </Col>
                    <Col className="icz-sectioncardwrapper" sm={12} lg={6}>
                        <div className="icz-sectioncard">
                            <div className="icz-cardheader">
                                <Col className="icz-cardtitle">
                                    Location
                                </Col>
                                <Col className="icz-cardfilter">
                                    <LocationDropdown stateList={this.state.dropdownData} selectedOptions={this.state.selectedOptions} handleStateOnChange={this.handleStateOnChange.bind(this)} />
                                </Col>
                            </div>
                            <div className="">
                                <LocationBarChart card_id="location-chart" card_class="icz-sectionchart" graphData={this.state.graphData} />
                            </div>
                        </div>
                    </Col>
                </div >

                <div className="icz-row">
                    <div className="icz-sectioncardwrapper w-100">
                        <div className="icz-sectioncard">
                            <div className="icz-devicecardbody">
                                <Col className="icz-devicecardtitle">
                                    Device
                                </Col>
                                <div className="icz-devicesection">
                                    <div className="icz-devicelbldata">
                                        <div className="icz-iconwrapper align-item-center"><IconDesktop className="icz-icon" /></div>
                                        <div className="label-txt px-20" lg={12}>Desktop
                                            <p>{this.state.device_data['device_list'][2]['totaldevice']}</p>
                                        </div>
                                    </div>

                                    <div className="icz-devicelbldata">
                                        <div className="icz-iconwrapper align-item-center"><IconTablet className="icz-icon" /></div>
                                        <div className="label-txt px-20" lg={12}>Tablet
                                            <p>{this.state.device_data['device_list'][1]['totaldevice']}</p>
                                        </div>
                                    </div>

                                    <div className="icz-devicelbldata">
                                        <div className="icz-iconwrapper align-item-center"><IconMobile className="icz-icon" /></div>
                                        <div className="label-txt px-20" lg={12}>Mobile
                                            <p>{this.state.device_data['device_list'][3]['totaldevice']}</p>

                                        </div>
                                    </div>

                                    <div className="icz-devicelbldata">
                                        <div className="icz-iconwrapper align-item-center"><IconLaptop className="icz-icon" /></div>
                                        <div className="label-txt px-20" lg={12}>Other
                                            <p>{this.state.device_data['device_list'][0]['totaldevice']}</p>

                                        </div>
                                    </div>

                                    <div className="icz-devicelbldata">
                                        <div className="icz-iconwrapper align-item-center"><IconDesktop className="icz-icon" /></div>
                                        <div className="label-txt p-20" lg={12}>Total
                                            <p>{this.state.device_data['device_list'][0]['totaldevice'] + this.state.device_data['device_list'][1]['totaldevice'] + this.state.device_data['device_list'][2]['totaldevice'] + this.state.device_data['device_list'][3]['totaldevice']}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="icz-row">
                    <Col className="icz-sectioncardwrapper" sm={12} lg={12}>
                        <div className="icz-sectioncard">
                            <div className="icz-cardheader">
                                <Col className="icz-cardtitle">
                                    Performance
                                </Col>
                                <Col className="icz-cardfilter">
                                    {/* <SourceDropdown /> */}

                                    <DailydataDropdown dropdown_options={this.state.source_dropdown_options} dropdown_placeholder="Impression" parentCallback={this.handleCallback} />

                                </Col>
                            </div>
                            <div className="icz-dchartsection">
                                {this.state.is_graph_data_loaded == true ?
                                    <Col className="" sm={12} lg={9}>
                                        <MetricsLineChart card_id="google_metrics" card_class="icz-sectionchart" graph-data={this.state.metrics} />
                                    </Col>
                                    : ""}
                                <Col className="icz-chartdetailssection" sm={12} lg={3}>
                                    <div className="icz-detailsdatasection">
                                        <div className="icz-detailsdatatab">
                                            <div className="icz-iconwrapper">
                                                <IconCTR className="icz-googlescreenicon" />
                                            </div>
                                            <div className="icz-titlewrapper">
                                                <div className="icz-title">
                                                    <NumberFormatter Number={((this.state.select_google_data['google_filter_data'][0]['clicks'] / this.state.select_google_data['google_filter_data'][1]['impressions']) * 100).toFixed(2)} IsNumber={true} />

                                                </div>
                                                <div className="icz-subtitle">
                                                    CTR
                                                </div>
                                            </div>
                                        </div>

                                        <div className="icz-detailsdatatab">
                                            <div className="icz-iconwrapper">
                                                <IconCTR className="icz-googlescreenicon" />
                                            </div>
                                            <div className="icz-titlewrapper">
                                                <div className="icz-title">
                                                    <NumberFormatter Number={this.state.select_google_data['google_filter_data'][0]['clicks'] + this.state.select_google_data['google_filter_data'][0]['conversions_money']} IsNumber={true} />

                                                </div>
                                                <div className="icz-subtitle">
                                                    Clicks:Conversion
                                                </div>
                                            </div>
                                        </div>

                                        <div className="icz-detailsdatatab">
                                            <div className="icz-iconwrapper">
                                                <IconConversion className="icz-googlescreenicon" />
                                            </div>
                                            <div className="icz-titlewrapper">
                                                <div className="icz-title">
                                                    <NumberFormatter Number={this.state.select_google_data['google_filter_data'][0]['conversions_money']} IsNumber={true} />
                                                </div>
                                                <div className="icz-subtitle">
                                                    Conversions
                                                </div>
                                            </div>
                                        </div>

                                        <div className="icz-detailsdatatab">
                                            <div className="icz-iconwrapper">
                                                <IconCPL className="icz-googlescreenicon" />
                                            </div>
                                            <div className="icz-titlewrapper">
                                                <div className="icz-title">

                                                    <NumberFormatter Number={((this.state.select_google_data['google_filter_data'][2]['spends_money'] / this.state.select_google_data['google_filter_data'][5]['conversions_money']) * 100).toFixed(2)} IsNumber={true} />

                                                </div>
                                                <div className="icz-subtitle">
                                                    CPL
                                                </div>
                                            </div>
                                        </div>

                                        <div className="icz-detailsdatatab">
                                            <div className="icz-iconwrapper">
                                                <IconImpressions className="icz-googlescreenicon" />
                                            </div>
                                            <div className="icz-titlewrapper">
                                                <div className="icz-title">
                                                    <NumberFormatter Number={((this.state.select_google_data['google_filter_data'][2]['spends_money'] / this.state.select_google_data['google_filter_data'][3]['app_installed']) * 100).toFixed(2)} IsNumber={true} />

                                                </div>
                                                <div className="icz-subtitle">
                                                    CPI
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </div>
                        </div>
                    </Col>
                </div>

                <div className="icz-row">
                    <div className="icz-sectioncardwrapper w-100">
                        <Col className="icz-sectioncardwrapper" sm={12} lg={12}>
                            <div className="icz-sectioncard">
                                <div className="icz-cardheader">
                                    <Col className="icz-cardtitle">
                                        Summary
                                    </Col>
                                    <Col className="icz-cardfilter">
                                        <MetricsDropdown />
                                    </Col>
                                </div>
                                <div className="">
                                    <SourceDatatable />
                                </div>
                            </div>
                        </Col>
                    </div>
                </div>

            </Wrapper >
        )
    }
}
