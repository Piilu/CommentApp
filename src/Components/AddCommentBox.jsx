import { IconButton, TextField } from '@mui/material'
import Button from "@mui/material/Button"
import Paper from '@mui/material/Paper'
import React, { useState } from 'react'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useSnackbar } from 'notistack';
import axios from 'axios';

function AddCommentBox(props) {
    const { refreshData, saveItem } = props;
    const CHARACTER_LIMIT = 600;
    const [comment, setComment] = useState("");
    const { enqueueSnackbar } = useSnackbar();
    const saveComment = () => {
        if (comment.trim().length) {
            axios.put('/api/add/comment', { comment, week: saveItem.week }).then(res => {
                refreshData();
                setComment("")
                enqueueSnackbar("Kommentaar salvestatud", { variant: "success" })
            }).catch(e => {
                enqueueSnackbar("Midagi läks valesti", { variant: "error" })
            })
        }
        else {
            enqueueSnackbar("Tühja kommentaari ei saa lisada", { variant: "error" })
        }
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
                    maxLength: CHARACTER_LIMIT
                }}
                value={comment}
                onChange={e => setComment(e.target.value)}
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