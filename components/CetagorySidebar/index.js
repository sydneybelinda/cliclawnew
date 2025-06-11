"use client"
import React from 'react'
import { Grid } from '@mui/material'
import Link from 'next/link'



const CetagorySidebar = ({ className = "", title, practices }) => {

    return (
        <Grid className={`cetagoryWrap ${className}`}>
            <h3 className="sidebarTitle">{title}</h3>
            <ul>
                {practices.map((p, i) => (
                    <li key={i}><Link href={`${p.link}`}>{p.title}</Link></li>
                ))}
            </ul>
        </Grid>
    )
}
export default CetagorySidebar