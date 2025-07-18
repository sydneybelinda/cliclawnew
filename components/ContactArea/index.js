"use client"
import React from 'react'
import Form from '../Form'
import { Parallax } from 'react-parallax';
import { Grid } from '@mui/material'
const ContactArea = ({ className = '' }) => {
    return (
        <Parallax
            bgImage="/images/contact/1.jpg"
            bgImageAlt="the cat"
            contentClassName={`contactArea ${className}`}
            strength={200}>
            <Grid container spacing={4} className="container">
                <Grid
                   size={{lg:5, xs:12}}
                >
                    <Grid className="contactInfo">
                        <span>For Our Honorabe Clients</span>
                        <h2>Free Consulting</h2>
                        <h6>Call us 24/7 at (888)123-4567 or fill out the form.</h6>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less able English.</p>
                    </Grid>
                </Grid>
                <Grid 
                   size={{lg:7, xs:12}}>
                    <Form />
                </Grid>
            </Grid>
        </Parallax>
    )
}
export default ContactArea