import '../styles/globals.css'
import { SnackbarProvider } from 'notistack';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { SessionProvider } from "next-auth/react"
import Head from 'next/head';

function MyApp({ Component, pageProps: { session, ...pageProps }, }) {

  return (
    <SessionProvider session={session}>
      <Head>
        <link rel="icon" type="image/svg+xml" href="favicon.svg" />
      </Head>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <SnackbarProvider>
          <Component {...pageProps} />
        </SnackbarProvider>
      </LocalizationProvider>
    </SessionProvider>
  );
}

export default MyApp
