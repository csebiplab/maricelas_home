import HeadingIcon from '@/components/__ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';

const CleaningServices = () => {
    return (
        <div className="full__section_r_p pl-3 md:pl-0 padding__top">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-[20px] lg:gap-[22px] xl:gap-[24px] 2xl:gap-[26px] 3xl:gap-[28px] 4xl:gap-[30px] 5xl:gap-[32px]">
                <div className='md:col-span-2'>
                    <Image src="/assets/homePage/cleaning-services.png" alt='cleaning service' width={607} height={542}/>
                </div>
                <div className='md:col-span-3'>
                    <div className="flex justify-center md:justify-start items-center">
                        <HeadingIcon text={headingIconText.cleaningServices__headingIconText}/>
                    </div>
                    <h2 className='text-[32px] md:text-[33px] lg:text-[34px] xl:text-[36px] 2xl:text-[38px] 3xl:text-[39px] 4xl:text-[41px] 5xl:text-[42px] font-bold text-black leading-normal mb-[10px]'>Commercial and Residential Cleaning Services You Can Belief</h2>
                    <p className='text-base 4xl:text-[17px] 5xl:text-lg font-normal text-dark leading-[30px] 3xl:leading-[32px] 4xl:leading-[34px] 5xl:leading-[36px]'>Maricela's Cleaning Magnificence offers reliable and professional cleaning services for homes and businesses in Houston. We deliver tailored solutions to meet your needs from sparkling homes to spotless offices. With eco-friendly products, experienced cleaners, and a commitment to excellence, we ensure your space is clean, healthy, and welcoming. We understand the importance of reliability and professionalism in maintaining cleanliness in commercial and residential settings. Our trained staff is committed to upholding the highest standards of quality and integrity in every job we undertake.</p>
                    <p className='text-base 4xl:text-[17px] 5xl:text-lg font-normal text-dark leading-[30px] 5xl:leading-[36px]'>From routine cleanings to deep sanitization, we prioritize customer satisfaction. Our cleaners can handle both large-scale commercial projects and small residential renovations. We strive to maintain the highest standards of professionalism and expertise in all our endeavors. With our trusted residential and commercial cleaning services in Houston, you can enjoy peace of mind knowing that your space is in capable hands. Contact us today to schedule a service and discover the difference between truly magnificent cleaning!
                    </p>
                </div>

            </div>
        </div>
    );
};

export default CleaningServices;