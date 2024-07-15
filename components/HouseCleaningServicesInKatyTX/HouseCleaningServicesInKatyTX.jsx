import React from 'react';
import HouseCleaningServicesBanner from './HouseCleaningServicesBanner/HouseCleaningServicesBanner';
import AboutUs from './AboutUs/AboutUs'
import RatingNReviewSection from '../__shared_one_time/HomeSections/Rating/RatingNReveiwSection';
import ReviewSlider from '../CleaningServicesInRichmond/ReviewSwipper/ReviewSlider/ReviewSlider';
import ServicesAreaSection from '../__shared_one_time/HomeSections/ServicesAreaSection';
import ProjectGallerySection from "../__shared_one_time/HomeSections/ProjectGallerySection";
import CleaningContractors from './CleaningContractors/CleaningContractors';
import CleaningServices from './CleaningServices/CleaningServices';

const HouseCleaningServicesInKatyTX = () => {
    return (
        <div>
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
                <ProjectGallerySection/>
            </section>

            <section className="container padding__top">
                <ReviewSlider/>
            </section>

            <section className="padding__all">
                <ServicesAreaSection />
            </section>
        </div>
    );
};

export default HouseCleaningServicesInKatyTX;