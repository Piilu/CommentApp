import Container from '@mui/material/Container'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableCell from '@mui/material/TableCell'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'
import React from 'react'
import prisma from '../../../src/db/prisma'
import dayjs from 'dayjs'
import { getSession } from 'next-auth/react'
import Grid  from '@mui/material/Grid'
import Typography from "@mui/material/Typography"
import Head from 'next/head'

export async function getServerSideProps(context) {
    const session = await getSession(context);
    if (session) {

        const entrys = await prisma.entrys.findMany({
            orderBy: {
                entryDate: "asc",
            },
            where: {
                commentAdded: true,
            }
        })
        return {
            props: { entrys }
        }
    }
    else {
        return {
            redirect: {
                permanent: false,
                destination: "/"
            }
        }
    }
}

function Pdf(props) {
    const { entrys } = props;
    console.log(entrys)
    if (entrys.length == 0 || entrys == undefined) {
        return <Container>
            <Head>
                <title>Tabeli vaade</title>
            </Head>
            <Grid container
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '100vh', }}>
                <Grid style={{ minWidth: "50vh" }}>
                    <Typography variant="h2" gutterBottom>
                        Andmed puuduvad
                    </Typography>
                </Grid>
            </Grid >
        </Container>
    }
    return (
        <Table>
            <TableHead style={{ border: "solid gray 1px" }}>
                <TableRow style={{ border: "solid gray 1px" }}>
                    <TableCell style={{ border: "solid gray 1px" }} align="left"><b>Kuupäev</b></TableCell>
                    <TableCell style={{ border: "solid gray 1px" }} align="left"><b>Sissekanne</b></TableCell>
                    <TableCell style={{ border: "solid gray 1px" }} align="left"><b>Juhendaja kommentaar</b></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {entrys.length != 0 ? entrys.map(value => {
                    return (
                        <TableRow key={value.id} style={{ border: "solid gray 1px" }}>
                            <TableCell align="center" style={{ border: "solid gray 1px" }}>{dayjs(value.entryDate).format("DD/MM/YYYY")}</TableCell>
                            <TableCell width="50%" style={{ border: "solid gray 1px", wordBreak: "break-all" }} align="left">{value.content}</TableCell>
                            <TableCell width="50%" style={{ border: "solid gray 1px", wordBreak: "break-all" }} align="left">{value.comment}</TableCell>
                        </TableRow>
                    );
                }) : "Andmed puuduvad"}
            </TableBody>
        </Table>
    )
}

export default Pdf