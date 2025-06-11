"use client"
import React from 'react'
import { Grid } from '@mui/material'
import PlaceIcon from '@mui/icons-material/Place';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import Link from 'next/link';
const HeaderTop = props => {

    const phone = process.env.NEXT_PUBLIC_PHONE
    const phonetrim = process.env.NEXT_PUBLIC_PHONETRIM

    return (
        <Grid className={props.className}>                
            <Grid
                container
                alignItems="center"
                className="container headerTopMainWrapper">
                <Grid
                   size={{sm:6, md:5, lg:5, xs:12}}>
                    <ul className="d-flex accountLoginArea">
                        <li><PlaceIcon />{process.env.NEXT_PUBLIC_ADDRESS}</li>
                    </ul>
                </Grid>
                <Grid 
                   size={{sm:6, md:4, lg:5, xs:12}}
                className="hright">
                    <ul className="headerContact">
                        <li><PhoneAndroidIcon /><a href={"tel:"+ phonetrim}>{phone}</a></li>
                        <li><QueryBuilderIcon /> 9AM - 5PM</li>
                    </ul>
                </Grid>
                {/* <Hidden smDown> */}
                    <Grid
                       size={{md:3, lg:2, md:3, xs:12}}
                    className="text-right">
                        <Link className="btnStyle btnOutlined btnRadius" href={"tel:"+ phonetrim}>Call Us</Link>
                    </Grid>
                {/* </Hidden> */}
            </Grid>

        </Grid>
    )
}
export default HeaderTop