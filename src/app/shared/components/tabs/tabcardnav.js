import React, { Component } from "react";
import Wrapper from '../../../helpers/wrapper';
import '../../../modules/social/social.scss';
import { TabCard } from "../cards/tabcard/tabcard";
import { Carousel } from "../carousel/carousel";

export class CardTabNav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: this.props.selected
        }
    }

    render() {
        const CarouselSettings = {
            slidesToShow: 5,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                }
            ]
        }
        return (
            <Wrapper>
                <div className="icz-carouselcontainer d-flex flex-row">
                    {/* <Carousel
                        Settings={CarouselSettings}
                        class={"icz-cardcontainer"}
                        SliderCards={
                            this.props.tabs.map((tab, index) => {
                                return (

                                    <TabCard
                                        index="1"
                                        IsNumber={false}
                                        CardClass={(tab == this.state.selected ? "icz-cardwrapper active" : 'icz-cardwrapper')}
                                        key={tab}
                                        CardIcon={this.props.icon[index]}
                                        CardTitle={tab}
                                        RowOneCurrentValue={this.props.RowOneCurrentValue[index]}
                                        RowOnePreviousValue={this.props.RowOnePreviousValue[index]}
                                        RowOneTitle={this.props.RowOneTitle[index]}
                                        RowTwoCurrentValue={this.props.RowTwoCurrentValue[index]}
                                        RowTwoPreviousValue={this.props.RowTwoPreviousValue[index]}
                                        RowTwoTitle={this.props.RowTwoTitle[index]}
                                        onClick={() => this.props.setSelected(tab)} />

                                )
                            })
                        }>
                    </Carousel> */}
                        {
                            this.props.tabs.map((tab, index) => {
                                const active = (tab === this.props.selected ? " active" : '');
                                return (
                                    <TabCard
                                        IsNumber={false}
                                        CardClass={
                                            // this.props.isDisabled[index] + 
                                            ` icz-cardwrapper` + active}
                                        key={tab}
                                        CardIcon={this.props.icon[index]}
                                        CardTitle={tab}
                                        RowOneCurrentValue={this.props.RowOneCurrentValue[index]}
                                        RowOnePreviousValue={this.props.RowOnePreviousValue[index]}
                                        RowOneTitle={this.props.RowOneTitle[index]}
                                        RowTwoCurrentValue={this.props.RowTwoCurrentValue[index]}
                                        RowTwoPreviousValue={this.props.RowTwoPreviousValue[index]}
                                        RowTwoTitle={this.props.RowTwoTitle[index]}
                                        onClick={() => this.props.setSelected(tab)} />
                                )
                            })
                        }
                </div>

                {this.props.children}
            </Wrapper>
        );
    }
}