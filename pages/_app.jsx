import '../styles/globals.css'
import { SnackbarProvider } from 'notistack';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps:{ session, ...pageProps },}) {

  return (
    <SessionProvider session={session}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <SnackbarProvider>
          <Component {...pageProps} />
        </SnackbarProvider>
      </LocalizationProvider>
    </SessionProvider>
  );
}

export default MyApp
