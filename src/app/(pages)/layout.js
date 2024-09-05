import { Open_Sans, Roboto_Slab } from "next/font/google";
import { Suspense } from "react";
import "../globals.css";
import RoutingProgressBar from "@/components/common/RoutingProgressBar";
import Footer from "@/components/__layouts/Footers/Footer";
import ScrollToTopComponent from "@/components/common/ScrollToTop";
import { NavHeader } from "@/components/__layouts/Header/NavHeader";
import { pageName } from "@/constants/dashboard/pageName.constants";
import { headers } from "next/headers";


const roboto = Roboto_Slab({ subsets: ['latin'], display: 'swap', adjustFontFallback: false });
const openSans = Open_Sans({ subsets: ["latin"] });


function extractGoogleConsoleKey(verificationData) {
  try {
    const metaTagContent = verificationData.verificationUrl?.[0]?.url;
    if (!metaTagContent) return "";

    const parts = metaTagContent.split(" ");
    if (parts.length < 3) return "";


    const consoleKeyPart = parts[2].split("=")[1];
    return consoleKeyPart.slice(1, -1);
  } catch (error) {
    console.error('Error extracting Google console key:', error);
    return "";
  }
}

export async function generateMetadata() {

  const headerList = headers();
  const pathname = headerList.get("x-current-path");


  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    const metaDataResponse = await fetch(`${apiUrl}/api/metaDatas?pageName=${pageName.home}`, {
      cache: "no-store",
    });
    const metaData = await metaDataResponse.json();
    const { title, description, keywords } = metaData?.data[0] ?? {};

    const googleVerificationResponse = await fetch(`${apiUrl}/api/verificationUrl`, {
      cache: "no-store",
    });
    const googleVerification = await googleVerificationResponse.json();
    const googleConsoleKey = extractGoogleConsoleKey(googleVerification);

    return {
      title: title || "Residential and Commercial Cleaning Services in Houston",
      description: description || "Maricela's Cleaning Magnificence offers the best residential and commercial cleaning services in Houston. Discover the best cleaning solution.  ",
      keywords: keywords || "cleaning services in Houston, commercial cleaning services Houston, cleaning service Houston tx, Houston cleaning services",
      openGraph: {
        title: title,
        description: description,
      },
      verification: {
        google: googleConsoleKey,
      },
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_API_URL}/${pathname}`,
      },
      robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    };
  } catch (error) {
    return {
      title: "Residential and Commercial Cleaning Services in Houston",
      keywords: "cleaning services in Houston, commercial cleaning services Houston, cleaning service Houston tx, Houston cleaning services",
      description: "Maricela's Cleaning Magnificence offers the best residential and commercial cleaning services in Houston. Discover the best cleaning solution.  ",
    };
  }
}




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className || openSans.className}>
        <Suspense>
          <RoutingProgressBar />
        </Suspense>
        <>
          <NavHeader />
        </>
        {children}
        <>
          <Footer />
          <ScrollToTopComponent />
        </>
      </body>
    </html>
  );
}
