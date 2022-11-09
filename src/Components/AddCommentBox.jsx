import { IconButton, TextField } from '@mui/material'
import Button from "@mui/material/Button"
import Paper from '@mui/material/Paper'
import React, { useState } from 'react'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useSnackbar } from 'notistack';

function AddCommentBox() {
    const CHARACTER_LIMIT = 255;
    const [comment, SetComment] = useState("");
    const { enqueueSnackbar } = useSnackbar();

    const saveComment = () => {
        console.log("saveing comment " + comment)
        enqueueSnackbar("Kommentaar salvestatud", { variant: "success" })
    }

    return (

        <Paper style={{
            padding: 8,
        }} elevation={3}>
            <TextField
                fullWidth
                id="outlined-multiline-flexible"
                label="Lisa kommentaar"
                FormHelperTextProps={{
                    style: { marginLeft: "auto", marginRight: "0" }
                }}
                inputProps={{
                    maxlength: CHARACTER_LIMIT
                }}
                value={comment}
                onChange={e => SetComment(e.target.value)}
                helperText={`${comment.length}/${CHARACTER_LIMIT}`}
                multiline
                minRows={3}
                maxRows={5}
            />
            <div style={{ textAlign: "right", paddingTop: "0.5em" }}>
                <Button onClick={saveComment} endIcon={<NavigateNextIcon />} variant="contained">Edasi</Button>
            </div>
        </Paper>

    )
}

export default AddCommentBox