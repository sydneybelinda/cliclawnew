import React, { Fragment } from 'react'
import { Grid } from '@mui/material'
import type { Metadata } from "next";
import HeaderTop from '../../components/HeaderTop'
import HeaderBottom from '../../components/HeaderBottom'
import Breadcumb from '../../components/Breadcumb'
import NewsLetter from '../../components/Newsletter'
import Form from '../../components/Form'
import db from "../../utils/dbconnect"

// import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Cliclaw - Contact Details",
  description: "Contact Details for Clic Law",
};


const breadcumbMenu = [
    { name: 'Home', route: '/' },
    { name: 'Contact', },
]


export default async function Contact() {

    const practices = await db.all("SELECT * FROM practice");

   

  return (
    <>
   <header className="headerArea">
                <HeaderTop className="headerTop" />
                <HeaderBottom className="headerBottomArea headerBottomAreaStyelTwo" practices={practices} />
            </header>
            <Breadcumb
                className="breadcumbArea"
                title="Contact"
                breadcumbMenu={breadcumbMenu}
                background="/images/breadcumb/1.jpg"
            />

            <Grid className="contactusPageArea">
                <Grid container spacing={2} className="container">
                    <Grid 
                     size={{md:5, xs:12}}
                    >
                        <Grid className="contactUsInfo">
                            <h3>Our Contacts</h3>
                            <p>For friendly, proffessional advice - Contact us now
                                </p>
                            <h4>Address</h4>
                            <span> {process.env.NEXT_PUBLIC_ADDRESS}</span>
                            <h4>Phone</h4>
                            <span>{ process.env.NEXT_PUBLIC_PHONE}</span>
                            <h4>Email</h4>
                            <span>{ process.env.NEXT_PUBLIC_EMAIL}</span>
                        </Grid>
                    </Grid>
                    <Grid 
                     size={{md:7, xs:12}}>
                        <Grid className="contactUSForm">
                            <h3>Quick Contact Form</h3>
                            <Form
                                addressInfo={true}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <NewsLetter />
    </>
)
}



