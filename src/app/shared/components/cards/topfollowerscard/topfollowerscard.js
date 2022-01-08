import React, { Component } from 'react'
import Image from 'react-bootstrap/esm/Image';
import Col from "react-bootstrap/esm/Col";
import '../card.scss';

export class TopFollowersCard extends Component {
    render() {
        return (
            <div key={this.props.index} className={this.props.CardClass}>
                <div className="icz-fcard">
                    <div className="icz-fcard-header">
                        <Image src={this.props.CardImg} className="icz-bannerimg" />
                    </div>
                    <div className="icz-fpostscard-body">
                        <div className="icz-detailsrow">
                            <Col lg={12} className="icz-fcard-detailsrowtitlewrapper">
                                <Col lg={3} sm={3} xs={12} className="icz-bannerlogo">
                                <Image src={this.props.CardLogoImg} className="icz-bannerlogoimg" />
                                </Col>
                                <Col lg={9} sm={9} xs={12} className="icz-bannerdetails">
                                    <Col lg={3} className="icz-titlewrapper">
                                    <div className="icz-title">{this.props.CardTitle1}</div>
                                    <div className="icz-subtitle">{this.props.CardSubTitle1}</div>
                                    </Col>
                                    <Col lg={3} className="icz-titlewrapper">
                                    <div className="icz-title">{this.props.CardTitle2}</div>
                                    <div className="icz-subtitle">{this.props.CardSubTitle2}</div>
                                    </Col>
                                    <Col lg={3} className="icz-titlewrapper">
                                    <div className="icz-title">{this.props.CardTitle3}</div>
                                    <div className="icz-subtitle">{this.props.CardSubTitle3}</div>
                                    </Col>
                                    <Col lg={3} className="icz-titlewrapper">
                                    <div className="icz-title">{this.props.CardTitle4}</div>
                                    <div className="icz-subtitle">{this.props.CardSubTitle4}</div>
                                    </Col>
                                </Col>
                            </Col>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
