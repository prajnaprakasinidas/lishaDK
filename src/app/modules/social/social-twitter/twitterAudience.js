import React, { Component } from 'react'
import Col from "react-bootstrap/esm/Col";
import IconFemale from "../../../../assets/images/icons/femaleIcon";
import IconMale from "../../../../assets/images/icons/maleIcon";
import DefaultProfileImage from '../../../../assets/images/avatars/avatar1.png'
import DefaultBannerImage from '../../../../assets/images/banner-1.png'
import BannerLogoImage from '../../../../assets/images/bannerlogo-1.png'
import IconTwitterBlue from '../../../../assets/images/icons/twitterfillIcon';
import Wrapper from "../../../helpers/wrapper";
import CountryChart from "../../../shared/components/charts/CountryChart";
import HorizontalBarChart from "../../../shared/components/charts/HorizontalBarChart";

import { Carousel } from "../../../shared/components/carousel/carousel";
import { SectionDropdown } from "../../../shared/components/dropdown/dropdown";
import { TopPostCard } from '../../../shared/components/cards/toppostscard/toppostcard';
import { TopFollowersCard } from '../../../shared/components/cards/topfollowerscard/topfollowerscard';
import TagCloudChart from '../../../shared/components/charts/TagCloudChart';
// import { EngagementTable } from '../../../shared/components/datatable/twittertable/engagementtable';
// import { FollowersTable } from '../../../shared/components/datatable/twittertable/followerstable';
import '../social.scss';

export class TwitterAudience extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activity: [{ "hour": "12pm", "weekday": "Sun", "value": 2990 }, { "hour": "1am", "weekday": "Sun", "value": 2520 }, { "hour": "2am", "weekday": "Sun", "value": 2334 }, { "hour": "3am", "weekday": "Sun", "value": 2230 }, { "hour": "4am", "weekday": "Sun", "value": 2325 }, { "hour": "5am", "weekday": "Sun", "value": 2019 }, { "hour": "6am", "weekday": "Sun", "value": 2128 }, { "hour": "7am", "weekday": "Sun", "value": 2246 }, { "hour": "8am", "weekday": "Sun", "value": 2421 }, { "hour": "9am", "weekday": "Sun", "value": 2788 }, { "hour": "10am", "weekday": "Sun", "value": 2959 }, { "hour": "11am", "weekday": "Sun", "value": 3018 }, { "hour": "12am", "weekday": "Sun", "value": 3154 }, { "hour": "1pm", "weekday": "Sun", "value": 3172 }, { "hour": "2pm", "weekday": "Sun", "value": 3368 }, { "hour": "3pm", "weekday": "Sun", "value": 3464 }, { "hour": "4pm", "weekday": "Sun", "value": 3746 }, { "hour": "5pm", "weekday": "Sun", "value": 3656 }, { "hour": "6pm", "weekday": "Sun", "value": 3336 }, { "hour": "7pm", "weekday": "Sun", "value": 3292 }, { "hour": "8pm", "weekday": "Sun", "value": 3269 }, { "hour": "9pm", "weekday": "Sun", "value": 3300 }, { "hour": "10pm", "weekday": "Sun", "value": 3403 }, { "hour": "11pm", "weekday": "Sun", "value": 3323 }, { "hour": "12pm", "weekday": "Mon", "value": 3346 }, { "hour": "1am", "weekday": "Mon", "value": 2725 }, { "hour": "2am", "weekday": "Mon", "value": 3052 }, { "hour": "3am", "weekday": "Mon", "value": 3876 }, { "hour": "4am", "weekday": "Mon", "value": 4453 }, { "hour": "5am", "weekday": "Mon", "value": 3972 }, { "hour": "6am", "weekday": "Mon", "value": 4644 }, { "hour": "7am", "weekday": "Mon", "value": 5715 }, { "hour": "8am", "weekday": "Mon", "value": 7080 }, { "hour": "9am", "weekday": "Mon", "value": 8022 }, { "hour": "10am", "weekday": "Mon", "value": 8446 }, { "hour": "11am", "weekday": "Mon", "value": 9313 }, { "hour": "12am", "weekday": "Mon", "value": 9011 }, { "hour": "1pm", "weekday": "Mon", "value": 8508 }, { "hour": "2pm", "weekday": "Mon", "value": 8515 }, { "hour": "3pm", "weekday": "Mon", "value": 8399 }, { "hour": "4pm", "weekday": "Mon", "value": 8649 }, { "hour": "5pm", "weekday": "Mon", "value": 7869 }, { "hour": "6pm", "weekday": "Mon", "value": 6933 }, { "hour": "7pm", "weekday": "Mon", "value": 5969 }, { "hour": "8pm", "weekday": "Mon", "value": 5552 }, { "hour": "9pm", "weekday": "Mon", "value": 5434 }, { "hour": "10pm", "weekday": "Mon", "value": 5070 }, { "hour": "11pm", "weekday": "Mon", "value": 4851 }, { "hour": "12pm", "weekday": "Tue", "value": 4468 }, { "hour": "1am", "weekday": "Tue", "value": 3306 }, { "hour": "2am", "weekday": "Tue", "value": 3906 }, { "hour": "3am", "weekday": "Tue", "value": 4413 }, { "hour": "4am", "weekday": "Tue", "value": 4726 }, { "hour": "5am", "weekday": "Tue", "value": 4584 }, { "hour": "6am", "weekday": "Tue", "value": 5717 }, { "hour": "7am", "weekday": "Tue", "value": 6504 }, { "hour": "8am", "weekday": "Tue", "value": 8104 }, { "hour": "9am", "weekday": "Tue", "value": 8813 }, { "hour": "10am", "weekday": "Tue", "value": 9278 }, { "hour": "11am", "weekday": "Tue", "value": 10425 }, { "hour": "12am", "weekday": "Tue", "value": 10137 }, { "hour": "1pm", "weekday": "Tue", "value": 9290 }, { "hour": "2pm", "weekday": "Tue", "value": 9255 }, { "hour": "3pm", "weekday": "Tue", "value": 9614 }, { "hour": "4pm", "weekday": "Tue", "value": 9713 }, { "hour": "5pm", "weekday": "Tue", "value": 9667 }, { "hour": "6pm", "weekday": "Tue", "value": 8774 }, { "hour": "7pm", "weekday": "Tue", "value": 8649 }, { "hour": "8pm", "weekday": "Tue", "value": 9937 }, { "hour": "9pm", "weekday": "Tue", "value": 10286 }, { "hour": "10pm", "weekday": "Tue", "value": 9175 }, { "hour": "11pm", "weekday": "Tue", "value": 8581 }, { "hour": "12pm", "weekday": "Wed", "value": 8145 }, { "hour": "1am", "weekday": "Wed", "value": 7177 }, { "hour": "2am", "weekday": "Wed", "value": 5657 }, { "hour": "3am", "weekday": "Wed", "value": 6802 }, { "hour": "4am", "weekday": "Wed", "value": 8159 }, { "hour": "5am", "weekday": "Wed", "value": 8449 }, { "hour": "6am", "weekday": "Wed", "value": 9453 }, { "hour": "7am", "weekday": "Wed", "value": 9947 }, { "hour": "8am", "weekday": "Wed", "value": 11471 }, { "hour": "9am", "weekday": "Wed", "value": 12492 }, { "hour": "10am", "weekday": "Wed", "value": 9388 }, { "hour": "11am", "weekday": "Wed", "value": 9928 }, { "hour": "12am", "weekday": "Wed", "value": 9644 }, { "hour": "1pm", "weekday": "Wed", "value": 9034 }, { "hour": "2pm", "weekday": "Wed", "value": 8964 }, { "hour": "3pm", "weekday": "Wed", "value": 9069 }, { "hour": "4pm", "weekday": "Wed", "value": 8898 }, { "hour": "5pm", "weekday": "Wed", "value": 8322 }, { "hour": "6pm", "weekday": "Wed", "value": 6909 }, { "hour": "7pm", "weekday": "Wed", "value": 5810 }, { "hour": "8pm", "weekday": "Wed", "value": 5151 }, { "hour": "9pm", "weekday": "Wed", "value": 4911 }, { "hour": "10pm", "weekday": "Wed", "value": 4487 }, { "hour": "11pm", "weekday": "Wed", "value": 4118 }, { "hour": "12pm", "weekday": "Thu", "value": 3689 }, { "hour": "1am", "weekday": "Thu", "value": 3081 }, { "hour": "2am", "weekday": "Thu", "value": 6525 }, { "hour": "3am", "weekday": "Thu", "value": 6228 }, { "hour": "4am", "weekday": "Thu", "value": 6917 }, { "hour": "5am", "weekday": "Thu", "value": 6568 }, { "hour": "6am", "weekday": "Thu", "value": 6405 }, { "hour": "7am", "weekday": "Thu", "value": 8106 }, { "hour": "8am", "weekday": "Thu", "value": 8542 }, { "hour": "9am", "weekday": "Thu", "value": 8501 }, { "hour": "10am", "weekday": "Thu", "value": 8802 }, { "hour": "11am", "weekday": "Thu", "value": 9420 }, { "hour": "12am", "weekday": "Thu", "value": 8966 }, { "hour": "1pm", "weekday": "Thu", "value": 8135 }, { "hour": "2pm", "weekday": "Thu", "value": 8224 }, { "hour": "3pm", "weekday": "Thu", "value": 8387 }, { "hour": "4pm", "weekday": "Thu", "value": 8218 }, { "hour": "5pm", "weekday": "Thu", "value": 7641 }, { "hour": "6pm", "weekday": "Thu", "value": 6469 }, { "hour": "7pm", "weekday": "Thu", "value": 5441 }, { "hour": "8pm", "weekday": "Thu", "value": 4952 }, { "hour": "9pm", "weekday": "Thu", "value": 4643 }, { "hour": "10pm", "weekday": "Thu", "value": 4393 }, { "hour": "11pm", "weekday": "Thu", "value": 4017 }, { "hour": "12pm", "weekday": "Fri", "value": 4022 }, { "hour": "1am", "weekday": "Fri", "value": 3063 }, { "hour": "2am", "weekday": "Fri", "value": 3638 }, { "hour": "3am", "weekday": "Fri", "value": 3968 }, { "hour": "4am", "weekday": "Fri", "value": 4070 }, { "hour": "5am", "weekday": "Fri", "value": 4019 }, { "hour": "6am", "weekday": "Fri", "value": 4548 }, { "hour": "7am", "weekday": "Fri", "value": 5465 }, { "hour": "8am", "weekday": "Fri", "value": 6909 }, { "hour": "9am", "weekday": "Fri", "value": 7706 }, { "hour": "10am", "weekday": "Fri", "value": 7867 }, { "hour": "11am", "weekday": "Fri", "value": 8615 }, { "hour": "12am", "weekday": "Fri", "value": 8218 }, { "hour": "1pm", "weekday": "Fri", "value": 7604 }, { "hour": "2pm", "weekday": "Fri", "value": 7429 }, { "hour": "3pm", "weekday": "Fri", "value": 7488 }, { "hour": "4pm", "weekday": "Fri", "value": 7493 }, { "hour": "5pm", "weekday": "Fri", "value": 6998 }, { "hour": "6pm", "weekday": "Fri", "value": 5941 }, { "hour": "7pm", "weekday": "Fri", "value": 5068 }, { "hour": "8pm", "weekday": "Fri", "value": 4636 }, { "hour": "9pm", "weekday": "Fri", "value": 4241 }, { "hour": "10pm", "weekday": "Fri", "value": 3858 }, { "hour": "11pm", "weekday": "Fri", "value": 3833 }, { "hour": "12pm", "weekday": "Sat", "value": 3503 }, { "hour": "1am", "weekday": "Sat", "value": 2842 }, { "hour": "2am", "weekday": "Sat", "value": 2808 }, { "hour": "3am", "weekday": "Sat", "value": 2399 }, { "hour": "4am", "weekday": "Sat", "value": 2280 }, { "hour": "5am", "weekday": "Sat", "value": 2139 }, { "hour": "6am", "weekday": "Sat", "value": 2527 }, { "hour": "7am", "weekday": "Sat", "value": 2940 }, { "hour": "8am", "weekday": "Sat", "value": 3066 }, { "hour": "9am", "weekday": "Sat", "value": 3494 }, { "hour": "10am", "weekday": "Sat", "value": 3287 }, { "hour": "11am", "weekday": "Sat", "value": 3416 }, { "hour": "12am", "weekday": "Sat", "value": 3432 }, { "hour": "1pm", "weekday": "Sat", "value": 3523 }, { "hour": "2pm", "weekday": "Sat", "value": 3542 }, { "hour": "3pm", "weekday": "Sat", "value": 3347 }, { "hour": "4pm", "weekday": "Sat", "value": 3292 }, { "hour": "5pm", "weekday": "Sat", "value": 3416 }, { "hour": "6pm", "weekday": "Sat", "value": 3131 }, { "hour": "7pm", "weekday": "Sat", "value": 3057 }, { "hour": "8pm", "weekday": "Sat", "value": 3227 }, { "hour": "9pm", "weekday": "Sat", "value": 3060 }, { "hour": "10pm", "weekday": "Sat", "value": 2855 }, { "hour": "11pm", "weekday": "Sat", "value": 2625 }],
            maleDemoData: [{ "age": "18-24", "research": "40" }, { "age": "25-36", "research": "70" }, { "age": "37-50", "research": "25" }, { "age": "50+", "research": "15" }],
            femaleDemoData: [{ "age": "18-24", "research": "75" }, { "age": "25-36", "research": "60" }, { "age": "37-50", "research": "25" }, { "age": "50+", "research": "15" }],
            mentionstag: '[{"tag":"javascript","count":"1765836"},{"tag":"java","count":"1517355"},{"tag":"c#","count":"1287629"},{"tag":"php","count":"1263946"},{"tag":"android","count":"1174721"},{"tag":"python","count":"1116769"},{"tag":"jquery","count":"944983"},{"tag":"html","count":"805679"},{"tag":"c++","count":"606051"},{"tag":"ios","count":"591410"},{"tag":"css","count":"574684"},{"tag":"mysql","count":"550916"},{"tag":"sql","count":"479892"},{"tag":"asp.net","count":"343092"},{"tag":"ruby-on-rails","count":"303311"},{"tag":"c","count":"296963"},{"tag":"arrays","count":"288445"},{"tag":"objective-c","count":"286823"},{"tag":".net","count":"280079"},{"tag":"r","count":"277144"},{"tag":"node.js","count":"263451"},{"tag":"angularjs","count":"257159"},{"tag":"json","count":"255661"},{"tag":"sql-server","count":"253824"},{"tag":"swift","count":"222387"},{"tag":"iphone","count":"219827"},{"tag":"regex","count":"203121"},{"tag":"ruby","count":"202547"},{"tag":"ajax","count":"196727"},{"tag":"django","count":"191174"},{"tag":"excel","count":"188787"},{"tag":"xml","count":"180742"},{"tag":"asp.net-mvc","count":"178291"},{"tag":"linux","count":"173278"},{"tag":"angular","count":"154447"},{"tag":"database","count":"153581"},{"tag":"wpf","count":"147538"},{"tag":"spring","count":"147456"},{"tag":"wordpress","count":"145801"},{"tag":"python-3.x","count":"145685"},{"tag":"vba","count":"139940"},{"tag":"string","count":"136649"},{"tag":"xcode","count":"130591"},{"tag":"windows","count":"127680"},{"tag":"reactjs","count":"125021"},{"tag":"vb.net","count":"122559"},{"tag":"html5","count":"118810"},{"tag":"eclipse","count":"115802"},{"tag":"multithreading","count":"113719"},{"tag":"mongodb","count":"110348"},{"tag":"laravel","count":"109340"},{"tag":"bash","count":"108797"},{"tag":"git","count":"108075"},{"tag":"oracle","count":"106936"},{"tag":"pandas","count":"96225"},{"tag":"postgresql","count":"96027"},{"tag":"twitter-bootstrap","count":"94348"},{"tag":"forms","count":"92995"},{"tag":"image","count":"92131"},{"tag":"macos","count":"90327"},{"tag":"algorithm","count":"89670"},{"tag":"python-2.7","count":"88762"},{"tag":"scala","count":"86971"},{"tag":"visual-studio","count":"85825"},{"tag":"list","count":"84392"},{"tag":"excel-vba","count":"83948"},{"tag":"winforms","count":"83600"},{"tag":"apache","count":"83367"},{"tag":"facebook","count":"83212"},{"tag":"matlab","count":"82452"},{"tag":"performance","count":"81443"},{"tag":"css3","count":"78250"},{"tag":"entity-framework","count":"78243"},{"tag":"hibernate","count":"76123"},{"tag":"typescript","count":"74867"},{"tag":"linq","count":"73128"},{"tag":"swing","count":"72333"},{"tag":"function","count":"72043"},{"tag":"amazon-web-services","count":"71155"},{"tag":"qt","count":"69552"},{"tag":"rest","count":"69138"},{"tag":"shell","count":"68854"},{"tag":"azure","count":"67431"},{"tag":"firebase","count":"66411"},{"tag":"api","count":"66158"},{"tag":"maven","count":"66113"},{"tag":"powershell","count":"65467"},{"tag":".htaccess","count":"65014"},{"tag":"sqlite","count":"64888"},{"tag":"file","count":"62783"},{"tag":"codeigniter","count":"62393"},{"tag":"unit-testing","count":"61909"},{"tag":"perl","count":"61752"},{"tag":"loops","count":"61015"},{"tag":"symfony","count":"60820"},{"tag":"selenium","count":"59855"},{"tag":"google-maps","count":"59616"},{"tag":"csv","count":"59600"},{"tag":"uitableview","count":"59011"},{"tag":"web-services","count":"58916"},{"tag":"cordova","count":"58195"},{"tag":"class","count":"58055"},{"tag":"numpy","count":"57132"},{"tag":"google-chrome","count":"56836"},{"tag":"ruby-on-rails-3","count":"55962"},{"tag":"android-studio","count":"55801"},{"tag":"tsql","count":"55736"},{"tag":"validation","count":"55531"}]'
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
                    <Col className="icz-sectioncardwrapper" sm={12}>
                        <div className="icz-sectioncard">
                            <div className="icz-cardheader">
                                <Col className="icz-cardtitle">
                                    Audience Bio Information
                                </Col>
                            </div>
                            <div className="">
                                <TagCloudChart card_id="mentions_tag" card_class="icz-sectionchart" graph-data={this.state.mentionstag} />
                            </div>
                        </div>
                    </Col>
                </div>

                <div className="icz-row">
                    <div className="icz-sectioncardwrapper w-100">
                        <div className="icz-sectioncard w-100">
                            <div className="icz-chartsection">
                                <div className="icz-cardheader">
                                    <Col className="icz-cardtitle">
                                        Top 5 Mentions
                                    </Col>
                                </div>
                                <div className="">
                                    <Carousel
                                        Settings={CarouselSettings}
                                        class={"icz-cardcontainer"}
                                        SliderCards={[
                                            <TopPostCard
                                                index="1"
                                                CardClass="icz-pcardwrapper"
                                                CardImg={DefaultProfileImage}
                                                CardTitle="Patryk Ilnicki"
                                                CardSubTitle="@Patryk_Ilnicki"
                                                CardIcon={<IconTwitterBlue className="icz-icon" />}
                                                CardDiscription="Free embeded Tweets for Sketch!"
                                                CardDateandTime="5:54 pm - Oct 10, 2021"
                                                CardLikes="20"
                                                CardUserdetails="see Patryk Ilnickis other tweets"
                                                InfoIcon="i"

                                            />,
                                            <TopPostCard
                                                index="1"
                                                CardClass="icz-pcardwrapper"
                                                CardImg={DefaultProfileImage}
                                                CardTitle="Patryk Ilnicki"
                                                CardSubTitle="@Patryk_Ilnicki"
                                                CardIcon={<IconTwitterBlue className="icz-icon" />}
                                                CardDiscription="Free embeded Tweets for Sketch!"
                                                CardDateandTime="5:54 pm - Oct 10, 2021"
                                                CardLikes="20"
                                                CardUserdetails="see Patryk Ilnickis other tweets"
                                                InfoIcon="i"

                                            />,
                                            <TopPostCard
                                                index="1"
                                                CardClass="icz-pcardwrapper"
                                                CardImg={DefaultProfileImage}
                                                CardTitle="Patryk Ilnicki"
                                                CardSubTitle="@Patryk_Ilnicki"
                                                CardIcon={<IconTwitterBlue className="icz-icon" />}
                                                CardDiscription="Free embeded Tweets for Sketch!"
                                                CardDateandTime="5:54 pm - Oct 10, 2021"
                                                CardLikes="20"
                                                CardUserdetails="see Patryk Ilnickis other tweets"
                                                InfoIcon="i"

                                            />,
                                            <TopPostCard
                                                index="1"
                                                CardClass="icz-pcardwrapper"
                                                CardImg={DefaultProfileImage}
                                                CardTitle="Patryk Ilnicki"
                                                CardSubTitle="@Patryk_Ilnicki"
                                                CardIcon={<IconTwitterBlue className="icz-icon" />}
                                                CardDiscription="Free embeded Tweets for Sketch!"
                                                CardDateandTime="5:54 pm - Oct 10, 2021"
                                                CardLikes="20"
                                                CardUserdetails="see Patryk Ilnickis other tweets"
                                                InfoIcon="i"

                                            />,
                                            <TopPostCard
                                                index="1"
                                                CardClass="icz-pcardwrapper"
                                                CardImg={DefaultProfileImage}
                                                CardTitle="Patryk Ilnicki"
                                                CardSubTitle="@Patryk_Ilnicki"
                                                CardIcon={<IconTwitterBlue className="icz-icon" />}
                                                CardDiscription="Free embeded Tweets for Sketch!"
                                                CardDateandTime="5:54 pm - Oct 10, 2021"
                                                CardLikes="20"
                                                CardUserdetails="see Patryk Ilnickis other tweets"
                                                InfoIcon="i"

                                            />
                                        ]}>

                                    </Carousel>
                                </div>

                                <div className="">
                                    {/* <EngagementTable /> */}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="icz-row">
                    <div className="icz-sectioncardwrapper w-100">
                        <div className="icz-sectioncard w-100">
                            <div className="icz-chartsection">
                                <div className="icz-cardheader">
                                    <Col className="icz-cardtitle">
                                        Top 5 Followers
                                    </Col>
                                </div>
                                <div className="">
                                    <Carousel
                                        Settings={CarouselSettings}
                                        class={"icz-cardcontainer"}
                                        SliderCards={[
                                            <TopFollowersCard
                                                index="1"
                                                CardClass="icz-fcardwrapper"
                                                CardImg={DefaultBannerImage}
                                                CardLogoImg={BannerLogoImage}
                                                CardTitle1="Alcohowl"
                                                CardSubTitle1="@thealcohowl"
                                                CardTitle2="95"
                                                CardSubTitle2="Tweets"
                                                CardTitle3="255"
                                                CardSubTitle3="Following"
                                                CardTitle4="82"
                                                CardSubTitle4="Followers"
                                            />,
                                            <TopFollowersCard
                                                index="1"
                                                CardClass="icz-fcardwrapper"
                                                CardImg={DefaultBannerImage}
                                                CardLogoImg={BannerLogoImage}
                                                CardTitle1="Alcohowl"
                                                CardSubTitle1="@thealcohowl"
                                                CardTitle2="95"
                                                CardSubTitle2="Tweets"
                                                CardTitle3="255"
                                                CardSubTitle3="Following"
                                                CardTitle4="82"
                                                CardSubTitle4="Followers"
                                            />,
                                            <TopFollowersCard
                                                index="1"
                                                CardClass="icz-fcardwrapper"
                                                CardImg={DefaultBannerImage}
                                                CardLogoImg={BannerLogoImage}
                                                CardTitle1="Alcohowl"
                                                CardSubTitle1="@thealcohowl"
                                                CardTitle2="95"
                                                CardSubTitle2="Tweets"
                                                CardTitle3="255"
                                                CardSubTitle3="Following"
                                                CardTitle4="82"
                                                CardSubTitle4="Followers"
                                            />,
                                            <TopFollowersCard
                                                index="1"
                                                CardClass="icz-fcardwrapper"
                                                CardImg={DefaultBannerImage}
                                                CardLogoImg={BannerLogoImage}
                                                CardTitle1="Alcohowl"
                                                CardSubTitle1="@thealcohowl"
                                                CardTitle2="95"
                                                CardSubTitle2="Tweets"
                                                CardTitle3="255"
                                                CardSubTitle3="Following"
                                                CardTitle4="82"
                                                CardSubTitle4="Followers"
                                            />,
                                            <TopFollowersCard
                                                index="1"
                                                CardClass="icz-fcardwrapper"
                                                CardImg={DefaultBannerImage}
                                                CardLogoImg={BannerLogoImage}
                                                CardTitle1="Alcohowl"
                                                CardSubTitle1="@thealcohowl"
                                                CardTitle2="95"
                                                CardSubTitle2="Tweets"
                                                CardTitle3="255"
                                                CardSubTitle3="Following"
                                                CardTitle4="82"
                                                CardSubTitle4="Followers"
                                            />
                                        ]}>

                                    </Carousel>
                                </div>

                                <div className="">
                                   {/* <FollowersTable/> */}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


            </Wrapper>
        )
    }
}
