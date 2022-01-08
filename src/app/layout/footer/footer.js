import React, { useState, useEffect } from "react";
import Wrapper from "../../helpers/wrapper";

const Footer = () => {

    const [date, setDate] = useState();

    const getYear = () => setDate(new Date().getFullYear())

    useEffect(() => {
        getYear();
    }, [])

    return (
        <Wrapper>
            <div className="icz-footerdetails">
                &copy;{date} Icogz 
            </div>
            <div className="icz-footerdetails">
                Created by Icogz 
            </div>
        </Wrapper>
    )
}

export default Footer;