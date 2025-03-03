import AboutSection from '@/components/about-section/about-section'
import CallToAction from '@/components/call-to-action/call-to-action'
import Criteria from '@/components/criteria/criteria'
import FeatureAndBenefit from '@/components/feature-and-benefit/feature-and-benefit'
import Footer from '@/components/footer/footer'
import HeroSection from '@/components/hero-section/hero-section'
import Requirements from '@/components/requirements/requirements'
import React from 'react'

const HomePage = () => {
    return (
        <div>
            <HeroSection />
            <AboutSection />
            <FeatureAndBenefit />
            <Criteria />
            <Requirements />
            <CallToAction />
            <Footer />
        </div>
    )
}

export default HomePage
