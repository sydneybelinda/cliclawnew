"use client"
import React, { Fragment } from "react";
import Slider from "react-slick";
import Link from 'next/link';
import { Grid, Button } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SectionTitle from '../Title'

const teams = [
    {
        name: 'Alecgander Harry',
        level: 'Business Lawyer',
        image: '/images/expert/1.jpg',
        id: 1,
        socialMedia: [
            'facebook', 'twitter', 'linkedin', 'instagram'
        ]
    },
    {
        name: 'Lily Watson',
        level: 'Family Lawyer',
        image: '/images/expert/2.jpg',
        id: 2,
        socialMedia: [
            'facebook', 'twitter', 'linkedin', 'instagram'
        ]
    },
    {
        name: 'Willam Stephen',
        level: 'Criminal Lawyer',
        image: '/images/expert/3.jpg',
        id: 3,
        socialMedia: [
            'facebook', 'twitter', 'linkedin', 'instagram'
        ]
    },
    {
        name: 'Eshan Golly',
        level: 'Business Lawyer',
        image: '/images/expert/4.jpg',
        id: 4,
        socialMedia: [
            'facebook', 'twitter', 'linkedin', 'instagram'
        ]
    },
    {
        name: 'Daniel Dambeldor',
        level: 'Family Lawyer',
        image: '/images/expert/5.jpg',
        id: 5,
        socialMedia: [
            'facebook', 'twitter', 'linkedin', 'instagram'
        ]
    },
    {
        name: 'Darcy Alec',
        level: 'Criminal Lawyer',
        image: '/images/expert/6.jpg',
        id: 6,
        socialMedia: [
            'facebook', 'twitter', 'linkedin', 'instagram'
        ]
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

const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SlickArrowRight />,
    prevArrow: <SlickArrowLeft />,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};
const TeamMember = ({ className = '', title, subTitle, slider, noGutters }) => {
    return (
        <Grid className={`teamArea ${className}`}>
            <Grid container spacing={!noGutters ? 0 : 4} className="container">
                <Grid item xs={12}>
                    <SectionTitle
                        title={title}
                        subTitle={subTitle}
                    />
                </Grid>
                {slider ? (
                    <Grid item xs={12}>
                        <Slider className="teamSlideArea" {...settings}>
                            {teams.map((team, i) => (
                                <Grid key={i} className="teamWrapper">
                                    <Grid className="teamImage">
                                        <Link as={`/attorneys/${team.id}`} href={`/attorneys/[id]`}><img src={team.image} alt={team.name} /></Link>
                                    </Grid>
                                    <Grid className="teamContent">
                                        <h3> <Link as={`/attorneys/${team.id}`} href={`/attorneys/[id]`}>{team.name}</Link></h3>
                                        <span>{team.level}</span>
                                        <ul>
                                            {team.socialMedia.map(social => (
                                                <li key={social}>
                                                    <a href="#">
                                                        {social === 'facebook' && <FacebookIcon />}
                                                        {social === 'linkedin' && <LinkedInIcon />}
                                                        {social === 'instagram' && <InstagramIcon />}
                                                        {social === 'twitter' && <TwitterIcon />}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </Grid>
                                </Grid>
                            ))}
                        </Slider>
                    </Grid>
                ) : (
                    <Fragment>
                        {teams.map((team, i) => (
                            <Grid key={i} item lg={4} md={6} xs={12}>
                                <Grid className="teamWrapper">
                                    <Grid className="teamImage">
                                        <Link as={`/attorneys/${team.id}`} href={`/attorneys/[id]`}><img src={team.image} alt={team.name} /></Link>
                                    </Grid>
                                    <Grid className="teamContent">
                                        <h3> <Link as={`/attorneys/${team.id}`} href={`/attorneys/[id]`}>{team.name}</Link></h3>
                                        <span>{team.level}</span>
                                        <ul>
                                            {team.socialMedia.map(social => (
                                                <li key={social}>
                                                    <a href="#">
                                                        {social === 'facebook' && <FacebookIcon />}
                                                        {social === 'linkedin' && <LinkedInIcon />}
                                                        {social === 'instagram' && <InstagramIcon />}
                                                        {social === 'twitter' && <TwitterIcon />}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </Grid>
                                </Grid>
                            </Grid>
                        ))}
                    </Fragment>
                )}
            </Grid>
        </Grid>
    )
}
export default TeamMember