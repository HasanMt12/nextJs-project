import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "@/components/header/Header";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home Decore",
  description: "Hasan Mt",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={'bg-[#EBECF0]'}>
        <Providers>
        <Navbar></Navbar>
        <div className="h-10"></div>
          {children} 
          <Footer></Footer>
        </Providers>

        </body>
    </html>
  );
}
