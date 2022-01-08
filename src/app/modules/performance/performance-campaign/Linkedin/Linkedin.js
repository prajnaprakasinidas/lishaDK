import React, { Component } from 'react';
import Col from "react-bootstrap/esm/Col";
import Wrapper from "../../../../helpers/wrapper";
import { SourceDropdown } from "../../../../shared/components/dropdown/sourcedropdown";
import { DonutChart } from '../../../../shared/components/charts/DonutChart';
import { LocationBarChart } from '../../../../shared/components/charts/LocationBarChart';
import { MetricsLineChart } from '../../../../shared/components/charts/MetricsLineChart';
// import { SourceDatatable } from '../Datatable/SourceDatatable';
import { NumberFormatter } from "../../../../shared/utilities/numberformatter";
import IconDesktop from '../../../../../assets/images/icons/desktopIcon'
import IconMobile from '../../../../../assets/images/icons/mobileIcon';
import IconTablet from '../../../../../assets/images/icons/tabletIcon';
import IconLaptop from '../../../../../assets/images/icons/laptopIcon';
import IconAllDevices from '../../../../../assets/images/icons/alldevicesIcon';
import IconCTR from '../../../../../assets/images/icons/ctrIcon';
import IconCTC from '../../../../../assets/images/icons/ctcIcon'
import IconConversion from '../../../../../assets/images/icons/conversionIcon';
import IconCPL from '../../../../../assets/images/icons/cplIcon'
import IconImpressions from '../../../../../assets/images/icons/impressionsIcon';
import { MetricsDropdown } from '../../../../shared/components/dropdown/metricsdropdown';
import { LocationDropdown } from '../../../../shared/components/dropdown/locationdropdown';
import '../Google/google.scss'
import IconClicks from '../../../../../assets/images/icons/clicksIcon';
import { LinkedinDatatable } from '../Datatable/LinkedinDatatable';


export class Linkedin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            leadspiedata: [{ "name": "App Installs", "value": 39 }, { "name": "Website Clicks", "value": 32 }, { "name": "Leads", "value": 7 }],
            metrics: [{ "date": "2016", "value": 13 }, { "date": "2017", "value": 23 }, { "date": "2018", "value": 25 }, { "date": "2019", "value": 31 }, { "date": "2020", "value": 29 }, { "date": "2021", "value": 33 }],
            locationdata: [{ "name": "Assam", "points": 100 }, { "name": "Bihar", "points": 200 }, { "name": "Delhi", "points": 110 }, { "name": "Gujarat", "points": 100 }, { "name": "Haryana", "points": 100 }, { "name": "Karnataka", "points": 100 }, { "name": "Maharashtra", "points": 100 }, { "name": "Punjab", "points": 100 }, { "name": "Rajasthan", "points": 130 }, { "name": "Telangana", "points": 140 }],
            is_lead_source_loaded: false,
            total_leads_count: 0,
            top_source_val: 0,
            top_source_name: "",

            is_location_loaded: false,

            is_device_data_loaded: false,
            device_data: [],

            social_multiline_data: [],
            is_social_multiline_loaded: false,

            select_linkedin_data: [],
            is_select_data_loaded: false,

        }
    }

    componentDidMount() {
        this.getLeadSource();
        this.getLocationTypeData();
        this.getDevicematrix();
        this.getMultipleGraphData();
        this.getSelectMetrices();
    }
    getLeadSource() {
        const data = {
            'start_date': '2021-10-01',
            'end_date': '2021-12-31',
            'source': 'Linkedin',
        }
        const url = "http://127.0.0.1:8000/api/performance/linkedin-lead-paichat/"
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(res => res.json())
            .then((result) => {

                console.log("Result Linkdin Lead Souce = ", result);
                let source_list = result['linkedin_lead_source_list'];

                let data_list = [];
                let total_leads = 0;
                let temp_val = 0;
                let temp_name = "";
                source_list.map((info, index) => {
                    try {
                        let a = {
                            // "name": info['type'],
                            "name": (info['type'] == "NULL" ? "Unknown" : info['type']) || (info['type'] == "" ? "Others" : info['type']),
                            "value": info['total_conversion']
                        }
                        total_leads = total_leads + info['total_conversion'];
                        data_list.push(a);

                        if (temp_val < info['total_conversion']) {
                            temp_val = info['total_conversion'];
                            temp_name = (info['type'] == "NULL" ? "Unknown" : info['type']);
                        }

                    } catch {
                        // 
                    }
                });

                console.log("-------- Twitter Lead Source ----------- ", data_list);
                this.setState({
                    is_lead_source_loaded: true,
                    total_leads_count: total_leads,
                    leadspiedata: data_list,
                    top_source_val: temp_val,
                    top_source_name: temp_name
                })
            });
    }
    getLocationTypeData() {
        const data = {
            'start_date': '2021-10-01',
            'end_date': '2021-12-31',
            'source': 'Linkedin',
        }
        const url = "http://127.0.0.1:8000/api/performance/linkedin-location/"
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(res => res.json())
            .then((result) => {
                let location_list = result['location_list'];
                let data_list = [];
                location_list.map((info, index) => {
                    try {
                        let a = {
                            "name": location_list[index]['state'],
                            "points": location_list[index]['location'],
                        }
                        data_list.push(a);
                    } catch {
                        // 
                    }
                });

                console.log("-------- state_list  ----------- ", data_list);
                this.setState({ is_location_loaded: true, locationdata: data_list })
            });
    }
    getDevicematrix() {
        const data = {
            'source': 'Linkedin',
        }
        const url = "http://127.0.0.1:8000/api/performance/linkedin-device/"
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(res => res.json())
            .then((result) => {
                this.setState({
                    is_device_data_loaded: true,
                    device_data: result,

                });
                // console.log("=============================try==================", result)
            })
    }

    getMultipleGraphData() {
        const data = {
            'start_date': "2021-01-01",
            'end_date': "2021-12-31",
            'source': 'Linkedin',

        }

        const url = "http://127.0.0.1:8000/api/performance/linkedin-multiline-graph/"
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(res => res.json())
            .then((result) => {
                let current_impression_list = result['current_data_list'];

                let data_list = [];
                current_impression_list.map((info, index) => {
                    try {
                        let a = {
                            "date": new Date(current_impression_list[index]['date_to_be_considered']),
                            "value": current_impression_list[index]['impressions'],
                        }
                        data_list.push(a);
                    } catch {
                        // 
                    }
                });

                console.log("-------- data_list_multiplegraph ----------- ", data_list);
                this.setState({
                    is_social_multiline_loaded: true,
                    metrics: data_list,

                    final_impression: result['final_impression']
                })
            },
                (error) => {
                    console.log("Error Result = ", error)
                }
            )
    }
    getSelectMetrices() {
        const data = {
            'start_date': "2021-01-01",
            'end_date': "2021-12-31",
            'source': 'Linkedin',
        }

        const url = "http://127.0.0.1:8000/api/performance/linkedin-select-matrix/"
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
                    select_linkedin_data: result
                });
            })
    }

    render() {
        if (!this.state.is_lead_source_loaded || !this.state.is_select_data_loaded || !this.state.is_social_multiline_loaded || !this.state.is_location_loaded || !this.state.is_device_data_loaded) {
            return <div></div>
        }

        let lead_list = this.state.leadspiedata;

        console.log("Lead list", lead_list)


        return (
            <Wrapper>
                <div className="icz-row">
                    <Col className="icz-sectioncardwrapper" sm={12} lg={6}>
                        <div className="icz-sectioncard">
                            <div className="icz-cardheader">
                                <Col className="icz-cardtitle">
                                    Conversions
                                </Col>
                            </div>

                            <div className="icz-leadchartsection icz-dchartsection">
                                <Col className="" sm={12} lg={8}>
                                    <DonutChart card_id="leads-chart" card_class="icz-sectionchart" card_value={this.state.top_source_val} center_title={this.state.top_source_name}
                                        graph-data={this.state.leadspiedata} />                                </Col>
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
                                    <LocationDropdown />
                                </Col>
                            </div>
                            <div className="">
                                <LocationBarChart card_id="location-chart" card_class="icz-sectionchart" graph-data={this.state.locationdata} />
                            </div>
                        </div>
                    </Col>
                </div>

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
                                            <p>{this.state.device_data['device_list'][0]['totaldevice']}</p>
                                        </div>
                                    </div>

                                    <div className="icz-devicelbldata">
                                        <div className="icz-iconwrapper align-item-center"><IconTablet className="icz-icon" /></div>
                                        <div className="label-txt px-20" lg={12}>Tablet
                                            <p>{this.state.device_data['device_list'][2]['totaldevice']}</p>
                                        </div>
                                    </div>

                                    <div className="icz-devicelbldata">
                                        <div className="icz-iconwrapper align-item-center"><IconMobile className="icz-icon" /></div>
                                        <div className="label-txt px-20" lg={12}>Mobile
                                            <p>{this.state.device_data['device_list'][1]['totaldevice']}</p>
                                        </div>
                                    </div>

                                    <div className="icz-devicelbldata">
                                        <div className="icz-iconwrapper align-item-center"><IconLaptop className="icz-icon" /></div>
                                        <div className="label-txt px-20" lg={12}>Other
                                            <p>0
                                                {/* {this.state.device_data['device_list'][0]['totaldevice'] == null ? 0 : this.state.device_data['device_list'][1]['totaldevice']} */}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="icz-devicelbldata">
                                        <div className="icz-iconwrapper align-item-center"><IconAllDevices className="icz-icon" /></div>
                                        <div className="label-txt p-20" lg={12}>Total
                                            <p>{this.state.device_data['device_list'][0]['totaldevice'] + this.state.device_data['device_list'][1]['totaldevice'] + this.state.device_data['device_list'][2]['totaldevice']}</p>
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
                                    <SourceDropdown />
                                </Col>
                            </div>
                            <div className="icz-dchartsection">
                                <Col className="" sm={12} lg={9}>
                                    <MetricsLineChart card_id="google_metrics" card_class="icz-sectionchart" graph-data={this.state.metrics} />

                                </Col>
                                <Col sm={12} lg={2} className="icz-chartdetailssection">
                                    <div className="icz-detailsdatasection">
                                        <div className="icz-detailsdatatab">
                                            <div className="icz-iconwrapper">
                                                <IconCTR className="icz-googlescreenicon" />
                                            </div>
                                            <div className="icz-titlewrapper">
                                                <div className="icz-title">
                                                    <NumberFormatter Number={((this.state.select_linkedin_data['linkedin_filter_data'][0]['clicks'] /
                                                        this.state.select_linkedin_data['linkedin_filter_data'][0]['impressions']) * 100).toFixed(2)
                                                    } IsNumber={true} />

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
                                                    <NumberFormatter Number={this.state.select_linkedin_data['linkedin_filter_data'][0]['clicks'] + this.state.select_linkedin_data['linkedin_filter_data'][0]['conversions_money']} IsNumber={true} />

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

                                                    <NumberFormatter Number={this.state.select_linkedin_data['linkedin_filter_data'][0]['conversions_money']} IsNumber={true} />
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

                                                    <NumberFormatter Number={((this.state.select_linkedin_data['linkedin_filter_data'][0]['spends_money'] / this.state.select_linkedin_data['linkedin_filter_data'][0]['conversions_money']) * 100).toFixed(2)} IsNumber={true} />

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

                                                    <NumberFormatter Number={((this.state.select_linkedin_data['linkedin_filter_data'][0]['spends_money'] / this.state.select_linkedin_data['linkedin_filter_data'][0]['app_installed']) * 100).toFixed(2)} IsNumber={true} />

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

                                    <LinkedinDatatable />
                                </div>
                            </div>
                        </Col>
                    </div>
                </div>

            </Wrapper>
        )
    }
}
