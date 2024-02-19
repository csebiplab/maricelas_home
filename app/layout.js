import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/__layouts/Headers/Header";
import RoutingProgressBar from "@/components/common/RoutingProgressBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Maricela's Home",
  description: "Maricela's Home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <>
          <RoutingProgressBar />
        </>
        <>
          <Header />
        </>
        {children}
      </body>
    </html>
  );
}
