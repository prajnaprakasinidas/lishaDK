import React, { Component } from 'react';
import './percentagemetricchange.scss';

export default class GrowthChange extends Component {
    render() {

        let classList = this.props.Class + ' icz-metricvalue';

        return (
            <div className="icz-metricchangesection">
                <div className="icz-iconsection">
                    {this.props.Icon}
                </div>
                <div className={classList}>
                    {this.props.Result}<span>%</span>
                </div>
            </div>
        )
    }
}



