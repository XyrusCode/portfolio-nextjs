import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from "next-themes";
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { Inter } from '@next/font/google';
import { Analytics } from '@vercel/analytics/react';

const interVariable = Inter();

const MyApp = ({ Component, pageProps }: AppProps) => {

  return(
    <ThemeProvider defaultTheme="dark" attribute="class">
        <GoogleReCaptchaProvider
            reCaptchaKey="6LeDfysnAAAAAOdSNm-4Ltvr7NnCVHzZilX3pSIq"
            // useEnterprise=true
  >
     <main className={interVariable.className}>
     <Component {...pageProps} />
     <Analytics />
     </main>
     </GoogleReCaptchaProvider>
  </ThemeProvider>
  )
};

export default MyApp;
