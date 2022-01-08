import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './carousel.scss';
import Wrapper from "../../../helpers/wrapper";

export class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slides: this.props.SliderCards
        };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    };

    next() {
        this.slider.slickNext();
    };

    previous() {
        this.slider.slickPrev();
    };

    render() {

        const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
            <button
                {...props}
                className={
                    "slick-prev slick-arrow" +
                    (currentSlide === 0 ? " slick-disabled" : "")
                }
                aria-hidden="true"
                aria-disabled={currentSlide === 0 ? true : false}
                type="button"
            >
                Previous
            </button>
        );

        const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
            <button
                {...props}
                className={
                    "slick-next slick-arrow" +
                    (currentSlide === slideCount - 1 ? " slick-disabled" : "")
                }
                aria-hidden="true"
                aria-disabled={currentSlide === slideCount - 1 ? true : false}
                type="button"
            >
                Next
            </button>
        );

        let CarouselStandardSettings = {
            edgeFriction: 1,
            infinite: false,
            swipeToSlide: true,
            variableWidth: true,
            accessibility: true,
            prevArrow: <SlickArrowLeft />,
            nextArrow: <SlickArrowRight />,
            speed: 500,
            focusOnSelect: true,
            draggable: true,
            ...this.props.Settings
        };

        return (
            <Wrapper>
                <Slider className={this.props.Class} ref={c => (this.slider = c)} {...CarouselStandardSettings}>
                    {this.state.slides.map(function (slide) {
                        return (
                            <div key={slide}>
                                {slide}
                            </div>
                        );
                    })}
                </Slider>
                {/* <div style={{ textAlign: "right" }} >
                    <button className="icz-carouselbtn" onClick={this.previous}>
                        Previous
                    </button>
                    <button className="icz-carouselbtn" onClick={this.next}>
                        Next
                    </button>
                </div> */}
            </Wrapper>
        );
    }
}