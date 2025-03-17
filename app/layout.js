import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/Components/global/footer";
import OurClients from "@/Components/home/ourClients";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ATnation",
  description: "We create digital solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <OurClients />

        <Footer />
      </body>
    </html>
  );
}
