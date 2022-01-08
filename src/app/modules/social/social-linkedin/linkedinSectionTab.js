import React, { Component } from 'react'
import IconCRM from "../../../../assets/images/icons/crmIcon";
import IconPost from "../../../../assets/images/icons/postIcon";
import IconUserGroup from "../../../../assets/images/icons/usergroupIcon";
import { Tab } from "../../../shared/components/tabs/tab";
import { TabNav } from "../../../shared/components/tabs/tabnav";
import {LinkedinAudience} from './linkedinAudience';
import { LinkedinPage } from './linkedinPage';
import {LinkedinPost} from './linkedinPost';



export class LinkedinSectionTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedSubNav: 'Page'
        }
        console.log('social tab')
    }

    setSelectedSubNav = (tab) => {
        this.setState({ selectedSubNav: tab });
    }
    render() {
        return (
            <TabNav tabs={['Page', 'Audience', 'Post']} icon={[<IconCRM className="icz-tabicon" />, <IconUserGroup className="icz-tabicon" />, <IconPost className="icz-tabicon" />]} selected={this.state.selectedSubNav} setSelected={this.setSelectedSubNav}>
                <Tab isSelected={this.state.selectedSubNav === 'Page'}>
                    <LinkedinPage />
                </Tab>
                <Tab isSelected={this.state.selectedSubNav === 'Audience'}>
                    <LinkedinAudience />
                </Tab>
                <Tab isSelected={this.state.selectedSubNav === 'Post'}>
                    <LinkedinPost />
                </Tab>
            </TabNav>
        )
    }
}
