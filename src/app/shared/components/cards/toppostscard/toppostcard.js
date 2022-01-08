import React, { Component } from 'react'
import Image from 'react-bootstrap/esm/Image';
import Col from "react-bootstrap/esm/Col";
import '../card.scss';

export class TopPostCard extends Component {
    render() {
        return (
            <div key={this.props.index} className={this.props.CardClass}>
                <div className="icz-pcard">
                    <Col lg={12} className="icz-pcard-header">
                        <Col lg={3} className="icz-pcard-iconwrapper">
                            <Image src={this.props.CardImg} className="icz-profileimg" />
                        </Col>
                        <Col lg={7} className="icz-titlewrapper">
                            <div className="icz-title">{this.props.CardTitle}</div>
                            <div className="icz-subtitle">{this.props.CardSubTitle}</div>
                        </Col>
                        <Col lg={2} className="icz-pcard-iconwrapper">
                        {this.props.CardIcon}
                        </Col>
                    </Col>
                    <div className="icz-postscard-body">
                        <div className="icz-detailsrow">
                        <div className="icz-pcard-detailsrowtitlewrapper">
                          <h3 className="icz-detailsrowtitle">{this.props.CardDiscription}</h3>  
                        <p className="icz-detailsrowsubtitle">{this.props.CardDateandTime}</p>
                        </div>
                            <div className="icz-pcard-detailsrowtitlewrapper">
                                <Col lg={12} className="icz-detailsrowtitle  d-flex">
                                   <Col lg={10} className="icz-detailsrowtitle">
                                   <span className="">{this.props.CardLikes}</span>
                                    <span className="">{this.props.CardUserdetails}</span>
                                   </Col>
                                   <Col lg={2} className="icz-iconsection">
                                   
                                        {this.props.InfoIcon}
                                   
                                   </Col>
                                </Col>
                               
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        )
    }
}
