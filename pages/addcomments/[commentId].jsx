import Container from '@mui/material/Container'
import React from 'react'
import AddCommentBox from '../../src/Components/AddCommentBox'
import CommentBox from '../../src/Components/CommentBox'

function CommentAdd() {
    return (
        <Container>
            <h2>Kommentaaride lisamine</h2>
            <CommentBox />
            <div style={{marginTop:"1em"}}>
                <AddCommentBox />
            </div>
        </Container>
    )
}

export default CommentAdd