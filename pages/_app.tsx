import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from "next-themes";
// import { ApolloProvider } from '@apollo/client'
import { Inter } from '@next/font/google';
import { Analytics } from '@vercel/analytics/react';

const interVariable = Inter();

const MyApp = ({ Component, pageProps }: AppProps) => {
  // const apolloClient = useApollo(pageProps.initialApolloState)

  return(
    <ThemeProvider defaultTheme="dark" attribute="class">
      {/* <ApolloProvider client={apolloClient}> */}
     <main className={interVariable.className}>
     <Component {...pageProps} />
     <Analytics />
     </main>
     {/* </ApolloProvider> */}
  </ThemeProvider>
  ) 
};

export default MyApp;
