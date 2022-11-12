import React, { useState } from 'react'
import Paper from "@mui/material/Paper"
import TextField from '@mui/material/TextField'
import Divider from '@mui/material/Divider';
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker"
import dayjs from 'dayjs';
import Button from "@mui/material/Button"
import axios from 'axios';
import { useSnackbar } from 'notistack';


function AddNewEntryBox(props) {
    const CHARACTER_LIMIT = 600;
    const [comment, setComment] = useState("");
    const [date, setDate] = useState(dayjs());
    const { enqueueSnackbar } = useSnackbar();
    const handleDateChange = (newValue) => {
        setDate(newValue);
    };

    const saveData = async () => {
        await axios.post("/api/add/entry", { content: comment, date }).then(res => {
            setComment("")
            enqueueSnackbar("Sissekanne lisatud", { variant: "success" })
        }).catch(e => {
            enqueueSnackbar("Midagi läks valesti", { variant: "error" })
        })


    }

    return (
        <Paper style={{
            padding: 8,
        }} elevation={3} >
            <DesktopDatePicker
                label="Lisa sissekande kuupäev"
                inputFormat="DD/MM/YYYY"
                value={date}
                onChange={handleDateChange}
                renderInput={(params) => <TextField {...params} />}
            />
            <Divider style={{ marginTop: "0.5em", marginBottom: "0.5em" }} />
            <TextField
                fullWidth
                id="outlined-multiline-flexible"
                label="Lisa päeva sissekanne"
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
                <Button onClick={saveData} color="success" variant="contained">Lisa</Button>
            </div>
        </Paper>
    )
}

export default AddNewEntryBox