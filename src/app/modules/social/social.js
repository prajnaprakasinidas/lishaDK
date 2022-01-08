import React, { useState, Component } from 'react';

import Container from 'react-bootstrap/Container';
import { TabCard } from '../../shared/components/cards/tabcard/tabcard';

import { Carousel } from '../../shared/components/carousel/carousel';

import PageHeader from '../../layout/pageheader/pageheader';

import FacebookIcon from '../../../assets/images/social/facebook.png'
import InstagramIcon from '../../../assets/images/social/instagram.png'
import LinkedinIcon from '../../../assets/images/social/linkedin.png'
import TwiiterIcon from '../../../assets/images/social/twitter.png'

import { CardTabNav } from '../../shared/components/tabs/tabcardnav';

import './social.scss';
import { Tab } from '../../shared/components/tabs/tab';
import SocialFacebook from './social-facebook/socialFacebook';
import SocialInstagram from './social-instagram/socialInstagram';
import SocialTwitter from './social-twitter/socialTwitter';
import SocialLinkedin from './social-linkedin/socialLinkedin';


// import {APIURL} from '../../helpers/constant';


const API_URL = 'https://api1.icogz.com';

export class Social extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 'Facebook',
            social_tab_list: [],
            is_social_card_loaded: false
        }

        this.getSocialCardTab();


    }

    getSocialCardTab() {
        const data = {
            'start_date': '2021-10-01',
            'end_date': '2021-12-31',
            'social_paltform': 'FACEBOOK'
        }
        const url = API_URL + "/api/social/overall-metrices/"
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
                console.log("getSocialCardTab===============", result)
                this.setState({
                    is_social_card_loaded: true,
                    social_tab_list: result

                });
            },
                (error) => {
                }
            )
    }

    setSelected = (tab) => {
        this.setState({ selected: tab });
    }


    render() {

        if (!this.state.is_social_card_loaded) {
            return '<div></div>';
        }

        return (
            <Container className="p-0" fluid>
                <PageHeader pageTitle="Social" />
                <div className="d-flex flex-column">
                    <CardTabNav tabs={['Facebook', 'Instagram', 'Twitter', 'LinkedIn']}
                        icon={[FacebookIcon, InstagramIcon, TwiiterIcon, LinkedinIcon]}
                        RowOneCurrentValue={['3', '879874', '656562', '898989']}
                        RowOnePreviousValue={['7987', '8922', '7897654', '23113213']}
                        RowOneTitle={['Paid', 'Paid', 'Paid', 'Paid']}
                        RowTwoCurrentValue={['789789', '78788', '21564', '8976']}
                        RowTwoPreviousValue={['23234', '456456', '7878', '567576']}
                        RowTwoTitle={['Organic', 'Organic', 'Organic', 'Organic']}
                        selected={this.state.selected}
                        setSelected={this.setSelected}
                        isDisabled={['notdisabled', 'notdisabled', 'disabled', 'disabled']} >

                        <Tab isSelected={this.state.selected === 'Facebook'}>
                            <SocialFacebook />
                        </Tab>
                        <Tab isSelected={this.state.selected === 'Instagram'}>
                            <SocialInstagram />
                        </Tab>
                        <Tab isSelected={this.state.selected === 'Twitter'}>
                            <SocialTwitter />
                        </Tab>
                        <Tab isSelected={this.state.selected === 'LinkedIn'}>
                            <SocialLinkedin />
                        </Tab>
                    </CardTabNav>
                </div>
            </Container>
        )
    }
}
