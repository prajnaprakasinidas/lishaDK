import React, { Component } from 'react'
import Select from 'react-select';
import axios from 'axios'
import './dropdown.scss';

export class DailydataDropdown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dropdown_options: this.props.dropdown_options,
            dropdown_placeholder: this.props.dropdown_placeholder
        }
    }

    onTrigger = (event) => {
        console.log("event.value ", event.value);
        this.props.parentCallback(event.value);
        return false;
    }

    render() {
        console.log(this.state.selectOptions)
        return (
            <div>
              <Select placeholder={this.state.dropdown_placeholder}  options={this.state.dropdown_options} onChange={this.onTrigger} />  
            </div>
        )
    }
}
