import React from 'react'
import Container from '@mui/material/Container'
import CommentBox from '../../../src/Components/CommentBox'
import AddCommentBox from '../../../src/Components/AddCommentBox'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Button from "@mui/material/Button"
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { getSession } from 'next-auth/react'
import dayjs from 'dayjs'
import prisma from '../../../src/db/prisma'


export async function getServerSideProps(context) {
    const session = await getSession(context)
    if (session) {
        const id = context.params.commentid;
        const entry = await prisma.entrys.findUnique({
            where: {
                id: parseInt(id),
            },
        })
        const entrys = await prisma.entrys.findMany({
            orderBy: [{
                entryDate: "asc",
            }],
            where: {
                week: entry.week,
            }
        })
        return {
            props: { session, entrys }
        }
    }
    else {
        return {
            redirect: {
                permanent: false,
                destination: "/",
            },
        }
    }
}

function Viewcomment(props) {
    const { session, entrys } = props;
    if (entrys != null) {

        return (
            <Container>
                <Box sx={{ display: "flex" }}>
                    <h2>Juhendaja kommentaar praktikanidle</h2>
                    <Button variant="outlined" href='/dashboard' style={{ height: "20%", marginLeft: "auto", marginTop: "auto", marginBottom: "auto" }}>Dashboard</Button>
                </Box>
                <Paper style={{
                    padding: 8,
                    marginBottom: "1em",
                }} elevation={3}>
                    <h2 style={{ marginBottom: "0", marginTop: "0" }}>Nädal</h2>
                    {<small>{dayjs(entrys[0].entryDate).format('DD/MM/YYYY')}-{dayjs(entrys[entrys.length - 1].entryDate).format('DD/MM/YYYY')}</small>}
                </Paper>
                <Box sx={{ display: "flex", gap: "1em", alignItems: "start" }}>
                    <CommentBox limitWidth={true} item={entrys[0]} isEntry={false} />
                    <CommentBox limitWidth={true} isWeek={true} item={entrys} isEntry={true} />
                </Box>
            </Container>
        )
    }
    else {
        return (
            <Container>
                <h2>Sellise idga sissekannet ei leitud</h2>
            </Container>
        )
    }
}

export default Viewcomment