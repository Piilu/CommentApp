import React from 'react'
import Container from "@mui/material/Container"
import CommentsListItem from '../../src/Components/CommentsListBox'
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import { ResetTvRounded } from '@mui/icons-material';
import prisma from '../../src/db/prisma';

export const getServerSideProps = async ({ req }) => {
  const entrys = await prisma.entrys.findMany();
  console.log(entrys.length);
  return { props: { entrys } }
}

function Dashboard(props) {
  const { entrys } = props;
  return (
    <div>
      <Container>
        <div>
          <h2>Dashboard</h2>
          <Button variant="contained" startIcon={<AddIcon />}>Lisa uus</Button>
          <small style={{ marginLeft: "auto", display: "block" }}>Sissekandeid kokku: {entrys.length}</small>
        </div>
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
          {entrys.length !=0 ? entrys.map(() => {
            return (
              <CommentsListItem key={entrys.lenght} />
            )
          }) : "Sissekandeid ei leitud"}
        </Box>
      </Container>
    </div>
  )
}

export default Dashboard