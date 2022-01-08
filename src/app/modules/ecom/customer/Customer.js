import React, { Component} from 'react'
import { Col, Container} from 'react-bootstrap';
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
// import MultiLine_LineChart from '../../../shared/components/charts/MultiLine_LineChart'
import Treemap from '../../../shared/components/charts/TreeMap';
import Bubble_chart from '../../../shared/components/charts/Bubble_chart';
import Cluster_chart from '../../../shared/components/charts/Cluster_chart';
import CohortGraph from "react-cohort-graph";
import { CustomerTable } from './Datatable/CustomerTable';
import CustomerDropdown from './CustomerDropdown';

export class Customer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            trafficpievalue: '[{"name": "Social","value": 30},{"name": "Direct","value": 30},{ "name": "Website","value": 50},{ "name": "Email","value": 40},{ "name": "Organic","value": 60}]',
            bargraphsession: '[{"name": "Jan", "points": 100}, {"name": "Feb", "points": 200},{"name": "march", "points": 110},{"name": "April", "points": 100},{"name": "May", "points": 100},{"name": "June", "points": 100},{"name": "July", "points": 100},{"name": "Aug", "points": 100},{"name": "Sep", "points": 130},{"name": "Oct", "points": 140},{"name": "Nov", "points": 200},{"name": "Dec", "points": 180}]',
            linesparkgraph: '[{"date": "2012-07-27","value": 13}, {"date": "2012-07-28","value": 10},{"date": "2012-07-29","value": 15},{"date": "2012-07-30","value": 15},{"date": "2012-07-31","value": 15},{"date": "2012-08-01","value": 15},{"date": "2012-08-02","value": 15},{"date": "2012-08-03","value": 19},{"date": "2012-08-04","value": 16},{"date": "2012-08-05","value": 15},{"date": "2012-08-06","value": 19},{"date": "2012-08-07","value": 17},{"date": "2012-08-08","value": 18}]',
            scroll: '',
            funnelgraph: '[{ "name": "Sessions with Category Page Views","value":150},{ "name": "Sessions with Product detail page views", "value":300},{"name": "Sessions with Add to Cart","value":150},{"name": "Sessions with visit to Checkout Page","value": 180},{"name": "Sessions with Visit to Address Page", "value": 50} ,{ "name": "Sessions with Visit to Payment Page","value": 20},{"name": "Sessions with Purchase","value": 10}]',
            treegraph: '[{ "name": "Home","children":[{"name":"Kitchen","value":150}]},{ "name": "Men", "children":[{"name":"Casual","value": 350},{"name":"Western","value":400}]},{ "name": "Women","children":[{"name":"Western","children":[{"name":"Jeans","value":240}]},{"name":"Casual","value":100}]},{"name": "Lifestyle","value": 180}]',
            clustergraph: '[{"network": "Facebook", "MAU": 22552},{"network": "Google+","MAU": 20552},{"network": "Instagram","MAU": 13552},{"network": "Pinterest","MAU": 19552},{"network": "Reddit","MAU": 20552}]',
            bubblechart: '[ {"hour": "12pm","weekday": "Sun","value": 2990},{"hour": "1pm","weekday": "Sun","value": 2990},{"hour": "2pm","weekday": "Sun","value": 1990},{"hour": "3pm","weekday": "Sun","value": 990},{"hour": "4pm","weekday": "Sun","value": 2000},{"hour": "5pm","weekday": "Sun","value": 7890},{"hour": "6pm","weekday": "Sun","value": 1290},{"hour": "7pm","weekday": "Sun","value": 1090},{"hour": "8pm","weekday": "Sun","value": 2990},{"hour": "9pm","weekday": "Sun","value": 2990},{"hour": "10pm","weekday": "Sun","value": 2990},{"hour": "11pm","weekday": "Sun","value": 2990},{"hour": "12pm","weekday": "Sun","value": 2990},{"hour": "1am","weekday": "Sun","value": 1890},{"hour": "2am","weekday": "Sun","value": 1990},{"hour": "3am","weekday": "Sun","value": 1000},{"hour":"4am" ,"weekday": "Sun","value":2100},{"hour": "5am","weekday": "Sun","value": 2990},{"hour": "6am","weekday": "Sun","value":2100},{"hour": "7am","weekday": "Sun","value": 2990},{"hour": "8am","weekday": "Sun","value": 1200},{"hour": "9am","weekday": "Sun","value": 900},{"hour": "10am","weekday": "Sun","value": 2000},{"hour": "11am","weekday": "Sun","value": 1100},{"hour": "12am","weekday": "Sun","value": 2990},{"hour": "12pm","weekday": "Mon","value": 2990},{"hour": "1pm","weekday": "Mon","value": 2990},{"hour": "2pm","weekday": "Mon","value": 1990},{"hour": "3pm","weekday": "Mon","value": 990},{"hour": "4pm","weekday": "Mon","value": 2000},{"hour": "5pm","weekday": "Mon","value": 7890},{"hour": "6pm","weekday": "Mon","value": 1290},{"hour": "7pm","weekday": "Mon","value": 1090},{"hour": "8pm","weekday": "Mon","value": 2990},{"hour": "9pm","weekday": "Mon","value": 2990},{"hour": "10pm","weekday": "Mon","value": 2990},{"hour": "11pm","weekday": "Mon","value": 2990},{"hour": "12pm","weekday": "Mon","value": 2990},{"hour": "1am","weekday": "Mon","value": 1890},{"hour": "2am","weekday": "Mon","value": 1990},{"hour": "3am","weekday": "Mon","value": 1000},{"hour":"4am" ,"weekday": "Mon","value":2100},{"hour": "5am","weekday": "Mon","value": 2990},{"hour": "6am","weekday": "Mon","value":2100},{"hour": "7am","weekday": "Mon","value": 2990},{"hour": "8am","weekday": "Mon","value": 1200},{"hour": "9am","weekday": "Mon","value": 900},{"hour": "10am","weekday": "Mon","value": 2000},{"hour": "11am","weekday": "Mon","value": 1100},{"hour": "12am","weekday": "Mon","value": 2990},{"hour": "12pm","weekday": "Wed","value": 2990},{"hour": "1pm","weekday": "Wed","value": 2990},{"hour": "2pm","weekday": "Wed","value": 1990},{"hour": "3pm","weekday": "Wed","value": 990},{"hour": "4pm","weekday": "Wed","value": 2000},{"hour": "5pm","weekday": "Wed","value": 7890},{"hour": "6pm","weekday": "Wed","value": 1290},{"hour": "7pm","weekday": "Wed","value": 1090},{"hour": "8pm","weekday": "Wed","value": 2990},{"hour": "9pm","weekday": "Wed","value": 2990},{"hour": "10pm","weekday": "Wed","value": 2990},{"hour": "11pm","weekday": "Wed","value": 2990},{"hour": "12pm","weekday": "Wed","value": 2990},{"hour": "1am","weekday": "Wed","value": 1890},{"hour": "2am","weekday": "Wed","value": 1990},{"hour": "3am","weekday": "Wed","value": 1000},{"hour":"4am" ,"weekday": "Wed","value":2100},{"hour": "5am","weekday": "Wed","value": 2990},{"hour": "6am","weekday": "Wed","value":2100},{"hour": "7am","weekday": "Wed","value": 2990},{"hour": "8am","weekday": "Wed","value": 1200},{"hour": "9am","weekday": "Wed","value": 900},{"hour": "10am","weekday": "Wed","value": 2000},{"hour": "11am","weekday": "Wed","value": 1100},{"hour": "12am","weekday": "Wed","value": 2990},{"hour": "12pm","weekday": "Wed","value": 2990},{"hour": "1pm","weekday": "Thu","value": 2990},{"hour": "2pm","weekday": "Thu","value": 1990},{"hour": "3pm","weekday": "Thu","value": 990},{"hour": "4pm","weekday": "Thu","value": 2000},{"hour": "5pm","weekday": "Thu","value": 7890},{"hour": "6pm","weekday": "Thu","value": 1290},{"hour": "7pm","weekday": "Thu","value": 1090},{"hour": "8pm","weekday": "Thu","value": 2990},{"hour": "9pm","weekday": "Thu","value": 2990},{"hour": "10pm","weekday": "Thu","value": 2990},{"hour": "11pm","weekday": "Thu","value": 2990},{"hour": "12pm","weekday": "Thu","value": 2990},{"hour": "1am","weekday": "Thu","value": 1890},{"hour": "2am","weekday": "Thu","value": 1990},{"hour": "3am","weekday": "Thu","value": 1000},{"hour":"4am" ,"weekday": "Thu","value":2100},{"hour": "5am","weekday": "Thu","value": 2990},{"hour": "6am","weekday": "Thu","value":2100},{"hour": "7am","weekday": "Thu","value": 2990},{"hour": "8am","weekday": "Thu","value": 1200},{"hour": "9am","weekday": "Thu","value": 900},{"hour": "10am","weekday": "Thu","value": 2000},{"hour": "11am","weekday": "Thu","value": 1100},{"hour": "12am","weekday": "Thu","value": 2990}]',
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
                    breakpoint: 1202,
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
            <Container className="p-0" fluid>
                <PageHeader pageTitle="Customer" />
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
                                                                <h5 className="icz-cardtitle text-start mb-0">Sales Share By Persona</h5>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col className="icz-pagefilter">
                                                        <div className="icz-page-dropdown justify-content-end p-0">
                                                            <CustomerDropdown/>
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
                                            <Col><h5 className="icz-card-title align-items-start">Sales</h5></Col>
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
                                                CardTitle="No Of Customers"
                                                RowOneCurrentValue="2800000"
                                                RowOnePreviousValue="80000"
                                                RowOneTitle=""
                                                IsNumber={true}
                                                chart={<Linegraph_sparkline card_id="icz-customer" card_class="icz-cardchart" graph-data={this.state.linesparkgraph} />}
                                            />,

                                            <ChartCard
                                                index="2"
                                                CardClass="icz-cardwrapper"
                                                CardIcon={<IconWebsite className="icz-icon" />}
                                                CardTitle="Total Sales"
                                                RowOneCurrentValue="8076808"
                                                RowOnePreviousValue="805000"
                                                RowOneTitle=""
                                                IsNumber={true}
                                                chart={<Linegraph_sparkline card_id="icz-total-sales" card_class="icz-cardchart" graph-data={this.state.linesparkgraph} />}
                                            />,
                                            <ChartCard
                                                index="3"
                                                CardClass="icz-cardwrapper"
                                                CardIcon={<IconWebsite className="icz-icon" />}
                                                CardTitle="Transaction"
                                                RowOneCurrentValue="6000080"
                                                RowOnePreviousValue="800000"
                                                RowOneTitle=""
                                                IsNumber={true}
                                                chart={<Linegraph_sparkline card_id="icz-transaction" card_class="icz-cardchart" graph-data={this.state.linesparkgraph} />}
                                            />,
                                            <ChartCard
                                                index="4"
                                                CardClass="icz-cardwrapper"
                                                CardIcon={<IconWebsite className="icz-icon" />}
                                                CardTitle="Average Order Value"
                                                RowOneCurrentValue="800000"
                                                RowOnePreviousValue="80000"
                                                RowOneTitle=""
                                                IsNumber={true}
                                                chart={<Linegraph_sparkline card_id="icz-avg-ordervalue" card_class="icz-cardchart" graph-data={this.state.linesparkgraph} />}
                                            />


                                        ]}>

                                    </Carousel>


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
                                                CardTitle="Avg Revenue Per User"
                                                RowOneCurrentValue="2800000"
                                                RowOnePreviousValue="80000"
                                                RowOneTitle=""
                                                IsNumber={true}
                                                chart={<BarChart card_id="icz-avg-revenue-user" card_class="icz-cardchart" graph-data={this.state.bargraphsession} />}
                                            />,


                                            <ChartCard
                                                index="2"
                                                CardClass="icz-cardwrapper"
                                                CardIcon={<IconWebsite className="icz-icon" />}
                                                CardTitle="LTV/Customer"
                                                RowOneCurrentValue="2800000"
                                                RowOnePreviousValue="80000"
                                                RowOneTitle=""
                                                IsNumber={true}
                                                chart={<BarChart card_id="Ltv_customer" card_class="icz-cardchart" graph-data={this.state.bargraphsession} />}
                                            />,
                                            <ChartCard
                                                index="3"
                                                CardClass="icz-cardwrapper"
                                                CardIcon={<IconWebsite className="icz-icon" />}
                                                CardTitle="Avg Time Between Orders"
                                                RowOneCurrentValue="2800000"
                                                RowOnePreviousValue="80000"
                                                RowOneTitle=""
                                                IsNumber={true}
                                                chart={<BarChart card_id="icz-avgtime-orders" card_class="icz-cardchart" graph-data={this.state.bargraphsession} />}
                                            />,

                                            <ChartCard
                                                index="4"
                                                CardClass="icz-cardwrapper"
                                                CardIcon={<IconWebsite className="icz-icon" />}
                                                CardTitle="Avg Price Per Unit Bought"
                                                RowOneCurrentValue="2800000"
                                                RowOnePreviousValue="80000"
                                                RowOneTitle=""
                                                IsNumber={true}
                                                chart={<BarChart card_id="icz-avgprice-bought" card_class="icz-cardchart" graph-data={this.state.bargraphsession} />}
                                            />,
                                        ]}>

                                    </Carousel>
                                </div>
                                <div className="icz-row">
                                    <Col className="icz-sectioncardwrapper pt-3" sm={12} xxl={6} xl={6} lg={6}>
                                        <div className="icz-sectioncard">
                                            <div className="icz-cardheader">
                                                <Col className="icz-cardtitle">
                                                    Trend In Sales
                                                </Col>
                                            </div>
                                            <div className="">
                                                <MultipleValueAxes card_id="icz-linechart" card_class="icz-sectionchart" graph-data={this.state.funnelgraph} />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col className="icz-sectioncardwrapper pt-3" sm={12} lg={6}>
                                        <div className="icz-sectioncard">
                                            <div className="icz-cardheader">
                                                <Col className="icz-cardtitle">
                                                    Category Sale Share
                                                </Col>
                                            </div>
                                            <div className="">
                                                <Treemap card_id="icz-treemap" card_class="icz-sectionchart" graph-data={this.state.treegraph} />
                                            </div>
                                        </div>
                                    </Col>
                                </div>
                                <div className="icz-row">
                                    <Col className="icz-sectioncardwrapper pt-3" sm={12} lg={6}>
                                        <div className="icz-sectioncard">
                                            <div className="icz-cardheader">
                                                <Col className="icz-cardtitle">
                                                      Cohort Analysis
                                                </Col>
                                            </div>
                                            <div className="icz-cohortgraph ">
                                                <CohortGraph className="icz-cohort"
                                                    data={{
                                                        months: {
                                                            "June": [11567, 331, 135, 116, 90, 48],
                                                            "May": [11132, 334, 154, 78, 65, 13],
                                                            "Apr": [11497, 340, 111, 66, 20],
                                                            "March": [11593, 247, 87, 39],
                                                            "Feb": [8710, 206, 38],
                                                            "Jan": [7067, 89]
                                                        }
                                                    }}
                                                    defaultValueType={["value"]}
                                                />

                                            </div>
                                        </div>
                                    </Col>
                                    <Col className="icz-sectioncardwrapper pt-3" sm={12} lg={6}>
                                        <div className="icz-sectioncard">
                                            <div className="icz-cardheader">
                                                <Col className="icz-cardtitle">
                                                Top Discount Codes Used
                                                </Col>
                                            </div>
                                            <div className="">
                                                <Cluster_chart card_id="icz-clusterchartr" card_class="icz-sectionchart" graph-data={this.state.clustergraph} />
                                            </div>
                                        </div>
                                    </Col>
                                </div>

                                <div className="icz-row">
                                    <Col className="icz-sectioncardwrapper pt-3" sm={12} lg={12}>
                                        <div className="icz-sectioncard">
                                            <div className="icz-cardheader">
                                                <Col className="icz-cardtitle">
                                                     Purchase Activity Pattern
                                                </Col>
                                            </div>
                                            <div className="">
                                                <Bubble_chart card_id="icz-bubblechart" card_class="icz-sectionchart" graph-data={this.state.bubblechart} />
                                            </div>
                                        </div>
                                    </Col>
                                </div>
                                <div className="icz-row">
                                    <Col className="icz-sectioncardwrapper pt-3" sm={12} lg={12}>
                                        <div className="icz-sectioncard">
                                            <div className="icz-cardheader">
                                               
                                            </div>
                                            <div className="">
                                               <CustomerTable/>
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
