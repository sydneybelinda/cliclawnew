"use client"
import React from 'react'
import { Grid } from "@mui/material";
import Link from 'next/link'
import SectionTitle from '../Title'

const Portfolio = ({ title, subTitle, className = '', fullWidth, portfolioItem }) => {
    return (
        <Grid className={`portfolioArea ${className}`}>
            <Grid container className="container">
                <Grid 
                   size={{xs:12}}
                >
                    <SectionTitle
                        title={title}
                        subTitle={subTitle}
                    />
                </Grid>
            </Grid>

            {!fullWidth ? (
                <Grid className="portfolioWrapper">
                    {portfolioItem.map((portfolio, i) => (
                        <Grid key={i} className="portfolioItem">
                            <img src={portfolio.image} alt={portfolio.title} />
                            <Grid className="portfolioContent">
                                <p>{portfolio.subtitle}</p>
                                <h3><Link
                                    href={`/case-stadies/[id]`}
                                    as={`/case-stadies/${portfolio.id}`}>{portfolio.title}</Link></h3>
                            </Grid>
                        </Grid>
                    ))}
                </Grid>
            ) : (
                <Grid container spacing={4} className="container">
                    {portfolioItem.map((portfolio, i) => (
                        <Grid key={i}
                        size={{md:4, sm:6, xs:12}}
                        >
                            <Grid className="portfolioItem">
                                <img src={portfolio.image} alt={portfolio.title} />
                                <Grid className="portfolioContent">
                                    <p>{portfolio.subtitle}</p>
                                    <h3><Link
                                        href={`/case-stadies/[id]`}
                                        as={`/case-stadies/${portfolio.id}`}>{portfolio.title}</Link></h3>
                                </Grid>
                            </Grid>
                        </Grid>
                    ))}
                </Grid>
            )}
        </Grid>
    )
}
export default Portfolio