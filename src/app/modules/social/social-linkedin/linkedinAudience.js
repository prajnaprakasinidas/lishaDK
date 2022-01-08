import React, { Component } from "react";
import Col from "react-bootstrap/esm/Col";
import IconFemale from "../../../../assets/images/icons/femaleIcon";
import IconMale from "../../../../assets/images/icons/maleIcon";
import Wrapper from "../../../helpers/wrapper";
import CountryChart from "../../../shared/components/charts/CountryChart";
import HorizontalBarChart from "../../../shared/components/charts/HorizontalBarChart";
import { SectionDropdown } from "../../../shared/components/dropdown/dropdown";
import IconImpressions from '../../../../assets/images/icons/impressionsIcon';
import IconLike from "../../../../assets/images/icons/likeIcon";
import IconReach from "../../../../assets/images/icons/reachIcon";
import IconFollowers from '../../../../assets/images/icons/followersIcon';

import { DetailsCard } from "../../../shared/components/cards/detailscard/detailscard";
import { Carousel } from "../../../shared/components/carousel/carousel";

import CompareLineChart from "../../../shared/components/charts/CompareLineChart";
import { DonutChart } from '../../../shared/components/charts/DonutChart';
import { ZoomableBubbleChart } from "../../../shared/components/charts/ZoomableBubbleChart";

import '../social.scss';

export class LinkedinAudience extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [{"date":"2019-5-12","value1":"50","value2":"48","previousdate":"2019-5-5"},{"date":"2019-5-13","value1":"53","value2":"51","previousdate":"2019-5-6"},{"date":"2019-5-14","value1":"56","value2":"58","previousdate":"2019-5-7"},{"date":"2019-5-15","value1":"52","value2":"53","previousdate":"2019-5-8"},{"date":"2019-5-16","value1":"48","value2":"44","previousdate":"2019-5-9"},{"date":"2019-5-17","value1":"47","value2":"42","previousdate":"2019-5-10"},{"date":"2019-5-18","value1":"59","value2":"55","previousdate":"2019-5-11"}],
            activity: '[{"hour":"12pm","weekday":"Sun","value":2990},{"hour":"1am","weekday":"Sun","value":2520},{"hour":"2am","weekday":"Sun","value":2334},{"hour":"3am","weekday":"Sun","value":2230},{"hour":"4am","weekday":"Sun","value":2325},{"hour":"5am","weekday":"Sun","value":2019},{"hour":"6am","weekday":"Sun","value":2128},{"hour":"7am","weekday":"Sun","value":2246},{"hour":"8am","weekday":"Sun","value":2421},{"hour":"9am","weekday":"Sun","value":2788},{"hour":"10am","weekday":"Sun","value":2959},{"hour":"11am","weekday":"Sun","value":3018},{"hour":"12am","weekday":"Sun","value":3154},{"hour":"1pm","weekday":"Sun","value":3172},{"hour":"2pm","weekday":"Sun","value":3368},{"hour":"3pm","weekday":"Sun","value":3464},{"hour":"4pm","weekday":"Sun","value":3746},{"hour":"5pm","weekday":"Sun","value":3656},{"hour":"6pm","weekday":"Sun","value":3336},{"hour":"7pm","weekday":"Sun","value":3292},{"hour":"8pm","weekday":"Sun","value":3269},{"hour":"9pm","weekday":"Sun","value":3300},{"hour":"10pm","weekday":"Sun","value":3403},{"hour":"11pm","weekday":"Sun","value":3323},{"hour":"12pm","weekday":"Mon","value":3346},{"hour":"1am","weekday":"Mon","value":2725},{"hour":"2am","weekday":"Mon","value":3052},{"hour":"3am","weekday":"Mon","value":3876},{"hour":"4am","weekday":"Mon","value":4453},{"hour":"5am","weekday":"Mon","value":3972},{"hour":"6am","weekday":"Mon","value":4644},{"hour":"7am","weekday":"Mon","value":5715},{"hour":"8am","weekday":"Mon","value":7080},{"hour":"9am","weekday":"Mon","value":8022},{"hour":"10am","weekday":"Mon","value":8446},{"hour":"11am","weekday":"Mon","value":9313},{"hour":"12am","weekday":"Mon","value":9011},{"hour":"1pm","weekday":"Mon","value":8508},{"hour":"2pm","weekday":"Mon","value":8515},{"hour":"3pm","weekday":"Mon","value":8399},{"hour":"4pm","weekday":"Mon","value":8649},{"hour":"5pm","weekday":"Mon","value":7869},{"hour":"6pm","weekday":"Mon","value":6933},{"hour":"7pm","weekday":"Mon","value":5969},{"hour":"8pm","weekday":"Mon","value":5552},{"hour":"9pm","weekday":"Mon","value":5434},{"hour":"10pm","weekday":"Mon","value":5070},{"hour":"11pm","weekday":"Mon","value":4851},{"hour":"12pm","weekday":"Tue","value":4468},{"hour":"1am","weekday":"Tue","value":3306},{"hour":"2am","weekday":"Tue","value":3906},{"hour":"3am","weekday":"Tue","value":4413},{"hour":"4am","weekday":"Tue","value":4726},{"hour":"5am","weekday":"Tue","value":4584},{"hour":"6am","weekday":"Tue","value":5717},{"hour":"7am","weekday":"Tue","value":6504},{"hour":"8am","weekday":"Tue","value":8104},{"hour":"9am","weekday":"Tue","value":8813},{"hour":"10am","weekday":"Tue","value":9278},{"hour":"11am","weekday":"Tue","value":10425},{"hour":"12am","weekday":"Tue","value":10137},{"hour":"1pm","weekday":"Tue","value":9290},{"hour":"2pm","weekday":"Tue","value":9255},{"hour":"3pm","weekday":"Tue","value":9614},{"hour":"4pm","weekday":"Tue","value":9713},{"hour":"5pm","weekday":"Tue","value":9667},{"hour":"6pm","weekday":"Tue","value":8774},{"hour":"7pm","weekday":"Tue","value":8649},{"hour":"8pm","weekday":"Tue","value":9937},{"hour":"9pm","weekday":"Tue","value":10286},{"hour":"10pm","weekday":"Tue","value":9175},{"hour":"11pm","weekday":"Tue","value":8581},{"hour":"12pm","weekday":"Wed","value":8145},{"hour":"1am","weekday":"Wed","value":7177},{"hour":"2am","weekday":"Wed","value":5657},{"hour":"3am","weekday":"Wed","value":6802},{"hour":"4am","weekday":"Wed","value":8159},{"hour":"5am","weekday":"Wed","value":8449},{"hour":"6am","weekday":"Wed","value":9453},{"hour":"7am","weekday":"Wed","value":9947},{"hour":"8am","weekday":"Wed","value":11471},{"hour":"9am","weekday":"Wed","value":12492},{"hour":"10am","weekday":"Wed","value":9388},{"hour":"11am","weekday":"Wed","value":9928},{"hour":"12am","weekday":"Wed","value":9644},{"hour":"1pm","weekday":"Wed","value":9034},{"hour":"2pm","weekday":"Wed","value":8964},{"hour":"3pm","weekday":"Wed","value":9069},{"hour":"4pm","weekday":"Wed","value":8898},{"hour":"5pm","weekday":"Wed","value":8322},{"hour":"6pm","weekday":"Wed","value":6909},{"hour":"7pm","weekday":"Wed","value":5810},{"hour":"8pm","weekday":"Wed","value":5151},{"hour":"9pm","weekday":"Wed","value":4911},{"hour":"10pm","weekday":"Wed","value":4487},{"hour":"11pm","weekday":"Wed","value":4118},{"hour":"12pm","weekday":"Thu","value":3689},{"hour":"1am","weekday":"Thu","value":3081},{"hour":"2am","weekday":"Thu","value":6525},{"hour":"3am","weekday":"Thu","value":6228},{"hour":"4am","weekday":"Thu","value":6917},{"hour":"5am","weekday":"Thu","value":6568},{"hour":"6am","weekday":"Thu","value":6405},{"hour":"7am","weekday":"Thu","value":8106},{"hour":"8am","weekday":"Thu","value":8542},{"hour":"9am","weekday":"Thu","value":8501},{"hour":"10am","weekday":"Thu","value":8802},{"hour":"11am","weekday":"Thu","value":9420},{"hour":"12am","weekday":"Thu","value":8966},{"hour":"1pm","weekday":"Thu","value":8135},{"hour":"2pm","weekday":"Thu","value":8224},{"hour":"3pm","weekday":"Thu","value":8387},{"hour":"4pm","weekday":"Thu","value":8218},{"hour":"5pm","weekday":"Thu","value":7641},{"hour":"6pm","weekday":"Thu","value":6469},{"hour":"7pm","weekday":"Thu","value":5441},{"hour":"8pm","weekday":"Thu","value":4952},{"hour":"9pm","weekday":"Thu","value":4643},{"hour":"10pm","weekday":"Thu","value":4393},{"hour":"11pm","weekday":"Thu","value":4017},{"hour":"12pm","weekday":"Fri","value":4022},{"hour":"1am","weekday":"Fri","value":3063},{"hour":"2am","weekday":"Fri","value":3638},{"hour":"3am","weekday":"Fri","value":3968},{"hour":"4am","weekday":"Fri","value":4070},{"hour":"5am","weekday":"Fri","value":4019},{"hour":"6am","weekday":"Fri","value":4548},{"hour":"7am","weekday":"Fri","value":5465},{"hour":"8am","weekday":"Fri","value":6909},{"hour":"9am","weekday":"Fri","value":7706},{"hour":"10am","weekday":"Fri","value":7867},{"hour":"11am","weekday":"Fri","value":8615},{"hour":"12am","weekday":"Fri","value":8218},{"hour":"1pm","weekday":"Fri","value":7604},{"hour":"2pm","weekday":"Fri","value":7429},{"hour":"3pm","weekday":"Fri","value":7488},{"hour":"4pm","weekday":"Fri","value":7493},{"hour":"5pm","weekday":"Fri","value":6998},{"hour":"6pm","weekday":"Fri","value":5941},{"hour":"7pm","weekday":"Fri","value":5068},{"hour":"8pm","weekday":"Fri","value":4636},{"hour":"9pm","weekday":"Fri","value":4241},{"hour":"10pm","weekday":"Fri","value":3858},{"hour":"11pm","weekday":"Fri","value":3833},{"hour":"12pm","weekday":"Sat","value":3503},{"hour":"1am","weekday":"Sat","value":2842},{"hour":"2am","weekday":"Sat","value":2808},{"hour":"3am","weekday":"Sat","value":2399},{"hour":"4am","weekday":"Sat","value":2280},{"hour":"5am","weekday":"Sat","value":2139},{"hour":"6am","weekday":"Sat","value":2527},{"hour":"7am","weekday":"Sat","value":2940},{"hour":"8am","weekday":"Sat","value":3066},{"hour":"9am","weekday":"Sat","value":3494},{"hour":"10am","weekday":"Sat","value":3287},{"hour":"11am","weekday":"Sat","value":3416},{"hour":"12am","weekday":"Sat","value":3432},{"hour":"1pm","weekday":"Sat","value":3523},{"hour":"2pm","weekday":"Sat","value":3542},{"hour":"3pm","weekday":"Sat","value":3347},{"hour":"4pm","weekday":"Sat","value":3292},{"hour":"5pm","weekday":"Sat","value":3416},{"hour":"6pm","weekday":"Sat","value":3131},{"hour":"7pm","weekday":"Sat","value":3057},{"hour":"8pm","weekday":"Sat","value":3227},{"hour":"9pm","weekday":"Sat","value":3060},{"hour":"10pm","weekday":"Sat","value":2855},{"hour":"11pm","weekday":"Sat","value":2625}]',
            maleDemoData: [{"age":"18-24","research":"40"},{"age":"25-36","research":"70"},{"age":"37-50","research":"25"},{"age":"50+","research":"15"}],
            femaleDemoData: [{"age":"18-24","research":"75"},{"age":"25-36","research":"60"},{"age":"37-50","research":"25"},{"age":"50+","research":"15"}],
            industry:[{"age":"Other","research":"40"},{"age":"Bug Reports","research":"70"},{"age":"Support Requests","research":"25"},{"age":"Sales Inquiries","research":"15"}],
            designationpiedata: '[{"name":"Manager","value":28},{"name":"Team Lead","value":30},{"name":"Sr.Executive","value":29},{"name":"Executive","value":14}]',
            companydata: '[{"title":"51-200 Employees","color":"#11A1FD","x":1500,"y":50,"value":45000},{"title":"501-1000 Employees","color":"#FF9931","x":6969,"y":75,"value":41050},{"title":"2-10 Employees","color":"#5A75F9","x":6419,"y":50,"value":35000},{"title":"1001-5000 Employees","color":"#07C180","x":7838,"y":79,"value":40500},{"title":"50 Employees","color":"#D51F30","x":5059,"y":45,"value":33000},{"title":"5001-10,000 Employees","color":"#4CC3FD","x":24472,"y":76,"value":44000},{"title":"201-500 Employees","color":"#E96E7A","x":3792,"y":80,"value":61000},{"title":"11-50 Employees","color":"#8298FB","x":13515,"y":69,"value":36000},{"title":"10,000+ Employees","color":"#3CD795","x":32585,"y":70,"value":55000},{"title":"100-500 Employees","color":"#FFB866","x":1464,"y":59,"value":38000}]',
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
                                CardTitle="Followers"
                                RowOneCurrentValue="180000"
                                RowOnePreviousValue="300000"
                                RowOneTitle="Previous"
                                IsNumber={true}
                            />,
                            <DetailsCard
                                index="1"
                                CardClass="icz-cardwrapper"
                                CardIcon={<IconLike className="icz-icon" />}
                                CardTitle="Followers Growth"
                                RowOneCurrentValue="100000"
                                RowOnePreviousValue="80000"
                                RowOneTitle="Previous"
                                IsNumber={true}
                            />,
                            <DetailsCard
                                index="1"
                                CardClass="icz-cardwrapper"
                                CardIcon={<IconImpressions className="icz-icon" />}
                                CardTitle="Organic Follower"
                                RowOneCurrentValue="180000"
                                RowOnePreviousValue="300000"
                                RowOneTitle="Previous"
                                IsNumber={true}
                            />,
                            <DetailsCard
                                index="1"
                                CardClass="icz-cardwrapper"
                                CardIcon={<IconReach className="icz-icon" />}
                                CardTitle="Paid Follower"
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
                            <Col sm={12} className="icz-cardheader">
                                <Col className="icz-cardtitle">
                                    Audience Demographics
                                </Col>
                                <Col className="icz-cardfilter">
                                    {/* <SectionDropdown dropdownId={"social_growth_chart"} dropdownOptions={this.state.growthchartdropdown}/> */}
                                    <SectionDropdown />
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
                                        <IconMale className="icz-audienceicon" percentage={"60%"} />
                                        <div className="icz-cardheader d-flex flex-column align-items-center">
                                            <div className="icz-sectiontitle">
                                                60%
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
                                        <IconFemale className="icz-audienceicon" percentage={"60%"} />
                                        <div className="icz-cardheader d-flex flex-column align-items-center">
                                            <div className="icz-sectiontitle">
                                                60%
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
                        <div className="icz-sectioncard d-flex flex-row flex-wrap">
                            <Col sm={12} className="icz-cardheader d-flex flex-column align-items-start">
                                <div className="icz-sectiontitle">
                                    Audience Distribution
                                </div>
                            </Col>
                            <Col sm={12} lg={6} className="d-flex flex-column align-items-start">
                                <div className="icz-cardheader">
                                    <Col className="icz-cardtitle">
                                        By Country
                                    </Col>
                                </div>
                                <div className="w-100 p-20">
                                    <CountryChart chart_id="country_audience_distribution" chart_class="icz-sectionchart" />
                                </div>
                            </Col>
                            <Col sm={12} lg={6} className="d-flex flex-column align-items-start">
                                <div className="icz-cardheader">
                                    <Col className="icz-cardtitle">
                                        By City
                                    </Col>
                                </div>
                                <div className="w-100 p-20">
                                    <CountryChart chart_id="city_audience_distribution" chart_class="icz-sectionchart" />
                                </div>
                            </Col>
                        </div>
                    </div>
                </div>

                <div className="icz-row">
                    <div className="icz-sectioncardwrapper w-100">
                        <div className="icz-sectioncard d-flex flex-row flex-wrap">
                            <Col sm={12} className="icz-cardheader d-flex flex-column align-items-start">
                                <div className="icz-sectiontitle">
                                Industry and Designation
                                </div>
                            </Col>
                            <Col sm={12} lg={6} className="d-flex flex-column align-items-start">
                            <HorizontalBarChart chart_id="industry" chart_class="icz-sectionchart" graph-data={this.state.industry} bar_color={"#11A1FD"}/>
                            </Col>
                            <Col sm={12} lg={6} className="d-flex flex-column align-items-start">
                                
                                <div className="w-100 p-20">
                                <DonutChart card_id="designation" card_class="icz-sectionchart" center_title="Total" graph-data={this.state.designationpiedata} />
                                </div>
                            </Col>
                        </div>
                    </div>
                </div>

                <div className="icz-row">
                    <div className="icz-sectioncardwrapper w-100">
                        <div className="icz-sectioncard">
                            <div className="icz-cardheader">
                                <Col className="icz-cardtitle">
                                Company size wise distribution
                                </Col>
                            </div>
                            <div className="">
                                <ZoomableBubbleChart card_id="company_details" card_class="icz-sectionchart" graph-data={this.state.companydata}/>
                            </div>
                        </div>
                    </div>
                </div>

            </Wrapper>
        )
    }
}
