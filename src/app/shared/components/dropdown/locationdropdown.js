import React, { Component } from 'react';
import Select from 'react-select';
import axios from 'axios'
import './dropdown.scss';

export class LocationDropdown extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    // getOptions() {
    //     // const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    //     const data = this.state.dropdownData;

    //     const options = data.map(d => ({
    //         "value": d.id,
    //         "label": d.name
    //     }))

    //     this.setState({ selectOptions: options })
    //     console.log(this.state.selectOptions)
    // }

    handleChange(e) {
        this.props.handleStateOnChange(e)
    }
    // componentDidMount() {
    //     this.getOptions()

    // }


    render() {
        return (
            <div>
                <Select value={this.props.selectedOptions} options={this?.props?.stateList} onChange={this.handleChange.bind(this)} />
            </div>
        )
    }
}