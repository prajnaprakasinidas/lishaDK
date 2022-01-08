import React, { Component } from "react";
import Col from "react-bootstrap/esm/Col";
import IconClicks from "../../../assets/images/icons/clicksIcon";
import IconFollowersGrowth from "../../../assets/images/icons/followersgrowthIcon";
import IconLike from "../../../assets/images/icons/likeIcon";
import IconLikesGrowth from "../../../assets/images/icons/likesgrowthIcon";
import IconReach from "../../../assets/images/icons/reachIcon";
import IconViews from "../../../assets/images/icons/viewsIcon";
import Wrapper from "../../helpers/wrapper";
import { DetailsCard } from "../../shared/components/cards/detailscard/detailscard";
import { Carousel } from "../../shared/components/carousel/carousel";
import BulletPiechart from "../../shared/components/charts/BulltePieChart";
import CompareLineChart from "../../shared/components/charts/CompareLineChart";
import PositiveNegativeBarChart from "../../shared/components/charts/positivenegativebarchart";

import { SectionDropdown } from "../../shared/components/dropdown/dropdown";

const API_URL = 'https://api1.icogz.com';

export class SocialPage extends Component {

    constructor(props) {
        // console.log("--------- constructor---------")
        super(props);

        this.state = {
            user: '[{"date":"2019-5-12","value1":"50","value2":"48","previousdate":"2019-5-5"},{"date":"2019-5-13","value1":"53","value2":"51","previousdate":"2019-5-6"},{"date":"2019-5-14","value1":"56","value2":"58","previousdate":"2019-5-7"},{"date":"2019-5-15","value1":"52","value2":"53","previousdate":"2019-5-8"},{"date":"2019-5-16","value1":"48","value2":"44","previousdate":"2019-5-9"},{"date":"2019-5-17","value1":"47","value2":"42","previousdate":"2019-5-10"},{"date":"2019-5-18","value1":"59","value2":"55","previousdate":"2019-5-11"}]',
            session: '[{"date": "2012-07-29","value": 15},{"date": "2012-07-30","value": 15},{"date": "2012-07-31","value": 15},{"date": "2012-08-01","value": 15},{"date": "2012-08-02","value": 15},{"date": "2012-08-03","value": 19},{"date": "2012-08-03","value": 19}]',
            growth: '[{"date": "2012-07-27", "value": 450,"value2": 362}, {"date": "2012-07-28", "value": 269,"value2": -450}, {"date": "2012-07-29","value": -700,"value2": -358}, {"date": "2012-07-30","value": 490, "value2": -367 }, { "date": "2012-07-31", "value": 500, "value2": 485}]',
            previousgrowthbardata: '[{"country": "Like","units": 500,"pie": [{"value": 250,"title": "Cat #1"}, {"value": 150,"title": "Cat #2"}, {"value": 100,"title": "Cat #3"}]}, {"country": "Dislike","units": 300,"pie": [{"value": 80,"title": "Cat #1"}, {"value": 130,"title": "Cat #2"}, {"value": 90,"title": "Cat #3"}]}]',
            currentgrowthpiedata: '[{"country":"Like","units":500,"pie":[{"value":250,"title":"Cat #1"},{"value":150,"title":"Cat #2"},{"value":100,"title":"Cat #3"}]},{"country":"Dislike","units":300,"pie":[{"value":80,"title":"Cat #1"},{"value":130,"title":"Cat #2"},{"value":90,"title":"Cat #3"}]}]',
            // growthchartdropdown: '[{ "key": "key-1", "text": "Organic" }, { "key": "key-2", "text": "Website" }, { "key": "key-3", "text": "Email" }, { "key": "key-4", "text": "Social" },{ "key": "key-5", "text": "Direct" }]'
            is_metrices_loaded: false,
            metrices_data: []

        }

        // fetch("https://api1.icogz.comapi/social/")
        //     .then((res) => res.json())
        //     .then((json) => {
        //         this.setState({items: json, is_data_loaded: true });               
        //         console.log("--------- this.state ---------", this.state)
        //     })

        // this.getSocialPageMetrices();




    }




    render() {

        // console.log("is_data_loaded = ", this.state.is_data_loaded)
        // if (!this.state.is_data_loaded) {
        //     console.log("--- in ---");
        //     return <div>Loading...</div>
        // }



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
                {/* {console.log('Prajnapakhini', this.state.items)} */}
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
                                RowOneCurrentValue={this.state.items.page_matrix[0]['page_reach']}
                                RowOnePreviousValue="85540"
                                RowOneTitle="Paid"
                                IsNumber={true}
                            />,
                            <DetailsCard
                                index="1"
                                CardClass="icz-cardwrapper"
                                CardIcon={<IconViews className="icz-icon" />}
                                CardTitle="Views"
                                RowOneCurrentValue="2245418"
                                RowOnePreviousValue="85540"
                                RowOneTitle="Paid"
                                IsNumber={true}
                            />,
                            <DetailsCard
                                index="1"
                                CardClass="icz-cardwrapper"
                                CardIcon={<IconReach className="icz-icon" />}
                                CardTitle="Reach"
                                RowOneCurrentValue="2245418"
                                RowOnePreviousValue="85540"
                                RowOneTitle="Paid"
                                IsNumber={true}
                            />,
                            <DetailsCard
                                index="1"
                                CardClass="icz-cardwrapper"
                                CardIcon={<IconLikesGrowth className="icz-icon" />}
                                CardTitle="Likes Growth"
                                RowOneCurrentValue="2245418"
                                RowOnePreviousValue="85540"
                                RowOneTitle="Paid"
                                IsNumber={true}
                            />,
                            <DetailsCard
                                index="1"
                                CardClass="icz-cardwrapper"
                                CardIcon={<IconFollowersGrowth className="icz-icon" />}
                                CardTitle="Followers Growth"
                                RowOneCurrentValue="2245418"
                                RowOnePreviousValue="85540"
                                RowOneTitle="Paid"
                                IsNumber={true}
                            />,
                            <DetailsCard
                                index="1"
                                CardClass="icz-cardwrapper"
                                CardIcon={<IconClicks className="icz-icon" />}
                                CardTitle="Clicks"
                                RowOneCurrentValue="2245418"
                                RowOnePreviousValue="85540"
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
                                    Views
                                </Col>
                            </div>
                            <div className="">
                                <CompareLineChart chart_id="social_views" chart_class="icz-sectionchart" graph-data={this.state.user} metric_1={"Current"} metric_2={"Previous"} />
                            </div>
                        </div>
                    </Col>
                    <Col className="icz-sectioncardwrapper" xs={12} lg={6}>
                        <div className="icz-sectioncard">
                            <div className="icz-cardheader">
                                <Col className="icz-cardtitle">
                                    Growth
                                </Col>
                                <Col className="icz-cardfilter">
                                    {/* <SectionDropdown dropdownId={"social_growth_chart"} dropdownOptions={this.state.growthchartdropdown}/> */}
                                    <SectionDropdown />
                                </Col>
                            </div>
                            <div className="">
                                <PositiveNegativeBarChart chart_id="social_growth" chart_class="icz-sectionchart" graph-data={this.state.growth} metric_1={"Like"} metric_2={"Dislike"} />
                            </div>
                        </div>
                    </Col>
                </div>
                <div className="icz-row">
                    <div className="icz-sectioncardwrapper w-100">
                        <div className="icz-sectioncard d-flex flex-row flex-wrap">
                            <Col sm={12} md={6} lg={6} className="d-flex flex-column align-items-start">
                                <div className="icz-cardheader ">
                                    <Col className="icz-cardtitle">
                                        Current Period
                                    </Col>
                                </div>
                                <div className="w-100">
                                    <BulletPiechart chart_id="growth_current_period" chart_class="icz-sectionchart" graph-data1={this.state.previousgrowthbardata} graph-data2={this.state.currentgrowthpiedata} metric_1={"Like"} metric_2={"Dislike"} />
                                </div>

                            </Col>
                            <Col sm={12} md={6} lg={6} className="d-flex flex-column align-items-start">
                                <div className="icz-cardheader">
                                    <Col className="icz-cardtitle">
                                        Previous Period
                                    </Col>
                                </div>
                                <div className="w-100">
                                    <BulletPiechart chart_id="growth_previous_period" chart_class="icz-sectionchart" graph-data1={this.state.previousgrowthbardata} graph-data2={this.state.currentgrowthpiedata} metric_1={"Like"} metric_2={"Dislike"} />
                                </div>
                            </Col>
                        </div>
                    </div>
                </div>
            </Wrapper>
        )
    }
}
