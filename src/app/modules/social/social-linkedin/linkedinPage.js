import React, { Component } from 'react'
import Col from "react-bootstrap/esm/Col";
import Wrapper from "../../../helpers/wrapper";

import IconImpressions from '../../../../assets/images/icons/impressionsIcon';
import IconLike from "../../../../assets/images/icons/likeIcon";
import IconReach from "../../../../assets/images/icons/reachIcon";
import IconFollowers from '../../../../assets/images/icons/followersIcon';
import { DonutChart } from '../../../shared/components/charts/DonutChart';
import { DetailsCard } from "../../../shared/components/cards/detailscard/detailscard";
import { Carousel } from "../../../shared/components/carousel/carousel";
import CompareLineChart from "../../../shared/components/charts/CompareLineChart";


export class LinkedinPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [{"date":"2019-5-12","value1":"50","value2":"48","previousdate":"2019-5-5"},{"date":"2019-5-13","value1":"53","value2":"51","previousdate":"2019-5-6"},{"date":"2019-5-14","value1":"56","value2":"58","previousdate":"2019-5-7"},{"date":"2019-5-15","value1":"52","value2":"53","previousdate":"2019-5-8"},{"date":"2019-5-16","value1":"48","value2":"44","previousdate":"2019-5-9"},{"date":"2019-5-17","value1":"47","value2":"42","previousdate":"2019-5-10"},{"date":"2019-5-18","value1":"59","value2":"55","previousdate":"2019-5-11"}],
            session: '[{"date": "2012-07-29","value": 15},{"date": "2012-07-30","value": 15},{"date": "2012-07-31","value": 15},{"date": "2012-08-01","value": 15},{"date": "2012-08-02","value": 15},{"date": "2012-08-03","value": 19},{"date": "2012-08-03","value": 19}]',
            growth: '[{"date": "2012-07-27", "value": 450,"value2": 362}, {"date": "2012-07-28", "value": 269,"value2": -450}, {"date": "2012-07-29","value": -700,"value2": -358}, {"date": "2012-07-30","value": 490, "value2": -367 }, { "date": "2012-07-31", "value": 500, "value2": 485}]',
            pagepiedata: '[{"name":"Desktop","value":39},{"name":"Mobile","value":32}]',
        }
    }

    render() {
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
                                CardIcon={<IconFollowers className="icz-icon" />}
                                CardTitle="Page Views"
                                RowOneCurrentValue="180000"
                                RowOnePreviousValue="300000"
                                RowOneTitle="Previous"
                                IsNumber={true}
                            />,
                            <DetailsCard
                                index="1"
                                CardClass="icz-cardwrapper"
                                CardIcon={<IconLike className="icz-icon" />}
                                CardTitle="Page Reach"
                                RowOneCurrentValue="100000"
                                RowOnePreviousValue="80000"
                                RowOneTitle="Previous"
                                IsNumber={true}
                            />,
                            <DetailsCard
                                index="1"
                                CardClass="icz-cardwrapper"
                                CardIcon={<IconImpressions className="icz-icon" />}
                                CardTitle="Mentions"
                                RowOneCurrentValue="180000"
                                RowOnePreviousValue="300000"
                                RowOneTitle="Previous"
                                IsNumber={true}
                            />,
                            <DetailsCard
                                index="1"
                                CardClass="icz-cardwrapper"
                                CardIcon={<IconReach className="icz-icon" />}
                                CardTitle="Clicks"
                                RowOneCurrentValue="1503475"
                                RowOnePreviousValue="800000"
                                RowOneTitle="Previous"
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
                                    Page Views
                                </Col>
                            </div>
                            <div className="">
                                <CompareLineChart chart_id="social_views" chart_class="icz-sectionchart" graph-data={this.state.user} metric_1={"Current"} metric_2={"Previous"} />
                            </div>
                        </div>
                    </Col>
                    <Col className="icz-sectioncardwrapper" sm={12} lg={6}>
                        <div className="icz-sectioncard">
                            <div className="icz-cardheader">
                                <Col className="icz-cardtitle">
                                    Page Reach
                                </Col>
                            </div>
                            <div className="">
                                <CompareLineChart chart_id="followers_growth" chart_class="icz-sectionchart" graph-data={this.state.user} metric_1={"Current"} metric_2={"Previous"} />
                            </div>
                        </div>
                    </Col>
                </div>
                <div className="icz-row">
                    <Col className="icz-sectioncardwrapper" sm={12} lg={6}>
                        <div className="icz-sectioncard">
                            <div className="icz-cardheader">
                                <Col className="icz-cardtitle">
                                    Career Page Views
                                </Col>
                            </div>
                            <div className="">
                                <DonutChart card_id="careerpage_view" card_class="icz-sectionchart" center_title="page view" graph-data={this.state.pagepiedata} />
                            </div>
                        </div>
                    </Col>
                    <Col className="icz-sectioncardwrapper" sm={12} lg={6}>
                        <div className="icz-sectioncard">
                            <div className="icz-cardheader">
                                <Col className="icz-cardtitle">
                                    Jobs Page View
                                </Col>
                            </div>
                            <div className="">
                                <DonutChart card_id="jobpage_view" card_class="icz-sectionchart" center_title="page view" graph-data={this.state.pagepiedata} />
                            </div>
                        </div>
                    </Col>
                </div>
            </Wrapper>
        )
    }
}

