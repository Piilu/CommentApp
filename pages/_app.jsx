import '../styles/globals.css'
import { SnackbarProvider } from 'notistack';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
function MyApp({ Component, pageProps }) {

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <SnackbarProvider>
          <Component {...pageProps} />
        </SnackbarProvider>
    </LocalizationProvider>
  );
}

export default MyApp
