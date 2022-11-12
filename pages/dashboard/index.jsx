import React, { useState } from 'react'
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
import {getSession } from "next-auth/react"


export async function getServerSideProps(context) {
  const session = await getSession(context)
  if (session) {
    const entrys = await prisma.entrys.findMany();
    return {
      props: { session,entrys}
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
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div>
      <Container>
        <div>
          <h2>Dashboard</h2>
          <Button variant="contained" href='/dashboard/add' startIcon={<AddIcon />}>Lisa uus</Button>
          <small style={{ marginLeft: "auto", display: "block" }}>Sissekandeid kokku: {entrys.length}</small>
        </div>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Juhendaja kommentaarid" value="1" />
              <Tab label="Üksikud sissekanded" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            {entrys.length != 0 ? entrys.map(() => {
              return (
                <CommentsListItem key={entrys.lenght} />
              )
            }) : "Sissekandeid ei leitud"}
          </TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
        </TabContext>
        <Box
          sx={{
            display: 'flex',
            gap: 5,
            flexDirection: 'row',
            flexWrap: "wrap",
            p: 1,
            m: 1,
            bgcolor: 'background.paper',
            borderRadius: 1,
          }}
        >

        </Box>
      </Container>
    </div>
  )
}

export default Dashboard