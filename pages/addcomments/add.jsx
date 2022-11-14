import Container from '@mui/material/Container'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import AddCommentBox from '../../src/Components/AddCommentBox'
import CommentBox from '../../src/Components/CommentBox'
import prisma from '../../src/db/prisma'
import { uniqBy } from 'lodash'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Head from 'next/head'
import dayjs from 'dayjs'
import weekOfYear from 'dayjs/plugin/weekOfYear'
dayjs.extend(weekOfYear)


export async function getServerSideProps(context) {

    const entrys = await prisma.entrys.findMany({
        orderBy: [{
            entryDate: "asc",
        }]
    });
    return {
        props: { entrys }
    }

}

function CommentAdd(props) {
    const { entrys } = props;
    const router = useRouter();
    const [loading, setLoading] = useState(true)
    const [entry, setEntry] = useState(null)
    const refreshData = () => {
        router.replace(router.asPath);
    }
    useEffect(() => {
        setEntry(entrys.filter(x => { return x.commentAdded == false })[0]);
        setLoading(false)
    }, [entrys, loading])

    if (loading) return null;
    if (entry == undefined) {
        return (
            <Container>
                <Head>
                    <title>Kommentaarid Lisatud</title>
                </Head>
                <Grid container
                    alignItems="center"
                    justifyContent="center"
                    style={{ minHeight: '100vh', }}>
                    <Grid style={{ minWidth: "50vh" }}>
                        <Typography color="#32a852" variant="h2" gutterBottom>
                            Kõik kommentaarid on lisatud
                        </Typography>
                    </Grid>
                </Grid >
            </Container>
        )
    }
    return (
        <Container>
            <Head>
                <title>Nädal: {dayjs(entry.entryDate).week()}</title>
            </Head>
            <h2>Kommentaaride lisamine (Nädal: {dayjs(entry.entryDate).week()})</h2>
            <CommentBox limitWidth={false} isWeek={true} item={entrys.filter(x => { return x.week == entry.week })} isEntry={true} />
            <div style={{ marginTop: "1em" }}>
                <AddCommentBox saveItem={entry} refreshData={refreshData} />
            </div>
            <p>Komentaarid lisatud: {uniqBy(entrys.filter(x => { return x.commentAdded == true }), obj => obj.week).length}/{uniqBy(entrys, obj => obj.week).length}</p>

        </Container>
    )
}

export default CommentAdd