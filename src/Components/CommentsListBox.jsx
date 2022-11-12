import React from 'react'
import Paper from "@mui/material/Paper"
import { Box } from '@mui/system'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Button from '@mui/material/Button';
import VisibilityIcon from '@mui/icons-material/Visibility';
import IconButton from '@mui/material/IconButton';
import Link from 'next/link'
import dayjs from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)
dayjs.extend(weekOfYear)

function CommentsListItem(props) {
    const { item, isDay, weekList } = props;
    return (
        <Paper sx={{ width: { xs: '100%', sm: '20em' } }} style={{
            padding: 8,
            height:"auto",
        }} elevation={3}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box sx={{ display: "flex" }}>
                    <div>
                        <h3 style={{ marginTop: "0", marginBottom: "0" }}>{isDay ? `Päev ${dayjs(item.entryDate).day()}` : `Nädal ${dayjs(item.entryDate).week()}`}</h3>
                        <small>{isDay?dayjs(item.entryDate).format('DD/MM/YYYY'):dayjs(item.updatedAt).fromNow()}</small>
                    </div>
                    <div style={{ marginLeft: "auto" }}>
                        <IconButton style={{ visibility: item.commentAdded ? "visible" : "hidden" }} href={`/dashboard/view/${item.id}`}>
                            <VisibilityIcon />
                        </IconButton>
                        <IconButton disabled>
                            <CheckCircleIcon color={item.commentAdded ? "success" : "error"} />
                        </IconButton>
                    </div>
                </Box>
                <small style={{ marginTop: "0.1em" }}>{item.commentAdded ? "Juhendaja kommentaar:" : "Praktikandi sissekanne:"}</small>
                {!isDay && !item.commentAdded && weekList != undefined ? weekList.length!=0 ? weekList.map(value => {
                    return (

                        <p style={{overflowWrap: "break-word"}} key={value.id+Math.random()}>{value.commentAdded ? value.comment : value.content}</p>
                    );

                }):"Sissekanded puuduvad" : <p  style={{overflowWrap: "break-word"}}>{item.commentAdded ? item.comment : item.content}</p>}
            </Box>
        </Paper>
    )
}

export default CommentsListItem