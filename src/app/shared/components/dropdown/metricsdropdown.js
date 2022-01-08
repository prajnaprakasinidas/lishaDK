import React, { Component } from 'react';
import Select from 'react-select';
import axios from 'axios'
import './dropdown.scss';

export class MetricsDropdown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dropdownData: [{ "id": 1, "name": "Campaign" }, { "id": 2, "name": "Ad Group" }, { "id": 3, "name": "AD" }, { "id": 4, "name": "Keywords" },],
            selectOptions: [],
            id: "",
            name: ''
        }
    }

    getOptions() {
        // const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        const data = this.state.dropdownData;

        const options = data.map(d => ({
            "value": d.id,
            "label": d.name

        }))

        this.setState({ selectOptions: options })

    }

    handleChange(e) {
        this.setState({ id: e.value, name: e.label })
    }

    componentDidMount() {
        this.getOptions()
    }


    render() {
        return (
            <div>
                <Select options={this.state.selectOptions} onChange={this.handleChange.bind(this)} />

            </div>
        )
    }
}
