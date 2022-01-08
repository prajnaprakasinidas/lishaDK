import React, { useState, Component } from 'react';

import Container from 'react-bootstrap/Container';
import { Col } from 'react-bootstrap';
import PageHeader from '../../../layout/pageheader/pageheader';

import FacebookIcon from '../../../../assets/images/social/facebook.png'
import InstagramIcon from '../../../../assets/images/social/instagram.png'
import LinkedinIcon from '../../../../assets/images/social/linkedin.png'
import TwiiterIcon from '../../../../assets/images/social/twitter.png'
import GoogleIcon from '../../../../assets/images/social/google.png'

import IconGoogle from '../../../../assets/images/icons/googleIcon'
import IconFacebook from '../../../../assets/images/icons/facebookIcon';
import IconTwitter from '../../../../assets/images/icons/twitterIcon'
import IconInstagram from '../../../../assets/images/icons/instagramIcon';
import IconImpressions from '../../../../assets/images/icons/impressionsIcon';


import { NumberFormatter } from "../../../shared/utilities/numberformatter";

import { OverviewDropdown } from '../../../shared/components/dropdown/overviewdropdown'
import MultiLine_LineChart from '../../../shared/components/charts/MultiLine_LineChart';
import { OverviewTable } from "./Datatable/OverviewTable";

import { CardTabNav } from '../../../shared/components/tabs/tabcardnav'

import './performance.scss';
import { Tab } from '../../../shared/components/tabs/tab';
import { Google } from '../performance-campaign/Google/Google'


export class Performance extends Component {
    constructor(props) {

        super(props);
        this.state = {
            selected: 'Google',
            social: '[{"year":"2016","google":1,"facebook":5,"instagram":3,"twitter":2,"linkedin":4},{"year":"2017","google":3,"facebook":6,"instagram":4,"twitter":7,"linkedin":5},{"year":"2018","google":5,"facebook":4,"instagram":5,"twitter":6,"linkedin":7},{"year":"2019","google":7,"facebook":6,"instagram":6,"twitter":4,"linkedin":5},{"year":"2020","google":8,"facebook":7,"instagram":5,"twitter":6,"linkedin":7},{"year":"2021","google":7,"facebook":6,"instagram":3,"twitter":5,"linkedin":5}]',

            is_data_loaded: false,
            data_list: [],

        }

        // fetch("http://127.0.0.1:8000/api/performance/social-metrices/")
        //     .then((response) => response.json())
        //     .then((data) => this.setState({ data_list: data, is_data_loaded: true })
        //     );

    }

    setSelected = (tab) => {
        this.setState({ selected: tab });
    }

    render() {

        return (
            <Container className="p-0" fluid>
                <PageHeader pageTitle="Performance" />
                <div className="d-flex flex-column">
                    <CardTabNav tabs={['Google', 'Facebook', 'Instagram', 'Twitter', 'LinkedIn']}
                        icon={[GoogleIcon, FacebookIcon, InstagramIcon, TwiiterIcon, LinkedinIcon]}
                        RowOneCurrentValue={['31321321', '31321321', '879874', '656562', '898989']}
                        RowOnePreviousValue={['7987', '7987', '8922', '7897654', '23113213']}
                        RowOneTitle={['Paid', 'Paid', 'Paid', 'Paid', 'Paid']}
                        RowTwoCurrentValue={['789789', '789789', '78788', '21564', '8976']}
                        RowTwoPreviousValue={['23234', '23234', '456456', '7878', '567576']}
                        RowTwoTitle={['Organic', 'Organic', 'Organic', 'Organic', 'Organic']}
                        selected={this.state.selected}
                        setSelected={this.setSelected}
                        // isDisabled={['notdisabled', 'disabled', 'disabled', 'disabled','disabled']} 
                        >

                        <Tab isSelected={this.state.selected === 'Google'}>
                            <Google />
                        </Tab>
                        <Tab isSelected={this.state.selected === 'Facebook'}>

                        </Tab>
                        <Tab isSelected={this.state.selected === 'Instagram'}>

                        </Tab>
                        <Tab isSelected={this.state.selected === 'Twitter'}>

                        </Tab>
                        <Tab isSelected={this.state.selected === 'LinkedIn'}>

                        </Tab>
                    </CardTabNav>
                </div>
                <div className="icz-row">
                    <Col className="icz-sectioncardwrapper" sm={12} lg={12}>
                        <div className="icz-sectioncard">
                            <div className="icz-cardheader">
                                <Col className="icz-cardtitle">
                                    Performance by Source
                                </Col>
                                <Col className="icz-cardfilter">
                                    <OverviewDropdown />
                                </Col>
                            </div>
                            <div className="d-flex">
                                <Col className="" sm={9}>
                                    <MultiLine_LineChart chart_id="icz-sourcegraph" graph-data={this.state.social} />
                                </Col>
                                <Col sm={3} className="icz-chartdetailssection">
                                    <div className="icz-detailsdatasection w-100">
                                        <div className="icz-detailsdatatab d-flex justify-content-between align-items-end">
                                            <div className="d-flex align-items-center">
                                                <div className="icz-iconwrapper">
                                                    <IconGoogle className="icz-icon" />
                                                </div>
                                                <div className="icz-titlewrapper">
                                                    <div className="icz-title">
                                                        Google
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="icz-titlewrapper">
                                                <div className="icz-title">
                                                    <NumberFormatter Number={105465} IsNumber={true} />
                                                </div>
                                                <div className="icz-subtitle">
                                                    CTR: 1.1%
                                                </div>
                                            </div>
                                        </div>

                                        <div className="icz-detailsdatatab d-flex justify-content-between align-items-end">
                                            <div className="d-flex align-items-center">
                                                <div className="icz-iconwrapper">
                                                    <IconFacebook className="icz-icon" />
                                                </div>
                                                <div className="icz-titlewrapper">
                                                    <div className="icz-title">
                                                        Facebook
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="icz-titlewrapper">
                                                <div className="icz-title">
                                                    <NumberFormatter Number={95465} IsNumber={true} />
                                                </div>
                                                <div className="icz-subtitle">
                                                    CTR: 0.8%
                                                </div>
                                            </div>
                                        </div>

                                        <div className="icz-detailsdatatab d-flex justify-content-between align-items-end">
                                            <div className="d-flex align-items-center">
                                                <div className="icz-iconwrapper">
                                                    <IconInstagram className="icz-icon" />
                                                </div>
                                                <div className="icz-titlewrapper">
                                                    <div className="icz-title">
                                                        Instagram
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="icz-titlewrapper">
                                                <div className="icz-title">
                                                    <NumberFormatter Number={48945} IsNumber={true} />
                                                </div>
                                                <div className="icz-subtitle">
                                                    CTR: 1.3%
                                                </div>
                                            </div>
                                        </div>

                                        <div className="icz-detailsdatatab d-flex justify-content-between align-items-end">
                                            <div className="d-flex align-items-center">
                                                <div className="icz-iconwrapper">
                                                    <IconTwitter className="icz-icon" />
                                                </div>
                                                <div className="icz-titlewrapper">
                                                    <div className="icz-title">
                                                        Twitter
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="icz-titlewrapper">
                                                <div className="icz-title">
                                                    <NumberFormatter Number={125465} IsNumber={true} />
                                                </div>
                                                <div className="icz-subtitle">
                                                    CTR: 0.3%
                                                </div>
                                            </div>
                                        </div>

                                        <div className="icz-detailsdatatab d-flex justify-content-between align-items-end">
                                            <div className="d-flex align-items-center">
                                                <div className="icz-iconwrapper">
                                                    <IconImpressions className="icz-icon" />
                                                </div>
                                                <div className="icz-titlewrapper">
                                                    <div className="icz-title">
                                                        Total
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="icz-titlewrapper">
                                                <div className="icz-title icz-highlight">
                                                    <NumberFormatter Number={375465} IsNumber={true} />
                                                </div>
                                                <div className="icz-subtitle">
                                                    CTR: 3.5%
                                                </div>
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
                        <Col className="icz-sectioncard">
                            <OverviewTable />
                        </Col>
                    </div>
                </div>
            </Container>
        )
    }
}
