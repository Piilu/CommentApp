import Container from '@mui/material/Container'
import React from 'react'
import Paper from '@mui/material/Paper'
import relativeTime from 'dayjs/plugin/relativeTime'
import dayjs from 'dayjs';
dayjs.extend(relativeTime)

function CommentBox(props) {
    const { item, isEntry, isWeek,limitWidth } = props;
    if (!isWeek) {
        return (
            <Paper style={{
                width:limitWidth ? "50%":"100%",
                padding: 8,
            }} elevation={3} >
                <h2 style={{ marginBottom: "0", marginTop: "0" }}>{isEntry ? "Sissekanne" : "Juhendaja kommentaar"}</h2>
                <small>{!isEntry ? dayjs(item.updatedAt).fromNow() : ""}</small>
                {/* 10.11.22-15.11.22 */}

                <div style={{maxHeight: "40vh", overflow: "auto" }}>
                
                    {isEntry ? item.content : item.comment == null ? <i>Juhendaja ei ole kommentaari lisanud</i> : <p style={{overflowWrap: "break-word"}}>{item.comment}</p>}
                </div>

            </Paper>
        )
    }
    else {
        return (
            <Paper style={{
                width:limitWidth ? "50%":"100%",
                padding: 8,
            }} elevation={3} >
                <h2 style={{ marginBottom: "0", marginTop: "0" }}>{isEntry ? "Sissekanne" : "Juhendaja kommentaar"}</h2>
                <small>{!isEntry ? dayjs(item.updatedAt).format('DD/MM/YYYY') : ""}</small>
                <div style={{ maxHeight: "40vh", overflow: "auto" }}>
                    {item.length != 0 ? item.map(value => {
                        return (
                            <p style={{overflowWrap: "break-word"}} key={Math.random()}>{value.content}</p>
                        )
                    }) : "Sisu puudub"}

                </div>

            </Paper>
        )
    }
}

export default CommentBox