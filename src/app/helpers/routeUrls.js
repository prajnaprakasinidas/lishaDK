import React, { Component } from "react"

import { Switch, Route } from 'react-router-dom';

import { Dashboard } from '../modules/dashboard/dashboard';

import { Aryabot } from '../modules/aryabot/aryabot';

import { Comparison } from '../modules/comparison/comparison';
import ComparisonSocial from '../modules/comparison/comparison-social/comparison-social';
import ComparisonTopicModelling from '../modules/comparison/comparison-topic-modelling/comparison-topic-modelling';
import ComparisonWebsite from '../modules/comparison/comparison-website/comparison-website';

import { CRM } from '../modules/crm/crm';

import { Ecom } from '../modules/ecom/ecom';
import { Hashtags } from '../modules/hashtags/hashtags';

import { Performanceoverview } from '../modules/performance/performance-overview/performance-overview';
import PerformanceCampaign from '../modules/performance/performance-campaign/performance-campaign';
import PerformanceDevice from '../modules/performance/performance-device/performance-device';
import PerformanceLocation from '../modules/performance/performance-location/performance-location';



import { Reviews } from '../modules/reviews/reviews';

import { Social } from '../modules/social/social';
import SocialFacebook from '../modules/social/social-facebook/socialFacebook';
import SocialInstagram from '../modules/social/social-instagram/socialInstagram';
import SocialLinkedin from '../modules/social/social-linkedin/social-linkedin';
import SocialTwitter from '../modules/social/social-twitter/social-twitter';

import { Video } from '../modules/video/video';
import VideoFacebook from '../modules/video/video-facebook/video-facebook';
import VideoYoutube from '../modules/video/video-youtube/video-youtube';
import { Website } from '../modules/website/website';
import { RI } from '../modules/ri/ri';
import { Engagement } from "../modules/ecom/Engagement/Engagement";



// import { Website } from '../modules/website/website';
// import { RI } from '../modules/ri/ri';


export class RouteUrls extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact>
                    <Dashboard />
                </Route>

                <Route path="/aryabot" exact>
                    <Aryabot />
                </Route>

                <Route path="/comparison" exact>
                    <Comparison />
                </Route>
                <Route path="/comparison/social" exact>
                    <ComparisonSocial />
                </Route>
                <Route path="/comparison/topic-modelling" exact>
                    <ComparisonTopicModelling />
                </Route>
                <Route path="/comparison/website" exact>
                    <ComparisonWebsite />
                </Route>

                <Route path="/crm" exact>
                    <CRM />
                </Route>

                <Route path="/ecom" exact>
                    <Ecom />
                </Route>
                {/* <Route path="/ecom/customer" exact>
                    <Customer />
                </Route> */}
                <Route path="/ecom/engagement" exact>
                    <Engagement />
                </Route>
                {/* 
                <Route path="/ecom/customer" exact>
                    <Customer />
                </Route> */}

                <Route path="/hashtags" exact>
                    <Hashtags />
                </Route>

                <Route path="/performance" exact>
                    <Performanceoverview />
                </Route>
                <Route path="/performance/overview" exact>
                    <Performanceoverview />
                </Route>
                <Route path="/performance/campaign" exact>
                    <PerformanceCampaign />
                </Route>
                <Route path="/performance/device" exact>
                    <PerformanceDevice />
                </Route>
                <Route path="/performance/location" exact>
                    <PerformanceLocation />
                </Route>


                <Route path="/reviews" exact>
                    <Reviews />
                </Route>

                <Route path="/ri" exact>
                    <RI />
                </Route>

                <Route path="/react/social" exact>
                    <Social />
                </Route>
                <Route path="/social" exact>
                    <Social />
                </Route>

                <Route path="/social/facebook" exact>
                    <SocialFacebook />
                </Route>
                <Route path="/social/instagram" exact>
                    <SocialInstagram />
                </Route>
                <Route path="/social/linkedin" exact>
                    <SocialLinkedin />
                </Route>
                <Route path="/social/twitter" exact>
                    <SocialTwitter />
                </Route>


                <Route path="/video" exact>
                    <Video />
                </Route>
                <Route path="/video/facebook" exact>
                    <VideoFacebook />
                </Route>
                <Route path="/video/youtube" exact>
                    <VideoYoutube />
                </Route>


                <Route path="/website" exact>
                    <Website />
                </Route>

            </Switch>
        )
    }
}
