import React, { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

import DatePicker from '../../shared/components/datepicker/datepicker';
import {CampaignDropdown} from '../../shared/components/dropdown/campaigndropdown';


import IconCalendar from '../../../assets/images/icons/calendarIcon';

import './pageheader.scss';
import Image from 'react-bootstrap/esm/Image';

import StickyLogo from '../../../assets/images/icons/icon.png'
import IconPdf from '../../../assets/images/icons/pdfIcon';


const popover = (
    <Popover id="popover-basic">
        <DatePicker />
    </Popover>
);


const PageHeader = (props) => {

    const [showDatePicker, setshowDatePicker] = useState(false);

    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {

            setScroll(window.scrollY > 75);
        });
        
    }, []);

    return (
        <Container className={scroll ? "icz-section-padding icz-pageheaderwrapper sticky" : "icz-section-padding icz-pageheaderwrapper"} fluid>
            <div className="icz-pageheadercontainer">
                <div className="icz-stickylogowrapper">
                    <Image src={StickyLogo} className="icz-stickylogo" />
                </div>
                <div className="p-0 icz-headerdetails d-flex justify-content-between">
                    <Col className="p-0">
                        <h2 className="icz-pagetitle">{props.pageTitle}</h2>
                    </Col>

                    <Col xs={12} md={10} className="p-0 icz-pagefiltersection">
                        <CampaignDropdown />

                        <OverlayTrigger rootClose trigger='click' placement="bottom" overlay={popover}>
                            <div onClick={() => setshowDatePicker(!showDatePicker)} className="icz-datepickersection">
                                <div className="icz-datepickerwrapper">
                                    <div className="icz-date icz-fromdate">
                                        01 Jan 2021
                                    </div>
                                    <div className="text-secondary-grey">to</div>
                                    <div className="icz-date icz-todate">
                                        15 Feb 2021
                                    </div>
                                    <IconCalendar className="icz-datepickericon" />
                                </div>
                            </div>
                        </OverlayTrigger>

                        <div className="icz-btnwrapper">
                            <button className="icz-themebtn">
                                <IconPdf className="icz-btnicon"/> Export</button>
                        </div>

                    </Col>
                </div>
            </div>

        </Container>
    )
}

export default PageHeader;