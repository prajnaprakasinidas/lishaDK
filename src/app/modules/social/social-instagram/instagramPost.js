import React, { Component } from "react";

import Col from "react-bootstrap/esm/Col";

import Wrapper from "../../../helpers/wrapper";

import { InstagramPostOrganic } from "./instagramPostOrganic";
import { InstagramPostOverall } from "./instagramPostOverall";
import { InstagramPostPaid } from "./instagramPostPaid";

export class InstagramPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postImpressionsData: '[{"date":"2019-5-12","value1":"50","value2":"48","previousdate":"2019-5-5"},{"date":"2019-5-13","value1":"53","value2":"51","previousdate":"2019-5-6"},{"date":"2019-5-14","value1":"56","value2":"58","previousdate":"2019-5-7"},{"date":"2019-5-15","value1":"52","value2":"53","previousdate":"2019-5-8"},{"date":"2019-5-16","value1":"48","value2":"44","previousdate":"2019-5-9"},{"date":"2019-5-17","value1":"47","value2":"42","previousdate":"2019-5-10"},{"date":"2019-5-18","value1":"59","value2":"55","previousdate":"2019-5-11"}]',
            contentAnalysis: '[{"name": "Core", "pie": [{"category": "Cat #1","value": "100"}, {"category": "Cat #2","value": "100"}, {"category": "Cat #3","value": "50"}],"children": [{"name": "First","value": "160","pie": [{"category": "Cat #1","value": "60"}, {"category": "Cat #2","value": "100"}, {"category": "Cat #3","value": "50"}, {"category": "Cat #4","value": "60"}]},{"name": "Second","value": "250","pie": [{"category": "Cat #1","value": "100"}, {"category": "Cat #2","value": "190"}]},{"name": "Third","value": "450","pie": [{"category": "Cat #1","value": "50"}, {"category": "Cat #2","value": "100"}, {"category": "Cat #3","value": "120"}]}]}]',
            reachByContentType: '[{"country":"Lithuania","value":"401"},{"country":"Czech Republic","value":"300"},{"country":"Ireland","value":"200"},{"country":"Germany","value":"165"},{"country":"Australia","value":"139"},{"country":"Austria","value":"128"}]',
            postSentimentsPositive: '[{"country":"Lithuania","litres":501.9},{"country":"Germany","litres":165.8},{"country":"Australia","litres":139.9},{"country":"Austria","litres":128.3},{"country":"UK","litres":99},{"country":"Belgium","litres":60}]',
            postsubnav: 'Overall',
            search: '',
            setSearch: '',

        }

    }

    render() {

        const updateState = (navtab) => {
            this.setState({
                postsubnav: navtab
            })

        }

        // TOGGLE TABS SECTION
        const subnav = ["Overall", "Organic", "Paid"];
        let activeBtnClass = (this.state.postsubnav ? 'btn icz-tabbtn notactive': 'btn icz-tabbtn active');

        return (
            <Wrapper>
                <div className="icz-row">
                    <div className="icz-sectiontabcontainer">
                        <ul className="btn-group icz-tabgroup" role="group">
                            {subnav.map(navtab => (
                                <li
                                    type="button"
                                    key={navtab}
                                    className={this.state.postsubnav == navtab ? "btn icz-tabbtn active" : "btn icz-tabbtn"}
                                    onClick={() => updateState(navtab)}>
                                    {navtab}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <Col xs={12} className="overflox-x-hidden">
                        {this.state.postsubnav == "Overall" && (
                            <InstagramPostOverall />
                        )}
                        {this.state.postsubnav == "Organic" && (
                            <InstagramPostOrganic />
                        )}
                        {this.state.postsubnav == "Paid" && (
                            <InstagramPostPaid />
                        )}
                    </Col>
                </div>
            </Wrapper>
        )
    }
}
