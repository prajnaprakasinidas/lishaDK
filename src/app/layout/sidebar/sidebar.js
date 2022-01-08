import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { SideBarData } from "./sidebardata";
import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

import './sidebar.scss';

const Sidebar = () => {

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            {props.title}
        </Tooltip>
    );

    const [appState, changeState] = useState({
        activeObject: null,
        object: SideBarData
    });

    function toggleActiveClass(index) {
        if (appState.object[index] === appState.activeObject) {
            return "icz-sidebarlist active"
        } else {
            return "icz-sidebarlist"
        }
    }

    function toggleActive(index) {
        changeState({ ...appState, activeObject: appState.object[index] })
        if (window.location.href.includes('ri.icogz.com')) { window.location.href = 'https://ri.icogz.com' }
        // if (window.location.href.includes('https://analytics.icogz.com/dashboard_main/dev/dashboard_crm.html')) { window.location.href = 'https://analytics.icogz.com/dashboard_main/dev/dashboard_crm.html' }
        // if (window.location.href.includes('https://analytics.icogz.com/Dashboard_Main/Dev/social_youtube.aspx')) { window.location.href = 'https://analytics.icogz.com/Dashboard_Main/Dev/social_youtube.aspx' }
        // if (window.location.href.includes('https://analytics.icogz.com/Dashboard_Main/Dev/Website_Overview.aspx')) { window.location.href = 'https://analytics.icogz.com/Dashboard_Main/Dev/Website_Overview.aspx' }
        // if (window.location.href.includes('http://draft.icogz.com:8051/ecom/customer/')) { window.location.href = 'http://draft.icogz.com:8051/ecom/customer/' }
    }

    return (
        <div className="icz-sidebarContainer">
            <div className="icz-sidebarwrapper">
                <ul className="icz-sidebarul">
                    {SideBarData.map((item, index) => {
                        return (
                            <OverlayTrigger
                                placement="right"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip(item)}
                            >
                                <li key={index} onClick={() => { toggleActive(index) }} className={toggleActiveClass(index)}>
                                    <Link to={item.path} className="icz-sidebarlink">
                                        {item.icon}
                                    </Link>
                                </li>
                            </OverlayTrigger>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;