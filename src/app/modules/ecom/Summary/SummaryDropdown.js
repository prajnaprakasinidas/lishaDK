import React from 'react';
import { Dropdown } from 'react-bootstrap';
import '../../../shared/components/dropdown/dropdown.scss';

export default function SummaryDropdown() {
    return (
        
        <Dropdown className="d-block"> 
        <Dropdown.Toggle className="icz-Dropdown" id="iczSummarydropdown">
        Traffic Channels
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Traffic Channels</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Product</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
       
    )
}
