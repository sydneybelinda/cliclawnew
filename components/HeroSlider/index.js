"use client"
import React from 'react'
import { Button, Grid } from '@mui/material';
import Slider from "react-slick";
import Link from 'next/link'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const heroSliders = [
    {
        images: '/images/slider/slide-1.jpg',
        title: 'We are here to Help.',
        subTitle: 'When you really need it.',
        text: 'CLICLAW',
        button: 'Contact us now',
        link: 'tel:+61280418856'
    },
    {
        images: '/images/slider/slide-2.jpg',
        title: 'We Fight For Your Justice',
        subTitle: 'As Like A Friend.',
        text: 'CLICLAW',
        button: 'Contact us now',
        link: 'tel:+61280418856'
    },

]

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <Button
        {...props}
        className={
            "slick-prev slick-arrow" +
            (currentSlide === 0 ? " slick-disabled" : "")
        }
        aria-hidden="true"
        aria-disabled={currentSlide === 0 ? true : false}
        type="button"
    >
        <ArrowBackIosIcon />
    </Button>
);
const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <Button
        {...props}
        className={
            "slick-next slick-arrow" +
            (currentSlide === slideCount - 1 ? " slick-disabled" : "")
        }
        aria-hidden="true"
        aria-disabled={currentSlide === slideCount - 1 ? true : false}
        type="button"
    >
        <ArrowForwardIosIcon />
    </Button>
);

const HeroSlider = ({ className = '' }) => {
    const settings = {
        dots: true,
        infinite: true,
        arrows: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <SlickArrowRight />,
        prevArrow: <SlickArrowLeft />,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
        ]
    };
    return (
        <Slider className={`heroSliderArea ${className}`}
            {...settings}>
            {heroSliders.map((slider, i) => (

                <Grid key={i}>
                    <Grid
                        className="slideWrapper"
                        style={{ background: `url(${slider.images}) no-repeat center center / cover` }}
                    >
                        <Grid container className="container">
                            <Grid
                               size={{lg:8, xs:12}}
                            >
                                <p>{slider.text}</p>
                                <h2><span>{slider.title}</span> <span>{slider.subTitle}</span></h2>
                                <Link href={slider.link} className="btnStyle btnStyle3">
                                    {slider.button}
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            ))
            }
        </Slider >
    )
}
export default HeroSlider