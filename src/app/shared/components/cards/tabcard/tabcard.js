import React, { Component } from "react"

import Image from 'react-bootstrap/esm/Image';
import { NumberFormatter } from "../../../utilities/numberformatter";

import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

import '../card.scss';

export class TabCard extends Component {
    
    render() {

        const renderTooltip = (props) => (
            <Tooltip id="button-tooltip" {...props}>
              Impressions
            </Tooltip>
          );

        return (
            <OverlayTrigger
                placement="bottom"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
            >
                <div key={this.props.index} className={this.props.CardClass}>
                    <div className="icz-card" onClick={this.props.onClick} >
                        <div className="icz-cardheader">
                            <div className="icz-iconwrapper">
                                <Image src={this.props.CardIcon} className="icz-icon" />
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
                                <div className="icz-detailsrowtitlewrapper">
                                    <h3 className="icz-detailsrowtitle">{this.props.RowOneTitle}</h3>
                                </div>
                            </div>
                            <div className="icz-divider">
                            </div>
                            <div className="icz-detailsrow">
                                <div className="icz-valuesection">
                                    <div className="icz-currentvalue">
                                        <NumberFormatter Number={this.props.RowTwoCurrentValue} IsNumber={this.props.IsNumber} />
                                    </div>
                                    <span className="icz-valuedivider">/</span>
                                    <div className="icz-previousvalue">
                                        <NumberFormatter Number={this.props.RowTwoPreviousValue} IsNumber={this.props.IsNumber} />
                                    </div>
                                </div>
                                <div className="icz-detailsrowtitlewrapper">
                                    <h3 className="icz-detailsrowtitle">{this.props.RowTwoTitle}</h3>
                                </div>
                            </div>
                        </div>
                        <div className="icz-cardarrow"></div>
                    </div>
                </div>
            </OverlayTrigger >
        )
    }
}
