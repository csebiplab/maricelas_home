import React from 'react';
import CleaningServicesInRichmondBanner from './CleaningServicesInRichmondBanner/CleaningServicesInRichmondBanner';
import RatingNReviewSection from '../__shared_one_time/HomeSections/Rating/RatingNReveiwSection';
import AboutUs from './AboutUs/AboutUs';
import HouseCleaning from './HouseCleaning/HouseCleaning';
import CleanAnsFresh from './CleanAnsFresh/CleanAnsFresh';
import ProjectGallerySection from './../__shared_one_time/HomeSections/ProjectGallerySection';
import ServicesAreaSection from '../__shared_one_time/HomeSections/ServicesAreaSection';
import WeMakePepopleHappy from './WeMakePepopleHappy/WeMakePepopleHappy';
import TrustedCleaning from './TrustedCleaning/TrustedCleaning';

const CleaningServicesInRichmond = () => {
    return (
        <div>

            {/* <section>
            
            </section> */}
            <CleaningServicesInRichmondBanner/>
            
            <section>
            <RatingNReviewSection/>
            </section>

            <AboutUs/>
            <CleanAnsFresh/>
            <HouseCleaning/>

            

            <div>
                <ProjectGallerySection/>
            </div>
            <TrustedCleaning/>

            <WeMakePepopleHappy/>

            <div className="padding__all">
                <ServicesAreaSection/>
            </div>
           
        </div>
    );
};

export default CleaningServicesInRichmond;