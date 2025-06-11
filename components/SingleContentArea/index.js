"use client"
import React from 'react'
import { Grid } from '@mui/material'
// import CheckIcon from '@material-ui/Check';
const SingleContentArea = ({ className = "", avatar, service }) => {
console.log(service)

    return (
        <Grid className={`singleContentArea ${className}`}>
            <Grid className="singleContentImg">
                <img src={service.image} alt={service.title} />
            </Grid>
            <Grid className="singleContentWrap">
                <h3>{service.title}</h3>
                <h5>{service.subtitle}</h5>
                 <div dangerouslySetInnerHTML={{ __html: service.content }} />
                {/* <p>{service.content}</p> */}
                {/* {avatar && (
                    <Grid className="avatarWra">
                        <Grid container spacing={4}>
                            <Grid item sm={4} xs={12}>
                                <img src={service.avatarImg} alt={service.subcat} />
                            </Grid>
                            <Grid item sm={8} xs={12}>
                                <h4>{service.subcat}</h4>
                                <ul>
                                    
                                    {service.featured && (
                                        service.featured.map(list => (
                                        <li key={list}> {list}</li>
                                    )))}

                                </ul>
                            </Grid>
                        </Grid>
                    </Grid>
                )} */}
            </Grid>
        </Grid>
    )
}
export default SingleContentArea