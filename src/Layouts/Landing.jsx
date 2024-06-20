import React, { useEffect } from 'react'
import Navbar from './Component/Navbar'
import Header from './Component/Header'
import Section_1 from './Component/Section_1'
import Footer from './Component/Footer'
import { useTranslation } from 'react-i18next'
import Copy from './Component/Copy'
import Page from '../components/page/page'
import { useMediaQuery, useTheme } from '@mui/material'
const Landing = () => {
    const { t } = useTranslation();
    // const { i18n } = useTranslation();
    // const { darkMode } = useThemeContext();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const theme = useTheme()
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'))
    return (
        <div>
            <Page title={t('greeting')}>
                {/* <Navbar /> */}
                <Header title={t('headerH')} align="center" t="55%" />
                <Section_1 />
                {/* <Copy /> */}
                {/* <Footer /> */}
            </Page>


        </div>
    )
}

export default Landing