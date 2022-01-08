import React, { Component } from 'react';
import Select from 'react-select';
import axios from 'axios'
import './dropdown.scss';

export class SourceDropdown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dropdownData: [{ "id": 1, "name": "Impression" }, { "id": 2, "name": "Clicks" }, { "id": 3, "name": "Spends" }, { "id": 4, "name": "Leads" },  { "id": 5, "name": "App Installs" },  { "id": 6, "name": "Sales" }],
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
                <Select className="testing" options={this.state.selectOptions} onChange={this.handleChange.bind(this)} /> 
            </div>
        )
    }
}