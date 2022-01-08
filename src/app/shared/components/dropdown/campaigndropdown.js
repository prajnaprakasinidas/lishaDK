import React, { Component } from "react";
import Dropdown from 'react-bootstrap/Dropdown';

export class CampaignDropdown extends Component {
    render() {
        return (
            <Dropdown className="d-block">
                <Dropdown.Toggle className="icz-campaigndropdown" id="iczCampaignDropdown">
                    Choose Campaign
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Diwali Campaign</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Christmas Campaign</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">50% Off Campaign</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        )
    }
}

