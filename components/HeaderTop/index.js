"use client"
import React from 'react'
import { Grid, Hidden } from '@mui/material'
import PlaceIcon from '@mui/icons-material/Place';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import Link from 'next/link';
const HeaderTop = props => {
    return (
        <Grid className={props.className}>                
            <Grid
                container
                alignItems="center"
                className="container headerTopMainWrapper">
                <Grid
                   size={{sm:6, md:5, lg:5, xs:12}}>
                    <ul className="d-flex accountLoginArea">
                        <li><PlaceIcon /> Suite 101, 788A Pacific Hwy, Gordon</li>
                    </ul>
                </Grid>
                <Grid 
                   size={{sm:6, md:4, lg:5, xs:12}}
                className="hright">
                    <ul className="headerContact">
                        <li><PhoneAndroidIcon /><a href="tel:+61280418856"> +61 2 8041 8856</a></li>
                        <li><QueryBuilderIcon /> 9AM - 5PM</li>
                    </ul>
                </Grid>
                {/* <Hidden smDown> */}
                    <Grid
                       size={{md:3, lg:2, md:3, xs:12}}
                    className="text-right">
                        <Link className="btnStyle btnOutlined btnRadius" href="tel:+61280418856">Call Us</Link>
                    </Grid>
                {/* </Hidden> */}
            </Grid>

        </Grid>
    )
}
export default HeaderTop