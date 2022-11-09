import React from 'react'
import Container from '@mui/material/Container'
import CommentBox from '../../../src/Components/CommentBox'
import AddCommentBox from '../../../src/Components/AddCommentBox'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
function Viewcomment() {
    return (
        <Container>
            <h2>Juhendaja kommentaar praktikanidle</h2>
            <Paper style={{
                padding: 8,
                marginBottom: "1em",
            }} elevation={3}>
                <h2 style={{ marginBottom: "0",marginTop: "0"}}>Nädal</h2>
                <small>10.11.22-15.11.22</small>
            </Paper>
            <Box sx={{ display: "flex", gap: "1em"}}>
                <CommentBox />
                <CommentBox />
            </Box>
        </Container>
    )
}

export default Viewcomment