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
