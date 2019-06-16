import React from 'react';
import './heroContainer.css';
import { Link } from 'react-router-dom';
import HeroContainerHeading from './HeroContainerHeading/heroContainerHeading';
import HeroContainerSubheading from './HeroContainerSubheading/heroContainerSubheading';
import HeroContainerButton from './HeroContainerButton/heroContainerButton';

const HeroContainer = () => (
    <div className="Hero-container">
        <HeroContainerHeading />
        <HeroContainerSubheading />
        <Link to="/login">
            <HeroContainerButton />
        </Link>
    </div>
);

export default HeroContainer;