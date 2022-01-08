import React, { Component } from 'react'
import Col from 'react-bootstrap/esm/Col';
import Wrapper from '../../../helpers/wrapper';
import { DetailsCard } from '../../../shared/components/cards/detailscard/detailscard';
import { Carousel } from '../../../shared/components/carousel/carousel';
import '../social.scss';

import IconCRM from "../../../../assets/images/icons/crmIcon"

import { DonutChart } from '../../../shared/components/charts/DonutChart';
import CompareLineChart from "../../../shared/components/charts/CompareLineChart";
import LineChart from '../../../shared/components/charts/LineChart';
import SemiCirclePieChart from '../../../shared/components/charts/SemiCirclePieChart';
import { LocationBarChart } from '../../../shared/components/charts/LocationBarChart';

export class LinkedinPostOrganic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [{"date":"2019-5-12","value1":"50","value2":"48","previousdate":"2019-5-5"},{"date":"2019-5-13","value1":"53","value2":"51","previousdate":"2019-5-6"},{"date":"2019-5-14","value1":"56","value2":"58","previousdate":"2019-5-7"},{"date":"2019-5-15","value1":"52","value2":"53","previousdate":"2019-5-8"},{"date":"2019-5-16","value1":"48","value2":"44","previousdate":"2019-5-9"},{"date":"2019-5-17","value1":"47","value2":"42","previousdate":"2019-5-10"},{"date":"2019-5-18","value1":"59","value2":"55","previousdate":"2019-5-11"}],
            interaction: [{"name":"Manager","value":"28"},{"name":"Team Lead","value":"30"},{"name":"Sr.Executive","value":"29"},{"name":"Executive","value":"14"}],
            interactiondata: [{"date": "2012-07-27","value": 13}, {"date": "2012-07-28","value": 10},{"date": "2012-07-29","value": 15},{"date": "2012-07-30","value": 15},{"date": "2012-07-31","value": 15},{"date": "2012-08-01","value": 15},{"date": "2012-08-02","value": 15},{"date": "2012-08-03","value": 19},{"date": "2012-08-04","value": 16},{"date": "2012-08-05","value": 15},{"date": "2012-08-06","value": 19},{"date": "2012-08-07","value": 17},{"date": "2012-08-08","value": 18}],
            reachByContentType: [{"country":"Lithuania","value":"401"},{"country":"Czech Republic","value":"300"},{"country":"Ireland","value":"200"},{"country":"Germany","value":"165"},{"country":"Australia","value":"139"},{"country":"Austria","value":"128"}],
            commentsdata: [{"name": "Jan", "points": 100}, {"name": "Feb", "points": 200},{"name": "march", "points": 110},{"name": "April", "points": 100},{"name": "May", "points": 100},{"name": "June", "points": 100},{"name": "July", "points": 100},{"name": "Aug", "points": 100},{"name": "Sep", "points": 130},{"name": "Oct", "points": 140},{"name": "Nov", "points": 200},{"name": "Dec", "points": 180}],
            postsubnav: 'Overall',
        }
    }

    render() {
        const CarouselSettings = {
            slidesToShow: 5,
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
                                CardIcon={<IconCRM className="icz-icon" />}
                                CardTitle="Organic Posts"
                                RowOneCurrentValue="180000"
                                RowOnePreviousValue="300000"
                                RowOneTitle="Previous"
                                IsNumber={true}
                            />,
                            <DetailsCard
                                index="1"
                                CardClass="icz-cardwrapper"
                                CardIcon={<IconCRM className="icz-icon" />}
                                CardTitle="Impressions"
                                RowOneCurrentValue="100000"
                                RowOnePreviousValue="80000"
                                RowOneTitle="Previous"
                                IsNumber={true}
                            />,
                            <DetailsCard
                                index="1"
                                CardClass="icz-cardwrapper"
                                CardIcon={<IconCRM className="icz-icon" />}
                                CardTitle="Unique Impression/Reach"
                                RowOneCurrentValue="180000"
                                RowOnePreviousValue="300000"
                                RowOneTitle="Previous"
                                IsNumber={true}
                            />,
                            <DetailsCard
                                index="1"
                                CardClass="icz-cardwrapper"
                                CardIcon={<IconCRM className="icz-icon" />}
                                CardTitle="Clicks"
                                RowOneCurrentValue="1503475"
                                RowOnePreviousValue="800000"
                                RowOneTitle="Previous"
                                IsNumber={true}
                            />,
                            <DetailsCard
                                index="1"
                                CardClass="icz-cardwrapper"
                                CardIcon={<IconCRM className="icz-icon" />}
                                CardTitle="Total Interaction"
                                RowOneCurrentValue="1503475"
                                RowOnePreviousValue="800000"
                                RowOneTitle="Previous"
                                IsNumber={true}
                            />,
                            <DetailsCard
                                index="1"
                                CardClass="icz-cardwrapper"
                                CardIcon={<IconCRM className="icz-icon" />}
                                CardTitle="CTR"
                                RowOneCurrentValue="1503475"
                                RowOnePreviousValue="800000"
                                RowOneTitle="Previous"
                                IsNumber={true}
                            />,
                            <DetailsCard
                                index="1"
                                CardClass="icz-cardwrapper"
                                CardIcon={<IconCRM className="icz-icon" />}
                                CardTitle="Engagement Rate"
                                RowOneCurrentValue="1503475"
                                RowOnePreviousValue="800000"
                                RowOneTitle="Previous"
                                IsNumber={true}
                            />
                        ]}>

                    </Carousel>
                </div>

                <div className="icz-row">
                    <div className="icz-sectioncardwrapper w-100">
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
                    </div>
                </div>

                <div className="icz-row">
                    <div className="icz-sectioncardwrapper w-100">
                        <div className="icz-sectioncard d-flex flex-row flex-wrap">
                            <Col sm={12} className="icz-cardheader d-flex flex-column align-items-start">
                                <div className="icz-sectiontitle">
                                    Interaction
                                </div>
                            </Col>
                            <Col sm={12} lg={4} className="d-flex flex-column align-items-start">
                                <DonutChart card_id="interaction" card_class="icz-sectionchart" center_title="Total" graph-data={this.state.interaction} />
                            </Col>
                            <Col sm={12} lg={8} className="d-flex flex-column align-items-start">
                                <div className="w-100 p-20">
                                    <LineChart card_id="total_interaction" card_class="icz-sectionchart" graph-data={this.state.interactiondata} />
                                </div>
                            </Col>
                        </div>
                    </div>
                </div>

                <div className="icz-row">
                    <Col className="icz-sectioncardwrapper" sm={12} lg={6}>
                        <div className="icz-sectioncard">
                            <div className="icz-cardheader">
                                <Col className="icz-cardtitle">
                                    Reactions
                                </Col>
                            </div>
                            <div className="">
                                <SemiCirclePieChart chart_id="reaction" chart_class="icz-sectionchart" graph-data={this.state.reachByContentType} />
                            </div>
                        </div>
                    </Col>
                    <Col className="icz-sectioncardwrapper" sm={12} lg={6}>
                        <div className="icz-sectioncard">
                            <div className="icz-cardheader">
                                <Col className="icz-cardtitle">
                                    Comment Type
                                </Col>
                            </div>
                            <div className="">
                                <LocationBarChart card_id="comment_type" card_class="icz-sectionchart" graph-data={this.state.commentsdata} />
                            </div>
                        </div>
                    </Col>
                </div>

            </Wrapper>
        )
    }
}
