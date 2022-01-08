import React, { Component } from 'react'
import Select from 'react-select';
import axios from 'axios'
import './dropdown.scss';

export class TwitterPostDropdown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dropdownData: [{ "id": 1, "name": "All" }, { "id": 2, "name": "Tweets" }, { "id": 3, "name": "Poll" }],
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
        console.log(e)
        this.setState({ id: e.value, name: e.label })
    }

    componentDidMount() {
        this.getOptions()
    }

    render() {
        console.log(this.state.selectOptions)
        return (
            <div>
                <Select options={this.state.selectOptions} onChange={this.handleChange.bind(this)} />
            </div>
        )
    }
}
