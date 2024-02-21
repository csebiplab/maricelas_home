import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/__layouts/Headers/Header";
import RoutingProgressBar from "@/components/common/RoutingProgressBar";
import Footer from "@/components/__layouts/Footers/Footer";

const openSans = Open_Sans({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Maricela's Home",
  description: "Maricela's Home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className || openSans.className}>
        <>
          <RoutingProgressBar />
        </>
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
