"use client"
import React from "react";
import { Grid } from '@mui/material'
import Link from 'next/link'
import { Parallax } from 'react-parallax';
import SectionTitle from '../Title'

const services = [
    {
        icon: "fi flaticon-parents",
        title: 'Commercial Leasing',
        content: 'legally binding agreements between a landlord and a business tenant ',
        id: 1
    },
    {
        icon: "fi flaticon-wounded",
        title: 'Debt Recovery',
        content: 'Recover moneys owed from customers or clients who refuse to pay',
        id: 2
    },
    {
        icon: "fi flaticon-employee",
        title: 'Domestic Violence',
        content: 'It is a long established fact that a reader will be distracted by the readable content of ',
        id: 3
    },
    {
        icon: "fi flaticon-thief",
        title: 'Bankruptcy',
        content: 'It is a long established fact that a reader will be distracted by the readable content of ',
        id: 4
    },
    {
        icon: "fi flaticon-university-graduate-hat",
        title: 'AVO',
        content: 'It is a long established fact that a reader will be distracted by the readable content of ',
        id: 5
    },
    {
        icon: "fi flaticon-house",
        title: 'Driving Crimes & DUI',
        content: 'It is a long established fact that a reader will be distracted by the readable content of ',
        id: 6
    },
        {
        icon: "fi flaticon-house",
        title: 'Drug Crimes',
        content: 'It is a long established fact that a reader will be distracted by the readable content of ',
        id: 7
    },

        {
        icon: "fi flaticon-parents",
        title: 'Commercial Leasing',
        content: 'It is a long established fact that a reader will be distracted by the readable content of ',
        id: 8
    },
    {
        icon: "fi flaticon-wounded",
        title: 'Debt Recovery',
        content: 'It is a long established fact that a reader will be distracted by the readable content of ',
        id: 9
    },
    {
        icon: "fi flaticon-employee",
        title: 'Domestic Violence',
        content: 'It is a long established fact that a reader will be distracted by the readable content of ',
        id: 10
    },
    {
        icon: "fi flaticon-thief",
        title: 'Bankruptcy',
        content: 'It is a long established fact that a reader will be distracted by the readable content of ',
        id: 11
    },
    {
        icon: "fi flaticon-university-graduate-hat",
        title: 'AVO',
        content: 'It is a long established fact that a reader will be distracted by the readable content of ',
        id: 12
    },
    {
        icon: "fi flaticon-house",
        title: 'Driving Crimes & DUI',
        content: 'It is a long established fact that a reader will be distracted by the readable content of ',
        id: 13
    },
        {
        icon: "fi flaticon-house",
        title: 'Drug Crimes',
        content: 'It is a long established fact that a reader will be distracted by the readable content of ',
        id: 14
    },
    
]


const ServiceArea = ({ className = '', title, subTitle, practices }) => {
    return (
        <Parallax
            bgImage="/images/practice/1.jpg"
            bgImageAlt="the cat"
            contentClassName={`ourServiceArea ${className}`}
            strength={200}>
            <Grid container spacing={2} className="container">
                <Grid
                   size={{ xs:12}}
                >
                    <SectionTitle
                        title={title}
                        subTitle={subTitle}
                    />
                </Grid>
                {practices.map((service, index) => (
                    <Grid
                    size={{xl:4, xs:12, lg:4, md:6, sm:6 }}
                    
                    key={index}>
                        <Grid className="serviceWrap">
                            <Grid className="serviceIcon">
                                <i className={`fi ${service.icon}`}></i>
                            </Grid>
                            <Grid className="serviceContent">
                                <h3>
                                    <Link
                                        href={`${service.link}`}
                                        as={`${service.link}`}>{service.title}
                                    </Link>
                                </h3>
                                <p>{service.subtitle}</p>
                            </Grid>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </Parallax>

    )
}
export default ServiceArea