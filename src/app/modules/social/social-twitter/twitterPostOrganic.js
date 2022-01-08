import React, { Component } from 'react'
import Col from 'react-bootstrap/esm/Col';
import Wrapper from '../../../helpers/wrapper';
import SearchFilter from '../../../shared/components/searchfilter/searchfilter';
import { DetailsCard } from '../../../shared/components/cards/detailscard/detailscard';
import { Carousel } from '../../../shared/components/carousel/carousel';
import { TwitterEngagementDropdown } from '../../../shared/components/dropdown/twitterengagementdropdown';
import '../social.scss';

import IconCRM from '../../../../assets/images/icons/crmIcon';
import IconClicks from '../../../../assets/images/icons/clicksIcon';
import IconComments from '../../../../assets/images/icons/commentsIcon';
import IconLike from "../../../../assets/images/icons/likeIcon";
import IconImpressions from '../../../../assets/images/icons/impressionsIcon';
import IconSmiley from '../../../../assets/images/icons/smileyIcon';

import PercentMetricChange from '../../../shared/components/percentmetricchange/percentmetricchange';
import { NumberFormatter } from '../../../shared/utilities/numberformatter';

import CompareLineChart from "../../../shared/components/charts/CompareLineChart";
import CombinedColumnLineChart from '../../../shared/components/charts/CombinedColumnLineChart';
import MultiLine_LineChart from '../../../shared/components/charts/MultiLine_LineChart';


export class TwitterPostOrganic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            impressions: [{"date":"2019-5-12","value1":"50","value2":"48","previousdate":"2019-5-5"},{"date":"2019-5-13","value1":"53","value2":"51","previousdate":"2019-5-6"},{"date":"2019-5-14","value1":"56","value2":"58","previousdate":"2019-5-7"},{"date":"2019-5-15","value1":"52","value2":"53","previousdate":"2019-5-8"},{"date":"2019-5-16","value1":"48","value2":"44","previousdate":"2019-5-9"},{"date":"2019-5-17","value1":"47","value2":"42","previousdate":"2019-5-10"},{"date":"2019-5-18","value1":"59","value2":"55","previousdate":"2019-5-11"}],
            userprofile: [{"date":"2019-5-12","value1":"50","value2":"48","previousdate":"2019-5-5"},{"date":"2019-5-13","value1":"53","value2":"51","previousdate":"2019-5-6"},{"date":"2019-5-14","value1":"56","value2":"58","previousdate":"2019-5-7"},{"date":"2019-5-15","value1":"52","value2":"53","previousdate":"2019-5-8"},{"date":"2019-5-16","value1":"48","value2":"44","previousdate":"2019-5-9"},{"date":"2019-5-17","value1":"47","value2":"42","previousdate":"2019-5-10"},{"date":"2019-5-18","value1":"59","value2":"55","previousdate":"2019-5-11"}],
            engagement: [{"year":"2016","google":1,"facebook":5,"instagram":3,"twitter":2,"linkedin":4},{"year":"2017","google":3,"facebook":6,"instagram":4,"twitter":7,"linkedin":5},{"year":"2018","google":5,"facebook":4,"instagram":5,"twitter":6,"linkedin":7},{"year":"2019","google":7,"facebook":6,"instagram":6,"twitter":4,"linkedin":5},{"year":"2020","google":8,"facebook":7,"instagram":5,"twitter":6,"linkedin":7},{"year":"2021","google":7,"facebook":6,"instagram":3,"twitter":5,"linkedin":5}],
            videos: '[{"date":"2013-01-16","views1":71,"views2":75,"videos1":5,"videos2":8},{"date":"2013-01-17","views1":74,"views2":78,"videos1":4,"videos2":6},{"date":"2013-01-18","views1":78,"views2":88,"videos1":5,"videos2":2},{"date":"2013-01-19","views1":85,"views2":89,"videos1":8,"videos2":9},{"date":"2013-01-20","views1":82,"views2":89,"videos1":9,"videos2":6},{"date":"2013-01-21","views1":83,"views2":85,"videos1":3,"videos2":5},{"date":"2013-01-22","views1":88,"views2":92,"videos1":5,"videos2":7},{"date":"2013-01-23","views1":85,"views2":90,"videos1":7,"videos2":6},{"date":"2013-01-24","views1":85,"views2":91,"videos1":9,"videos2":5},{"date":"2013-01-25","views1":80,"views2":84,"videos1":5,"videos2":8},{"date":"2013-01-26","views1":87,"views2":92,"videos1":4,"videos2":8},{"date":"2013-01-27","views1":84,"views2":87,"videos1":3,"videos2":4},{"date":"2013-01-28","views1":83,"views2":88,"videos1":5,"videos2":7},{"date":"2013-01-29","views1":84,"views2":87,"videos1":5,"videos2":8},{"date":"2013-01-30","views1":81,"views2":85,"videos1":4,"videos2":7}]',
            poll: '[{"date":"2013-01-16","views1":71,"views2":75,"videos1":5,"videos2":8},{"date":"2013-01-17","views1":74,"views2":78,"videos1":4,"videos2":6},{"date":"2013-01-18","views1":78,"views2":88,"videos1":5,"videos2":2},{"date":"2013-01-19","views1":85,"views2":89,"videos1":8,"videos2":9},{"date":"2013-01-20","views1":82,"views2":89,"videos1":9,"videos2":6},{"date":"2013-01-21","views1":83,"views2":85,"videos1":3,"videos2":5},{"date":"2013-01-22","views1":88,"views2":92,"videos1":5,"videos2":7},{"date":"2013-01-23","views1":85,"views2":90,"videos1":7,"videos2":6},{"date":"2013-01-24","views1":85,"views2":91,"videos1":9,"videos2":5},{"date":"2013-01-25","views1":80,"views2":84,"videos1":5,"videos2":8},{"date":"2013-01-26","views1":87,"views2":92,"videos1":4,"videos2":8},{"date":"2013-01-27","views1":84,"views2":87,"videos1":3,"videos2":4},{"date":"2013-01-28","views1":83,"views2":88,"videos1":5,"videos2":7},{"date":"2013-01-29","views1":84,"views2":87,"videos1":5,"videos2":8},{"date":"2013-01-30","views1":81,"views2":85,"videos1":4,"videos2":7}]',
            bubblechart: '[{"hour":"12pm","weekday":"Sun","value":2990},{"hour":"1am","weekday":"Sun","value":2520},{"hour":"2am","weekday":"Sun","value":2334},{"hour":"3am","weekday":"Sun","value":2230},{"hour":"4am","weekday":"Sun","value":2325},{"hour":"5am","weekday":"Sun","value":2019},{"hour":"6am","weekday":"Sun","value":2128},{"hour":"7am","weekday":"Sun","value":2246},{"hour":"8am","weekday":"Sun","value":2421},{"hour":"9am","weekday":"Sun","value":2788},{"hour":"10am","weekday":"Sun","value":2959},{"hour":"11am","weekday":"Sun","value":3018},{"hour":"12am","weekday":"Sun","value":3154},{"hour":"1pm","weekday":"Sun","value":3172},{"hour":"2pm","weekday":"Sun","value":3368},{"hour":"3pm","weekday":"Sun","value":3464},{"hour":"4pm","weekday":"Sun","value":3746},{"hour":"5pm","weekday":"Sun","value":3656},{"hour":"6pm","weekday":"Sun","value":3336},{"hour":"7pm","weekday":"Sun","value":3292},{"hour":"8pm","weekday":"Sun","value":3269},{"hour":"9pm","weekday":"Sun","value":3300},{"hour":"10pm","weekday":"Sun","value":3403},{"hour":"11pm","weekday":"Sun","value":3323},{"hour":"12pm","weekday":"Mon","value":3346},{"hour":"1am","weekday":"Mon","value":2725},{"hour":"2am","weekday":"Mon","value":3052},{"hour":"3am","weekday":"Mon","value":3876},{"hour":"4am","weekday":"Mon","value":4453},{"hour":"5am","weekday":"Mon","value":3972},{"hour":"6am","weekday":"Mon","value":4644},{"hour":"7am","weekday":"Mon","value":5715},{"hour":"8am","weekday":"Mon","value":7080},{"hour":"9am","weekday":"Mon","value":8022},{"hour":"10am","weekday":"Mon","value":8446},{"hour":"11am","weekday":"Mon","value":9313},{"hour":"12am","weekday":"Mon","value":9011},{"hour":"1pm","weekday":"Mon","value":8508},{"hour":"2pm","weekday":"Mon","value":8515},{"hour":"3pm","weekday":"Mon","value":8399},{"hour":"4pm","weekday":"Mon","value":8649},{"hour":"5pm","weekday":"Mon","value":7869},{"hour":"6pm","weekday":"Mon","value":6933},{"hour":"7pm","weekday":"Mon","value":5969},{"hour":"8pm","weekday":"Mon","value":5552},{"hour":"9pm","weekday":"Mon","value":5434},{"hour":"10pm","weekday":"Mon","value":5070},{"hour":"11pm","weekday":"Mon","value":4851},{"hour":"12pm","weekday":"Tue","value":4468},{"hour":"1am","weekday":"Tue","value":3306},{"hour":"2am","weekday":"Tue","value":3906},{"hour":"3am","weekday":"Tue","value":4413},{"hour":"4am","weekday":"Tue","value":4726},{"hour":"5am","weekday":"Tue","value":4584},{"hour":"6am","weekday":"Tue","value":5717},{"hour":"7am","weekday":"Tue","value":6504},{"hour":"8am","weekday":"Tue","value":8104},{"hour":"9am","weekday":"Tue","value":8813},{"hour":"10am","weekday":"Tue","value":9278},{"hour":"11am","weekday":"Tue","value":10425},{"hour":"12am","weekday":"Tue","value":10137},{"hour":"1pm","weekday":"Tue","value":9290},{"hour":"2pm","weekday":"Tue","value":9255},{"hour":"3pm","weekday":"Tue","value":9614},{"hour":"4pm","weekday":"Tue","value":9713},{"hour":"5pm","weekday":"Tue","value":9667},{"hour":"6pm","weekday":"Tue","value":8774},{"hour":"7pm","weekday":"Tue","value":8649},{"hour":"8pm","weekday":"Tue","value":9937},{"hour":"9pm","weekday":"Tue","value":10286},{"hour":"10pm","weekday":"Tue","value":9175},{"hour":"11pm","weekday":"Tue","value":8581},{"hour":"12pm","weekday":"Wed","value":8145},{"hour":"1am","weekday":"Wed","value":7177},{"hour":"2am","weekday":"Wed","value":5657},{"hour":"3am","weekday":"Wed","value":6802},{"hour":"4am","weekday":"Wed","value":8159},{"hour":"5am","weekday":"Wed","value":8449},{"hour":"6am","weekday":"Wed","value":9453},{"hour":"7am","weekday":"Wed","value":9947},{"hour":"8am","weekday":"Wed","value":11471},{"hour":"9am","weekday":"Wed","value":12492},{"hour":"10am","weekday":"Wed","value":9388},{"hour":"11am","weekday":"Wed","value":9928},{"hour":"12am","weekday":"Wed","value":9644},{"hour":"1pm","weekday":"Wed","value":9034},{"hour":"2pm","weekday":"Wed","value":8964},{"hour":"3pm","weekday":"Wed","value":9069},{"hour":"4pm","weekday":"Wed","value":8898},{"hour":"5pm","weekday":"Wed","value":8322},{"hour":"6pm","weekday":"Wed","value":6909},{"hour":"7pm","weekday":"Wed","value":5810},{"hour":"8pm","weekday":"Wed","value":5151},{"hour":"9pm","weekday":"Wed","value":4911},{"hour":"10pm","weekday":"Wed","value":4487},{"hour":"11pm","weekday":"Wed","value":4118},{"hour":"12pm","weekday":"Thu","value":3689},{"hour":"1am","weekday":"Thu","value":3081},{"hour":"2am","weekday":"Thu","value":6525},{"hour":"3am","weekday":"Thu","value":6228},{"hour":"4am","weekday":"Thu","value":6917},{"hour":"5am","weekday":"Thu","value":6568},{"hour":"6am","weekday":"Thu","value":6405},{"hour":"7am","weekday":"Thu","value":8106},{"hour":"8am","weekday":"Thu","value":8542},{"hour":"9am","weekday":"Thu","value":8501},{"hour":"10am","weekday":"Thu","value":8802},{"hour":"11am","weekday":"Thu","value":9420},{"hour":"12am","weekday":"Thu","value":8966},{"hour":"1pm","weekday":"Thu","value":8135},{"hour":"2pm","weekday":"Thu","value":8224},{"hour":"3pm","weekday":"Thu","value":8387},{"hour":"4pm","weekday":"Thu","value":8218},{"hour":"5pm","weekday":"Thu","value":7641},{"hour":"6pm","weekday":"Thu","value":6469},{"hour":"7pm","weekday":"Thu","value":5441},{"hour":"8pm","weekday":"Thu","value":4952},{"hour":"9pm","weekday":"Thu","value":4643},{"hour":"10pm","weekday":"Thu","value":4393},{"hour":"11pm","weekday":"Thu","value":4017},{"hour":"12pm","weekday":"Fri","value":4022},{"hour":"1am","weekday":"Fri","value":3063},{"hour":"2am","weekday":"Fri","value":3638},{"hour":"3am","weekday":"Fri","value":3968},{"hour":"4am","weekday":"Fri","value":4070},{"hour":"5am","weekday":"Fri","value":4019},{"hour":"6am","weekday":"Fri","value":4548},{"hour":"7am","weekday":"Fri","value":5465},{"hour":"8am","weekday":"Fri","value":6909},{"hour":"9am","weekday":"Fri","value":7706},{"hour":"10am","weekday":"Fri","value":7867},{"hour":"11am","weekday":"Fri","value":8615},{"hour":"12am","weekday":"Fri","value":8218},{"hour":"1pm","weekday":"Fri","value":7604},{"hour":"2pm","weekday":"Fri","value":7429},{"hour":"3pm","weekday":"Fri","value":7488},{"hour":"4pm","weekday":"Fri","value":7493},{"hour":"5pm","weekday":"Fri","value":6998},{"hour":"6pm","weekday":"Fri","value":5941},{"hour":"7pm","weekday":"Fri","value":5068},{"hour":"8pm","weekday":"Fri","value":4636},{"hour":"9pm","weekday":"Fri","value":4241},{"hour":"10pm","weekday":"Fri","value":3858},{"hour":"11pm","weekday":"Fri","value":3833},{"hour":"12pm","weekday":"Sat","value":3503},{"hour":"1am","weekday":"Sat","value":2842},{"hour":"2am","weekday":"Sat","value":2808},{"hour":"3am","weekday":"Sat","value":2399},{"hour":"4am","weekday":"Sat","value":2280},{"hour":"5am","weekday":"Sat","value":2139},{"hour":"6am","weekday":"Sat","value":2527},{"hour":"7am","weekday":"Sat","value":2940},{"hour":"8am","weekday":"Sat","value":3066},{"hour":"9am","weekday":"Sat","value":3494},{"hour":"10am","weekday":"Sat","value":3287},{"hour":"11am","weekday":"Sat","value":3416},{"hour":"12am","weekday":"Sat","value":3432},{"hour":"1pm","weekday":"Sat","value":3523},{"hour":"2pm","weekday":"Sat","value":3542},{"hour":"3pm","weekday":"Sat","value":3347},{"hour":"4pm","weekday":"Sat","value":3292},{"hour":"5pm","weekday":"Sat","value":3416},{"hour":"6pm","weekday":"Sat","value":3131},{"hour":"7pm","weekday":"Sat","value":3057},{"hour":"8pm","weekday":"Sat","value":3227},{"hour":"9pm","weekday":"Sat","value":3060},{"hour":"10pm","weekday":"Sat","value":2855},{"hour":"11pm","weekday":"Sat","value":2625}]',
            tweets: '[{"date":"2015-01-01","ay":6.5,"by":2.2,"aValue":15,"bValue":10},{"date":"2015-01-02","ay":12.3,"by":4.9,"aValue":8,"bValue":3},{"date":"2015-01-03","ay":12.3,"by":5.1,"aValue":16,"bValue":4},{"date":"2015-01-04","ay":2.8,"by":13.3,"aValue":9,"bValue":13},{"date":"2015-01-05","ay":3.5,"by":6.1,"aValue":5,"bValue":2},{"date":"2015-01-06","ay":5.1,"by":8.3,"aValue":10,"bValue":17},{"date":"2015-01-07","ay":6.7,"by":10.5,"aValue":3,"bValue":10},{"date":"2015-01-08","ay":8,"by":12.3,"aValue":5,"bValue":13},{"date":"2015-01-09","ay":8.9,"by":4.5,"aValue":8,"bValue":11},{"date":"2015-01-10","ay":9.7,"by":15,"aValue":15,"bValue":10},{"date":"2015-01-11","ay":10.4,"by":10.8,"aValue":1,"bValue":11},{"date":"2015-01-12","ay":1.7,"by":19,"aValue":12,"bValue":3}]',
            postsubnav: 'Overall',
            search: '',
            BadgeData: ['DiwaliOffer', 'Offer', '365DaysDiscount', 'MensFashion'],
            trendtopic: '',
        }
    }

    setSearch = (search) => {
        console.log('search', search);
        if (!search) return this.state.BadgeData;
        console.log('trendtopic', this.state.trendtopic);

        return this.state.BadgeData.filter((topic) => {
            return (
                this.state.trendtopic = topic.toLowerCase().includes(search.toLowerCase())
            ),
                console.log('trendtopic 2', this.state.trendtopic)
        });
    };

    trendingTopics = () => {
        if (!this.state.search) return this.state.BadgeData;

        return this.state.BadgeData.filter((topic) => {
            return (
                topic.toLowerCase().includes(this.state.search.toLowerCase())
            );
        });
    };

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
                <div className="icz-row">
                    <Col className="icz-sectioncardwrapper p-0" sm={12}>
                        <div className="icz-sectioncard p-0">
                            <div className="icz-cardheader">
                                <Col className="icz-cardtitle">
                                    Trending
                                </Col>
                                <Col className="icz-cardfilter">
                                    <SearchFilter Placeholder="Search Hashtags/Aspects" AriaLable="trending_topics" AiraDescribedBy="search_trending_topics" value={this.state.search} onChange={(e) => this.setSearch(e.target.value)} />
                                </Col>
                            </div>
                            <div className="icz-badgescontainer">
                                {console.log(this.state.trendtopic),
                                    this.state.BadgeData == 0 ?
                                        <div className="w-100 text-center text-secondary-grey">No Topics Found</div> :
                                        this.state.BadgeData.map((trendtopic, index) => {
                                            return (
                                                <div key={index} className="icz-badgewrapper">
                                                    <input type="checkbox" className="btn-check icz-checkboxbadge" id={trendtopic.toLowerCase()} autoComplete="off" />
                                                    <label className="btn icz-checkboxbadgebtn" htmlFor={trendtopic.toLowerCase()}>{`#` + trendtopic}</label>
                                                </div>
                                            )
                                        })
                                }
                            </div>
                        </div>
                    </Col>
                </div>

                <div className="icz-carouselcontainer">
                    <Carousel
                        Settings={CarouselSettings}
                        class={"icz-cardcontainer"}
                        SliderCards={[

                            <DetailsCard
                            index="1"
                            CardClass="icz-cardwrapper"
                            CardIcon={<IconCRM />}
                            CardTitle="Total Tweets"
                            RowOneCurrentValue="2245418"
                            RowOnePreviousValue="85540"
                            RowOneTitle="Paid"
                            IsNumber={true}
                        />,

                        <DetailsCard
                            index="1"
                            CardClass="icz-cardwrapper"
                            CardIcon={<IconCRM />}
                            CardTitle="Total Engagement"
                            RowOneCurrentValue="2245418"
                            RowOnePreviousValue="85540"
                            RowOneTitle="Paid"
                            IsNumber={true}
                        />,

                        <DetailsCard
                            index="1"
                            CardClass="icz-cardwrapper"
                            CardIcon={<IconCRM />}
                            CardTitle="Total Impressions"
                            RowOneCurrentValue="2245418"
                            RowOnePreviousValue="85540"
                            RowOneTitle="Paid"
                            IsNumber={true}
                        />,

                        <DetailsCard
                            index="1"
                            CardClass="icz-cardwrapper"
                            CardIcon={<IconCRM />}
                            CardTitle="Total Profile Clicks"
                            RowOneCurrentValue="2245418"
                            RowOnePreviousValue="85540"
                            RowOneTitle="Paid"
                            IsNumber={true}
                        />,

                        <DetailsCard
                            index="1"
                            CardClass="icz-cardwrapper"
                            CardIcon={<IconCRM />}
                            CardTitle="Engagement Rate"
                            RowOneCurrentValue="2245418"
                            RowOnePreviousValue="85540"
                            RowOneTitle="Paid"
                            IsNumber={true}
                        />,

                        <DetailsCard
                            index="1"
                            CardClass="icz-cardwrapper"
                            CardIcon={<IconCRM />}
                            CardTitle="Video Views"
                            RowOneCurrentValue="2245418"
                            RowOnePreviousValue="85540"
                            RowOneTitle="Paid"
                            IsNumber={true}
                        />,
                        <DetailsCard
                            index="1"
                            CardClass="icz-cardwrapper"
                            CardIcon={<IconCRM />}
                            CardTitle="Url Links Click"
                            RowOneCurrentValue="2245418"
                            RowOnePreviousValue="85540"
                            RowOneTitle="Paid"
                            IsNumber={true}
                        />

                        ]}>

                    </Carousel>
                </div>

                <div className="icz-row">
                    <div className="icz-sectioncardwrapper w-100">
                        <div className="icz-sectioncard">
                            <div className="icz-cardheader d-flex">
                                <Col className="icz-cardtitle">
                                    Tweet Impressions
                                </Col>

                            </div>
                            <div className="">
                                <CompareLineChart chart_id="tweet_impressions" chart_class="icz-sectionchart" graph-data={this.state.impressions} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="icz-row">
                    <Col className="icz-sectioncardwrapper" xs={12} lg={6}>
                        <div className="icz-sectioncard">
                            <div className="icz-cardheader">
                                <Col className="icz-cardtitle">
                                Video Views
                                </Col>
                            </div>
                            <div className="">
                            <CombinedColumnLineChart chart_id="video_views" chart_class="icz-sectionchart" graph-data={this.state.videos} />
                            </div>
                        </div>
                    </Col>
                    <Col className="icz-sectioncardwrapper" xs={12} lg={6}>
                        <div className="icz-sectioncard">
                            <div className="icz-cardheader">
                                <Col className="icz-cardtitle">
                                   Poll Votes
                                </Col>
                               
                            </div>
                            <div className="">
                                <CombinedColumnLineChart chart_id="poll_votes" chart_class="icz-sectionchart" graph-data={this.state.poll} />
                            </div>
                        </div>
                    </Col>
                </div>

                <div className="icz-row">
                    <Col className="icz-sectioncardwrapper" sm={12} lg={12}>
                        <div className="icz-sectioncard">
                            <div className="icz-cardheader">
                                <Col className="icz-cardtitle">
                                    Performance
                                </Col>
                                <Col className="icz-cardfilter">
                                    <TwitterEngagementDropdown/>
                                </Col>
                            </div>
                            <div className="icz-dchartsection">
                                <Col className="" sm={12} lg={9}>
                                <MultiLine_LineChart chart_id="tweet_engagement" chart_class="icz-sectionchart" graph-data={this.state.engagement} />

                                </Col>
                                <Col className="icz-chartdetailssection" sm={12} lg={3}>
                                <div className="icz-detailsdatasection icz-detailscroll w-100">
                                    <div className="icz-detailsdatatab d-flex justify-content-between align-items-end">
                                        <div className="d-flex">
                                            <div className="icz-iconwrapper">
                                                <IconSmiley className="icz-icon" />
                                            </div>
                                            <div className="icz-titlewrapper">
                                                <div className="icz-title">
                                                    <NumberFormatter Number={105465} IsNumber={true} />
                                                </div>
                                                <div className="icz-subtitle">
                                                    Retweets
                                                </div>
                                            </div>
                                        </div>
                                        <div className="icz-cardgrowthsection">
                                            <PercentMetricChange IsStandard={true} CurrentValue={7987} PreviousValue={989} />
                                        </div>
                                    </div>
                                    <div className="icz-detailsdatatab d-flex justify-content-between align-items-end">
                                        <div className="d-flex">
                                            <div className="icz-iconwrapper">
                                                <IconComments className="icz-icon" />
                                            </div>
                                            <div className="icz-titlewrapper">
                                                <div className="icz-title">
                                                    <NumberFormatter Number={105465} IsNumber={true} />
                                                </div>
                                                <div className="icz-subtitle">
                                                    Quote Tweets
                                                </div>
                                            </div>
                                        </div>
                                        <div className="icz-cardgrowthsection">
                                            <PercentMetricChange IsStandard={true} CurrentValue={77} PreviousValue={989} />
                                        </div>
                                    </div>
                                    <div className="icz-detailsdatatab d-flex justify-content-between align-items-end">
                                        <div className="d-flex">
                                            <div className="icz-iconwrapper">
                                                <IconLike className="icz-icon" />
                                            </div>
                                            <div className="icz-titlewrapper">
                                                <div className="icz-title">
                                                    <NumberFormatter Number={105465} IsNumber={true} />
                                                </div>
                                                <div className="icz-subtitle">
                                                    Likes
                                                </div>
                                            </div>
                                        </div>
                                        <div className="icz-cardgrowthsection">
                                            <PercentMetricChange IsStandard={true} CurrentValue={797} PreviousValue={989} />
                                        </div>
                                    </div>
                                    <div className="icz-detailsdatatab d-flex justify-content-between align-items-end">
                                        <div className="d-flex">
                                            <div className="icz-iconwrapper">
                                                <IconClicks className="icz-icon" />
                                            </div>
                                            <div className="icz-titlewrapper">
                                                <div className="icz-title">
                                                    <NumberFormatter Number={105465} IsNumber={true} />
                                                </div>
                                                <div className="icz-subtitle">
                                                    Replies
                                                </div>
                                            </div>
                                        </div>
                                        <div className="icz-cardgrowthsection">
                                            <PercentMetricChange IsStandard={true} CurrentValue={7987} PreviousValue={989} />
                                        </div>
                                    </div>
                                    <div className="icz-detailsdatatab d-flex justify-content-between align-items-end">
                                        <div className="d-flex">
                                            <div className="icz-iconwrapper">
                                                <IconClicks className="icz-icon" />
                                            </div>
                                            <div className="icz-titlewrapper">
                                                <div className="icz-title">
                                                    <NumberFormatter Number={105465} IsNumber={true} />
                                                </div>
                                                <div className="icz-subtitle">
                                                    Clicks
                                                </div>
                                            </div>
                                        </div>
                                        <div className="icz-cardgrowthsection">
                                            <PercentMetricChange IsStandard={true} CurrentValue={7987} PreviousValue={989} />
                                        </div>
                                    </div>
                                    <div className="icz-detailsdatatab d-flex justify-content-between align-items-end">
                                        <div className="d-flex">
                                            <div className="icz-iconwrapper">
                                                <IconImpressions className="icz-icon" />
                                            </div>
                                            <div className="icz-titlewrapper">
                                                <div className="icz-title icz-highlight">
                                                    <NumberFormatter Number={105465} IsNumber={true} />
                                                </div>
                                                <div className="icz-subtitle">
                                                    Total Engagement
                                                </div>
                                            </div>
                                        </div>
                                        <div className="icz-cardgrowthsection">
                                            <PercentMetricChange IsStandard={true} CurrentValue={7987} PreviousValue={989} />
                                        </div>
                                    </div>
                                </div>
                                </Col>
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
                                        User Profile Clicks
                                    </Col>
                                </div>
                                <div className="">
                                    <CompareLineChart chart_id="user_profile" chart_class="icz-sectionchart" graph-data={this.state.userprofile} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Wrapper>
        )
    }
}
