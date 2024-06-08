import { Open_Sans, Roboto_Slab } from "next/font/google";
import { Suspense } from "react";
import "../globals.css";
import RoutingProgressBar from "@/components/common/RoutingProgressBar";
import Header from "@/components/__layouts/Headers/Header";
import Footer from "@/components/__layouts/Footers/Footer";
import ScrollToTopComponent from "@/components/common/ScrollToTop";
import dbConnect from "@/lib/db.connect";
import homeRouteMetaData from "@/models/homeMetaDataFile";
import verificationSite from "@/models/siteVerification";

const roboto = Roboto_Slab({ subsets: ['latin'], display: 'swap', adjustFontFallback: false });
const openSans = Open_Sans({ subsets: ["latin"] });

export async function generateMetadata() {
  try {
    await dbConnect();

    const [homeMetaData, googleVerificationData] = await Promise.all([
      homeRouteMetaData.find({}),
      verificationSite.find({})
    ]);

    const googleConsoleKey = extractGoogleConsoleKey(googleVerificationData);

    const {
      title = "Maricela's Home",
      description = "Maricela's Cleaning Magnificence offers top-tier commercial & residential cleaning services in Houston. Discover the best cleaning solutions.",
      keywords = "Maricela's Home",
    } = homeMetaData?.[0] || {};


    console.log({
      title,
      description,
      keywords,
      verification: {
        google: googleConsoleKey,
      }
    }, "meta data")

    return {
      title,
      description,
      keywords,
      verification: {
        google: googleConsoleKey,
      }
    };
  } catch (error) {
    return {
      title: "Maricela's Home",
      description: "Maricela's Cleaning Magnificence offers top-tier commercial & residential cleaning services in Houston. Discover the best cleaning solutions.",
      keywords: "Maricela's Cleaning Magnificence offers top-tier commercial & residential cleaning services in Houston. Discover the best cleaning solutions.",
    };
  }
}

function extractGoogleConsoleKey(googleVerificationData) {
  try {
    if (!googleVerificationData || !googleVerificationData[0]?.title) return "";

    const metaTagContent = googleVerificationData[0].title;
    const consoleKey = metaTagContent.split("=").pop().slice(1, -4);


    return consoleKey;
  } catch (error) {
    console.error('Error extracting Google console key:', error);
    return "";
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
          <Header />
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
