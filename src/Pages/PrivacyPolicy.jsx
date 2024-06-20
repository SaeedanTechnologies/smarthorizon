import { Topic } from '@mui/icons-material';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

const PrivacyPolicy = () => {

    const theme = useTheme()
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'))

    const darkMode = useSelector((state) => state.theme.isLight);
    const headingStyle = {
        fontSize: '32px',
        fontWeight: 600,
        fontFamily: 'Montserrat, sans- serif',
        color: darkMode ? "#fff" : "#000",
        textAlign: 'center'
    }
    const subHeading = {
        fontSize: '32px',
        fontWeight: 600,
        fontFamily: 'Montserrat, sans- serif',
        color: darkMode ? "#fff" : "#000",
        // textAlign: 'center'
    }
    const DescStyle = {
        fontSize: '20px',
        fontFamily: 'Montserrat, sans- serif',
        color: darkMode ? "#fff" : "#000",
    }
    const listStyle = {
        fontSize: '20px',
        fontFamily: 'Montserrat, sans- serif',
        color: darkMode ? "#BF9A3F" : "#FED136",
        textDecoration: 'none'
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <Box sx={{ padding: isSmall ? '40px' : "50px 70px 50px 70px", background: darkMode ? "#000" : "#fff", display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Typography sx={headingStyle}>Smart S.r.L. Privacy Policy</Typography>
                <Typography sx={DescStyle}>This privacy policy will explain how our organization uses the personal data we collect from you when you use our website.</Typography>
                <Box>
                    <Typography sx={DescStyle}>Topics:</Typography>
                    <u style={listStyle}>
                        <li>What data do we collect?</li>
                        <li>How do we collect your data?</li>
                        <li>How will we use your data?</li>
                        <li>How do we store your data?</li>
                        <li>Marketing</li>
                        <li>What are your data protection rights?</li>
                        <li>What are cookies?</li>
                        <li>How do we use cookies?</li>
                        <li>What types of cookies do we use?</li>
                        <li>How to manage your cookies</li>
                        <li>Privacy policies of other websites</li>
                        <li>Changes to our privacy policy</li>
                        <li>How to contact us</li>
                        <li>How to contact the appropriate authorities</li>
                    </u>
                </Box>
                <Typography sx={subHeading}>What data do we collect?</Typography>
                <Typography sx={DescStyle}>Smart collects the following data:</Typography>
                <ul style={DescStyle}>
                    <li>Personal identification information (Name, email address, phone number, etc.)</li>
                </ul>
                <Typography sx={subHeading}>How do we collect your data?</Typography>
                <Typography sx={DescStyle}>You directly provide Smart with most of the data we collect. We collect data and process data when you:</Typography>
                <ul style={DescStyle}>
                    <li>Register online or place an order for any of our products or services.</li>
                    <li>Voluntarily complete a customer survey or provide feedback on any of our message boards or via email.</li>
                    <li>Use or view our website via your browser’s cookies.</li>
                </ul>
                <Typography sx={subHeading}>How will we use your data?</Typography>
                <Typography sx={DescStyle}>Smart collects your data so that we can:</Typography>
                <ul style={DescStyle}>
                    <li>Process your order and manage your account.</li>
                    <li>Email you with special offers on other products and services we think you might like.</li>
                    <Typography sx={DescStyle}>When Smart processes your order, it may send your data to, and also use the resulting information from, credit reference agencies to prevent fraudulent purchases.</Typography>
                </ul>
                <Typography sx={subHeading}>How do we store your data?</Typography>
                <Typography sx={DescStyle}>Smart does not store your data.</Typography>
                <Typography sx={DescStyle}>Smart will keep your Name, Email and Phone Number until you contact us for their deletion. When requested, we will delete your data by removing your email from our conacts.</Typography>
                <Typography sx={subHeading}>Marketing</Typography>
                <Typography sx={DescStyle}>Smart would like to send you information about products and services of ours that we think you might like, as well as those of our partner companies.</Typography>
                <Typography sx={DescStyle}>Smart does not store your data.</Typography>
                <Typography sx={DescStyle}>If you have agreed to receive marketing, you may always opt out at a later date.</Typography>
                <Typography sx={DescStyle}>You have the right at any time to stop Smart from contacting you for marketing purposes or giving your data to other members of the Smart Group.</Typography>
                <Typography sx={DescStyle}>If you no longer wish to be contacted for marketing purposes, please click here.</Typography>

                <Typography sx={subHeading}>What are your data protection rights?</Typography>
                <Typography sx={DescStyle}>Smart would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</Typography>
                <Typography sx={DescStyle}><span style={{ fontWeight: 600 }}>The right to access</span> – You have the right to request Smart for copies of your personal data. We may charge you a small fee for this service.</Typography>

                <Typography sx={DescStyle}><span style={{ fontWeight: 600 }}>The right to rectification</span> – You have the right to request that Smart correct any information you believe is inaccurate. You also have the right to request Smart to complete the information you believe is incomplete.</Typography>

                <Typography sx={DescStyle}><span style={{ fontWeight: 600 }}>The right to erasure</span> – You have the right to request that Smart erase your personal data, under certain conditions.</Typography>

                <Typography sx={DescStyle}><span style={{ fontWeight: 600 }}>The right to restrict processing </span> – You have the right to request that Smart restrict the processing of your personal data, under certain conditions.</Typography>

                <Typography sx={DescStyle}><span style={{ fontWeight: 600 }}>The right to object to processing </span> – You have the right to object to Smart’s processing of your personal data, under certain conditions.</Typography>

                <Typography sx={DescStyle}><span style={{ fontWeight: 600 }}>The right to data portability</span> – You have the right to request that Smart transfer the data that we have collected to another organization, or directly to you, under certain conditions.</Typography>

                <Typography sx={DescStyle}>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us at our email:</Typography>

                <Typography style={DescStyle}>Call us at: <a style={{ color: '#BF9A3F' }} href="tel: +39 3403061893">+39 3403061893</a></Typography>
                <Typography style={DescStyle}>Or write to us: <a style={{ color: '#BF9A3F' }} href="mailto: smartextiles@legalmail.it">smartextiles@legalmail.it</a></Typography>

                <Typography sx={subHeading}>Cookies</Typography>
                <Typography sx={DescStyle}>Cookies are text files placed on your computer to collect standard Internet log information and visitor behavior information. When you visit our websites, we may collect information from you automatically through cookies or similar technology

                    For further information, visit <span style={{ color: '#BF9A3F' }}> allaboutcookies.org</span></Typography>

                <Typography sx={subHeading}>How do we use cookies?</Typography>
                <Typography sx={DescStyle}>Smart uses cookies in a range of ways to improve your experience on our website, including:</Typography>
                <ul style={DescStyle}>
                    <li>Understanding how you use our website</li>
                </ul>

                <Typography sx={subHeading}>What types of cookies do we use?</Typography>
                <Typography sx={DescStyle}>There are a number of different types of cookies, however, our website uses:</Typography>
                <ul style={DescStyle}>
                    <li>Functionality – Smart uses these cookies so that we recognize you on our website and remember your previously selected preferences. These could include what language you prefer and location you are in. A mix of first-party and third-party cookies are used.</li>
                </ul>

                <Typography sx={subHeading}>How to manage cookies</Typography>
                <Typography sx={DescStyle}>You can set your browser not to accept cookies, and the above website tells you how to remove cookies from your browser. However, in a few cases, some of our website features may not function as a result.</Typography>

                <Typography sx={subHeading}>Privacy policies of other websites</Typography>
                <Typography sx={DescStyle}>The Smart website contains links to other websites. Our privacy policy applies only to our website, so if you click on a link to another website, you should read their privacy policy.</Typography>

                <Typography sx={subHeading}>Changes to our privacy policy</Typography>
                <Typography sx={DescStyle}>Smart keeps its privacy policy under regular review and places any updates on this web page. This privacy policy was last updated on 9 January 2019.</Typography>

                <Typography sx={subHeading}>How to contact us</Typography>
                <Typography sx={DescStyle}>If you have any questions about Smart’s privacy policy, the data we hold on you, or you would like to exercise one of your data protection rights, please do not hesitate to contact us.</Typography>

                <Typography style={DescStyle}>Call us at: <a style={{ color: '#BF9A3F' }} href="tel:  +39 3403061893"> +39 3403061893</a></Typography>
                <Typography style={DescStyle}>Or write to us: <a style={{ color: '#BF9A3F' }} href="mailto:  smartextiles@legalmail.it"> smartextiles@legalmail.it</a></Typography>
                <Typography sx={DescStyle}>Or write us at: Via del Ponte Vecchio 2, 50125 Firenze (FI), Italia</Typography>

                <Typography sx={subHeading}>How to contact the appropriate authority</Typography>
                <Typography sx={DescStyle}>Should you wish to report a complaint or if you feel that Smart has not addressed your concern in a satisfactory manner, you may contact the Information Commissioner’s Office.</Typography>

                <Typography sx={DescStyle}>Address: Piazza Venezia 11 – 00187 Roma</Typography>
                <Typography sx={DescStyle}>Fax: +39-06-6967 73785</Typography>

            </Box>
        </>
    )
}

export default PrivacyPolicy