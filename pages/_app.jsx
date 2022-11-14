import '../styles/globals.css'
import { SnackbarProvider } from 'notistack';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { SessionProvider } from "next-auth/react"
import Head from 'next/head';
import { useCookies } from "react-cookie"
import { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import { TextField } from '@mui/material';
import CookieLogin from '../src/Components/CookieLogin';
import dayjs from 'dayjs';

function MyApp({ Component, pageProps: { session, ...pageProps }, }) {
  const USER_PASSWORD = "UzS*HgWuTWjyV9u6yNmjxv@GRMuQdjRcP%fjVZp%yBdJ%MH$LPYz7BtI+276"
  const PASSWORD_COOKIE_NAME = "notestAPP-auth"
  const [loading, setLoading] = useState(true)
  const [cookiePassword, setcookiePassword] = useCookies([PASSWORD_COOKIE_NAME]);

  const handleAuth = (password) => {
    const currentYear = new Date().getFullYear();
    let expires = new Date(currentYear, 11, 31);
    expires.setTime(expires.getTime())
    setcookiePassword(PASSWORD_COOKIE_NAME,password,{expires})
  }

  useEffect(() => {
    setLoading(false)
  }, [])
  if (loading) return null;
  if (cookiePassword[PASSWORD_COOKIE_NAME] != USER_PASSWORD) {
    return (<Container>
      <CookieLogin handleAuth={handleAuth}/>
    </Container>)
  }
  return (
    <>
      <Head>
        <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22256%22 height=%22256%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2220%22 fill=%22%23ffffff%22></rect><text x=%2250%%22 y=%2250%%22 dominant-baseline=%22central%22 text-anchor=%22middle%22 font-size=%2265%22>🗒️</text></svg>" />
      </Head>
      <SessionProvider session={session}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <SnackbarProvider>
            <Component {...pageProps} />
          </SnackbarProvider>
        </LocalizationProvider>
      </SessionProvider>
    </>
  );
}

export default MyApp
