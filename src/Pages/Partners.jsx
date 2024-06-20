import React from 'react'
import Navbar from '../Layouts/Component/Navbar'
import Header from '../Layouts/Component/Header'
import { Box, Grid, Typography } from '@mui/material'
import Footer from '../Layouts/Component/Footer'

const Partners = () => {
    const data = [
        {
            src: '/partner-agrosiz.png'
        },
        {
            src: '/partner-cbheng.png'
        },
        {
            src: '/partner-bisentino.jpg'
        },
        {
            src: '/partner-bisentino.jpg'
        },
        {
            src: '/partner-agrosiz.png'
        },
        {
            src: '/partner-cbheng.png'
        },
    ]
    return (
        <div>
            <Navbar />
            <Header title="PARTNERS" src="/section1.jpg" />
            <Box sx={{ backgroundColor: '#F8F9FA', padding: '100px', overflow: 'hidden' }}>
                <Grid container spacing={5}>
                    {data.map((val, ind) => (
                        <Grid key={ind} item lg={4}>
                            <Box sx={{ backgroundColor: 'white', padding: '20px', width: '100%' }}>
                                <img src={val.src} alt="" style={{ height: '10vh', width: '100%', objectFit: 'cover' }} />
                            </Box>
                        </Grid>
                    ))}

                </Grid>
            </Box>
            <Footer />
        </div>
    )
}

export default Partners