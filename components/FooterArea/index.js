"use client"
import React from 'react'
import Link from 'next/link'
import { Grid } from '@mui/material'
const footerLinks = [
    {
        title: 'Quick Link', menus: [
            { name: 'Home', route: '/' },
            { name: 'Practice Area', route: 'practice' },
            { name: 'Our Team', route: 'team' },
            { name: 'Recent Case', route: 'case' },
            { name: 'Our Blog', route: 'blog' },
        ]
    },
    {
        title: 'Practice Area', menus: [
            { name: 'Family Law', route: 'practice' },
            { name: 'Criminal Law', route: 'practice' },
            { name: 'Parsonal Injury', route: 'practice' },
            { name: 'Real Estate Law', route: 'practice' },
            { name: 'Business Law', route: 'practice' },
        ]
    },
    {
        title: 'Contact Us', menus: [
            { name: 'Head Office Address' },
            { name: process.env.NEXT_PUBLIC_ADDRESS, },
            { name: 'Australia', },
            { name: 'Phone: ' + process.env.NEXT_PUBLIC_PHONE, },
            { name: 'Email: ' + process.env.NEXT_PUBLIC_EMAIL, },
        ]
    },
]

const FooterArea = () => {
    return (
        <footer className="footerArea">
            <Grid className="footerTopArea">
                <Grid
                    container
                    spacing={3}
                    className="container">
                    <Grid
                          size={{lg:3, sm:6, xs:12}}
                    >
                        <Grid className="footerLogo">
                            <Link href="/">
                                <img src="/images/logo/logo.png" alt="logo" />
                            </Link>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature</p>
                        </Grid>
                    </Grid>
                    {footerLinks.map((menu, i) => (
                        <Grid key={i}
                        size={{lg:3, sm:6, xs:12}}
                        >
                            <div className="footerWrap">
                                <h3>{menu.title}</h3>
                                <ul>
                                    {menu.menus.map((item, i) => (
                                        <li key={i}><Link href={`${item.route}`}>{item.name}</Link></li>
                                    ))}
                                </ul>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
            <Grid className="footerBottomArea">
                <Grid container spacing={3} className="container">
                    <Grid
                          size={{md:8, sm:10, xs:12}}
                    
                    >
                        <span>Privacy Policy | © 2025 CLic Law. All rights reserved</span>
                    </Grid>
                    <Grid
                      size={{md:4, sm:2, xs:12}}>
                        <ul className="socialListFooter">
                            <li><a href="#"><i className='fa fa-facebook'></i></a></li>
                            <li><a href="#"><i className='fa fa-twitter'></i></a></li>
                            <li><a href="#"><i className='fa fa-instagram'></i></a></li>
                        </ul>
                    </Grid>
                </Grid>
            </Grid>
        </footer>
    )
}
export default FooterArea