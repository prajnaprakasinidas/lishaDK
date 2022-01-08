import React from 'react';
import { Dropdown } from 'react-bootstrap';
import '../../../shared/components/dropdown/dropdown.scss';

export default function CustomerDropdown() {
   
  
    return (
        
        <Dropdown className='d-block'>
        <Dropdown.Toggle className="icz-Dropdown" id="iczCustomerDropdown">
        All Personas
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Bargain Hunters</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Need Attention</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Lost</Dropdown.Item>
            <Dropdown.Item href="#/action-4">Loyalists</Dropdown.Item>
            <Dropdown.Item href="#/action-5">Promising</Dropdown.Item>
            <Dropdown.Item href="#/action-6">At Risk</Dropdown.Item>
            <Dropdown.Item href="#/action-7">Champions</Dropdown.Item>
            <Dropdown.Item href="#/action-8">Potential Loyalists</Dropdown.Item>
            <Dropdown.Item href="#/action-9">Hibernating</Dropdown.Item>
            <Dropdown.Item href="#/action-10">About To Sleep</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
       
    )
}
