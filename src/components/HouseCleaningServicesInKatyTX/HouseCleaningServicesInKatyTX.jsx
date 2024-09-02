import React from 'react';
import "./HouseCleaningServicesInKatyTX.css"
import HouseCleaningServicesBanner from './HouseCleaningServicesBanner/HouseCleaningServicesBanner';
import AboutUs from './AboutUs/AboutUs'
import RatingNReviewSection from '../__shared_one_time/HomeSections/Rating/RatingNReveiwSection';
import ReviewSlider from '../CleaningServicesInRichmond/ReviewSwipper/ReviewSlider/ReviewSlider';
import ServicesAreaSection from '../__shared_one_time/HomeSections/ServicesAreaSection';
import CleaningContractors from './CleaningContractors/CleaningContractors';
import CleaningServices from './CleaningServices/CleaningServices';
import HomeCleaningServices from './HomeCleaningServices/HomeCleaningServices';
import PoolCleaning from './PoolCleaning/PoolCleaning';
import TrustUs from './TrustUs/TrustUs';
import CustomizedCleaning from './CustomizedCleaning/CustomizedCleaning';
import UniqueCleaning from './UniqueCleaning/UniqueCleaning';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';
import OurApproach from './OurApproach/OurApproach';
import ProjectGallery from './ProjectGallery/ProjectGallery';

const HouseCleaningServicesInKatyTX = () => {
    return (
        <div className="custom-container">
            <section>
                <HouseCleaningServicesBanner/>
            </section>
            
            <section>
                <RatingNReviewSection />
            </section>

            <section>
                <AboutUs/>
            </section>

            <section>
                <CleaningServices/>
            </section>

            <section>
                <CleaningContractors/>
            </section>

            <section>
                <HomeCleaningServices/>
            </section>

            <section>
                <PoolCleaning/>
            </section>

            <section>
                <ProjectGallery/>
            </section>

            <section>
                <OurApproach/>
            </section>

            <section>
                <TrustUs/>
            </section>

            <section>
                <CustomizedCleaning/>
            </section>

            <section className="container padding__top">
                <ReviewSlider/>
            </section>

            <section>
                <UniqueCleaning/>
            </section>

            <section>
                <WhyChooseUs/>
            </section>

            <section className="padding__all">
                <ServicesAreaSection />
            </section>
        </div>
    );
};

export default HouseCleaningServicesInKatyTX;