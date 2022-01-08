import React, { Component } from 'react';
import Select from 'react-select';
import axios from 'axios'
import './dropdown.scss';

export class LocationDropdown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dropdownData: props?.stateList,
            selectedOptions: props?.selectedOptions,
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

    // handleChange(e) {
    //     this.setState({ id: e.value, name: e.label })

    // }
    // componentDidMount() {
    //     this.getOptions()

    // }


    render() {
        return (
            <div>
                <Select defaultValue={this.state.selectedOptions} options={this.state.dropdownData} onChange={(e) => this.props.handleStateOnChange(e)} />
            </div>
        )
    }
}