import React from 'react'
import Container from '@mui/material/Container'
import CommentBox from '../../../src/Components/CommentBox'
import AddCommentBox from '../../../src/Components/AddCommentBox'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Button from "@mui/material/Button"

function Viewcomment() {
    const testData = [
        {
            title: "Sissekanne",
            smallTitle: "Tehtud kuupäev"
        },
        {
            title: "Juhendaja kommentaar",
            smallTitle: "Tehtud kuupäev"
        },
    ]

    return (
        <Container>
            <Box sx={{display:"flex",}}>
                <h2>Juhendaja kommentaar praktikanidle</h2>
                <Button variant="outlined" href='/dashboard' style={{height:"20%",marginLeft:"auto",marginTop:"auto",marginBottom:"auto"}}>Dashboard</Button>
            </Box>
            <Paper style={{
                padding: 8,
                marginBottom: "1em",
            }} elevation={3}>
                <h2 style={{ marginBottom: "0", marginTop: "0" }}>Nädal</h2>
                <small>10.11.22-15.11.22</small>
            </Paper>
            <Box sx={{ display: "flex", gap: "1em" }}>
                <CommentBox item={testData[0]} />
                <CommentBox item={testData[1]} />
            </Box>
        </Container>
    )
}

export default Viewcomment