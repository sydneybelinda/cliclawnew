// import Image from "next/image";
import React from 'react'
import type { Metadata } from "next";
import Head from 'next/head'

import HeaderTop from '../components/HeaderTop'
import HeaderBottom from '../components/HeaderBottom'
import HeroSlider from '../components/HeroSlider'
import Service from '../components/Service'
import About from '../components/About'
import ServiceArea from '../components/ServiceArea'
// import Portfolio from '../components/Portfolio'
// import Testmonial from "../components/Testmonial";
import ContactArea from '../components/ContactArea'
// import TeamMember from '../components/TeamMember'
// import CounterArea from '../components/CounterArea'
// import BlogArea from '../components/BlogArea'
import NewsLetter from '../components/Newsletter'
import db from "../utils/dbconnect"

// import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Cliclaw - Expert Lawyers in Sydney",
  description: "Barristar – Lawyer and Attorney Next Js Template",
};

const aboutText = ['If your business is in need of help, you are seeking a trusted lawyer in Sydney or you are in trouble with Police - Local, District, Supreme and Federal Courts. It’s our business to help.', ' Cliclaw are the prefered Sydney Lawyers for many people.','If you are seeking lawyers in Sydney, Our expertise is assisting our clients win not only minor matters, but also complex cases. Our Sydney Lawyers provide sound, accurate, reliable, timely legal counsel and services, and are well known for being able to relay the legal world in plain language.','We are an honest, friendly and professional Sydney law firm servicing the greater Sydney area. Our goal is to build trust and long-term relationships with our clients. Victory is very important and we will fight for you as hard as we can within the bounds of the law.','We are confident working with both individual and business clients. Business clients include:','','Start-ups and new business ventures','Locally established businesses','International Business','','We are experienced Criminal lawyers in Sydney'
]

const portfolio = [
    {
        image: '/images/studies/1.jpg',
        title: 'General Service',
        subtitle: 'Corporate',
        id: 1
    },
    {
        image: '/images/studies/2.jpg',
        title: 'Personal Issue',
        subtitle: 'General',
        id: 2
    },
    {
        image: '/images/studies/3.jpg',
        title: 'Business Accounting',
        subtitle: 'Business',
        id: 3
    },
    {
        image: '/images/studies/4.jpg',
        title: 'Accounting issue',
        subtitle: 'Criminal',
        id: 4
    },
    {
        image: '/images/studies/5.jpg',
        title: 'Business Accounting',
        subtitle: 'Family Issue',
        id: 5
    }
]



export default async function Home() {


    const practices = await db.all("SELECT * FROM practice");

   

  return (
    <>
        <Head>
            <title>CLICLAW - Sydney Lawyers</title>
        </Head>
        <header className="headerArea">
            <HeaderTop className="headerTop" />
            <HeaderBottom className="headerBottomArea" practices={practices} />
        </header>
        <HeroSlider />
        <Service className="bgColor" />
        
        <About
              title="About Us"
              images="/images/about/aoife.jpg"
              signature="/images/about/1.png"
              pragraphs={aboutText} subTitle={undefined} videoId={undefined}        />
        <ServiceArea
            title="How Can We Help You"
            subTitle="Area Of Practice"
            className="bgWhite"
            practices={practices}
        />
        {/* <Portfolio
              title="Our Resent Case Studies"
              subTitle="Here Our Best Work"
              portfolioItem={portfolio} fullWidth={undefined}        /> */}
        
        {/* <Testmonial /> */}
        <ContactArea />
        {/* <TeamMember
            title="Qualified Attorneys "
            subTitle="Meet Our Experts"
            slider={true}
        />
        <CounterArea />
        <BlogArea
            title="Latest News"
            subTitle="From Our Blog"
        /> */}
        <NewsLetter />
    </>
)
}



