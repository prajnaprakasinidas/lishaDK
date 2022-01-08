import React, { Component } from "react"

import '../card.scss';
import Image from 'react-bootstrap/esm/Image';
import PercentMetricChange from "../../percentmetricchange/percentmetricchange";
import { NumberFormatter } from "../../../utilities/numberformatter";


export class ChartCard extends Component {
    render() {
        return (
            <div key={this.props.index} className={this.props.CardClass}>
                <div className="icz-card">
                    <div className="icz-cardheader">
                        <div className="icz-iconwrapper">
                            {this.props.CardIcon}
                        </div>
                        <div className="icz-titlewrapper">
                            <h3 className="icz-title">{this.props.CardTitle}</h3>
                        </div>
                    </div>
                    <div className="icz-cardbody">
                        <div className="icz-detailsrow">
                            <div className="icz-valuesection">
                                <div className="icz-currentvalue">
                                    <NumberFormatter Number={this.props.RowOneCurrentValue} IsNumber={this.props.IsNumber} />
                                </div>
                                <span className="icz-valuedivider">/</span>
                                <div className="icz-previousvalue">
                                    <NumberFormatter Number={this.props.RowOnePreviousValue} IsNumber={this.props.IsNumber} />
                                </div>
                            </div>
                            <div className="icz-cardgrowthsection">
                                <PercentMetricChange IsStandard={true} CurrentValue={this.props.RowOneCurrentValue} PreviousValue={this.props.RowOnePreviousValue} />
                            </div>
                        </div>
                        <div className="icz-divider">
                        </div>
                        {this.props.chart}
                    </div>
                </div>
            </div>
        )
    }
}
