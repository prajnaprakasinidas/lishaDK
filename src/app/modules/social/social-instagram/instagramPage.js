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

import { SectionDropdown } from "../../../shared/components/dropdown/dropdown";


const API_URL = 'https://api1.icogz.com';

export class InstagramPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // user: '[{"date":"2019-5-12","value1":"50","value2":"48","previousdate":"2019-5-5"},{"date":"2019-5-13","value1":"53","value2":"51","previousdate":"2019-5-6"},{"date":"2019-5-14","value1":"56","value2":"58","previousdate":"2019-5-7"},{"date":"2019-5-15","value1":"52","value2":"53","previousdate":"2019-5-8"},{"date":"2019-5-16","value1":"48","value2":"44","previousdate":"2019-5-9"},{"date":"2019-5-17","value1":"47","value2":"42","previousdate":"2019-5-10"},{"date":"2019-5-18","value1":"59","value2":"55","previousdate":"2019-5-11"}]',
            // session: '[{"date": "2012-07-29","value": 15},{"date": "2012-07-30","value": 15},{"date": "2012-07-31","value": 15},{"date": "2012-08-01","value": 15},{"date": "2012-08-02","value": 15},{"date": "2012-08-03","value": 19},{"date": "2012-08-03","value": 19}]',
            growth: '[{"date": "2012-07-27", "value": 450,"value2": 362}, {"date": "2012-07-28", "value": 269,"value2": -450}, {"date": "2012-07-29","value": -700,"value2": -358}, {"date": "2012-07-30","value": 490, "value2": -367 }, { "date": "2012-07-31", "value": 500, "value2": 485}]',
            previousgrowthbardata: '[{"country": "Like","units": 500,"pie": [{"value": 250,"title": "Cat #1"}, {"value": 150,"title": "Cat #2"}, {"value": 100,"title": "Cat #3"}]}, {"country": "Dislike","units": 300,"pie": [{"value": 80,"title": "Cat #1"}, {"value": 130,"title": "Cat #2"}, {"value": 90,"title": "Cat #3"}]}]',
            currentgrowthpiedata: '[{"country":"Like","units":500,"pie":[{"value":250,"title":"Cat #1"},{"value":150,"title":"Cat #2"},{"value":100,"title":"Cat #3"}]},{"country":"Dislike","units":300,"pie":[{"value":80,"title":"Cat #1"},{"value":130,"title":"Cat #2"},{"value":90,"title":"Cat #3"}]}]',
            // growthchartdropdown: '[{ "key": "key-1", "text": "Organic" }, { "key": "key-2", "text": "Website" }, { "key": "key-3", "text": "Email" }, { "key": "key-4", "text": "Social" },{ "key": "key-5", "text": "Direct" }]'
            followers: [],
            is_metrices_loaded: false,
            is_views_chart_loaded: false,
            is_growth_chart_loaded: false,
            is_followers_chart_loaded: false,
            metrices_data: []
        }
    }
    componentDidMount() {
        this.getSocialPageMetrices();
        this.getSocialPageViews();
        // this.getSocialPageGrowth();
        this.getSocialPageFollowers();

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
                console.log("getSocialPageMetrices---------------------------", result)
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
                console.log("getSocialPageViews===============", result)

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
                console.log("=======1 data_list=====", data_list)
                this.setState({ is_views_chart_loaded: true, user: data_list });
            },
                (error) => {
                    //   console.log("Error  Views  ResultResult = ", error)
                }
            )
    }

    // page-followers

    getSocialPageFollowers() {
        console.log("Social Metriecs");
        const data = {
            'start_date': '2021-10-01',
            'end_date': '2021-12-31',
            'social_paltform': 'FACEBOOK'
        }
        const url = API_URL + "/api/social/page-followers/"
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
                console.log("getSocialPageFollowers===============", result)

                let current_list = result['current_page_follow_count_list'];
                let previous_list = result['last_page_follow_count_list'];
                let data_list = [];

                current_list.map((info, index) => {
                    // console.log("------ m ------", info);
                    try {
                        let a = {
                            'date': info['date'],
                            'value1': info['total_follow_count'],
                            'previousdate': previous_list[index]['date'],
                            'value2': previous_list[index]['total_follow_count']
                        }
                        data_list.push(a)
                    } catch (e) {
                    }
                });
                console.log("=======1 data_list=====", data_list)
                this.setState({ is_followers_chart_loaded: true, followers: data_list });
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
                            'value1': info['total_like'],
                            'value2': info['total_unlike']
                        }
                        data_list.push(a)
                    } catch (e) {
                    }
                });
                this.setState({ is_growth_chart_loaded: true, growth: data_list });

            },
                (error) => {
                }
            )
    }

    render() {
        if (!this.state.is_views_chart_loaded || !this.state.is_followers_chart_loaded) {
            return "<div></div>";
        }


        const CarouselSettings = {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
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
                                CardTitle="Total Porfile Followers"
                                RowOneCurrentValue={this.state.metrices_data['current_social_metrices'][0]['follow_count']}
                                RowOnePreviousValue={this.state.metrices_data['last_social_metrices'][0]['like']}
                                RowOneTitle="Paid"
                                IsNumber={true}
                            />,
                            <DetailsCard
                                index="1"
                                CardClass="icz-cardwrapper"
                                CardIcon={<IconViews className="icz-icon" />}
                                CardTitle="Profile Views"
                                RowOneCurrentValue={this.state.metrices_data['current_social_metrices'][0]['total_views']}
                                RowOnePreviousValue={this.state.metrices_data['last_social_metrices'][0]['like']}
                                RowOneTitle="Paid"
                                IsNumber={true}
                            />,
                            <DetailsCard
                                index="1"
                                CardClass="icz-cardwrapper"
                                CardIcon={<IconReach className="icz-icon" />}
                                CardTitle="New Followers"
                                RowOneCurrentValue={this.state.metrices_data['current_social_metrices'][0]['follow_count']}
                                RowOnePreviousValue={this.state.metrices_data['last_social_metrices'][0]['like']}
                                RowOneTitle="Paid"
                                IsNumber={true}
                            />,
                            <DetailsCard
                                index="1"
                                CardClass="icz-cardwrapper"
                                CardIcon={<IconLikesGrowth className="icz-icon" />}
                                CardTitle="Followers Growth"
                                RowOneCurrentValue={this.state.metrices_data['current_social_metrices'][0]['follow_count']}
                                RowOnePreviousValue={this.state.metrices_data['last_social_metrices'][0]['like']}
                                RowOneTitle="Paid"
                                IsNumber={true}
                            />,
                            // <DetailsCard
                            //     index="1"
                            //     CardClass="icz-cardwrapper"
                            //     CardIcon={<IconFollowersGrowth className="icz-icon" />}
                            //     CardTitle="DM Clicks / Mentions"
                            //     RowOneCurrentValue="2245418"
                            //     RowOnePreviousValue="85540"
                            //     RowOneTitle="Paid"
                            //     IsNumber={true}
                            // />,
                            <DetailsCard
                                index="1"
                                CardClass="icz-cardwrapper"
                                CardIcon={<IconClicks className="icz-icon" />}
                                CardTitle="Page Clicks"
                                RowOneCurrentValue={this.state.metrices_data['current_social_metrices'][0]['total_click']}
                                RowOnePreviousValue={this.state.metrices_data['last_social_metrices'][0]['like']}
                                RowOneTitle="Paid"
                                IsNumber={true}
                            />
                        ]}>

                    </Carousel>
                </div>
                <div className="icz-row">
                    <Col className="icz-sectioncardwrapper" sm={12} lg={6}>
                        <div className="icz-sectioncard">
                            <div className="icz-cardheader">
                                <Col className="icz-cardtitle">
                                    Profile Views
                                </Col>
                            </div>
                            <div className="">
                                <CompareLineChart chart_id="social_views" chart_class="animate__animated animate__fadeInUp animate__slow icz-sectionchart" graph-data={this.state.user} metric_1={"Current"} metric_2={"Previous"} />
                            </div>
                        </div>
                    </Col>
                    <Col className="icz-sectioncardwrapper" sm={12} lg={6}>
                        <div className="icz-sectioncard">
                            <div className="icz-cardheader">
                                <Col className="icz-cardtitle">
                                    Followers Growth
                                </Col>
                            </div>
                            <div className="">
                                <CompareLineChart chart_id="followers_growth" chart_class="icz-sectionchart" graph-data={this.state.followers} metric_1={"Current"} metric_2={"Previous"} />
                            </div>
                        </div>
                    </Col>
                </div>
            </Wrapper>
        )
    }
}
