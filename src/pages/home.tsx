import AboutSection from '@/components/about-section/about-section'
import FeatureAndBenefit from '@/components/feature-and-benefit/feature-and-benefit'
import HeroSection from '@/components/hero-section/hero-section'
import HeaderAndList from '@/components/reusables/header-and-list'
import React from 'react'

const HomePage = () => {
    return (
        <div>
            <HeroSection />
            <AboutSection />
            <FeatureAndBenefit />
        </div>
    )
}

export default HomePage
