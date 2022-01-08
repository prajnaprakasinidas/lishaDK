import React, { useState } from 'react'

import Select from 'react-select';

 const  Newdemo = params => {
    const data = [
        {
            value: 1,
            label: "Impression"
        },
        {
            value: 2,
            label: "Clicks"
        },
        {
            value: 3,
            label: "Spends"
        },
        {
            value: 4,
            label: "Leads"
        },
        {
            value: 5,
            label: "App Installs"
        },
       
    ];
    const [selectedOption, setSelectedOption] = useState(null);
    const handleChange = e => {
        console.log(e);
        setSelectedOption(e);
    }
    return (
        <div>
            <Select
                placeholder="Select Option"
                value={selectedOption} // set selected value
                options={data} // set list of the data
                onChange={handleChange}
                 // assign onChange function
            />
            {selectedOption && <div>
                <b>Selected Option</b><br />
                <div>{selectedOption.label}</div>
                <div>{selectedOption.value}</div>
               
            </div>}
        </div>
    )
}
export default Newdemo;
