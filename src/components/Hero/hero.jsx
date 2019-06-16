import React from 'react'
import './hero.css';
import HeroImage from './HeroImage/heroImage'
import HeroContainer from './HeroContainer/heroContainer';

const Hero = () => (
    <section className="Hero">
        <HeroImage />
        <HeroContainer />
    </section>
);

export default Hero;