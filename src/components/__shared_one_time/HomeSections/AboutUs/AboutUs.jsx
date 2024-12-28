import HeadingIcon from '@/components/__ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';

const AboutUs = () => {
    return (
        <div className="full__section_r_p padding__top">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] lg:gap-[22px] xl:gap-[24px] 2xl:gap-[26px] 3xl:gap-[28px] 4xl:gap-[30px] 5xl:gap-[32px]">
                <div className='md:col-span-1'>
                    <Image src="/assets/homePage/about-us.png" alt='about us' width={820} height={830}/>
                </div>
                <div className='md:col-span-1'>
                    <div className="flex justify-center md:justify-start items-center">
                        <HeadingIcon text={headingIconText.aboutUs__headingIconText}/>
                    </div>
                    <h2 className='text-[32px] md:text-[33px] lg:text-[34px] xl:text-[36px] 2xl:text-[38px] 3xl:text-[39px] 4xl:text-[41px] 5xl:text-[42px] font-bold text-black leading-normal mb-[10px]'>About Our Cleaning Company in Houston</h2>
                    <p className='text-base 4xl:text-[17px] 5xl:text-lg font-normal text-dark leading-[30px] 3xl:leading-[32px] 4xl:leading-[34px] 5xl:leading-[36px]'>Welcome to Maricela's Cleaning Magnificence, the best commercial and residential cleaning company in Houston, Texas. With years of experience in the cleaning industry, our main focus is providing the best cleaning services in Houston for commercial and residential clients. We are committed to providing our clients with comprehensive, high-quality services that meet their needs and requirements. Our team is comprised of skilled professionals with extensive industry experience, dedicated to delivering exceptional results that surpass our clients' expectations. Being the best company for residential & commercial cleaning services in Houston, our cleaners pride ourselves on delivering meticulous cleanliness and unparalleled customer satisfaction.</p>
                    <p className='text-base 4xl:text-[17px] 5xl:text-lg font-normal text-dark leading-[30px] 5xl:leading-[36px]'>At Maricela's Cleaning Magnificence, we pride ourselves on delivering professional cleaning and janitorial services that go beyond expectations. Our experienced team uses the latest cleaning techniques and eco-friendly products to ensure a safe and healthy space for you, your family, or your employees. That's why we approach every cleaning project with care, precision, and a commitment to customer satisfaction. Our services are tailored to suit your schedule and requirements, offering flexible options like daily, weekly, bi-weekly, or monthly cleaning plans. At Maricela's Cleaning Magnificence, we treat every space as our own. Let us transform your home or workplace into a clean, vibrant, inviting space you'll love. Contact us today to schedule your cleaning service and experience the magnificence of a truly spotless clean!
                    </p>
                </div>

            </div>
        </div>
    );
};

export default AboutUs;