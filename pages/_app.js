import React from 'react';
import Head from 'next/head';
import "@fontsource/montserrat";
import "@fontsource/montserrat/400.css";
import { DataProvider } from "@/context/data.js";
import "@/styles/globals.css";
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/theme';
import Footer from '@/components/Common/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '@/components/Common/Navbar/Navbar';
import { AuthProvider } from '@/context/auth';

export default function App({ Component, pageProps }) {
  return (
    <>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <DataProvider>
            <Head>
              <link
                rel="shortcut icon"
                // href="https://static.wixstatic.com/media/64089f_46dbddda0f7d43dd88447d49c5d54f9f~mv2.png/v1/crop/x_408,y_368,w_1621,h_1650/fill/w_63,h_63,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/MoonDive-B37%20favicon%201.png"
              />
            </Head>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
          </DataProvider>
          <ToastContainer theme="light" position="top-right" style={{ zIndex: 10000000 }} />
        </ThemeProvider>
      </AuthProvider>
    </>
  );
}
