import Header from "@/components/__layouts/Headers/Header";
import RoutingProgressBar from "@/components/common/RoutingProgressBar";
import { Montserrat, Open_Sans } from "next/font/google";
import { Suspense } from "react";
import Footer from "../components/__layouts/Footers/Footer";
import "./globals.css";

const openSans = Open_Sans({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Maricela's Home",
  description: "Maricela's Cleaning Magnificence offers top-tier commercial & residential cleaning services in Houston. Discover the best cleaning solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className || openSans.className}>
        <Suspense>
          <RoutingProgressBar />
        </Suspense>
        <>
          <Header />
        </>
        {children}
        <>
          <Footer />
        </>
      </body>
    </html>
  );
}
