"use client"

import React from 'react'
import { Parallax } from 'react-parallax';
import { Grid } from '@mui/material'

const services = [
    {
        icon:"",
        subtitle: 'Book Your',
        title: 'Appointment',
        icon: "fi flaticon-lawyer",
    },
    {
        icon: "fi flaticon-scale",
        subtitle: 'Get Free',
        title: 'Expert Advice'
    },
    {
        icon: 'fi flaticon-network',
        subtitle: 'You Can Easily',
        title: 'Join Our Team'
    },
]
const Service = ({ className = '' }) => {
    return (
        <Parallax
            bgImage="/images/services/1.jpg"
            bgImageAlt="the cat"
            contentClassName={`serviceArea ${className}`}
            strength={200}>
            <Grid container spacing={4} className="container">
                {services.map((service, i) => (
                    <Grid
                    size={{xs:12, sm:6, md:4}}
                    key={i}>
                        <Grid className="serviceItem">
                            <Grid className="serviceIcon">
                                <i className={service.icon}></i>
                            </Grid>
                            <Grid className="serviceText">
                                <span>{service.subtitle}</span>
                                <h3>{service.title}</h3>
                            </Grid>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </Parallax>
    )
}
export default Service