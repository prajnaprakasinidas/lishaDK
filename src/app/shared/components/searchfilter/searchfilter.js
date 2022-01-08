import React, { Component } from "react"

import Button from 'react-bootstrap/Button'
import IconSearch from "../../../../assets/images/icons/searchIcon";

import Wrapper from "../../../helpers/wrapper";

import './searchfilter.scss';

export default class SearchFilter extends Component {
    render() {
        return (
            <Wrapper>
                <div className="icz-inputwrapper">
                    <input
                        type="text"
                        className="form-control icz-input"
                        placeholder={this.props.Placeholder}
                        aria-label={this.props.AriaLable}
                        aria-describedby={this.props.AiraDescribedBy}
                        value={this.props.Search}
                        onChange={this.props.onChange}
                    />
                    <Button className="icz-searchbtn"><IconSearch className="icz-inputicon" /></Button>
                </div>
            </Wrapper>
        )
    }
}

