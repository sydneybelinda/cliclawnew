"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@mui/material'
import Grid from '@mui/material/Grid';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const About = ({ subTitle, title, videoId, className = '', signature, pragraphs, images, changeOrder = "" }) => {
    const [videoVisible, setVideoVisible] = useState(false);
    const handlePlayVideo = () => {
        setVideoVisible(true);
    };
    return (
        <Grid className={`aboutArea ${className}`}>
            <Grid container spacing={4} className="container">
                <Grid 
                size={{md:6, xs:12}}
                    className="changeOrder">
                    <Grid className="aboutImageWrap">
                        <img src={images} alt="" />
                        {videoId && !videoVisible && (
                            <Button onClick={handlePlayVideo} className="playBtn">
                                <PlayArrowIcon />
                            </Button>
                        )}
                        {videoId && videoVisible && (
                            <iframe
                                width="560"
                                height="315"
                                src={`https://www.youtube.com/embed/${videoId}`}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        )}
                    </Grid>
                </Grid>
                <Grid    size={{md:6, xs:12}}>
                    <Grid className="aboutContent">
                        {subTitle && <span className="subtitle">{subTitle}</span>}
                        <h2>{title}</h2>
                    
                        {pragraphs.map((text,i) => (
                            <p key={i}>{text}</p>
                        ))}
                        <Link href='/about'>
                            <Button className="btnStyle">More About Us..</Button>
                        </Link>
                        {signature && <Grid className="signature">
                            <img src={signature} alt="" />
                        </Grid>}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
export default About