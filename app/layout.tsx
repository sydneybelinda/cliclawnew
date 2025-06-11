
import { Geist, Geist_Mono, Open_Sans, Oswald, Yeseva_One, Lato } from "next/font/google";
import { Roboto } from 'next/font/google'

import FooterArea from "../components/FooterArea";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';

import "react-toastify/dist/ReactToastify.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../styles/animate.css'
import '../styles/flaticon.css'
import "../styles/font-awesome.min.css";
import "../styles/themify-icons.css";
import { ToastContainer } from 'react-toastify';
import '../node_modules/react-modal-video/scss/modal-video.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/sass/style.scss";
// import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
})
const lato = Lato({
  subsets: ['latin'],
  weight: '400'
})

const yeseva = Yeseva_One({
  subsets: ['latin'],
  weight: '400'
})



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={`${geistSans.variable} ${geistMono.variable} ${openSans.className} ${yeseva.className} ${lato.className} `}>
      <AppRouterCacheProvider>
        {children}
        <ToastContainer />
        <FooterArea />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
