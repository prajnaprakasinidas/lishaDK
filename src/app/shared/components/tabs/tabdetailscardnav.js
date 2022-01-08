import React, { Component } from 'react'
import Wrapper from '../../../helpers/wrapper';
import '../../../modules/social/social.scss';
import { TabDetailsCard } from "../cards/tabdetailscard/tabdetailscard";
import { Carousel } from "../carousel/carousel";


export class DetailsCardTabNav extends Component {
    setSelected() {
        // this.setState({ selected: tab });
        // alert('asdgh')
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
                <div className="icz-carouselcontainer d-flex flex-row overflow-auto">
                {
                            this.props.tabs.map((tab, index) => {
                                const active = (tab === this.props.selected ? " active" : '');
                                return (
                                    <TabDetailsCard
                                        IsNumber={false}
                                        CardClass={"icz-cardwrapper " + active}
                                        key={tab}
                                        CardIcon={this.props.icon[index]}
                                        CardTitle={tab}
                                        RowOneCurrentValue={this.props.RowOneCurrentValue[index]}
                                        RowOnePreviousValue={this.props.RowOnePreviousValue[index]}
                                        RowOneTitle="Paid"
                                        
                                        onClick={() => this.props.setSelected(tab)} />
                                )
                            })
                        }
            </div>
            {this.props.children}
            </Wrapper>
        )
    }
}
