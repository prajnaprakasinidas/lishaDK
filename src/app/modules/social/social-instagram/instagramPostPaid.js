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
import SearchFilter from '../../../shared/components/searchfilter/searchfilter';

import '../social.scss';


const API_URL = 'https://api1.icogz.com';

export class InstagramPostPaid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postImpressionsData: '[{"date":"2019-5-12","value1":"50","value2":"48","previousdate":"2019-5-5"},{"date":"2019-5-13","value1":"53","value2":"51","previousdate":"2019-5-6"},{"date":"2019-5-14","value1":"56","value2":"58","previousdate":"2019-5-7"},{"date":"2019-5-15","value1":"52","value2":"53","previousdate":"2019-5-8"},{"date":"2019-5-16","value1":"48","value2":"44","previousdate":"2019-5-9"},{"date":"2019-5-17","value1":"47","value2":"42","previousdate":"2019-5-10"},{"date":"2019-5-18","value1":"59","value2":"55","previousdate":"2019-5-11"}]',
            contentAnalysis: '[{"name": "Core", "pie": [{"category": "Cat #1","value": "100"}, {"category": "Cat #2","value": "100"}, {"category": "Cat #3","value": "50"}],"children": [{"name": "First","value": "160","pie": [{"category": "Cat #1","value": "60"}, {"category": "Cat #2","value": "100"}, {"category": "Cat #3","value": "50"}, {"category": "Cat #4","value": "60"}]},{"name": "Second","value": "250","pie": [{"category": "Cat #1","value": "100"}, {"category": "Cat #2","value": "190"}]},{"name": "Third","value": "450","pie": [{"category": "Cat #1","value": "50"}, {"category": "Cat #2","value": "100"}, {"category": "Cat #3","value": "120"}]}]}]',
            reachByContentType: '[{"country":"Lithuania","value":"401"},{"country":"Czech Republic","value":"300"},{"country":"Ireland","value":"200"},{"country":"Germany","value":"165"},{"country":"Australia","value":"139"},{"country":"Austria","value":"128"}]',
            postSentimentsPositive: '[{"country":"Lithuania","litres":501.9},{"country":"Germany","litres":165.8},{"country":"Australia","litres":139.9},{"country":"Austria","litres":128.3},{"country":"UK","litres":99},{"country":"Belgium","litres":60}]',
            BadgeData: ['DiwaliOffer', 'Offer', '365DaysDiscount', 'MensFashion'],
            postsubnav: 'Overall',
            is_post_metrices_loaded: false,
            is_impression_loaded: false,
            impression_info: [],
            final_impression: [],
            post_metrices: [],
        }

    }
    componentDidMount() {
        this.getSocialPostMetrices();
        this.getImpression();
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
        if (!this.state.is_impression_loaded || !this.state.is_post_metrices_loaded) {
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
                                RowOneCurrentValue={this.state.post_metrices['current_post_metrices_list'][0]['total_post']}
                                RowOnePreviousValue={this.state.post_metrices['last_post_metrices_list'][0]['total_post']}
                                RowOneTitle="Paid"
                                IsNumber={true}
                            />,

                            <DetailsCard
                                index="1"
                                CardClass="icz-cardwrapper"
                                CardIcon={<IconCRM />}
                                CardTitle="Total Post Impressions"
                                RowOneCurrentValue={this.state.post_metrices['current_post_metrices_list'][0]['total_impression']}
                                RowOnePreviousValue={this.state.post_metrices['last_post_metrices_list'][0]['total_impression']}
                                RowOneTitle="Paid"
                                IsNumber={true}
                            />,

                            <DetailsCard
                                index="1"
                                CardClass="icz-cardwrapper"
                                CardIcon={<IconCRM />}
                                CardTitle="Total Post Reach"
                                RowOneCurrentValue={this.state.post_metrices['current_post_metrices_list'][0]['total_reach']}
                                RowOnePreviousValue={this.state.post_metrices['last_post_metrices_list'][0]['total_reach']}
                                RowOneTitle="Paid"
                                IsNumber={true}
                            />,

                            <DetailsCard
                                index="1"
                                CardClass="icz-cardwrapper"
                                CardIcon={<IconCRM />}
                                CardTitle="Spends"
                                RowOneCurrentValue="2245418"
                                RowOnePreviousValue="85540"
                                RowOneTitle="Paid"
                                IsNumber={true}
                            />,

                            <DetailsCard
                                index="1"
                                CardClass="icz-cardwrapper"
                                CardIcon={<IconCRM />}
                                CardTitle="CPE"
                                RowOneCurrentValue="2245418"
                                RowOnePreviousValue="85540"
                                RowOneTitle="Paid"
                                IsNumber={true}
                            />,

                        ]}>

                    </Carousel>
                </div>
                <div className="icz-row">
                    <div className="icz-sectioncardwrapper w-100">
                        <Col className="icz-sectioncard d-flex flex-row">
                            <Col className="icz-chartsection">
                                <div className="icz-cardheader">
                                    <Col className="icz-cardtitle">
                                        Post Impressions
                                    </Col>
                                </div>
                                <div className="">
                                    <CompareLineChart chart_id="social_post_impressions" chart_class="icz-sectionchart" graph-data={this.state.postImpressionsData} metric_1={'Current'} metric_2={'Previous'} />
                                </div>
                            </Col>
                        </Col>
                    </div>
                </div>
            </Wrapper>
        )
    }
}
