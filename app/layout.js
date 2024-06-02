import Header from "@/components/__layouts/Headers/Header";
import RoutingProgressBar from "@/components/common/RoutingProgressBar";
import { Open_Sans, Roboto_Slab } from "next/font/google";
import { Suspense } from "react";
import Footer from "../components/__layouts/Footers/Footer";
import "./globals.css";
import ScrollToTopComponent from "@/components/common/ScrollToTop";
import BottomHeader from "@/components/__layouts/Headers/BottomHeader";


const roboto = Roboto_Slab({ subsets: ['latin'], display: 'swap', adjustFontFallback: false })
const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Maricela's Home",
  description: "Maricela's Cleaning Magnificence offers top-tier commercial & residential cleaning services in Houston. Discover the best cleaning solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className || openSans.className}>
        <Suspense>
          <RoutingProgressBar />
        </Suspense>
        <>
          {/* <Header /> */}
          <BottomHeader/>
        </>
        {children}
        <>
          <Footer />
          <ScrollToTopComponent/>
        </>
      </body>
    </html>
  );
}
