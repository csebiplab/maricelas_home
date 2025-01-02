import HeadingIcon from '@/components/__ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';

const Experienced = () => {
    return (
        <div className="full__section_l_p pr-3 md:pr-0 padding__all bg-dark-200">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-[20px] lg:gap-[22px] xl:gap-[24px] 2xl:gap-[26px] 3xl:gap-[28px] 4xl:gap-[30px] 5xl:gap-[32px]">
                <div className='order-2 md:col-span-2'>
                    <Image src="/assets/homePage/experienced.png" alt='experienced' width={615} height={650}/>
                </div>
                <div className='order-1 md:col-span-3'>
                    <div className="flex justify-center md:justify-start items-center">
                        <HeadingIcon text={headingIconText.experiencedCleaining__headingIconText}/>
                    </div>
                    <h2 className='text-[32px] md:text-[33px] lg:text-[34px] xl:text-[36px] 2xl:text-[38px] 3xl:text-[39px] 4xl:text-[41px] 5xl:text-[42px] font-bold text-black leading-normal mb-[10px]'>Experienced Residential & Commercial Cleaning Contractors</h2>
                    <p className='text-base 4xl:text-[17px] 5xl:text-lg font-normal text-dark leading-[30px] 3xl:leading-[32px] 4xl:leading-[34px] 5xl:leading-[36px]'>Maricela's Cleaning Magnificence is your trusted partner for top-quality cleaning services in Houston. With years of experience, our skilled contractors specialize in residential and commercial cleaning, delivering customized solutions to meet your needs. We use eco-friendly products and advanced techniques to ensure a spotless, healthy environment from homes to offices. Whether it's a one-time service or a recurring schedule, we provide reliable cleaning you can count on. At Maricela's Cleaning Magnificence, we believe a clean space is essential for comfort, productivity, and well-being. We work around your schedule to minimize disruptions, whether cleaning your home while you're at work or tidying up your office after hours.</p>
                    <p className='text-base 4xl:text-[17px] 5xl:text-lg font-normal text-dark leading-[30px] 5xl:leading-[36px]'>Our team has advanced tools and proven techniques to handle spaces of all sizes and complexities. At Maricela's Cleaning Magnificence, we understand that every space is as unique as your cleaning needs. That's why we take a personalized approach, offering flexible cleaning plans tailored to your schedule and preferences. Whether it's a deep clean for your home, routine upkeep for your office, or specialized cleaning for high-traffic areas, we have the expertise to handle it all. Trust Maricela's Cleaning Magnificence for hassle-free, efficient cleaning services and make your space shine. Call us today to schedule a service and discover why we're a leading choice for residential and commercial cleaning in Houston!
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Experienced;