import CleaningServicesInRichmond from '@/components/CleaningServicesInRichmond/CleaningServicesInRichmond';
import { pageName } from '@/constants/dashboard/pageName.constants';
import React from 'react';

export async function generateMetadata() {

    try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;

        const metaDataResponse = await fetch(`${apiUrl}/api/metaDatas?pageName=${pageName.CLEANING_SERVICES_IN_RICHMOND}`, {
            cache: "no-store",
        });
        const metaData = await metaDataResponse.json();
        const { title, description, keywords } = metaData?.data[0] ?? {};


        return {
            title: title || "Residential and Commercial Cleaning Services in Houston",
            description: description || "Maricela's Cleaning Magnificence offers the best residential and commercial cleaning services in Houston. Discover the best cleaning solution.  ",
            keywords: keywords || "cleaning services in Houston, commercial cleaning services Houston, cleaning service Houston tx, Houston cleaning services",
            openGraph: {
                title: title,
                description: description,
            },
        };
    } catch (error) {
        return {
            title: "Residential and Commercial Cleaning Services in Houston",
            keywords: "cleaning services in Houston, commercial cleaning services Houston, cleaning service Houston tx, Houston cleaning services",
            description: "Maricela's Cleaning Magnificence offers the best residential and commercial cleaning services in Houston. Discover the best cleaning solution",
            openGraph: {
                title: "Residential and Commercial Cleaning Services in Houston",
                description: "Maricela's Cleaning Magnificence offers the best residential and commercial cleaning services in Houston. Discover the best cleaning solution",
            },
        };
    }
}

const page = () => {
    return (
        <div>
            <CleaningServicesInRichmond />
        </div>
    );
};

export default page;