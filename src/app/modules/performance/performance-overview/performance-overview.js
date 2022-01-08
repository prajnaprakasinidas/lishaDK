import React, { useState, Component } from 'react';

import Container from 'react-bootstrap/Container';
import PageHeader from '../../../layout/pageheader/pageheader';

import FacebookIcon from '../../../../assets/images/social/facebook.png'
import InstagramIcon from '../../../../assets/images/social/instagram.png'
import LinkedinIcon from '../../../../assets/images/social/linkedin.png'
import TwiiterIcon from '../../../../assets/images/social/twitter.png'
import GoogleIcon from '../../../../assets/images/social/google.png'

import { CardTabNav } from '../../../shared/components/tabs/tabcardnav'

import './performance.scss';
import { Tab } from '../../../shared/components/tabs/tab';
import { Google } from '../performance-campaign/Google/Google'
import { Overview } from './overview';
import { Facebook } from '../performance-campaign/Facebook/Facebook'
import { Instagram } from '../performance-campaign/Instagram/Instagram';
import { Twitter } from '../performance-campaign/Twitter/Twitter';
import { Linkedin } from '../performance-campaign/Linkedin/Linkedin';

export class Performanceoverview extends Component {
    constructor(props) {
        console.log("------------ 1-------------");
        super(props);
        this.state = {
            selected: '',
            social: '[{"year":"2016","google":1,"facebook":5,"instagram":3,"twitter":2,"linkedin":4},{"year":"2017","google":3,"facebook":6,"instagram":4,"twitter":7,"linkedin":5},{"year":"2018","google":5,"facebook":4,"instagram":5,"twitter":6,"linkedin":7},{"year":"2019","google":7,"facebook":6,"instagram":6,"twitter":4,"linkedin":5},{"year":"2020","google":8,"facebook":7,"instagram":5,"twitter":6,"linkedin":7},{"year":"2021","google":7,"facebook":6,"instagram":3,"twitter":5,"linkedin":5}]',

            is_data_loaded: false,
            data_list: [],

        }
        fetch("https://api1.icogz.com/api/performance/social-metrices/")
            .then((response) => response.json())
            .then((data) => this.setState({ data_list: data, is_data_loaded: true })
            );
    }
    setSelected = (tab) => {
        this.setState({ selected: tab });
    }

    render() {

        if (!this.state.is_data_loaded) {
            return <div></div>
        }

        return (
            <Container className="p-0" fluid>
                <PageHeader pageTitle="Performance" />
                <div className="d-flex flex-column">
                    <CardTabNav tabs={['Google', 'Facebook', 'Instagram', 'Twitter', 'LinkedIn']}
                        icon={[GoogleIcon, FacebookIcon, InstagramIcon, TwiiterIcon, LinkedinIcon]}
                        RowOneCurrentValue={[this.state.data_list['current_performance_info'][1]['spends_money'], this.state.data_list['current_performance_info'][0]['spends_money'], this.state.data_list['current_performance_info'][2]['spends_money'], this.state.data_list['current_performance_info'][4]['spends_money'], this.state.data_list['current_performance_info'][3]['spends_money']]}
                        RowOnePreviousValue={[this.state.data_list['previous_performance_info'][1]['spends_money'], this.state.data_list['previous_performance_info'][0]['spends_money'], this.state.data_list['previous_performance_info'][2]['spends_money'], this.state.data_list['previous_performance_info'][3]['spends_money'], '0']}
                        RowOneTitle={['spends', 'spends', 'spends', 'spends', 'spends']}
                        RowTwoCurrentValue={[this.state.data_list['current_performance_info'][1]['conversions_money'], this.state.data_list['current_performance_info'][0]['conversions_money'], this.state.data_list['current_performance_info'][2]['conversions_money'], this.state.data_list['current_performance_info'][4]['conversions_money'], this.state.data_list['current_performance_info'][3]['conversions_money']]}
                        RowTwoPreviousValue={[this.state.data_list['previous_performance_info'][1]['conversions_money'], this.state.data_list['previous_performance_info'][0]['conversions_money'], this.state.data_list['previous_performance_info'][2]['conversions_money'], this.state.data_list['previous_performance_info'][3]['conversions_money'], '0']}
                        RowTwoTitle={['Conversions', 'Conversions', 'Conversions', 'Conversions', 'Conversions']}

                        selected={this.state.selected}
                        setSelected={this.setSelected}>


                        <Tab isSelected={this.state.selected === ''}>
                            <Overview />
                        </Tab>
                        <Tab isSelected={this.state.selected === 'Google'}>
                            <Google />
                        </Tab>
                        <Tab isSelected={this.state.selected === 'Facebook'}>
                            <Facebook />
                        </Tab>
                        <Tab isSelected={this.state.selected === 'Instagram'}>
                            <Instagram />
                        </Tab>
                        <Tab isSelected={this.state.selected === 'Twitter'}>
                            <Twitter />
                        </Tab>
                        <Tab isSelected={this.state.selected === 'LinkedIn'}>
                            <Linkedin />
                        </Tab>
                    </CardTabNav>
                </div>

            </Container>
        )
    }
}
