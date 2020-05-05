import React, {Component} from 'react';

// npm install react-slick --save npm install slick-carousel --save
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class SliderElem extends Component {
    render() {
        const settings = {
            dots: true,
            arrows: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            draggable: false,
            responsive: [
                {
                    breakpoint: 1300,
                    settings: {
                        arrows: false
                    }
                }, {
                    breakpoint: 1150,
                    settings: {
                        slidesToShow: 3,
                        arrows: false
                    }
                }, {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        arrows: false
                    }
                }, {
                    breakpoint: 625,
                    settings: {
                        slidesToShow: 1,
                        arrows: false
                    }
                }
            ]
        };

        return (
            <div>
                <Slider {...settings}>
                    <div className="card-wrap">
                        <div className="card">
                            <div
                                className="card-img"
                                style={{
                                background: "url(img/one.jpg) no-repeat center",
                                backgroundSize: "cover"
                            }}>
                                <div className="card-img-inner"></div>
                            </div>

                            <div className="card-info">
                                <div className="card-title">
                                    Title 1
                                </div>

                                <div className="card-text">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, a aliquam dolore
                                    perferendis iure incidunt?
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-wrap">
                        <div className="card">
                            <div
                                className="card-img"
                                style={{
                                background: "url(img/two.jpg) no-repeat center",
                                backgroundSize: "cover"
                            }}>
                                <div className="card-img-inner"></div>
                            </div>

                            <div className="card-info">
                                <div className="card-title">
                                    Title 2
                                </div>

                                <div className="card-text">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, a aliquam dolore
                                    perferendis iure incidunt?
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-wrap">
                        <div className="card">
                            <div
                                className="card-img"
                                style={{
                                background: "url(img/three.jpg) no-repeat center",
                                backgroundSize: "cover"
                            }}>
                                <div className="card-img-inner"></div>
                            </div>

                            <div className="card-info">
                                <div className="card-title">
                                    Title 3
                                </div>

                                <div className="card-text">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, a aliquam dolore
                                    perferendis iure incidunt?
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-wrap">
                        <div className="card">
                            <div
                                className="card-img"
                                style={{
                                background: "url(img/one.jpg) no-repeat center",
                                backgroundSize: "cover"
                            }}>
                                <div className="card-img-inner"></div>
                            </div>

                            <div className="card-info">
                                <div className="card-title">
                                    Title 4
                                </div>

                                <div className="card-text">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, a aliquam dolore
                                    perferendis iure incidunt?
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-wrap">
                        <div className="card">
                            <div
                                className="card-img"
                                style={{
                                background: "url(img/two.jpg) no-repeat center",
                                backgroundSize: "cover"
                            }}>
                                <div className="card-img-inner"></div>
                            </div>

                            <div className="card-info">
                                <div className="card-title">
                                    Title 5
                                </div>

                                <div className="card-text">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, a aliquam dolore
                                    perferendis iure incidunt?
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        )
    }
}

export default SliderElem;
