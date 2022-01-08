import React, { Component } from 'react'
import Col from 'react-bootstrap/esm/Col'
import Wrapper from "../../../../helpers/wrapper";
import IconFemale from "../../../../../assets/images/icons/femaleIcon";
import IconMale from "../../../../../assets/images/icons/maleIcon";
import IconDesktop from '../../../../../assets/images/icons/desktopIcon';
import IconTablet from '../../../../../assets/images/icons/tabletIcon';
import IconMobile from '../../../../../assets/images/icons/mobileIcon';
import IconLaptop from '../../../../../assets/images/icons/laptopIcon';
import IconAllDevices from '../../../../../assets/images/icons/alldevicesIcon';
import IconCTC from '../../../../../assets/images/icons/ctcIcon';
import IconConversion from '../../../../../assets/images/icons/conversionIcon';
import IconCPL from '../../../../../assets/images/icons/cplIcon';
import IconCTR from '../../../../../assets/images/icons/ctrIcon';
import IconImpressions from '../../../../../assets/images/icons/impressionsIcon';


import HorizontalBarChart from "../../../../shared/components/charts/HorizontalBarChart";
import { NumberFormatter } from "../../../../shared/utilities/numberformatter";
import { MetricsLineChart } from '../../../../shared/components/charts/MetricsLineChart';
import { SourceDropdown } from '../../../../shared/components/dropdown/sourcedropdown';
import { MetricsDropdown } from '../../../../shared/components/dropdown/metricsdropdown';
import { InstagramDatatable } from '../../performance-campaign/Datatable/InstagramDatatable'
import IconClicks from '../../../../../assets/images/icons/clicksIcon';
import { DonutChart } from '../../../../shared/components/charts/DonutChart';
import { LocationBarChart } from '../../../../shared/components/charts/LocationBarChart';
import { LocationDropdown } from "../../../../shared/components/dropdown/locationdropdown";


export class Instagram extends Component {

    constructor(props) {
        super(props);
        this.state = {
            leadspiedata: [{ "name": "Google Search", "value": 39 }, { "name": "Google Display", "value": 32 }, { "name": "Remarketing", "value": 7 }],
            locationdata: [{ "name": "Assam", "points": 100 }, { "name": "Bihar", "points": 200 }, { "name": "Delhi", "points": 110 }, { "name": "Gujarat", "points": 100 }, { "name": "Haryana", "points": 100 }, { "name": "Karnataka", "points": 100 }, { "name": "Maharashtra", "points": 100 }, { "name": "Punjab", "points": 100 }, { "name": "Rajasthan", "points": 130 }, { "name": "Telangana", "points": 140 }],
            maleDemoData: [{ "age": "18-24", "research": "40" }, { "age": "25-36", "research": "70" }, { "age": "37-50", "research": "25" }, { "age": "50+", "research": "15" }],
            femaleDemoData: [{ "age": "18-24", "research": "75" }, { "age": "25-36", "research": "60" }, { "age": "37-50", "research": "25" }, { "age": "50+", "research": "15" }],
            facebookmetrics: [{ "date": "2016", "value": 18 }, { "date": "2017", "value": 23 }, { "date": "2018", "value": 25 }, { "date": "2019", "value": 31 }, { "date": "2020", "value": 29 }, { "date": "2021", "value": 33 }],
            sourceDropdownData: [{ "id": 1, "name": "Impression" }, { "id": 2, "name": "Clicks" }, { "id": 3, "name": "Spends" }, { "id": 4, "name": "Leads" }, { "id": 5, "name": "App Installs" }, { "id": 6, "name": "Sales" }],
            metrics: [{ "date": "2016", "value": 13 }, { "date": "2017", "value": 23 }, { "date": "2018", "value": 25 }, { "date": "2019", "value": 31 }, { "date": "2020", "value": 29 }, { "date": "2021", "value": 33 }],


            is_insta_lead_source_loaded: false,
            total_leads_count: 0,
            top_source_val: 0,
            top_source_name: "",

            is_location_loaded: false,

            is_device_data_loaded: false,
            device_data: [],

            social_multiline_data: [],
            is_social_multiline_loaded: false,

            select_instagram_data: [],
            is_select_data_loaded: false,

            is_gender_data_loaded: false,
            male_percentage: 0,
            female_percentage: 0,

        }
    }
    componentDidMount() {

        this.getInstagramLeadSource();
        this.getLocationTypeData();
        this.getInstagramDevicematrix();
        this.getMultipleGraphData();
        this.getInstagramSelectMetrices();
        this.getAudianceAgeGender();


    }

    getInstagramSelectMetrices() {
        const data = {
            'start_date': "2021-01-01",
            'end_date': "2021-12-31",
            'source': 'Instagram',
        }

        const url = "http://127.0.0.1:8000/api/performance/insta-select-matrix/"
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
                    select_instagram_data: result
                });
            })
    }

    getInstagramLeadSource() {
        const data = {
            'start_date': '2021-10-01',
            'end_date': '2021-12-31',
            'source': 'Instagram',
        }
        const url = "http://127.0.0.1:8000/api/performance/instagram-lead-paichat/"
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(res => res.json())
            .then((result) => {

                console.log("Result Instagram Lead Souce = ", result);
                let source_list = result['insta_lead_source_list'];

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

                console.log("-------- Instagram Lead Source ----------- ", data_list);
                this.setState({
                    is_insta_lead_source_loaded: true,
                    total_leads_count: total_leads,
                    leadspiedata: data_list,
                    top_source_val: temp_val,
                    top_source_name: temp_name
                })
            });
    }
    getInstagramDevicematrix() {
        const data = {
            'source': 'Instagram',
        }
        const url = "http://127.0.0.1:8000/api/performance/instagram-device/"
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
                    device_data: result
                });
            })
    }

    getAudianceAgeGender() {
        const data = {
            'start_date': '2021-10-01',
            'end_date': '2021-12-31',
            'social_paltform': 'INSTAGRAM'
        }
        const url = "http://127.0.0.1:8000/api/performance/insta-agegender/"
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        }

        )
            .then(res => res.json())
            .then((result) => {
                let age_group_list = result['age_group_list'];
                let male_list = [];
                let female_list = [];
                let male_count = 0;
                let female_count = 0;
                let total_count = 0;
                let male_percentage = 0;
                let female_percentage = 0;
                age_group_list.map((info, index) => {
                    let a = {
                        'age': info['age_group'],
                        'research': info['age_group_count']
                    };
                    if (info['gender'] == "male") {
                        male_list.push(a);
                        male_count = male_count + info['age_group_count'];
                    } else if (info['gender'] == "female") {
                        female_list.push(a);
                        female_count = female_count + info['age_group_count'];
                    }

                    total_count = male_count + female_count;
                    male_percentage = male_count / total_count * 100;
                    female_percentage = female_count / total_count * 100;
                });
                this.setState({
                    is_gender_data_loaded: true,
                    maleDemoData: male_list,
                    femaleDemoData: female_list,
                    male_percentage: male_percentage,
                    female_percentage: female_percentage
                });
            },
                (error) => {
                    //   console.log("Error Result = ", error)
                }
            )
    }

    getLocationTypeData() {
        const data = {
            'start_date': '2021-10-01',
            'end_date': '2021-12-31',
            'source': 'Instagram',
        }
        const url = "http://127.0.0.1:8000/api/performance/instagram-location/"
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
    getMultipleGraphData() {
        const data = {
            'start_date': "2021-01-01",
            'end_date': "2021-12-31",
            'source': 'Instagram',

        }

        const url = "http://127.0.0.1:8000/api/performance/insta-multiline-graph/"
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

    render() {

        if (!this.state.is_insta_lead_source_loaded || !this.state.is_select_data_loaded || !this.state.is_device_data_loaded || !this.state.is_location_loaded || !this.state.is_social_multiline_loaded || !this.state.is_gender_data_loaded) {
            return <div></div>
        }

        let lead_list = this.state.leadspiedata;

        console.log("Lead list", lead_list)

        let total_conversion = 0;
        return (
            <div>
                <Wrapper>
                    <div className="icz-row">
                        <Col className="icz-sectioncardwrapper" sm={12} lg={6}>
                            <div className="icz-sectioncard">
                                <div className="icz-cardheader">
                                    <Col className="icz-cardtitle">
                                        Conversions
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
                            <div className="icz-sectioncard d-flex flex-row flex-wrap">
                                <Col sm={12} className="icz-cardheader">
                                    <Col className="icz-cardtitle">
                                        Audience Demographics
                                    </Col>
                                    <Col className="icz-cardfilter">

                                    </Col>
                                </Col>
                                <Col sm={12} lg={6} className="d-flex flex-column align-items-start">
                                    <div className="icz-cardheader d-flex flex-column align-items-start">
                                        <div className="icz-cardtitle">
                                            Male
                                        </div>
                                    </div>
                                    <div className="d-flex flex-row flex-wrap w-100">
                                        <Col xs={12} lg={3} className="d-flex flex-column justify-center align-items-center">
                                            <IconMale className="icz-audienceicon" />
                                            <div className="icz-cardheader d-flex flex-column align-items-center">
                                                <div className="icz-sectiontitle">
                                                    {this.state.male_percentage.toFixed(2)}

                                                </div>
                                            </div>
                                        </Col>
                                        <Col xs={12} lg={7} className="">
                                            <HorizontalBarChart chart_id="male_demographic" chart_class="icz-sectionchart" graph-data={this.state.maleDemoData} bar_color={"#11A1FD"} />

                                        </Col>
                                    </div>
                                </Col>
                                <Col sm={12} lg={6} className="d-flex flex-column align-items-start">
                                    <div className="icz-cardheader d-flex flex-column align-items-start">
                                        <div className="icz-cardtitle">
                                            Female
                                        </div>
                                    </div>
                                    <div className="d-flex flex-row flex-wrap w-100">
                                        <Col xs={3} className="d-flex flex-column justify-center align-items-center">
                                            <IconFemale className="icz-audienceicon" />
                                            <div className="icz-cardheader d-flex flex-column align-items-center">
                                                <div className="icz-sectiontitle">
                                                    {this.state.female_percentage.toFixed(2)}
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xs={8} className="">
                                            <HorizontalBarChart chart_id="female_demographic" chart_class="icz-sectionchart" graph-data={this.state.femaleDemoData} bar_color={"#FF9931"} />

                                        </Col>
                                    </div>
                                </Col>
                            </div>
                        </div>
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
                                                <p>{this.state.device_data['device_list'][1]['totaldevice']}</p>
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
                                                <p>{this.state.device_data['device_list'][0]['totaldevice']}</p>
                                            </div>
                                        </div>

                                        <div className="icz-devicelbldata">
                                            <div className="icz-iconwrapper align-item-center"><IconLaptop className="icz-icon" /></div>
                                            <div className="label-txt px-20" lg={12}>Other
                                                <p>0</p>
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
                                                        <NumberFormatter Number={((this.state.select_instagram_data['instagram_filter_data'][0]['clicks'] /
                                                            this.state.select_instagram_data['instagram_filter_data'][0]['impressions']) * 100).toFixed(2)
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
                                                        <NumberFormatter Number={this.state.select_instagram_data['instagram_filter_data'][0]['clicks'] + this.state.select_instagram_data['instagram_filter_data'][0]['conversions_money']} IsNumber={true} />

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

                                                        <NumberFormatter Number={this.state.select_instagram_data['instagram_filter_data'][0]['conversions_money']} IsNumber={true} />
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

                                                        <NumberFormatter Number={((this.state.select_instagram_data['instagram_filter_data'][0]['spends_money'] / this.state.select_instagram_data['instagram_filter_data'][0]['conversions_money']) * 100).toFixed(2)} IsNumber={true} />

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

                                                        <NumberFormatter Number={((this.state.select_instagram_data['instagram_filter_data'][0]['spends_money'] / this.state.select_instagram_data['instagram_filter_data'][0]['app_installed']) * 100).toFixed(2)} IsNumber={true} />

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
                                        <InstagramDatatable />
                                    </div>
                                </div>
                            </Col>
                        </div>
                    </div>

                </Wrapper>

            </div>
        )
    }
}
