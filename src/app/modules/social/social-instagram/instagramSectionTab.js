import React, { Component } from "react";
import IconCRM from "../../../../assets/images/icons/crmIcon";
import IconPost from "../../../../assets/images/icons/postIcon";
import IconUserGroup from "../../../../assets/images/icons/usergroupIcon";

import {Tab} from "../../../shared/components/tabs/tab";
import {TabNav} from "../../../shared/components/tabs/tabnav";
import { InstagramAudience } from "./instagramAudience";
import { InstagramPage } from "./instagramPage";
import { InstagramPost } from "./instagramPost";

class InstagramSectionTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedSubNav: 'Page'
        }
    }

    setSelectedSubNav = (tab) => {
        this.setState({ selectedSubNav: tab });
    }

    render() {  
        return (
            <TabNav tabs={['Page', 'Audience', 'Post']} icon={[<IconCRM className="icz-tabicon" />, <IconUserGroup className="icz-tabicon" />, <IconPost className="icz-tabicon" />]} selected={this.state.selectedSubNav} setSelected={this.setSelectedSubNav}>
                <Tab isSelected={this.state.selectedSubNav === 'Page'}>
                    <InstagramPage />
                </Tab>
                <Tab isSelected={this.state.selectedSubNav === 'Audience'}>
                    <InstagramAudience />
                </Tab>
                <Tab isSelected={this.state.selectedSubNav === 'Post'}>
                    <InstagramPost />
                </Tab>
            </TabNav>
        );
    }

}

export default InstagramSectionTab;