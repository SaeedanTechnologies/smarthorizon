import React, { useState, useEffect } from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useLocation } from 'react-router';

const Header = ({ title, description, align, w, pd, h, t }) => {
    const theme = useTheme();
    const location = useLocation();
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Set isVisible to true after a delay to trigger the fade-in effect
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 500); // Adjust the delay as needed

        return () => clearTimeout(timer);
    }, []); // Run only once when the component mounts

    const videoStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    };

    const img_overlay = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    };

    const img_text = {
        position: 'absolute',
        top: isSmall ? '50%' : '70%',
        left: '50%',
        transform: isSmall ? 'translate(-50%, -50%)' : 'translate(-50%, -50%)',
        textAlign: 'center',
        color: 'white',
        zIndex: 10,
    };

    const fadeInStyle = {
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 1s ease-in-out',
    };

    return (
        <Box style={{ position: 'relative', width: '100%', height: isSmall ? '90vh' : '120vh' }}>
            <video autoPlay loop muted style={videoStyle}>
                <source src="/background_video.mp4" type="video/mp4" />

            </video>
            <Box style={img_overlay} />
            <Box style={{ ...img_text, textAlign: align, width: w, paddingLeft: pd, height: h, top: t }}>
                {location.pathname === '/' && (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', flexDirection: 'column', ...fadeInStyle }}>
                        <img src="/Logo_white.png" alt="" style={{ height: isSmall ? '20vh' : '25vh' }} />
                        <Typography sx={{ fontSize: isSmall ? '50px' : '60px', fontWeight: 600, fontFamily: 'Montserrat, sans- serif' }}>SMART</Typography>
                    </Box>
                )}
                <Typography
                    sx={{
                        fontSize: isSmall || location.pathname === '/' ? '36px' : '80px',
                        fontWeight: 600,
                        ...fadeInStyle,
                        transitionDelay: '0.5s', // Delay the animation for title
                        fontFamily: 'Montserrat, sans- serif'
                    }}
                    variant={isSmall ? 'h4' : 'h3'}
                >
                    {title}
                </Typography>

            </Box>
        </Box >
    );
};

export default Header;
