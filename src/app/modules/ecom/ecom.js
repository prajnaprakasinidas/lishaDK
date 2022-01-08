import React, { Component } from 'react';
import { Col, Container } from 'react-bootstrap';
import "../ecom/ecom.scss";
import Converstion_funnel from '../../shared/components/charts/Converstion_funnel';
import Piechart from '../../shared/components/charts/Piechart';
import SummaryDropdown from './Summary/SummaryDropdown';
import CategoryPiechart from '../../shared/components/charts/CategoryPiechart';
import { useState } from "react";
// import Dropdown from './Summary//Dropdown';
// import BarChart from '../../shared/components/charts/BarChart';
import Linegraph_sparkline from '../../shared/components/charts/Linegraph_sparkline';
import { ChartCard } from '../../shared/components/cards/chartcard/chartcard'
import { BarChart } from '../../shared/components/charts/BarChart';
import { Carousel } from '../../shared/components/carousel/carousel';
import PageHeader from '../../layout/pageheader/pageheader';
import '../../shared/components/cards/card.scss'
import IconWebsite from '../../../assets/images/icons/websiteIcon';
import { Link } from 'react-router-dom'

const API_URL = 'https://api1.icogz.com';


export class Ecom extends Component {

    constructor(props) {
        super(props);
        this.state = {
            trafficpievalue: '[{"name": "Social","value": 30},{"name": "Direct","value": 30},{ "name": "Website","value": 50},{ "name": "Email","value": 40},{ "name": "Organic","value": 60}]',
            bargraphsession: '[{"name": "Jan", "points": 100}, {"name": "Feb", "points": 200},{"name": "march", "points": 110},{"name": "April", "points": 100},{"name": "May", "points": 100},{"name": "June", "points": 100},{"name": "July", "points": 100},{"name": "Aug", "points": 100},{"name": "Sep", "points": 130},{"name": "Oct", "points": 140},{"name": "Nov", "points": 200},{"name": "Dec", "points": 180}]',
            linesparkgraph: '[{"date": "2012-07-27","value": 13}, {"date": "2012-07-28","value": 10},{"date": "2012-07-29","value": 15},{"date": "2012-07-30","value": 15},{"date": "2012-07-31","value": 15},{"date": "2012-08-01","value": 15},{"date": "2012-08-02","value": 15},{"date": "2012-08-03","value": 19},{"date": "2012-08-04","value": 16},{"date": "2012-08-05","value": 15},{"date": "2012-08-06","value": 19},{"date": "2012-08-07","value": 17},{"date": "2012-08-08","value": 18}]',
            scroll: '',
            funnelgraph: '[{ "name": "Sessions with Category Page Views", "value": 600},{ "name": "Sessions with Product detail page views", "value": 300},{ "name": "Sessions with Add to Cart","value": 200},{"name": "Sessions with visit to Checkout Page","value": 180},{"name": "Sessions with Visit to Address Page", "value": 50} ,{ "name": "Sessions with Visit to Payment Page","value": 20},{"name": "Sessions with Purchase","value": 10}]',
            is_metrices_loaded: false,
            metrices_data: [],
            sales: '',
            total_order: '',
            avg_order_value: ''
        }

        this.getallMetrices();


    }
    // componentDidMount() {
    //     this.getallMetrices();

    // }
    getallMetrices() {
        console.log("getallMetrices called   1 ")
        const data = {
            'start_date': '2021-10-01',
            'end_date': '2021-12-31',
            'social_paltform': 'FACEBOOK'
        }
        const url = API_URL + "/api/ecom/ecom-metrices/"
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(res => res.json()).then((result) => {
            console.log("2 getallMetrices=======================", result['current_ecom_metrices_list'][0]['sales'])
            
            this.state.sales = result['current_ecom_metrices_list'][0]['sales']
            this.state.total_order = result['current_ecom_metrices_list'][0]['sales']

            this.state.avg_order_value = this.state.sales / this.state.total_order

            this.setState({
                is_metrices_loaded: true,
                metrices_data: result,
               

            });
        })

    }




    // const dropdownoptions2 = [
    //     { key: 'key-1', text: 'Organic' },
    //     { key: 'key-2', text: 'Website' },
    //     { key: 'key-3', text: 'Email' },
    //     { key: 'key-4', text: 'Social' },
    //     { key: 'key-5', text: 'Direct' }
    // ]

    // const dropdownoptions = [
    //     { key: 'key-1', text: 'Home' },
    //     { key: 'key-2', text: 'Mobiles' },
    //     { key: 'key-3', text: 'Electronics' },
    //     { key: 'key-4', text: 'Health' },
    //     { key: 'key-5', text: 'Books' }
    // ]

    // useEffect(() => {
    //     window.addEventListener("scroll", () => {
    //         setScroll(window.scrollY > 60);

    //     });

    // });
    // const [toggleState, setToggleState] = useState(1);
    // const toggleTab = (index) => {
    //     console.log(index);
    //     setToggleState(index);
    // }
    // const [scroll, setScroll] = useState(false);


    render() {
        if (!this.state.is_metrices_loaded) {
            return "<div></div>";
        }
        console.log("===================getallMetrices=======================", this.state.is_metrices_loaded)
        console.log("avg_order_value", this.state)

        const CarouselSettings = {
            arrows: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        arrows: true,
                        slidesToShow: 3,
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
            // <h1>ECOM RUNNING</h1>
            <Container className="p-0" fluid>
                <PageHeader pageTitle="Summary" />
                <div className="">
                    <Container fluid className="p-0">

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
                                                                <h5 className="icz-cardtitle text-start mb-0">Sales By</h5>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col className="icz-pagefilter">
                                                        <div className="icz-page-dropdown justify-content-end p-0">
                                                            <SummaryDropdown />
                                                        </div>
                                                    </Col>
                                                </Col>
                                            </div>
                                            <div className="w-100">
                                                <Piechart card_id="icz-traffic-piechart" card_class="icz-leftsectionchart" graph-data={this.state.trafficpievalue} />
                                            </div>
                                            {/* card_class={scroll ? "chart_h500 icz-cardchart" : "chart_h300 icz-cardchart"} ? */}

                                        </div>
                                    </Col>

                                </div>

                            </Col>
                            <Col className="icz-rightsection" sm={12} lg={9} xl={9}>
                                <div className="icz-title-wrap d-flex">
                                    <Col sm={12}>
                                        <div className="icz-row">
                                            <Col><h5 className="icz-card-title align-items-start">Sales</h5></Col>
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
                                                CardTitle="Sales"
                                                RowOneCurrentValue={this.state.metrices_data['current_ecom_metrices_list'][0]['sales']}
                                                RowOnePreviousValue={this.state.metrices_data['last_ecom_metrices_list'][0]['sales']}
                                                RowOneTitle="sales"
                                                IsNumber={true}
                                                chart={<Linegraph_sparkline card_id="icz-sales" card_class="icz-cardchart" graph-data={this.state.linesparkgraph} />}
                                            />,

                                            <ChartCard
                                                index="2"
                                                CardClass="icz-cardwrapper"
                                                CardIcon={<IconWebsite className="icz-icon" />}
                                                CardTitle="Total Orders"
                                                RowOneCurrentValue={this.state.metrices_data['current_ecom_metrices_list'][0]['total_order']}
                                                RowOnePreviousValue={this.state.metrices_data['last_ecom_metrices_list'][0]['total_order']}
                                                RowOneTitle="sales"
                                                IsNumber={true}
                                                chart={<Linegraph_sparkline card_id="icz-total-orders" card_class="icz-cardchart" graph-data={this.state.linesparkgraph} />}
                                            />,
                                            <ChartCard
                                                index="3"
                                                CardClass="icz-cardwrapper"
                                                CardIcon={<IconWebsite className="icz-icon" />}
                                                CardTitle="Avg Order Value"
                                                RowOneCurrentValue="80"
                                                RowOnePreviousValue="80"
                                                RowOneTitle="sales"
                                                IsNumber={true}
                                                chart={<Linegraph_sparkline card_id="icz-avgorder-value" card_class="icz-cardchart" graph-data={this.state.linesparkgraph} />}
                                            />,
                                            <ChartCard
                                                index="4"
                                                CardClass="icz-cardwrapper"
                                                CardIcon={<IconWebsite className="icz-icon" />}
                                                CardTitle="Cancellations"
                                                RowOneCurrentValue={this.state.metrices_data['current_ecom_metrices_list'][0]['cancellations']}
                                                RowOnePreviousValue={this.state.metrices_data['last_ecom_metrices_list'][0]['cancellations']}
                                                RowOneTitle="sales"
                                                IsNumber={true}
                                                chart={<Linegraph_sparkline card_id="icz-cancellations" card_class="icz-cardchart" graph-data={this.state.linesparkgraph} />}
                                            />,
                                            <ChartCard
                                                index="5"
                                                CardClass="icz-cardwrapper"
                                                CardIcon={<IconWebsite className="icz-icon" />}
                                                CardTitle="Converstion Rate"
                                                RowOneCurrentValue="80"
                                                RowOnePreviousValue="80"
                                                RowOneTitle="Traffic"
                                                IsNumber={true}
                                                chart={<Linegraph_sparkline card_id="icz-converstion-rate" card_class="icz-cardchart" graph-data={this.state.linesparkgraph} />}
                                            />,

                                        ]}>

                                    </Carousel>


                                </div>
                                <div className="icz-title-wrap d-flex">
                                    <Col sm={12}>
                                        <div className="icz-row">
                                            <Col><h5 className="icz-card-title align-items-start">Enagagement</h5></Col>
                                            <Col className="align-items-end text-end"><button className="icz-btn">View More</button></Col>
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
                                                CardTitle="Avg Sessions Duration"
                                                RowOneCurrentValue="2800000"
                                                RowOnePreviousValue="80000"
                                                RowOneTitle="enagagement"
                                                IsNumber={true}
                                                chart={<BarChart card_id="icz-avg-session-duration" card_class="icz-cardchart" graph-data={this.state.bargraphsession} />}
                                            />,

                                            <ChartCard
                                                index="2"
                                                CardClass="icz-cardwrapper"
                                                CardIcon={<IconWebsite className="icz-icon" />}
                                                CardTitle="Avg Page Sessions"
                                                RowOneCurrentValue="80"
                                                RowOnePreviousValue="80"
                                                RowOneTitle="enagagement"
                                                IsNumber={true}
                                                chart={<BarChart card_id="icz-avgpage-session" card_class="icz-cardchart" graph-data={this.state.bargraphsession} />}
                                            />,
                                            <ChartCard
                                                index="3"
                                                CardClass="icz-cardwrapper"
                                                CardIcon={<IconWebsite className="icz-icon" />}
                                                CardTitle="Add To Card Rate"
                                                RowOneCurrentValue="2800000"
                                                RowOnePreviousValue="80000"
                                                RowOneTitle="enagagement"
                                                IsNumber={true}
                                                chart={<BarChart card_id="Add To Card Rate" card_class="icz-cardchart" graph-data={this.state.bargraphsession} />}
                                            />,
                                            <ChartCard
                                                index="4"
                                                CardClass="icz-cardwrapper"
                                                CardIcon={<IconWebsite className="icz-icon" />}
                                                CardTitle=" %Session With Search"
                                                RowOneCurrentValue="2800000"
                                                RowOnePreviousValue="80000"
                                                RowOneTitle="enagagement"
                                                IsNumber={true}
                                                chart={<BarChart card_id="icz-session-search" card_class="icz-cardchart" graph-data={this.state.bargraphsession} />}
                                            />,

                                            <ChartCard
                                                index="5"
                                                CardClass="icz-cardwrapper"
                                                CardIcon={<IconWebsite className="icz-icon" />}
                                                CardTitle="Bounce RAte"
                                                RowOneCurrentValue="2800000"
                                                RowOnePreviousValue="80000"
                                                RowOneTitle="enagagement"
                                                IsNumber={true}
                                                chart={<BarChart card_id="icz-bounce-rate" card_class="icz-cardchart" graph-data={this.state.bargraphsession} />}
                                            />,

                                        ]}>

                                    </Carousel>

                                </div>

                                <div className="icz-title-wrap d-flex">
                                    <Col sm={12}>
                                        <div className="icz-row">
                                            <Col ><h5 className="icz-card-title align-items-start">Traffic</h5></Col>
                                            <Col className="align-items-end text-end"><button className="icz-btn">View More</button></Col>
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
                                                RowOneTitle="Traffic"
                                                IsNumber={true}
                                                chart={<Linegraph_sparkline card_id="icz-session" card_class="icz-cardchart" graph-data={this.state.linesparkgraph} />}
                                            />,

                                            <ChartCard
                                                index="2"
                                                CardClass="icz-cardwrapper"
                                                CardIcon={<IconWebsite className="icz-icon" />}
                                                CardTitle="Users"
                                                RowOneCurrentValue="80"
                                                RowOnePreviousValue="80"
                                                RowOneTitle="Traffic"
                                                IsNumber={true}
                                                chart={<Linegraph_sparkline card_id="icz-user" card_class="icz-cardchart" graph-data={this.state.linesparkgraph} />}
                                            />,
                                            <ChartCard
                                                index="3"
                                                CardClass="icz-cardwrapper"
                                                CardIcon={<IconWebsite className="icz-icon" />}
                                                CardTitle="New Users"
                                                RowOneCurrentValue="80"
                                                RowOnePreviousValue="80"
                                                RowOneTitle="Traffic"
                                                IsNumber={true}
                                                chart={<Linegraph_sparkline card_id="icz-new-users" card_class="icz-cardchart" graph-data={this.state.linesparkgraph} />}
                                            />,
                                            <ChartCard
                                                index="4"
                                                CardClass="icz-cardwrapper"
                                                CardIcon={<IconWebsite className="icz-icon" />}
                                                CardTitle="Mobile Users"
                                                RowOneCurrentValue="80"
                                                RowOnePreviousValue="80"
                                                RowOneTitle="Traffic"
                                                IsNumber={true}
                                                chart={<Linegraph_sparkline card_id="icz-mobile-user" card_class="icz-cardchart" graph-data={this.state.linesparkgraph} />}
                                            />,
                                            <ChartCard
                                                index="5"
                                                CardClass="icz-cardwrapper"
                                                CardIcon={<IconWebsite className="icz-icon" />}
                                                CardTitle="Top Landing"
                                                RowOneCurrentValue="80"
                                                RowOnePreviousValue="80"
                                                RowOneTitle="Traffic"
                                                IsNumber={true}
                                                chart={<Linegraph_sparkline card_id="icz-top-landing" card_class="icz-cardchart" graph-data={this.state.linesparkgraph} />}
                                            />,
                                        ]}>
                                    </Carousel>
                                </div>

                                <div className="icz-row">
                                    <Col className="icz-sectioncardwrapper pt-3" sm={12} lg={12}>
                                        <div className="icz-sectioncard">
                                            <div className="icz-cardheader">
                                                <Col className="icz-cardtitle">
                                                    Converstion Funnel
                                                </Col>
                                            </div>
                                            <div className="">
                                                <Converstion_funnel card_id="converstion_funnel" card_class="icz-sectionchart" graph-data={this.state.funnelgraph} />
                                            </div>
                                        </div>
                                    </Col>
                                </div>
                            </Col>

                        </div>

                    </Container>
                </div>
            </Container>
        )
    }
}