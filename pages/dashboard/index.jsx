import React, { useEffect, useState } from 'react'
import Container from "@mui/material/Container"
import CommentsListItem from '../../src/Components/CommentsListBox'
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import { ResetTvRounded } from '@mui/icons-material';
import prisma from '../../src/db/prisma';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import { getSession } from "next-auth/react"
import { useRouter } from "next/router"
import Head from 'next/head'
import groupBy from 'lodash/groupBy';
import uniqBy from 'lodash/uniqBy';
import dayjs from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear'
dayjs.extend(weekOfYear)

export async function getServerSideProps(context) {
  const session = await getSession(context)
  if (session) {
    const entrys = await prisma.entrys.findMany({
      orderBy: [{
        week: "asc",
      }]
    });
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

function Dashboard(props) {
  const { entrys } = props;
  const [value, setValue] = useState("1")
  const router = useRouter();
  const groupedEntrys = groupBy(entrys, x => {
    return dayjs(x.entryDate).week();
  });

  let entrysWithComments = entrys.filter((element) => { return element.commentAdded == true });

  const refreshData = () => {
    router.replace(router.asPath);
  }
  const handleChange = (event, newValue) => {
    setValue(newValue)
    refreshData();
  }
  
  return (
    <div >
      <Head>
        <title>Dashboard</title>
      </Head>
      <Container>
        <div>
          <h2>Dashboard</h2>
          <Button variant="contained" href='/dashboard/add' startIcon={<AddIcon />}>Lisa uus</Button>
          <small style={{ marginLeft: "auto", display: "block" }}>Sissekandeid kokku: {entrys.length}</small>
          <small style={{ marginLeft: "auto", display: "block" }}>Sissekandeid koos kommentaariga: {entrysWithComments.length}</small>
          <small style={{ marginLeft: "auto", display: "block" }}>Sissekandeid koos kommentaariga nädala kaupa: {uniqBy(entrys.filter(x => { return x.commentAdded == true }), obj => obj.week).length}</small>
        </div>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList variant='scrollable' onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Sissekanded koos kommentaariga" value="1" />
              <Tab label="Üksikud sissekanded" value="2" />
            </TabList>
          </Box>

          <TabPanel style={{ height: "75vh", overflow: "auto" }} value="1">

            <Box
              sx={{
                height: "50vh",
                display: 'flex',
                gap: 2,
                flexDirection: 'row',
                alignItems: "start",
                flexWrap: "wrap",
                p: 1,
                m: 1,
                bgcolor: 'background.paper',
                borderRadius: 1,
              }}
            >

              {uniqBy(entrysWithComments, obj => obj.week).length != 0 ? uniqBy(entrysWithComments, obj => obj.week).map(value => {
                return (
                  <CommentsListItem weekList={groupedEntrys[value.week]} item={value} key={value.id} isDay={false} />
                )
              }) : "Sissekandeid ei leitud"}

            </Box>
          </TabPanel>

          <TabPanel style={{ height: "75vh", overflow: "auto" }} value="2">

            <Box
              sx={{
                display: 'flex',
                gap: 2,
                overflow: "auto",
                flexDirection: 'column',
                alignItems: "start",
                flexWrap: "wrap",
                p: 1,
                m: 1,
                bgcolor: 'background.paper',
                borderRadius: 1,
              }}
            >

              {Object.keys(groupedEntrys).length != 0 ? Object.keys(groupedEntrys).map(week => {
                return (
                  <div key={week}>
                    <h2 style={{ marginBottom: "0" }}>Nädal {week}</h2>
                    <small>{dayjs(groupedEntrys[week].sort((a, b) => { return a.entryDate - b.entryDate })[0].entryDate).format("DD/MM/YYYY")}-{dayjs(groupedEntrys[week].sort((a, b) => { return a.entryDate - b.entryDate })[groupedEntrys[week].length - 1].entryDate).format("DD/MM/YYYY")}</small>
                    <Box
                      sx={{
                        display: 'flex',
                        gap: 2,
                        flexDirection: 'row',
                        alignItems: "start",
                        flexWrap: "wrap",
                        p: 1,
                        m: 1,
                        bgcolor: 'background.paper',
                        borderRadius: 1,
                      }}
                    >

                      {groupedEntrys[week].map(value => {
                        return (
                          <CommentsListItem weekList={[{}]} item={value} key={Math.random()} isDay={true} />
                        )
                      })}
                    </Box>
                  </div>

                );
              }) : "Sissekandeid ei leitud"}
            </Box>
          </TabPanel>
        </TabContext>
      </Container>
    </div >
  )
}

export default Dashboard