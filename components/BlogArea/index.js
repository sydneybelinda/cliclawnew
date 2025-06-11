"use client"
import React from 'react'
import Link from 'next/link'
import { Grid } from '@mui/material'
import SectionTitle from '../Title'

const blogs = [
    {
        images: '/images/blog/1.jpg',
        title: 'Justice May For You If You Are Innocent',
        avatar: '/images/blog-page/6.jpg',
        name: 'By Aliza',
        time: 'Oct 12,2024',
        id: 1
    },
    {
        images: '/images/blog/2.jpg',
        title: 'Justice May For You If You Are Innocent',
        avatar: '/images/blog-page/6.jpg',
        name: 'By Aliza',
        time: 'Oct 12,2024',
        id: 2
    },
    {
        images: '/images/blog/3.jpg',
        title: 'Justice May For You If You Are Innocent',
        avatar: '/images/blog-page/6.jpg',
        name: 'By Aliza',
        time: 'Oct 12,2024',
        id: 3
    },
]


const BlogArea = ({ className = '', title, subTitle }) => {
    return (
        <Grid className={`blogArea ${className}`}>
            <Grid container spacing={2} className="container">
                <Grid item xs={12}>
                    <SectionTitle
                        title={title}
                        subTitle={subTitle}
                    />
                </Grid>
                {blogs.map(blog => (
                    <Grid key={blog.id}
                        item
                        md={4}
                        sm={6} 
                        xm={12} >
                        <Grid className="blogWrap">
                            <Grid className="blogImage">
                                <Link as={`/blog/${blog.id}`} href={`/blog/[id]`}>

                                    <img src={blog.images} alt={blog.title} />

                                </Link>
                            </Grid>
                            <Grid className="blogContent">
                                <h3><Link as={`/blog/${blog.id}`} href={`/blog/[id]`}>
                                    {blog.title}
                                </Link></h3>
                                <ul className="blogMeta">
                                    <li><img src={blog.avatar} alt="" /></li>
                                    <li>{blog.name}</li>
                                    <li>{blog.time}</li>
                                </ul>
                            </Grid>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    )
}
export default BlogArea