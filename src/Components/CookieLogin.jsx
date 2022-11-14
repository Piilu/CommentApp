import Card from "@mui/material/Card"
import Grid from "@mui/material/Grid"
import CardHeader from "@mui/material/CardHeader"
import TextField from "@mui/material/TextField"
import Divider from "@mui/material/Divider"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import { useState } from "react"

function CookieLogin(props) {
    const {handleAuth} = props;
    const [password,setPassword] = useState("")
    const handleLogin=()=>{
        handleAuth(password)
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

export default CookieLogin