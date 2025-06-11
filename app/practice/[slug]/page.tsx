import React, { Fragment } from 'react'
import { notFound } from 'next/navigation'
import Head from 'next/head'
import { Grid } from '@mui/material'
import HeaderTop from '../../../components/HeaderTop'
import HeaderBottom from '../../../components/HeaderBottom'
import Breadcumb from '../../../components/Breadcumb'
import NewsLetter from '../../../components/Newsletter'
import CetagorySidebar from '../../../components/CetagorySidebar'
import BannerSidebar from '../../../components/BannerSidebar'
import SingleContentArea from '../../../components/SingleContentArea'


// const services = [
//     {
//         title: 'Family Law',
//         content: 'It is a long established fact that a reader will be distracted by the readable content of ',
//         image: '/images/studies/1.jpg',
//         id: 1,
//         featured: ["The master-builder of human happiness.",
//             "Occasionally circumstances occur", "in which toil and pain", "Avoids pleasure itself,", "because it is pleasure", "who do not know how to pursue pleasure", "which of us ever undertakes", "To take a trivial example"],
//         subtitle: 'Family Law Organizations',
//         avatarImg: '/images/studies/5.jpg',
//     },
//     {
//         title: 'Personal Injury',
//         content: 'It is a long established fact that a reader will be distracted by the readable content of ',
//         image: '/images/studies/2.jpg',
//         id: 2,
//         featured: ["The of human happiness.", "in which toil and pain", "Avoids pleasure itself,", "because it is pleasure", "who do not know how to pursue pleasure", "which of us ever undertakes", "To take a trivial example"],
//         subtitle: 'Personal Injury Organizations',
//         avatarImg: '/images/studies/4.jpg',
//     },
//     {
//         title: 'Business Law',
//         content: 'It is a long established fact that a reader will be distracted by the readable content of ',
//         image: '/images/studies/3.jpg',
//         id: 3,
//         featured: ["which of us ever undertakes", "The of human happiness.", "in which toil and pain", "Avoids pleasure itself,", "because it is pleasure", "To take a trivial example"],
//         subtitle: 'Business Law Organizations',
//         avatarImg: '/images/studies/3.jpg',
//     },
//     {
//         title: 'Criminal Law',
//         content: 'It is a long established fact that a reader will be distracted by the readable content of ',
//         image: '/images/studies/4.jpg',
//         id: 4,
//         featured: ["To take a trivial example", "which of us ever undertakes", "The of human happiness.", "in which toil and pain", "Avoids pleasure itself,", "because it is pleasure",],
//         subtitle: 'Criminal Law Organizations',
//         avatarImg: '/images/studies/2.jpg',
//     },
//     {
//         title: 'Education Law',
//         content: 'It is a long established fact that a reader will be distracted by the readable content of ',
//         image: '/images/studies/5.jpg',
//         id: 5,
//         featured: ["To take a trivial example", "which of us ever undertakes", "The of human happiness.", "in which toil and pain", "Avoids pleasure itself,", "because it is pleasure",],
//         subtitle: 'Education Law Organizations',
//         avatarImg: '/images/studies/1.jpg',
//     },
//     {
//         title: 'Education Law',
//         content: 'It is a long established fact that a reader will be distracted by the readable content of ',
//         image: '/images/studies/5.jpg',
//         id: 6,
//         featured: ["To take a trivial example", "which of us ever undertakes", "The of human happiness.", "in which toil and pain", "Avoids pleasure itself,", "because it is pleasure",],
//         subtitle: 'Education Law Organizations',
//         avatarImg: '/images/studies/1.jpg',
//     },
   
// ]

// function getPostDataById(id) {
//     for (let i = 0; i < services.length; i++) {
//         if (services[i].id === parseInt(id)) {
//             return services[i];
//         }
//     }
// }



interface Cat {
      id: string,
        title:string,
        subtitle:string,
        content:string,
        featured:string,
        subcat:string,
        image:string,
        avatarImg:string
}
 
async function getCat(slug: string) {
  const res = await fetch(`http://localhost:3000/api/practice?slug=${slug}`, {
    cache: 'force-cache',
  })
  const cat: Cat = await res.json()
  if (!cat) notFound()
    // @ts-expect-error: TODO
  return cat[0]
}



export default async function ServiceDetails({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const  cat = await getCat(slug)

       const data = await fetch(`http://localhost:3000/api/practice`)
     const practices = await data.json()



// const ServiceDetails = ({ id }) => {
 //   const service = getPostDataById(id);

//  const service =     {
//         title: 'Education Law',
//         content: 'It is a long established fact that a reader will be distracted by the readable content of ',
//         image: '/images/studies/5.jpg',
//         id: 6,
//         featured: ["To take a trivial example", "which of us ever undertakes", "The of human happiness.", "in which toil and pain", "Avoids pleasure itself,", "because it is pleasure",],
//         subtitle: 'Education Law Organizations',
//         avatarImg: '/images/studies/1.jpg',
//     }

    const breadcumbMenu = [
        { name: 'Home', route: '/' },
        { name: 'Practice', route: '/practice' },
        { name: `${cat.title}`}

    ]
    return (
        <Fragment>
            <Head>
                <title>Service {cat.title}</title>
            </Head>
            <header className="headerArea">
                <HeaderTop className="headerTop" />
                <HeaderBottom className="headerBottomArea headerBottomAreaStyelTwo" practices={practices}/>
            </header>
            <Breadcumb
                title={cat.title}
                breadcumbMenu={breadcumbMenu}
                background='/images/breadcumb/1.jpg'
            />
            <Grid className="singleArea ptb100">
                <Grid container spacing={4} className="container">
                    <Grid size={{md:4, xs:12}}
                    >
                        <aside className="pr25">
                            <BannerSidebar
                                image="/images/practice/2.jpg" className={undefined}                            />
                            <CetagorySidebar
                                title="Category"
                                practices={practices}
                            />
                        </aside>
                    </Grid>
                    <Grid size={{md:8, xs:12}}>
                        <SingleContentArea
                            image="/images/practice/3.jpg"
                            avatar={true}
                            service={cat}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <NewsLetter
                className="newsLetterArea"
            />
        </Fragment>
    );
}
// export default ServiceDetails

// ServiceDetails.getInitialProps = async ({ query }) => {
//     const { id } = query;
//     return { id };
// };