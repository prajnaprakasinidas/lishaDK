import React, { Component } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Image from 'react-bootstrap/esm/Image';
import IconClicks from '../../../assets/images/icons/clicksIcon';
import IconComments from '../../../assets/images/icons/commentsIcon';
import IconContribution from '../../../assets/images/icons/contributionIcon';
import IconCRM from '../../../assets/images/icons/crmIcon';
import IconImpressions from '../../../assets/images/icons/impressionsIcon';
import IconShare from '../../../assets/images/icons/shareIcon';
import IconSmiley from '../../../assets/images/icons/smileyIcon';

import Wrapper from '../../helpers/wrapper';
import { DetailsCard } from '../../shared/components/cards/detailscard/detailscard';
import { Carousel } from '../../shared/components/carousel/carousel';
import CompareLineChart from '../../shared/components/charts/CompareLineChart';
import DonutPieChart from '../../shared/components/charts/DonutPieChart';
import ForceDirectedPieChart from '../../shared/components/charts/ForceDirected WithPieCharts';
import MultipleValueAxes from '../../shared/components/charts/MultipleValueAxesChart';
import SemiCirclePieChart from '../../shared/components/charts/SemiCirclePieChart';
import PercentMetricChange from '../../shared/components/percentmetricchange/percentmetricchange';
import SearchFilter from '../../shared/components/searchfilter/searchfilter';
import { NumberFormatter } from '../../shared/utilities/numberformatter';

import DummyPost from '../../../assets/images/post.png';

import './social.scss';
import MultiLine_LineChart from '../../shared/components/charts/MultiLine_LineChart';

export class SocialPostOrganic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postImpressionsData: '[{"date":"2019-5-12","value1":"50","value2":"48","previousdate":"2019-5-5"},{"date":"2019-5-13","value1":"53","value2":"51","previousdate":"2019-5-6"},{"date":"2019-5-14","value1":"56","value2":"58","previousdate":"2019-5-7"},{"date":"2019-5-15","value1":"52","value2":"53","previousdate":"2019-5-8"},{"date":"2019-5-16","value1":"48","value2":"44","previousdate":"2019-5-9"},{"date":"2019-5-17","value1":"47","value2":"42","previousdate":"2019-5-10"},{"date":"2019-5-18","value1":"59","value2":"55","previousdate":"2019-5-11"}]',
            contentAnalysis: '[{"name": "Core", "pie": [{"category": "Cat #1","value": "100"}, {"category": "Cat #2","value": "100"}, {"category": "Cat #3","value": "50"}],"children": [{"name": "First","value": "160","pie": [{"category": "Cat #1","value": "60"}, {"category": "Cat #2","value": "100"}, {"category": "Cat #3","value": "50"}, {"category": "Cat #4","value": "60"}]},{"name": "Second","value": "250","pie": [{"category": "Cat #1","value": "100"}, {"category": "Cat #2","value": "190"}]},{"name": "Third","value": "450","pie": [{"category": "Cat #1","value": "50"}, {"category": "Cat #2","value": "100"}, {"category": "Cat #3","value": "120"}]}]}]',
            reachByContentType: '[{"country":"Lithuania","value":"401"},{"country":"Czech Republic","value":"300"},{"country":"Ireland","value":"200"},{"country":"Germany","value":"165"},{"country":"Australia","value":"139"},{"country":"Austria","value":"128"}]',
            postSentimentsPositive: '[{"country":"Lithuania","litres":501.9},{"country":"Germany","litres":165.8},{"country":"Australia","litres":139.9},{"country":"Austria","litres":128.3},{"country":"UK","litres":99},{"country":"Belgium","litres":60}]',
            social: '[{"year":"2016","google":1,"facebook":5,"instagram":3,"twitter":2,"linkedin":4},{"year":"2017","google":3,"facebook":6,"instagram":4,"twitter":7,"linkedin":5},{"year":"2018","google":5,"facebook":4,"instagram":5,"twitter":6,"linkedin":7},{"year":"2019","google":7,"facebook":6,"instagram":6,"twitter":4,"linkedin":5},{"year":"2020","google":8,"facebook":7,"instagram":5,"twitter":6,"linkedin":7},{"year":"2021","google":7,"facebook":6,"instagram":3,"twitter":5,"linkedin":5}]',
            postsubnav: 'Overall',
            search: '',
            BadgeData: ['DiwaliOffer', 'Offer', '365DaysDiscount', 'MensFashion'],
            trendtopic: '',

        }

    }

    setSearch = (search) => {
        if (!search) return this.state.BadgeData;

        return this.state.BadgeData.filter((topic) => {
            return (
                this.state.trendtopic = topic.toLowerCase().includes(search.toLowerCase())
            ),
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
                                    Trending Topics
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
                                CardTitle="Total Posts"
                                RowOneCurrentValue="2245418"
                                RowOnePreviousValue="85540"
                                RowOneTitle="Paid"
                                IsNumber={true}
                            />,

                            <DetailsCard
                                index="1"
                                CardClass="icz-cardwrapper"
                                CardIcon={<IconCRM />}
                                CardTitle="Total Likes"
                                RowOneCurrentValue="2245418"
                                RowOnePreviousValue="85540"
                                RowOneTitle="Paid"
                                IsNumber={true}
                            />,

                            <DetailsCard
                                index="1"
                                CardClass="icz-cardwrapper"
                                CardIcon={<IconCRM />}
                                CardTitle="Post Impressions"
                                RowOneCurrentValue="2245418"
                                RowOnePreviousValue="85540"
                                RowOneTitle="Paid"
                                IsNumber={true}
                            />,

                            <DetailsCard
                                index="1"
                                CardClass="icz-cardwrapper"
                                CardIcon={<IconCRM />}
                                CardTitle="Post Reach"
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
                                CardTitle="Shares"
                                RowOneCurrentValue="218"
                                RowOnePreviousValue="85540"
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
                                    Content Analysis
                                </Col>
                            </div>
                            <div className="">
                                <ForceDirectedPieChart chart_id="content_analysis" chart_class="icz-sectionchart" graph-data={this.state.contentAnalysis} />
                            </div>
                        </div>
                    </Col>
                    <Col className="icz-sectioncardwrapper" sm={12} lg={6}>
                        <div className="icz-sectioncard">
                            <div className="icz-cardheader">
                                <Col className="icz-cardtitle">
                                    Reach by Content Type
                                </Col>
                            </div>
                            <div className="">
                                <SemiCirclePieChart chart_id="social_reach_by_content_type" chart_class="icz-sectionchart" graph-data={this.state.reachByContentType} />
                            </div>
                        </div>
                    </Col>
                </div>
                <div className="icz-row">
                    <div className="icz-sectioncardwrapper w-100">
                        <Col className="icz-sectioncard d-flex flex-row">
                            <Col xs={12} lg={7} xl={7} className="icz-chartsection">
                                <div className="icz-cardheader">
                                    <Col className="icz-cardtitle">
                                        Post Impressions
                                    </Col>
                                </div>
                                <div className="">
                                    <CompareLineChart chart_id="social_post_impressions" chart_class="icz-sectionchart" graph-data={this.state.postImpressionsData} metric_1={"current"} metric_2={"previous"}/>
                                </div>
                            </Col>
                            <Col xs={12} lg={5} xl={5} className="icz-chartdetailssection">
                                <div className="icz-imagewrapper">
                                    <Image src={DummyPost} className="icz-image" />
                                </div>
                                <div className="icz-detailsdatasection">
                                    <div className="icz-detailsdatatab">
                                        <div className="icz-iconwrapper">
                                            <IconImpressions className="icz-icon" />
                                        </div>
                                        <div className="icz-titlewrapper">
                                            <div className="icz-title">
                                                <NumberFormatter Number={105465} IsNumber={true} />
                                            </div>
                                            <div className="icz-subtitle">
                                                Total Impressions
                                            </div>
                                        </div>
                                    </div>
                                    <div className="icz-detailsdatatab">
                                        <div className="icz-iconwrapper">
                                            <IconSmiley className="icz-icon" />
                                        </div>
                                        <div className="icz-titlewrapper">
                                            <div className="icz-title">
                                                <NumberFormatter Number={1054} IsNumber={true} />
                                            </div>
                                            <div className="icz-subtitle">
                                                Total Reactions
                                            </div>
                                        </div>
                                    </div>
                                    <div className="icz-detailsdatatab">
                                        <div className="icz-iconwrapper">
                                            <IconContribution className="icz-icon" />
                                        </div>
                                        <div className="icz-titlewrapper">
                                            <div className="icz-title">
                                                <NumberFormatter Number={465} IsNumber={true} />
                                            </div>
                                            <div className="icz-subtitle">
                                                Today's Contribution
                                            </div>
                                        </div>
                                    </div>
                                    <div className="icz-detailsdatatab">
                                        <div className="icz-iconwrapper">
                                            <IconImpressions className="icz-icon" />
                                        </div>
                                        <div className="icz-titlewrapper">
                                            <div className="icz-title">
                                                <NumberFormatter Number={65} IsNumber={true} />
                                            </div>
                                            <div className="icz-subtitle">
                                                Today's Impression
                                            </div>
                                        </div>
                                    </div>
                                    <div className="icz-badgecontainer">
                                        <div className="icz-badge">
                                            Geo-targeted
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Col>
                    </div>
                </div>
                <div className="icz-row">
                    <div className="icz-sectioncardwrapper w-100">
                        <div className="icz-sectioncard w-100">
                            <div className="icz-chartsection">
                                <div className="icz-cardheader">
                                    <Col className="icz-cardtitle">
                                        Video Views
                                    </Col>
                                </div>
                                <div className="">
                                    <MultipleValueAxes />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="icz-row">
                    <div className="icz-sectioncardwrapper w-100">
                        <Col className="icz-sectioncard d-flex flex-row">
                            <Col className="icz-chartsection" sm={9}>
                                <div className="icz-cardheader">
                                    <Col className="icz-cardtitle">
                                        Post Engagement
                                    </Col>
                                </div>
                                <div className="">
                                    <MultiLine_LineChart chart_id="social_post_impressionss" chart_class="icz-sectionchart" graph-data={this.state.social} />
                                </div>
                            </Col>
                            <Col sm={3} className="icz-chartdetailssection">
                                <div className="icz-detailsdatasection w-100">
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
                                                    Comments
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
                                                    Comments
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
                                                <IconShare className="icz-icon" />
                                            </div>
                                            <div className="icz-titlewrapper">
                                                <div className="icz-title">
                                                    <NumberFormatter Number={105465} IsNumber={true} />
                                                </div>
                                                <div className="icz-subtitle">
                                                    Shares
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
                                                    Post Link Clicks
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
                                                    Total Impressions
                                                </div>
                                            </div>
                                        </div>
                                        <div className="icz-cardgrowthsection">
                                            <PercentMetricChange IsStandard={true} CurrentValue={7987} PreviousValue={989} />
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Col>
                    </div>
                </div>
                <div className="icz-row">
                    <div className="icz-sectioncardwrapper w-100">
                        <div className="icz-sectioncard">
                            <div className="icz-cardheader">
                                <div className="icz-cardtitle">
                                    Post Sentiment
                                </div>
                            </div>
                            <div className="d-flex flex-wrap">
                                <Col lg={6} className="d-flex">
                                    <Col sm={4}>
                                        <DonutPieChart chart_id="social_post_positive_sentiments" center_title={`Positive\n Actions`} chart_class="icz-sectionchart" graph-data={this.state.postSentimentsPositive} chart_color_set={["#038673", "#0FAF98", "#06A57D", "#3CD795", "#07C180"]}/>
                                    </Col>
                                    <Col sm={8} className="icz-chartdetailssection flex-column">
                                        <div className="icz-detailsdatasection w-100 d-flex flex-row flex-wrap">
                                            <div className="icz-detailsdatatab d-flex justify-content-start align-items-center">
                                                <div className="icz-iconwrapper">
                                                    <IconSmiley className="icz-icon" />
                                                </div>
                                                <div className="icz-titlewrapper">
                                                    <div className="icz-title">
                                                        <NumberFormatter Number={105465} IsNumber={true} />
                                                    </div>
                                                    <div className="icz-subtitle">
                                                        Total Reactions
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="icz-detailsdatasection w-100 d-flex flex-row flex-wrap">
                                            <div className="icz-detailsdatatab d-flex justify-content-start align-items-center">
                                                <div className="icz-iconwrapper">
                                                    <IconSmiley className="icz-icon" />
                                                </div>
                                                <div className="icz-titlewrapper">
                                                    <div className="icz-title">
                                                        <NumberFormatter Number={105465} IsNumber={true} />
                                                    </div>
                                                    <div className="icz-subtitle">
                                                        Like
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="icz-detailsdatatab d-flex justify-content-start align-items-center">
                                                <div className="icz-iconwrapper">
                                                    <IconSmiley className="icz-icon" />
                                                </div>
                                                <div className="icz-titlewrapper">
                                                    <div className="icz-title">
                                                        <NumberFormatter Number={105465} IsNumber={true} />
                                                    </div>
                                                    <div className="icz-subtitle">
                                                        Love
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="icz-detailsdatatab d-flex justify-content-start align-items-center">
                                                <div className="icz-iconwrapper">
                                                    <IconSmiley className="icz-icon" />
                                                </div>
                                                <div className="icz-titlewrapper">
                                                    <div className="icz-title">
                                                        <NumberFormatter Number={105465} IsNumber={true} />
                                                    </div>
                                                    <div className="icz-subtitle">
                                                        WOW
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="icz-detailsdatatab d-flex justify-content-start align-items-center">
                                                <div className="icz-iconwrapper">
                                                    <IconSmiley className="icz-icon" />
                                                </div>
                                                <div className="icz-titlewrapper">
                                                    <div className="icz-title">
                                                        <NumberFormatter Number={105465} IsNumber={true} />
                                                    </div>
                                                    <div className="icz-subtitle">
                                                        HAHA
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="icz-detailsdatatab d-flex justify-content-start align-items-center">
                                                <div className="icz-iconwrapper">
                                                    <IconSmiley className="icz-icon" />
                                                </div>
                                                <div className="icz-titlewrapper">
                                                    <div className="icz-title">
                                                        <NumberFormatter Number={105465} IsNumber={true} />
                                                    </div>
                                                    <div className="icz-subtitle">
                                                        Sad
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="icz-detailsdatatab d-flex justify-content-start align-items-center">
                                                <div className="icz-iconwrapper">
                                                    <IconSmiley className="icz-icon" />
                                                </div>
                                                <div className="icz-titlewrapper">
                                                    <div className="icz-title">
                                                        <NumberFormatter Number={105465} IsNumber={true} />
                                                    </div>
                                                    <div className="icz-subtitle">
                                                        Anger
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Col>
                                <Col lg={6} className="d-flex">
                                    <Col sm={4}>
                                        <DonutPieChart chart_id="social_post_negative_sentiments" center_title={`Negative\n Actions`} chart_class="icz-sectionchart" graph-data={this.state.postSentimentsPositive} chart_color_set={["#B45917", "#DB7823", "#FF9931", "#FFB866", "#C4885D"]} />
                                    </Col>
                                    <Col sm={8} className="icz-chartdetailssection flex-column">
                                        <div className="icz-detailsdatasection w-100 d-flex flex-row flex-wrap">
                                            <div className="icz-detailsdatatab d-flex justify-content-start align-items-center">
                                                <div className="icz-iconwrapper">
                                                    <IconSmiley className="icz-icon" />
                                                </div>
                                                <div className="icz-titlewrapper">
                                                    <div className="icz-title">
                                                        <NumberFormatter Number={105465} IsNumber={true} />
                                                    </div>
                                                    <div className="icz-subtitle">
                                                        Total Reactions
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="icz-detailsdatasection w-100 d-flex flex-row flex-wrap">
                                            <div className="icz-detailsdatatab d-flex justify-content-start align-items-center">
                                                <div className="icz-iconwrapper">
                                                    <IconSmiley className="icz-icon" />
                                                </div>
                                                <div className="icz-titlewrapper">
                                                    <div className="icz-title">
                                                        <NumberFormatter Number={105465} IsNumber={true} />
                                                    </div>
                                                    <div className="icz-subtitle">
                                                        Like
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="icz-detailsdatatab d-flex justify-content-start align-items-center">
                                                <div className="icz-iconwrapper">
                                                    <IconSmiley className="icz-icon" />
                                                </div>
                                                <div className="icz-titlewrapper">
                                                    <div className="icz-title">
                                                        <NumberFormatter Number={105465} IsNumber={true} />
                                                    </div>
                                                    <div className="icz-subtitle">
                                                        Love
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="icz-detailsdatatab d-flex justify-content-start align-items-center">
                                                <div className="icz-iconwrapper">
                                                    <IconSmiley className="icz-icon" />
                                                </div>
                                                <div className="icz-titlewrapper">
                                                    <div className="icz-title">
                                                        <NumberFormatter Number={105465} IsNumber={true} />
                                                    </div>
                                                    <div className="icz-subtitle">
                                                        WOW
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="icz-detailsdatatab d-flex justify-content-start align-items-center">
                                                <div className="icz-iconwrapper">
                                                    <IconSmiley className="icz-icon" />
                                                </div>
                                                <div className="icz-titlewrapper">
                                                    <div className="icz-title">
                                                        <NumberFormatter Number={105465} IsNumber={true} />
                                                    </div>
                                                    <div className="icz-subtitle">
                                                        HAHA
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="icz-detailsdatatab d-flex justify-content-start align-items-center">
                                                <div className="icz-iconwrapper">
                                                    <IconSmiley className="icz-icon" />
                                                </div>
                                                <div className="icz-titlewrapper">
                                                    <div className="icz-title">
                                                        <NumberFormatter Number={105465} IsNumber={true} />
                                                    </div>
                                                    <div className="icz-subtitle">
                                                        Sad
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="icz-detailsdatatab d-flex justify-content-start align-items-center">
                                                <div className="icz-iconwrapper">
                                                    <IconSmiley className="icz-icon" />
                                                </div>
                                                <div className="icz-titlewrapper">
                                                    <div className="icz-title">
                                                        <NumberFormatter Number={105465} IsNumber={true} />
                                                    </div>
                                                    <div className="icz-subtitle">
                                                        Anger
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Col>
                            </div>

                        </div>
                    </div>
                </div>
            </Wrapper>
        )
    }
}
