import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from "next-themes";
import { Inter } from '@next/font/google';
import { Analytics } from '@vercel/analytics/react';

const interVariable = Inter();

const MyApp = ({ Component, pageProps }: AppProps) => {
  return(
    <ThemeProvider defaultTheme="light" attribute="class">
     <main className={interVariable.className}>
     <Component {...pageProps} />
     <Analytics />
     </main>
  </ThemeProvider>
  ) 
};

export default MyApp;
