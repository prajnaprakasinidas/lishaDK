import React, { Component } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Image from 'react-bootstrap/esm/Image';
import IconClicks from '../../../../assets/images/icons/clicksIcon';
import IconComments from '../../../../assets/images/icons/commentsIcon';
import IconContribution from '../../../../assets/images/icons/contributionIcon';
import IconCRM from '../../../../assets/images/icons/crmIcon';
import IconImpressions from '../../../../assets/images/icons/impressionsIcon';
import IconShare from '../../../../assets/images/icons/shareIcon';
import IconSmiley from '../../../../assets/images/icons/smileyIcon';

import Wrapper from '../../../helpers/wrapper';
import { DetailsCard } from '../../../shared/components/cards/detailscard/detailscard';
import { Carousel } from '../../../shared/components/carousel/carousel';
import CompareLineChart from '../../../shared/components/charts/CompareLineChart';
import DonutPieChart from '../../../shared/components/charts/DonutPieChart';
import ForceDirectedPieChart from '../../../shared/components/charts/ForceDirected WithPieCharts';
import MultipleValueAxes from '../../../shared/components/charts/MultipleValueAxesChart';
import SemiCirclePieChart from '../../../shared/components/charts/SemiCirclePieChart';
import PercentMetricChange from '../../../shared/components/percentmetricchange/percentmetricchange';
// import SearchFilter from '../../shared/components/searchfilter/searchfilter';
import { NumberFormatter } from '../../../shared/utilities/numberformatter'

import DummyPost from '../../../../assets/images/post.png';
import '../social.scss';
import MultiLine_LineChart from '../../../shared/components/charts/MultiLine_LineChart';

const API_URL = 'https://api1.icogz.com';


export class FacebookPostOverall extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // postImpressionsData: '[{"date":"2019-5-12","value1":"50","value2":"48","previousdate":"2019-5-5"},{"date":"2019-5-13","value1":"53","value2":"51","previousdate":"2019-5-6"},{"date":"2019-5-14","value1":"56","value2":"58","previousdate":"2019-5-7"},{"date":"2019-5-15","value1":"52","value2":"53","previousdate":"2019-5-8"},{"date":"2019-5-16","value1":"48","value2":"44","previousdate":"2019-5-9"},{"date":"2019-5-17","value1":"47","value2":"42","previousdate":"2019-5-10"},{"date":"2019-5-18","value1":"59","value2":"55","previousdate":"2019-5-11"}]',
            contentAnalysis: '[{"name": "Core", "pie": [{"category": "Cat #1","value": "100"}, {"category": "Cat #2","value": "100"}, {"category": "Cat #3","value": "50"}],"children": [{"name": "First","value": "160","pie": [{"category": "Cat #1","value": "60"}, {"category": "Cat #2","value": "100"}, {"category": "Cat #3","value": "50"}, {"category": "Cat #4","value": "60"}]},{"name": "Second","value": "250","pie": [{"category": "Cat #1","value": "100"}, {"category": "Cat #2","value": "190"}]},{"name": "Third","value": "450","pie": [{"category": "Cat #1","value": "50"}, {"category": "Cat #2","value": "100"}, {"category": "Cat #3","value": "120"}]}]}]',
            // reachByContentType: '[{"country":"Lithuania","value":"401"},{"country":"Czech Republic","value":"300"},{"country":"Ireland","value":"200"},{"country":"Germany","value":"165"},{"country":"Australia","value":"139"},{"country":"Austria","value":"128"}]',
            postSentimentsNegative: [],
            // postSentimentsPositive: [{ "country": "Lithuania", "litres": 501.9 }, { "country": "Germany", "litres": 165.8 }, { "country": "Australia", "litres": 139.9 }, { "country": "Austria", "litres": 128.3 }, { "country": "UK", "litres": 99 }, { "country": "Belgium", "litres": 60 }],
            // social: [{ "year": "2016", "google": 1, "facebook": 5, "instagram": 3, "twitter": 2, "linkedin": 4 }, { "year": "2017", "google": 3, "facebook": 6, "instagram": 4, "twitter": 7, "linkedin": 5 }, { "year": "2018", "google": 5, "facebook": 4, "instagram": 5, "twitter": 6, "linkedin": 7 }, { "year": "2019", "google": 7, "facebook": 6, "instagram": 6, "twitter": 4, "linkedin": 5 }, { "year": "2020", "google": 8, "facebook": 7, "instagram": 5, "twitter": 6, "linkedin": 7 }, { "year": "2021", "google": 7, "facebook": 6, "instagram": 3, "twitter": 5, "linkedin": 5 }],
            postsubnav: 'Overall',
            is_post_metrices_loaded: false,
            is_video_loaded: false,
            is_reach_content_loaded: false,
            is_sentiment_loaded: false,
            is_impression_loaded: false,
            is_engagement_loaded: false,
            reaction_info: [],
            impression_info: [],
            final_impression: [],
            post_info: [],
            post_metrices: [],
            video_list: [],
            // social: [],


        }

    }

    componentDidMount() {
        this.getSocialPostMetrices();
        this.getReachByContentType();
        this.getSentiment();
        this.getImpression();
        this.getVideos();
        this.getEngagment();
    }

    getSocialPostMetrices() {
        const data = {
            'start_date': '2021-10-01',
            'end_date': '2021-12-31',
            'social_paltform': 'FACEBOOK'
        }
        const url = API_URL + "/api/social/post-metrices/"
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        }

        )
            .then(res => res.json())
            .then((result) => {
                this.setState({ is_post_metrices_loaded: true, post_metrices: result });
            },
                (error) => {
                    //   console.log("Error Result = ", error)
                }
            )
    }

    getReachByContentType() {
        const data = {
            'start_date': '2021-10-01',
            'end_date': '2021-12-31',
            'social_paltform': 'FACEBOOK',
            'type': 'overall'
        }
        const url = API_URL + "/api/social/post-reach-content-type/"
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        }

        )
            .then(res => res.json())
            .then((result) => {
                let content_list = result['content_type_list'];
                let data_list = [];
                content_list.map((info, index) => {
                    if (info['media_type'] != "") {
                        let a = { 'country': info['media_type'], 'value': info['total_reach'] }
                        data_list.push(a);
                    }
                });
                this.setState({ is_reach_content_loaded: true, reachByContentType: data_list });
            },
                (error) => {
                    //   console.log("Error Result = ", error)
                }
            )
    }

    getSentiment() {
        const data = {
            'start_date': '2021-10-01',
            'end_date': '2021-12-31',
            'social_paltform': 'FACEBOOK',
            'type': 'overall'
        }
        const url = API_URL + "/api/social/post-sentiment/"
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        }

        )
            .then(res => res.json())
            .then((result) => {
                let sentiment_list = result['sentiment_list'];
                let positive_data_list = [];
                let negative_data_list = [];
                sentiment_list.map((info, index) => {
                    let a = { 'country': info['sentment_text'], 'litres': info['sentiment_count'] };
                    let sentment_text = info['sentment_text'];
                    if (sentment_text == "HAHA" || sentment_text == "WOW" || sentment_text == "Likes" || sentment_text == "" || sentment_text == "Loves") {
                        positive_data_list.push(a);
                    } else {
                        negative_data_list.push(a);
                    }
                });

                this.setState({
                    is_sentiment_loaded: true,
                    postSentimentsPositive: positive_data_list,
                    postSentimentsNegative: negative_data_list
                });
            },
                (error) => {
                    //   console.log("Error Result = ", error)
                }
            )
    }


    getImpression() {
        const data = {
            'start_date': '2021-10-01',
            'end_date': '2021-12-31',
            'social_paltform': 'FACEBOOK',
            'type': 'overall'
        }
        const url = API_URL + "/api/social/post-impressions/"
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        }

        )
            .then(res => res.json())
            .then((result) => {
                let current_impression_list = result['current_impression_list'];
                let last_impression_list = result['last_impression_list'];

                let data_list = [];
                current_impression_list.map((info, index) => {
                    try {
                        let a = {
                            "date": current_impression_list[index]['date'],
                            "value1": current_impression_list[index]['total_impression'],
                            "value2": last_impression_list[index]['total_impression'],
                            "previousdate": last_impression_list[index]['date']
                        }
                        data_list.push(a);
                    } catch {
                        // 
                    }
                });

                console.log("-------- data_list ----------- ", data_list);
                this.setState({
                    is_impression_loaded: true,
                    postImpressionsData: data_list,
                    reaction_info: result['sentiment_info'],
                    impression_info: result['today_impression'],
                    final_impression: result['final_impression'],
                    post_info: result['post_info']
                });
            },
                (error) => {
                    //   console.log("Error Result = ", error)
                }
            )
    }

    getVideos() {
        const data = {
            'start_date': '2021-10-01',
            'end_date': '2021-12-31',
            'social_paltform': 'FACEBOOK',
            'type': 'overall'
        }
        const url = API_URL + "/api/social/post-video/"
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        }

        )
            .then(res => res.json())
            .then((result) => {
                let video_list = result['current_video_list'];
                // let last_impression_list = result['last_impression_list'];

                let data_list = [];
                video_list.map((info, index) => {
                    try {
                        let a = {
                            "date": video_list[index]['date'],
                            "visits": video_list[index]['total_videos'],
                            "views": video_list[index]['total_views']
                        }
                        data_list.push(a);
                    } catch {
                        //   date: newDate,
                    }
                });

                console.log("-------- data_list ----------- ", data_list);
                this.setState({ is_video_loaded: true, video_list: data_list });
            },
                (error) => {
                    //   console.log("Error Result = ", error)
                }
            )
    }

    getEngagment() {
        const data = {
            'start_date': '2021-10-01',
            'end_date': '2021-12-31',
            'social_paltform': 'FACEBOOK',
            'type': 'overall'
        }
        const url = API_URL + "/api/social/post-engagment/"
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        }

        )
            .then(res => res.json())
            .then((result) => {
                let engagment_list = result['current_engagment_list'];
                // let last_impression_list = result['last_impression_list'];

                let data_list = [];
                engagment_list.map((info, index) => {
                    try {
                        let a = {
                            "year": engagment_list[index]['date'],
                            "google": engagment_list[index]['total_click'],
                            "facebook": engagment_list[index]['total_like'],
                            "instagram": engagment_list[index]['total_comment'],
                            "twitter": engagment_list[index]['total_share'],
                            "linkedin": engagment_list[index]['total_reach']
                        }
                        data_list.push(a);
                    } catch {
                        //   date: newDate,
                    }
                });

                console.log("-------- data_list ----------- ", data_list);
                this.setState({ is_engagement_loaded: true, social: data_list });
            },
                (error) => {
                    //   console.log("Error Result = ", error)
                }
            )
    }


    render() {

        if (!this.state.is_engagement_loaded || !this.state.is_impression_loaded || !this.state.is_post_metrices_loaded || !this.state.is_reach_content_loaded || !this.state.is_sentiment_loaded) {
            return '<div></div>';
        }

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

        const positive_sentiments = this.state.postSentimentsPositive;
        const negative_sentiments = this.state.postSentimentsNegative;


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
                                CardIcon={<IconCRM />}
                                CardTitle="Total Posts"
                                RowOneCurrentValue={this.state.post_metrices['current_post_metrices_list'][0]['total_post']}
                                RowOnePreviousValue={this.state.post_metrices['last_post_metrices_list'][0]['total_post']}
                                RowOneTitle="Paid"
                                IsNumber={true}
                            />,

                            <DetailsCard
                                index="1"
                                CardClass="icz-cardwrapper"
                                CardIcon={<IconCRM />}
                                CardTitle="Total Likes"
                                RowOneCurrentValue={this.state.post_metrices['current_post_metrices_list'][0]['total_like']}
                                RowOnePreviousValue={this.state.post_metrices['last_post_metrices_list'][0]['total_like']}
                                RowOneTitle="Paid"
                                IsNumber={true}
                            />,

                            <DetailsCard
                                index="1"
                                CardClass="icz-cardwrapper"
                                CardIcon={<IconCRM />}
                                CardTitle="Post Impressions"
                                RowOneCurrentValue={this.state.post_metrices['current_post_metrices_list'][0]['total_impression']}
                                RowOnePreviousValue={this.state.post_metrices['last_post_metrices_list'][0]['total_impression']}
                                RowOneTitle="Paid"
                                IsNumber={true}
                            />,

                            <DetailsCard
                                index="1"
                                CardClass="icz-cardwrapper"
                                CardIcon={<IconCRM />}
                                CardTitle="Post Reach"
                                RowOneCurrentValue={this.state.post_metrices['current_post_metrices_list'][0]['total_reach']}
                                RowOnePreviousValue={this.state.post_metrices['last_post_metrices_list'][0]['total_reach']}
                                RowOneTitle="Paid"
                                IsNumber={true}
                            />,

                            <DetailsCard
                                index="1"
                                CardClass="icz-cardwrapper"
                                CardIcon={<IconCRM />}
                                CardTitle="Engagement Rate"
                                RowOneCurrentValue={this.state.post_metrices['current_post_metrices_list'][0]['total_click']}
                                RowOnePreviousValue={this.state.post_metrices['last_post_metrices_list'][0]['total_click']}
                                RowOneTitle="Paid"
                                IsNumber={true}
                            />,

                            <DetailsCard
                                index="1"
                                CardClass="icz-cardwrapper"
                                CardIcon={<IconCRM />}
                                CardTitle="Shares"
                                RowOneCurrentValue={this.state.post_metrices['current_post_metrices_list'][0]['total_share']}
                                RowOnePreviousValue={this.state.post_metrices['last_post_metrices_list'][0]['total_share']}
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
                            <Col className="icz-chartsection" sm={7}>
                                <div className="icz-cardheader">
                                    <Col className="icz-cardtitle">
                                        Post Impressions
                                    </Col>
                                </div>
                                <div className="">
                                    <CompareLineChart chart_id="social_post_impressions" chart_class="icz-sectionchart" graph-data={this.state.postImpressionsData} />
                                </div>
                            </Col>
                            <Col sm={5} className="icz-chartdetailssection">
                                <div className="icz-imagewrapper">
                                    <Image src={this.state.post_info[0]['post_full_picture']} alt="" className="icz-image" />
                                </div>
                                <div className="icz-detailsdatasection">
                                    <div className="icz-detailsdatatab">
                                        <div className="icz-iconwrapper">
                                            <IconImpressions className="icz-icon" />
                                        </div>
                                        <div className="icz-titlewrapper">
                                            <div className="icz-title">
                                                <NumberFormatter Number={this.state.final_impression[0]['total_impression']} IsNumber={true} />
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
                                                <NumberFormatter Number={this.state.reaction_info[0]['total_sentiment']} IsNumber={true} />
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
                                                <NumberFormatter Number={this.state.impression_info[0]['total_impression']} IsNumber={true} />
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
                                    <MultipleValueAxes graph_data={this.state.video_list} />
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
                                    <Col sm={12} lg={5}>
                                        <DonutPieChart chart_id="social_post_positive_sentiments" center_title={`Positive\n Actions`} chart_class="icz-sectionchart" graph-data={this.state.postSentimentsPositive} chart_color_set={["#038673", "#0FAF98", "#06A57D", "#3CD795", "#07C180"]} />
                                    </Col>
                                    <Col sm={12} sm={7} className="icz-chartdetailssection flex-column">


                                        <div className="icz-detailsdatasection w-100 d-flex flex-row flex-wrap">

                                            {positive_sentiments.map((info, index) => {
                                                // console.log(this.state.postSentimentsPositive[index]['country']);

                                                <div className="icz-detailsdatatab d-flex justify-content-start align-items-center">
                                                    <div className="icz-iconwrapper">
                                                        <IconSmiley className="icz-icon" />
                                                    </div>
                                                    <div className="icz-titlewrapper">
                                                        <div className="icz-title">
                                                            <NumberFormatter Number={1500} IsNumber={true} />
                                                        </div>
                                                        <div className="icz-subtitle">{info['country']}  </div>
                                                    </div>
                                                </div>
                                            })}


                                        </div>


                                        <div className="icz-detailsdatasection w-100 d-flex flex-row flex-wrap">


                                            {/* <div className="icz-detailsdatatab d-flex justify-content-start align-items-center">
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
                                            </div> */}


                                            {/* <div className="icz-detailsdatatab d-flex justify-content-start align-items-center">
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
                                            </div> */}


                                            {/* <div className="icz-detailsdatatab d-flex justify-content-start align-items-center">
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
                                            </div> */}


                                            {/* <div className="icz-detailsdatatab d-flex justify-content-start align-items-center">
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
                                            </div> */}


                                            {/* <div className="icz-detailsdatatab d-flex justify-content-start align-items-center">
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
                                            </div> */}


                                            {/* <div className="icz-detailsdatatab d-flex justify-content-start align-items-center">
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

                                            */}



                                        </div>
                                    </Col>
                                </Col>
                                <Col lg={6} className="d-flex">
                                    <Col sm={12} lg={5}>
                                        <DonutPieChart chart_id="social_post_negative_sentiments" center_title={`Negative\n Actions`} chart_class="icz-sectionchart" graph-data={this.state.postSentimentsPositive} chart_color_set={["#B45917", "#DB7823", "#FF9931", "#FFB866", "#C4885D"]} />
                                    </Col>
                                    <Col sm={12} sm={7} className="icz-chartdetailssection flex-column">
                                        <div className="icz-detailsdatasection w-100 d-flex flex-column flex-wrap">
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
