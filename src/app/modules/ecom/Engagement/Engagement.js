import React, { Component } from 'react';
import { Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import "../../ecom/ecom.scss";
import Piechart from '../../../shared/components/charts/Piechart';
import Linegraph_sparkline from '../../../shared/components/charts/Linegraph_sparkline';
import { ChartCard } from '../../../shared/components/cards/chartcard/chartcard'
import { BarChart } from '../../../shared/components/charts/BarChart';
import { Carousel } from '../../../shared/components/carousel/carousel';
import PageHeader from '../../../layout/pageheader/pageheader';
import '../../../shared/components/cards/card.scss'
import IconWebsite from '../../../../assets/images/icons/websiteIcon';
import MultipleValueAxes from '../../../shared/components/charts/MultipleValueAxesChart';
import { CustomerTable } from '../customer/Datatable/CustomerTable';
import CustomerDropdown from '../customer/CustomerDropdown';



export class Engagement extends Component {

    constructor(props) {
        super(props);
        this.state = {
            trafficpievalue: '[{"name": "Social","value": 30},{"name": "Direct","value": 30},{ "name": "Website","value": 50},{ "name": "Email","value": 40},{ "name": "Organic","value": 60}]',
            linesparkgraph: '[{"date": "2012-07-27","value": 13}, {"date": "2012-07-28","value": 10},{"date": "2012-07-29","value": 15},{"date": "2012-07-30","value": 15},{"date": "2012-07-31","value": 15},{"date": "2012-08-01","value": 15},{"date": "2012-08-02","value": 15},{"date": "2012-08-03","value": 19},{"date": "2012-08-04","value": 16},{"date": "2012-08-05","value": 15},{"date": "2012-08-06","value": 19},{"date": "2012-08-07","value": 17},{"date": "2012-08-08","value": 18}]',
            scroll: '',
           
        }


    }
    render() {
        const CarouselSettings = {
            arrows: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
            responsive: [

                {
                    breakpoint: 1202,
                    settings: {
                        arrows: true,
                        slidesToShow: 4,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        arrows: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,

                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,

                    }
                }
            ]
        }
        return (
            <Container className="p-0" fluid>
                <PageHeader pageTitle="Engagement" />
                <div className="d-flex">
                    <Col className="icz-leftsection" sm={12} lg={3} xl={3}>
                        <div className="icz-card-wrap">
                            <Col className="icz-sectioncardwrapper ps-0">
                                <div className="icz-leftsectioncard">
                                    <div className="d-flex">
                                        <Col sm={12} className="icz-cardheader">
                                            <Col className="icz-cardtitle">
                                                <div className="icz-title-wrap p-0">
                                                    <div className="text-left">
                                                        <h5 className="icz-cardtitle text-start mb-0 text-">Traffic By Channel</h5>
                                                    </div>
                                                </div>
                                            </Col>
                                           
                                        </Col>
                                    </div>
                                    <div className="w-100">
                                        <Piechart card_id="icz-traffic-piechart" card_class="icz-leftsectionchart" graph-data={this.state.trafficpievalue} />
                                    </div>

                                </div>

                            </Col>

                        </div>

                    </Col>

                    <Col className="icz-rightsection" sm={12} lg={9} xl={9}>
                        <div className="icz-title-wrap d-flex">
                            <Col sm={12}>
                                <div className="icz-row">
                                    <Col><h5 className="icz-card-title align-items-start">Engagement</h5></Col>
                                    <Col className="align-items-end text-end"><Link to='/ecom/customer'><button className="icz-btn">View More</button></Link></Col>
                                </div>
                            </Col>
                        </div>
                        <div className="icz-carouselcontainer">

                            <Carousel
                                Settings={CarouselSettings}
                                class={"icz-cardcontainer"}
                                SliderCards={[
                                    <ChartCard
                                        index="1"
                                        CardClass="icz-cardwrapper"
                                        CardIcon={<IconWebsite className="icz-icon" />}
                                        CardTitle="Sessions"
                                        RowOneCurrentValue="2800000"
                                        RowOnePreviousValue="80000"
                                        RowOneTitle="engagement"
                                        IsNumber={true}
                                        chart={<Linegraph_sparkline card_id="icz-sessions" card_class="icz-cardchart" graph-data={this.state.linesparkgraph} />}
                                    />,

                                    <ChartCard
                                        index="2"
                                        CardClass="icz-cardwrapper"
                                        CardIcon={<IconWebsite className="icz-icon" />}
                                        CardTitle="No.Of Sessions Per User"
                                        RowOneCurrentValue="80"
                                        RowOnePreviousValue="80"
                                        RowOneTitle="engagement"
                                        IsNumber={true}
                                        chart={<Linegraph_sparkline card_id="icz-sessions-users" card_class="icz-cardchart" graph-data={this.state.linesparkgraph} />}
                                    />,
                                    <ChartCard
                                        index="3"
                                        CardClass="icz-cardwrapper"
                                        CardIcon={<IconWebsite className="icz-icon" />}
                                        CardTitle="Bounce Rate"
                                        RowOneCurrentValue="80"
                                        RowOnePreviousValue="80"
                                        RowOneTitle="engagement"
                                        IsNumber={true}
                                        chart={<Linegraph_sparkline card_id="icz-bounce-rate" card_class="icz-cardchart" graph-data={this.state.linesparkgraph} />}
                                    />,
                                    <ChartCard
                                        index="4"
                                        CardClass="icz-cardwrapper"
                                        CardIcon={<IconWebsite className="icz-icon" />}
                                        CardTitle="Exits"
                                        RowOneCurrentValue="80"
                                        RowOnePreviousValue="80"
                                        RowOneTitle="engagement"
                                        IsNumber={true}
                                        chart={<Linegraph_sparkline card_id="icz-exits" card_class="icz-cardchart" graph-data={this.state.linesparkgraph} />}
                                    />,
                                    <ChartCard
                                        index="5"
                                        CardClass="icz-cardwrapper"
                                        CardIcon={<IconWebsite className="icz-icon" />}
                                        CardTitle="Average Session Duration"
                                        RowOneCurrentValue="80"
                                        RowOnePreviousValue="80"
                                        RowOneTitle="engagement"
                                        IsNumber={true}
                                        chart={<Linegraph_sparkline card_id="icz-avg-session" card_class="icz-cardchart" graph-data={this.state.linesparkgraph} />}
                                    />,
                                    <ChartCard
                                        index="6"
                                        CardClass="icz-cardwrapper"
                                        CardIcon={<IconWebsite className="icz-icon" />}
                                        CardTitle="Average Pages Per Session"
                                        RowOneCurrentValue="80"
                                        RowOnePreviousValue="80"
                                        RowOneTitle="engagement"
                                        IsNumber={true}
                                        chart={<Linegraph_sparkline card_id="icz-avgpage-session" card_class="icz-cardchart" graph-data={this.state.linesparkgraph} />}
                                    />,
                                    <ChartCard
                                        index="7"
                                        CardClass="icz-cardwrapper"
                                        CardIcon={<IconWebsite className="icz-icon" />}
                                        CardTitle="Average Time Per Session"
                                        RowOneCurrentValue="80"
                                        RowOnePreviousValue="80"
                                        RowOneTitle="engagement"
                                        IsNumber={true}
                                        chart={<Linegraph_sparkline card_id="icz-avgtime-session" card_class="icz-cardchart" graph-data={this.state.linesparkgraph} />}
                                    />,
                                    <ChartCard
                                        index="8"
                                        CardClass="icz-cardwrapper"
                                        CardIcon={<IconWebsite className="icz-icon" />}
                                        CardTitle="Add To Cart Rate"
                                        RowOneCurrentValue="80"
                                        RowOnePreviousValue="80"
                                        RowOneTitle="engagement"
                                        IsNumber={true}
                                        chart={<Linegraph_sparkline card_id="icz-addcart-rate" card_class="icz-cardchart" graph-data={this.state.linesparkgraph} />}
                                    />,
                                    <ChartCard
                                        index="9"
                                        CardClass="icz-cardwrapper"
                                        CardIcon={<IconWebsite className="icz-icon" />}
                                        CardTitle="Product Remove From Cart"
                                        RowOneCurrentValue="80"
                                        RowOnePreviousValue="80"
                                        RowOneTitle="engagement"
                                        IsNumber={true}
                                        chart={<Linegraph_sparkline card_id="icz-productremove-cart" card_class="icz-cardchart" graph-data={this.state.linesparkgraph} />}
                                    />,
                                    <ChartCard
                                        index="10"
                                        CardClass="icz-cardwrapper"
                                        CardIcon={<IconWebsite className="icz-icon" />}
                                        CardTitle="Abandon Cart Rate"
                                        RowOneCurrentValue="80"
                                        RowOnePreviousValue="80"
                                        RowOneTitle="engagement"
                                        IsNumber={true}
                                        chart={<Linegraph_sparkline card_id="icz-abandon-rate" card_class="icz-cardchart" graph-data={this.state.linesparkgraph} />}
                                    />,
                                    <ChartCard
                                        index="11"
                                        CardClass="icz-cardwrapper"
                                        CardIcon={<IconWebsite className="icz-icon" />}
                                        CardTitle="Cart To Detail Rate"
                                        RowOneCurrentValue="80"
                                        RowOnePreviousValue="80"
                                        RowOneTitle="engagement"
                                        IsNumber={true}
                                        chart={<Linegraph_sparkline card_id="icz-cart-detail-rate" card_class="icz-cardchart" graph-data={this.state.linesparkgraph} />}
                                    />,
                                    <ChartCard
                                        index="12"
                                        CardClass="icz-cardwrapper"
                                        CardIcon={<IconWebsite className="icz-icon" />}
                                        CardTitle="Buy To Detail Rate"
                                        RowOneCurrentValue="80"
                                        RowOnePreviousValue="80"
                                        RowOneTitle="engagement"
                                        IsNumber={true}
                                        chart={<Linegraph_sparkline card_id="icz-buy-rate" card_class="icz-cardchart" graph-data={this.state.linesparkgraph} />}
                                    />,


                                ]}>

                            </Carousel>


                        </div>

                        <div className="icz-row">
                        <Col className="icz-sectioncardwrapper pt-3" sm={12} lg={12}>
                            <div className="icz-sectioncard">
                                <div className="icz-cardheader">
                                    <Col className="icz-cardtitle">
                                    Transactions And User Type 
                                    </Col>
                                </div>
                                <div className="">
                                    <MultipleValueAxes card_id="converstion_funnel" card_class="icz-sectionchart" graph-data={this.state.funnelgraph} />
                                </div>
                            </div>
                        </Col>
                    </div>



                    </Col>

                </div>
            </Container>
        )
    }
}
