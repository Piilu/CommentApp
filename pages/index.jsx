import Card from "@mui/material/Card"
import Grid from "@mui/material/Grid"
import CardHeader from "@mui/material/CardHeader"
import TextField from "@mui/material/TextField"
import Divider from "@mui/material/Divider"
import CardContent from "@mui/material/CardContent"
import FormHelperText from "@mui/material/FormHelperText"
import Button from "@mui/material/Button"
import Link from 'next/link'
import { useState } from "react"
import { getSession } from "next-auth/react"
import { redirect } from "next/dist/server/api-utils"

export async function getServerSideProps(context) {
  const session = await getSession(context)
  if (session) {
    return {
      redirect: {
        permanent: false,
        destination: "/dashboard",
      },
    }
  }
  else {
    return {
      redirect: {
        permanent: false,
        destination: "/addcomments/add"
      }
    }
  }
}

function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log(`Login user ${email} with password ${password}`)
  }


  return (
    <Grid container
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh', }}>
      <Grid style={{ minWidth: "50vh" }}>
        <Card className='default-padding'>
          <CardHeader sx={{ p: 0, paddingBottom: 1 }} title="Login" />
          <Divider />
          <CardContent >
            <form onSubmit={e => { handleLogin(e) }}>
              <TextField style={{ marginBottom: "0.5em" }} variant="filled" fullWidth value={email} onChange={e => setEmail(e.target.value)} label='Email' size='small' id="login-email-input" />
              <TextField style={{ marginBottom: "0.5em" }} variant="filled" fullWidth value={password} onChange={e => setPassword(e.target.value)} label='Password' type='password' size='small' id="login-password-input" aria-describedby="my-helper-text" />
              <Grid textAlign="right">
                <Button margin="0.5" type='submit' variant='contained'>Login</Button>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid >
  )
}
export default Index