import React, { Component } from "react";
import Col from "react-bootstrap/esm/Col";
import IconClicks from "../../../../assets/images/icons/clicksIcon";
import IconFollowersGrowth from "../../../../assets/images/icons/followersgrowthIcon";
import IconLike from "../../../../assets/images/icons/likeIcon";
import IconLikesGrowth from "../../../../assets/images/icons/likesgrowthIcon";
import IconReach from "../../../../assets/images/icons/reachIcon";
import IconViews from "../../../../assets/images/icons/viewsIcon";
import Wrapper from "../../../helpers/wrapper";
import { DetailsCard } from "../../../shared/components/cards/detailscard/detailscard";
import { Carousel } from "../../../shared/components/carousel/carousel";
import BulletPiechart from "../../../shared/components/charts/BulltePieChart";
import CompareLineChart from "../../../shared/components/charts/CompareLineChart";
import PositiveNegativeBarChart from "../../../shared/components/charts/positivenegativebarchart";
import {PAGEGROWTH} from '../../../helpers/constant';

import { SectionDropdown } from "../../../shared/components/dropdown/dropdown";


const API_URL = 'https://api1.icogz.com';


export class FacebookPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // user: [{ "date": "2019-5-12", "value1": "50", "value2": "48", "previousdate": "2019-5-5" }, { "date": "2019-5-13", "value1": "53", "value2": "51", "previousdate": "2019-5-6" }, { "date": "2019-5-14", "value1": "56", "value2": "58", "previousdate": "2019-5-7" }, { "date": "2019-5-15", "value1": "52", "value2": "53", "previousdate": "2019-5-8" }, { "date": "2019-5-16", "value1": "48", "value2": "44", "previousdate": "2019-5-9" }, { "date": "2019-5-17", "value1": "47", "value2": "42", "previousdate": "2019-5-10" }, { "date": "2019-5-18", "value1": "59", "value2": "55", "previousdate": "2019-5-11" }],
            // session: '[{"date": "2012-07-29","value": 15},{"date": "2012-07-30","value": 15},{"date": "2012-07-31","value": 15},{"date": "2012-08-01","value": 15},{"date": "2012-08-02","value": 15},{"date": "2012-08-03","value": 19},{"date": "2012-08-03","value": 19}]',
            // growth: [{ "date": "2012-07-27", "value": 450, "value2": 362 }, { "date": "2012-07-28", "value": 269, "value2": -450 }, { "date": "2012-07-29", "value": -700, "value2": -358 }, { "date": "2012-07-30", "value": 490, "value2": -367 }, { "date": "2012-07-31", "value": 500, "value2": 485 }],
            // previousgrowthbardata: [{ "country": "Like", "units": 500, "pie": [{ "value": 250, "title": "Cat #1" }, { "value": 150, "title": "Cat #2" }, { "value": 100, "title": "Cat #3" }] }, { "country": "Dislike", "units": 300, "pie": [{ "value": 80, "title": "Cat #1" }, { "value": 130, "title": "Cat #2" }, { "value": 90, "title": "Cat #3" }] }],
            // currentgrowthpiedata: [{ "country": "Like", "units": 500, "pie": [{ "value": 250, "title": "Cat #1" }, { "value": 150, "title": "Cat #2" }, { "value": 100, "title": "Cat #3" }] }, { "country": "Dislike", "units": 300, "pie": [{ "value": 80, "title": "Cat #1" }, { "value": 130, "title": "Cat #2" }, { "value": 90, "title": "Cat #3" }] }],
            // growthchartdropdown: '[{ "key": "key-1", "text": "Organic" }, { "key": "key-2", "text": "Website" }, { "key": "key-3", "text": "Email" }, { "key": "key-4", "text": "Social" },{ "key": "key-5", "text": "Direct" }]'
            // previousgrowthbardata: '',
            // currentgrowthpiedata: '',
            // growthchartdropdown: '',
            is_metrices_loaded: false,
            is_views_chart_loaded: false,
            is_growth_chart_loaded: false,
            is_like_unlike_chart_loaded: false,

            metrices_data: []
        }

        this.getSocialPageMetrices();
        this.getSocialPageViews();
        this.getSocialPageGrowth();
        this.getSocialPageLikeUnlikeSource();

    }

    getSocialPageMetrices() {
        const data = {
            'start_date': '2021-10-01',
            'end_date': '2021-12-31',
            'social_paltform': 'FACEBOOK'
        }
        const url = API_URL + "/api/social/page-metrices/"
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        }

        )
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    is_metrices_loaded: true,
                    metrices_data: result

                });
            },
                (error) => {
                }
            )
    }

    getSocialPageViews() {
        console.log("Social Metriecs");
        const data = {
            'start_date': '2021-10-01',
            'end_date': '2021-12-31',
            'social_paltform': 'FACEBOOK'
        }
        const url = API_URL + "/api/social/page-views/"
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        }

        )
            .then(res => res.json())
            .then((result) => {

                let current_list = result['current_page_views_list'];
                let previous_list = result['last_page_views_list'];
                let data_list = [];

                current_list.map((info, index) => {
                    // console.log("------ m ------", info);
                    try {
                        let a = {
                            'date': info['date'],
                            'value1': info['total_views'],
                            'previousdate': previous_list[index]['date'],
                            'value2': previous_list[index]['total_views']
                        }
                        data_list.push(a)
                    } catch (e) {
                    }
                });
                this.setState({ is_views_chart_loaded: true, user: data_list });
            },
                (error) => {
                    //   console.log("Error  Views  ResultResult = ", error)
                }
            )
    }


    getSocialPageGrowth() {
        const data = {
            'start_date': '2021-10-01',
            'end_date': '2021-12-31',
            'social_paltform': 'FACEBOOK'
        }
        const url = API_URL + "/api/social/page-growth/"
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        }

        )
            .then(res => res.json())
            .then((result) => {
                let current_list = result['growth_list'];
                let data_list = [];

                current_list.map((info, index) => {
                    try {
                        let a = {
                            'date': info['date'],
                            'value': info['total_like'],
                            'value2': -Math.abs(info['total_unlike'])
                        }
                        data_list.push(a)
                    } catch (e) {
                    }
                });
                console.log("=====getSocialPageGrowth======", data_list)
                this.setState({ is_growth_chart_loaded: true, growth: data_list });

            },
                (error) => {
                }
            )
    }

    getSocialPageLikeUnlikeSource() {
        const data = {
            'start_date': '2021-10-01',
            'end_date': '2021-12-31',
            'social_paltform': 'FACEBOOK'
        }
        const url = API_URL + "/api/social/page-like-unlike-source/"
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        }

        )
            .then(res => res.json())
            .then((result) => {
                console.log("getSocialPageLikeUnlikeSourceb===================", result)
                let current_like_pie = [];
                let current_dislike_pie = [];
                let current_likes = {};
                let current_dislikes = {};

                try {

                    let current_metrices_data = result['current_metrices'];
                    let current_source_list = result['current_source_list'];
                    console.log("current_metrices_data==========", current_metrices_data)
                    console.log("current_source_list=========== ", current_source_list)

                    current_likes = {
                        "country": "Like",
                        "units": current_metrices_data[0]['likes'],
                        "pie": []
                    };

                    current_dislikes = {
                        "country": "Dislike",
                        "units": current_metrices_data[0]['unlike'],
                        "pie": []
                    };

                    current_source_list.map((info, index) => {
                        let a = { "value": info['likes'], "title": info['source_name'] };
                        current_like_pie.push(a);

                        let b = { "value": info['unlike'], "title": info['source_name'] };
                        current_dislike_pie.push(b);
                    });

                    current_likes['pie'] = current_like_pie;
                    current_dislikes['pie'] = current_dislike_pie;

                } catch {

                    let current_likes = {
                        "country": "Like",
                        "units": 0,
                        "pie": []
                    };

                    let current_dislikes = {
                        "country": "Dislike",
                        "units": 0,
                        "pie": []
                    };
                }

                // -------------- Previous Start ----------------
                let last_like_pie = [];
                let last_dislike_pie = [];
                let last_likes = {};
                let last_dislikes = {};

                try {
                    let last_metrices_data = result['last_metrices'];
                    let last_source_list = result['last_source_list'];
                    let last_like_count = 0;
                    let last_dislike_count = 0;

                    try {
                        last_like_count = last_metrices_data[0]['likes'];
                        last_dislike_count = last_metrices_data[0]['likes'];
                    } catch (e) {
                        last_like_count = 0;
                        last_dislike_count = 0;
                    }


                    last_likes = {
                        "country": "Like",
                        "units": last_like_count,
                        "pie": []
                    };

                    last_dislikes = {
                        "country": "Dislike",
                        "units": last_dislike_count,
                        "pie": []
                    };

                    last_source_list.map((info, index) => {
                        let a = { "value": info['likes'], "title": info['source_name'] };
                        last_like_pie.push(a);

                        let b = { "value": info['unlike'], "title": info['source_name'] };
                        last_dislike_pie.push(b);
                    });

                    last_likes['pie'] = last_like_pie;
                    last_dislikes['pie'] = last_dislike_pie;
                } catch {
                    last_likes = {
                        "country": "Like",
                        "units": 0,
                        "pie": []
                    };

                    last_dislikes = {
                        "country": "Dislike",
                        "units": 0,
                        "pie": []
                    };
                }


                let current_info = [current_likes, current_dislikes];
                let last_info = [last_likes, last_dislikes];
                // console.log("current_info===============", current_info)
                // console.log("last_info==============", last_info)
                this.setState({ currentgrowthpiedata: current_info, previousgrowthbardata: last_info, is_like_unlike_chart_loaded: true });

            },
                (error) => {
                    //   console.log("Error  Views  ResultResult = ", error)
                }
            )
    }


    render() {
        if (!this.state.is_metrices_loaded || !this.state.is_views_chart_loaded || !this.state.is_growth_chart_loaded || !this.state.previousgrowthbardata || !this.state.is_like_unlike_chart_loaded) {
            return "<div></div>";
        }

        const CarouselSettings = {
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        arrows: false,
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        arrows: true,
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                }
            ]
        }
        return (
            <Wrapper>
                <div className="icz-carouselcontainer">
                    <Carousel
                        Settings={CarouselSettings}
                        class={"icz-cardcontainer"}
                        SliderCards={[
                            <DetailsCard
                                index="1"
                                CardClass="icz-cardwrapper"
                                CardIcon={<IconLike className="icz-icon" />}
                                CardTitle="Like"
                                RowOneCurrentValue={this.state.metrices_data['current_social_metrices'][0]['like']}
                                RowOnePreviousValue={this.state.metrices_data['last_social_metrices'][0]['like']}
                                RowOneTitle="Paid"
                                IsNumber={true}
                            />,
                            <DetailsCard
                                index="1"
                                CardClass="icz-cardwrapper"
                                CardIcon={<IconViews className="icz-icon" />}
                                CardTitle="Views"
                                RowOneCurrentValue={this.state.metrices_data['current_social_metrices'][0]['total_views']}
                                RowOnePreviousValue={this.state.metrices_data['last_social_metrices'][0]['like']}
                                RowOneTitle="Paid"
                                IsNumber={true}
                            />,
                            <DetailsCard
                                index="1"
                                CardClass="icz-cardwrapper"
                                CardIcon={<IconReach className="icz-icon" />}
                                CardTitle="Reach"
                                RowOneCurrentValue={this.state.metrices_data['current_social_metrices'][0]['total_reach']}
                                RowOnePreviousValue={this.state.metrices_data['last_social_metrices'][0]['like']}
                                RowOneTitle="Paid"
                                IsNumber={true}
                            />,
                            // <DetailsCard
                            //     index="1"
                            //     CardClass="icz-cardwrapper"
                            //     CardIcon={<IconLikesGrowth className="icz-icon" />}
                            //     CardTitle="Likes Growth"
                            //     RowOneCurrentValue={this.state.metrices_data[0]['like']}
                            //     RowOnePreviousValue="85540"
                            //     RowOneTitle="Paid"
                            //     IsNumber={true}
                            // />,
                            // <DetailsCard
                            //     index="1"
                            //     CardClass="icz-cardwrapper"
                            //     CardIcon={<IconFollowersGrowth className="icz-icon" />}
                            //     CardTitle="Followers Growth"
                            //     RowOneCurrentValue="2245418"
                            //     RowOnePreviousValue="85540"
                            //     RowOneTitle="Paid"
                            //     IsNumber={true}
                            // />,
                            <DetailsCard
                                index="1"
                                CardClass="icz-cardwrapper"
                                CardIcon={<IconClicks className="icz-icon" />}
                                CardTitle="Clicks"
                                RowOneCurrentValue={this.state.metrices_data['current_social_metrices'][0]['total_click']}
                                RowOnePreviousValue={this.state.metrices_data['last_social_metrices'][0]['like']}
                                RowOneTitle="Paid"
                                IsNumber={true}
                            />
                        ]}>

                    </Carousel>
                </div>
                <div className="icz-row">
                    <Col className="icz-sectioncardwrapper" xs={12} lg={6}>
                        <div className="icz-sectioncard">
                            <div className="icz-cardheader">
                                <Col className="icz-cardtitle">
                                    Page Views
                                </Col>
                            </div>
                            <div className="">
                                <CompareLineChart chart_id="social_views" chart_class="animate__animated animate__fadeInUp animate__slow icz-sectionchart" graph-data={this.state.user} metric_1={"Current"} metric_2={"Previous"} />
                            </div>
                        </div>
                    </Col>
                    <Col className="icz-sectioncardwrapper" xs={12} lg={6}>
                        <div className="icz-sectioncard">
                            <div className="icz-cardheader">
                                <Col className="icz-cardtitle">
                                    Page Growth
                                </Col>
                                <Col className="icz-cardfilter">
                                    {/* <SectionDropdown dropdownId={"social_growth_chart"} dropdownOptions={this.state.growthchartdropdown}/> */}
                                    <SectionDropdown />
                                </Col>
                            </div>
                            <div className="">
                                <PositiveNegativeBarChart chart_id="social_growth" chart_class="animate__animated animate__fadeInUp animate__slow icz-sectionchart" graph-data={this.state.growth} metric_1={"Like"} metric_2={"Dislike"} />
                            </div>
                        </div>
                    </Col>
                </div>
                <div className="icz-row">
                    <div className="icz-sectioncardwrapper w-100">
                        <div className="animate__animated animate__fadeInUp animate__slow icz-sectioncard d-flex flex-row flex-wrap">
                            <Col sm={12} md={6} lg={6} className="animate__animated animate__fadeInUp animate__slow d-flex flex-column align-items-start">
                                <div className="icz-cardheader ">
                                    <Col className="animate__animated animate__fadeInUp animate__slow icz-cardtitle">
                                        Current Period
                                    </Col>
                                </div>
                                <div className="w-100">
                                    <BulletPiechart chart_id="growth_current_period" chart_class="animate__animated animate__fadeInUp animate__slow icz-sectionchart" graph-data1={this.state.previousgrowthbardata} graph-data2={this.state.currentgrowthpiedata} metric_1={"Like"} metric_2={"Dislike"} />
                                </div>

                            </Col>
                            <Col sm={12} lg={6} className="d-flex flex-column align-items-start">
                                <div className="icz-cardheader ">
                                    <Col className="animate__animated animate__fadeInUp animate__slow icz-cardtitle">
                                        Previous Period
                                    </Col>
                                </div>
                                <div className="w-100">
                                    <BulletPiechart chart_id="growth_previous_period" chart_class="animate__animated animate__fadeInUp animate__slow icz-sectionchart" graph-data1={this.state.previousgrowthbardata} graph-data2={this.state.currentgrowthpiedata} metric_1={"Like"} metric_2={"Dislike"} />
                                </div>
                            </Col>
                        </div>
                    </div>
                </div>
            </Wrapper>
        )
    }
}
