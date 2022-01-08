import React, { Component } from "react";
import Wrapper from '../../../helpers/wrapper';
import '../../../modules/social/social.scss';

export class TabNav extends Component {
    render() {
        return (
            <Wrapper>
                <ul className="icz-tabslist">
                    {
                        this.props.tabs.map((tab, index) => {
                            const active = (tab === this.props.selected ? " active" : '');
                            return (
                                <li className={"icz-tabwrapper" + active} key={tab}>
                                    <div className="icz-tab" onClick={() => this.props.setSelected(tab)}>
                                        {this.props.icon[index]}
                                        {tab}
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
                {this.props.children}
            </Wrapper>
        );
    }
}