import React, { Component } from "react";
import Wrapper from "../../../helpers/wrapper";

export class Tab extends Component {
    render() {
        if (this.props.isSelected) {
            return (
                <Wrapper>
                    {this.props.children}
                </Wrapper>
            );
        }

        return null;
    }
}
