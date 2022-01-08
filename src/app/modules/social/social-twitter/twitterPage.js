import React, { Component } from 'react'
import Col from "react-bootstrap/esm/Col";
import Wrapper from "../../../helpers/wrapper";

import IconImpressions from '../../../../assets/images/icons/impressionsIcon';
import IconLike from "../../../../assets/images/icons/likeIcon";
import IconReach from "../../../../assets/images/icons/reachIcon";
import IconFollowers from '../../../../assets/images/icons/followersIcon';
import DefaultProfileImage from '../../../../assets/images/avatars/avatar1.png'
import DefaultBannerImage from '../../../../assets/images/banner-1.png'
import BannerLogoImage from '../../../../assets/images/bannerlogo-1.png'
import IconUserGroup from '../../../../assets/images/icons/usergroupIcon'
import IconComments from '../../../../assets/images/icons/commentsIcon';
import IconTwitterBlue from '../../../../assets/images/icons/twitterfillIcon';

import { DetailsCard } from "../../../shared/components/cards/detailscard/detailscard";
import { TopPostCard } from '../../../shared/components/cards/toppostscard/toppostcard';
import { TopFollowersCard } from '../../../shared/components/cards/topfollowerscard/topfollowerscard';
import { Carousel } from "../../../shared/components/carousel/carousel";

import CompareLineChart from "../../../shared/components/charts/CompareLineChart";
import PositiveNegativeBarChart from "../../../shared/components/charts/positivenegativebarchart";
import TagCloudChart from '../../../shared/components/charts/TagCloudChart';

import { DailydataDropdown } from '../../../shared/components/dropdown/dailydatadropdown';
import { MentionsDropdown } from '../../../shared/components/dropdown/mentionsdropdown';
import { ListDropdown } from '../../../shared/components/dropdown/listdropdown';

import { NumberFormatter } from '../../../shared/utilities/numberformatter'
import PercentMetricChange from '../../../shared/components/percentmetricchange/percentmetricchange';

import { API_BASE_URL } from '../../../helpers/constant';

// import { ListDataTable } from '../../../shared/components/datatable/twittertable/listtable';

export class TwitterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdown_options: [{ "value": "total_mention", "label": "Mentions" }, { "value": "total_profile_count", "label": "User profile clicks" }],
            dailyData: [{ "date": "2019-5-12", "value1": "50", "value2": "48", "previousdate": "2019-5-5" }, { "date": "2019-5-13", "value1": "53", "value2": "51", "previousdate": "2019-5-6" }, { "date": "2019-5-14", "value1": "56", "value2": "58", "previousdate": "2019-5-7" }, { "date": "2019-5-15", "value1": "52", "value2": "53", "previousdate": "2019-5-8" }, { "date": "2019-5-16", "value1": "48", "value2": "44", "previousdate": "2019-5-9" }, { "date": "2019-5-17", "value1": "47", "value2": "42", "previousdate": "2019-5-10" }, { "date": "2019-5-18", "value1": "59", "value2": "55", "previousdate": "2019-5-11" }],
            session: [{ "date": "2012-07-29", "value": 15 }, { "date": "2012-07-30", "value": 15 }, { "date": "2012-07-31", "value": 15 }, { "date": "2012-08-01", "value": 15 }, { "date": "2012-08-02", "value": 15 }, { "date": "2012-08-03", "value": 19 }, { "date": "2012-08-03", "value": 19 }],
            growth: [{ "date": "2012-07-27", "value": 450, "value2": 362 }, { "date": "2012-07-28", "value": 269, "value2": -450 }, { "date": "2012-07-29", "value": -700, "value2": -358 }, { "date": "2012-07-30", "value": 490, "value2": -367 }, { "date": "2012-07-31", "value": 500, "value2": 485 }],
            previousgrowthbardata: '[{"country": "Like","units": 500,"pie": [{"value": 250,"title": "Cat #1"}, {"value": 150,"title": "Cat #2"}, {"value": 100,"title": "Cat #3"}]}, {"country": "Dislike","units": 300,"pie": [{"value": 80,"title": "Cat #1"}, {"value": 130,"title": "Cat #2"}, {"value": 90,"title": "Cat #3"}]}]',
            currentgrowthpiedata: '[{"country":"Like","units":500,"pie":[{"value":250,"title":"Cat #1"},{"value":150,"title":"Cat #2"},{"value":100,"title":"Cat #3"}]},{"country":"Dislike","units":300,"pie":[{"value":80,"title":"Cat #1"},{"value":130,"title":"Cat #2"},{"value":90,"title":"Cat #3"}]}]',
            mentionstag: [{ "tag": "javascript", "count": "1765836" }, { "tag": "java", "count": "1517355" }, { "tag": "c#", "count": "1287629" }, { "tag": "php", "count": "1263946" }, { "tag": "android", "count": "1174721" }, { "tag": "python", "count": "1116769" }, { "tag": "jquery", "count": "944983" }, { "tag": "html", "count": "805679" }, { "tag": "c++", "count": "606051" }, { "tag": "ios", "count": "591410" }, { "tag": "css", "count": "574684" }, { "tag": "mysql", "count": "550916" }, { "tag": "sql", "count": "479892" }, { "tag": "asp.net", "count": "343092" }, { "tag": "ruby-on-rails", "count": "303311" }, { "tag": "c", "count": "296963" }, { "tag": "arrays", "count": "288445" }, { "tag": "objective-c", "count": "286823" }, { "tag": ".net", "count": "280079" }, { "tag": "r", "count": "277144" }, { "tag": "node.js", "count": "263451" }, { "tag": "angularjs", "count": "257159" }, { "tag": "json", "count": "255661" }, { "tag": "sql-server", "count": "253824" }, { "tag": "swift", "count": "222387" }, { "tag": "iphone", "count": "219827" }, { "tag": "regex", "count": "203121" }, { "tag": "ruby", "count": "202547" }, { "tag": "ajax", "count": "196727" }, { "tag": "django", "count": "191174" }, { "tag": "excel", "count": "188787" }, { "tag": "xml", "count": "180742" }, { "tag": "asp.net-mvc", "count": "178291" }, { "tag": "linux", "count": "173278" }, { "tag": "angular", "count": "154447" }, { "tag": "database", "count": "153581" }, { "tag": "wpf", "count": "147538" }, { "tag": "spring", "count": "147456" }, { "tag": "wordpress", "count": "145801" }, { "tag": "python-3.x", "count": "145685" }, { "tag": "vba", "count": "139940" }, { "tag": "string", "count": "136649" }, { "tag": "xcode", "count": "130591" }, { "tag": "windows", "count": "127680" }, { "tag": "reactjs", "count": "125021" }, { "tag": "vb.net", "count": "122559" }, { "tag": "html5", "count": "118810" }, { "tag": "eclipse", "count": "115802" }, { "tag": "multithreading", "count": "113719" }, { "tag": "mongodb", "count": "110348" }, { "tag": "laravel", "count": "109340" }, { "tag": "bash", "count": "108797" }, { "tag": "git", "count": "108075" }, { "tag": "oracle", "count": "106936" }, { "tag": "pandas", "count": "96225" }, { "tag": "postgresql", "count": "96027" }, { "tag": "twitter-bootstrap", "count": "94348" }, { "tag": "forms", "count": "92995" }, { "tag": "image", "count": "92131" }, { "tag": "macos", "count": "90327" }, { "tag": "algorithm", "count": "89670" }, { "tag": "python-2.7", "count": "88762" }, { "tag": "scala", "count": "86971" }, { "tag": "visual-studio", "count": "85825" }, { "tag": "list", "count": "84392" }, { "tag": "excel-vba", "count": "83948" }, { "tag": "winforms", "count": "83600" }, { "tag": "apache", "count": "83367" }, { "tag": "facebook", "count": "83212" }, { "tag": "matlab", "count": "82452" }, { "tag": "performance", "count": "81443" }, { "tag": "css3", "count": "78250" }, { "tag": "entity-framework", "count": "78243" }, { "tag": "hibernate", "count": "76123" }, { "tag": "typescript", "count": "74867" }, { "tag": "linq", "count": "73128" }, { "tag": "swing", "count": "72333" }, { "tag": "function", "count": "72043" }, { "tag": "amazon-web-services", "count": "71155" }, { "tag": "qt", "count": "69552" }, { "tag": "rest", "count": "69138" }, { "tag": "shell", "count": "68854" }, { "tag": "azure", "count": "67431" }, { "tag": "firebase", "count": "66411" }, { "tag": "api", "count": "66158" }, { "tag": "maven", "count": "66113" }, { "tag": "powershell", "count": "65467" }, { "tag": ".htaccess", "count": "65014" }, { "tag": "sqlite", "count": "64888" }, { "tag": "file", "count": "62783" }, { "tag": "codeigniter", "count": "62393" }, { "tag": "unit-testing", "count": "61909" }, { "tag": "perl", "count": "61752" }, { "tag": "loops", "count": "61015" }, { "tag": "symfony", "count": "60820" }, { "tag": "selenium", "count": "59855" }, { "tag": "google-maps", "count": "59616" }, { "tag": "csv", "count": "59600" }, { "tag": "uitableview", "count": "59011" }, { "tag": "web-services", "count": "58916" }, { "tag": "cordova", "count": "58195" }, { "tag": "class", "count": "58055" }, { "tag": "numpy", "count": "57132" }, { "tag": "google-chrome", "count": "56836" }, { "tag": "ruby-on-rails-3", "count": "55962" }, { "tag": "android-studio", "count": "55801" }, { "tag": "tsql", "count": "55736" }, { "tag": "validation", "count": "55531" }],
            is_metrices_loaded: false,
            current_followers_count: 0,
            current_following_count: 0,
            current_mentions_count: 0,
            current_profile_click_count: 0,
            last_followers_count: 0,
            last_following_count: 0,
            last_mentions_count: 0,
            last_profile_click_count: 0,
            is_daily_data_loaded: false,
            daily_metrics_name: "total_mention",
            is_growth_data_loaded: false,
            mention_sentiment: "",
            is_mention_word_data_loaded: false,
            mention_word_dropdown_option: [{ "value": "", "label": "Overall" }, { "value": "POSITIVE", "label": "Positive" }, { "value": "NEGATIVE", "label": "Negative" }, { "value": "NEUTRAL", "label": "Neutral" }]
        }

        this.getPageMetrices();
        this.getPageDailyData();
        this.getPageGrowth();
        this.getPageMentionWords();
    }

    getPageMetrices() {
        const data = {
            'start_date': '2021-10-01',
            'end_date': '2021-12-31',
            'social_platform': 'TWITTER'
        }
        const url = API_BASE_URL + "api/social/page-metrices/"
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(res => res.json()).then((result) => {
            let current_followers_count = 0;
            let current_following_count = 0;
            let current_mentions_count = 0;
            let current_profile_click_count = 0;

            let last_followers_count = 0;
            let last_following_count = 0;
            let last_mentions_count = 0;
            let last_profile_click_count = 0;


            if (result['current_social_metrices'].length > 0) {
                current_followers_count = result['current_social_metrices'][0]['total_followers'];
                current_following_count = result['current_social_metrices'][0]['total_following'];
                current_mentions_count = result['current_social_metrices'][0]['total_mentions'];
                current_profile_click_count = result['current_social_metrices'][0]['total_profile_click'];
            }

            if (result['last_social_metrices'].length > 0) {
                last_followers_count = result['last_social_metrices'][0]['total_followers'];
                last_following_count = result['last_social_metrices'][0]['total_following'];
                last_mentions_count = result['last_social_metrices'][0]['total_mentions'];
                last_profile_click_count = result['last_social_metrices'][0]['total_profile_click'];
            }

            this.setState({
                is_metrices_loaded: true,
                current_followers_count: current_followers_count,
                current_following_count: current_following_count,
                current_mentions_count: current_mentions_count,
                current_profile_click_count: current_profile_click_count,
                last_followers_count: last_followers_count,
                last_following_count: last_following_count,
                last_mentions_count: last_mentions_count,
                last_profile_click_count: last_profile_click_count
            });



        });
    }

    getPageDailyData() {
        const data = {
            'start_date': '2021-10-01',
            'end_date': '2021-12-31',
            'social_platform': 'TWITTER'
        }

        const url = API_BASE_URL + "api/social/page-mention/";

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(res => res.json()).then((result) => {
            let data_list = []
            let current_metrices = result['current_metrices_list'];
            let last_metrices = result['last_metrices_list'];

            let total_length = 0;
            if (last_metrices.length > current_metrices.length) {
                total_length = last_metrices.length;
            } else {
                total_length = current_metrices.length;
            }

            for (let i = 0; i < total_length; i++) {
                let date = "";
                let value1 = 0;

                try {
                    date = current_metrices[i]['date'];
                    value1 = current_metrices[i][this.state.daily_metrics_name];
                } catch {
                    date = "";
                    value1 = 0;
                }

                let previousdate = "";
                let value2 = 0;

                try {
                    previousdate = last_metrices[i]['date'];
                    value2 = last_metrices[i][this.state.daily_metrics_name];
                } catch {
                    previousdate = "";
                    value2 = 0;
                }

                let info = {
                    "date": date,
                    "value1": value1,
                    "value2": value2,
                    "previousdate": previousdate
                }

                data_list.push(info);
            }
            this.setState({ is_daily_data_loaded: true, dailyData: data_list });
        });
    }

    getPageGrowth() {
        const data = {
            'start_date': '2021-10-01',
            'end_date': '2021-12-31',
            'social_platform': 'TWITTER'
        }

        const url = API_BASE_URL + "api/social/page-followers/";

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(res => res.json()).then((result) => {
            let data_list = []
            result['current_page_follow_count_list'].map((info, index) => {
                let d = {
                    "date": info.date,
                    "value": info.total_follow_count,
                    "value2": '-' + info.total_unfollow_count
                }
                data_list.push(d);
            });
            this.setState({ is_growth_data_loaded: true, growth: data_list });
        });
    }

    getPageMentionWords() {
        const data = {
            'start_date': '2021-10-01',
            'end_date': '2021-12-31',
            'social_platform': 'TWITTER',
            'sentiment': this.state.mention_sentiment,
        }

        console.log("this.state.mention_sentiment ", this.state.mention_sentiment);

        const url = API_BASE_URL + "api/social/page-mention-word/";

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(res => res.json()).then((result) => {
            console.log("Twitter Page Mentions === ", result);

            let data_list = [];
            result['mention_list'].map((info, index) => {
                let a = {
                    "tag": info.mention_text,
                    "count": info.total_mention
                }
                data_list.push(a);
            });
            console.log("Mention Data ", data_list);
            this.setState({ is_mention_word_data_loaded: true, mentionstag: data_list });

            console.log("This.state is_mention_word_data_loaded ", this.state.is_mention_word_data_loaded)
        });
    }


    handleCallback = (childData) => {
        this.setState({ daily_metrics_name: childData, is_daily_data_loaded: false });
        this.getPageDailyData();
    }

    handleMentionWordCallback = (childData) => {
        // this.state.mention_sentiment = childData;
        // this.state.is_mention_word_data_loaded = false;
        this.setState({ mention_sentiment: childData, is_mention_word_data_loaded: false });
        this.getPageMentionWords();
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
                    {this.state.is_metrices_loaded ?

                        <Carousel
                            Settings={CarouselSettings}
                            class={"icz-cardcontainer"}
                            SliderCards={[

                                // current_followers_count: 0,
                                // current_following_count: 0,
                                // current_mentions_count: 0,
                                // current_profile_click_count: 0,
                                // last_followers_count: 0,
                                // last_following_count: 0,
                                // last_mentions_count: 0,
                                // last_profile_click_count: 0,

                                <DetailsCard
                                    index="1"
                                    CardClass="icz-cardwrapper"
                                    CardIcon={<IconFollowers className="icz-icon" />}
                                    CardTitle="Total Followers"
                                    RowOneCurrentValue={this.state.current_followers_count}
                                    RowOnePreviousValue={this.state.last_followers_count}
                                    RowOneTitle="Previous"
                                    IsNumber={true}
                                />,
                                <DetailsCard
                                    index="1"
                                    CardClass="icz-cardwrapper"
                                    CardIcon={<IconLike className="icz-icon" />}
                                    CardTitle="Total Following"
                                    RowOneCurrentValue={this.state.current_following_count}
                                    RowOnePreviousValue={this.state.last_following_count}
                                    RowOneTitle="Previous"
                                    IsNumber={true}
                                />,
                                <DetailsCard
                                    index="1"
                                    CardClass="icz-cardwrapper"
                                    CardIcon={<IconImpressions className="icz-icon" />}
                                    CardTitle="Total Profile Clicks"
                                    RowOneCurrentValue={this.state.current_profile_click_count}
                                    RowOnePreviousValue={this.state.last_profile_click_count}
                                    RowOneTitle="Previous"
                                    IsNumber={true}
                                />,
                                <DetailsCard
                                    index="1"
                                    CardClass="icz-cardwrapper"
                                    CardIcon={<IconReach className="icz-icon" />}
                                    CardTitle="Mentions"
                                    RowOneCurrentValue={this.state.current_mentions_count}
                                    RowOnePreviousValue={this.state.last_mentions_count}
                                    RowOneTitle="Previous"
                                    IsNumber={true}
                                />
                            ]}>

                        </Carousel>
                        : ""}
                </div>

                <div className="icz-row">
                    <Col className="icz-sectioncardwrapper" xs={12} lg={6}>
                        <div className="icz-sectioncard">
                            <div className="icz-cardheader">
                                <Col className="icz-cardtitle">
                                    Daily Data
                                </Col>
                                <Col className="icz-cardfilter">
                                    <DailydataDropdown dropdown_options={this.state.dropdown_options} dropdown_placeholder="Mentions" parentCallback={this.handleCallback} />
                                </Col>
                            </div>

                            {this.state.is_daily_data_loaded == true ?
                                <div className="">
                                    <CompareLineChart chart_id="social_views" chart_class="icz-sectionchart" graph-data={this.state.dailyData} />
                                </div>
                                : ""}


                        </div>
                    </Col>


                    <Col className="icz-sectioncardwrapper" xs={12} lg={6}>
                        <div className="icz-sectioncard">
                            <div className="icz-cardheader">
                                <Col className="icz-cardtitle">
                                    Growth
                                </Col>

                            </div>
                            {this.state.is_growth_data_loaded == true ?
                                <div className="">
                                    <PositiveNegativeBarChart chart_id="social_growth" chart_class="icz-sectionchart" graph-data={this.state.growth} />
                                </div>
                                : ""}
                        </div>
                    </Col>
                </div>




                <div className="icz-row">
                    <Col className="icz-sectioncardwrapper" sm={12}>
                        <div className="icz-sectioncard">
                            <div className="icz-cardheader">
                                <Col className="icz-cardtitle">
                                    Mentions
                                </Col>
                                <Col className="icz-cardfilter">
                                    <DailydataDropdown dropdown_options={this.state.mention_word_dropdown_option} dropdown_placeholder="Overall" parentCallback={this.handleMentionWordCallback} />
                                    {/* <MentionsDropdown /> */}
                                </Col>
                            </div>
                            {this.state.is_mention_word_data_loaded == true ?
                                <div className="">
                                    <TagCloudChart card_id="mentions_tag" card_class="icz-sectionchart" graph-data={this.state.mentionstag} />
                                </div>
                                : ""}
                        </div>
                    </Col>
                </div>

                <div className="icz-row">
                    <Col className="icz-sectioncardwrapper" sm={12} lg={12}>
                        <div className="icz-sectioncard">
                            <div className="icz-cardheader">
                                <Col className="icz-cardtitle">
                                    List
                                </Col>
                                <Col className="icz-cardfilter">
                                    <ListDropdown />
                                </Col>
                            </div>
                            <div className="icz-dchartsection">
                                <Col className="" sm={12} lg={9}>
                                    {/* <ListDataTable /> */}
                                </Col>
                                <Col className="icz-chartdetailssection" sm={12} lg={3}>
                                    <div className="icz-detailsdatasection icz-detailscroll  w-100">
                                        <div className="icz-detailsdatatab d-flex justify-content-between align-items-end">
                                            <div className="d-flex align-items-center">
                                                <div className="icz-iconwrapper">
                                                    <IconComments className="icz-icon" />
                                                </div>
                                                <div className="icz-titlewrapper">
                                                    <div className="icz-title">
                                                        <NumberFormatter Number={2080} IsNumber={true} />
                                                    </div>
                                                    <div className="icz-subtitle">
                                                        Total no. of Lists
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="icz-cardgrowthsection">
                                                <PercentMetricChange IsStandard={true} CurrentValue={797} PreviousValue={989} />
                                            </div>
                                        </div>

                                        <div className="icz-detailsdatatab d-flex justify-content-between align-items-end">
                                            <div className="d-flex align-items-center">
                                                <div className="icz-iconwrapper">
                                                    <IconUserGroup className="icz-icon" />
                                                </div>
                                                <div className="icz-titlewrapper">
                                                    <div className="icz-title">
                                                        <NumberFormatter Number={225} IsNumber={true} />
                                                    </div>
                                                    <div className="icz-subtitle">
                                                        Total Followers
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="icz-cardgrowthsection">
                                                <PercentMetricChange IsStandard={true} CurrentValue={798} PreviousValue={989} />
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </div>
                        </div>
                    </Col>
                </div>





            </Wrapper>
        )
    }
}
