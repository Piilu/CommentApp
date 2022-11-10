import React from 'react'
import Container from "@mui/material/Container"
import CommentsListItem from '../../src/Components/CommentsListBox'
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import Tabs from '@mui/material/Tabs';
function Dashboard() {
  return (
    <div>

      <Container>
        <div>
          <h2>Dashboard</h2>
          <Button variant="contained" startIcon={<AddIcon />}>Lisa uus</Button>
        </div>
        <Box
          sx={{
            justifyContent: "center",
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

          <CommentsListItem />
          <CommentsListItem />
          <CommentsListItem />
          <CommentsListItem />
          <CommentsListItem />
          <CommentsListItem />
          <CommentsListItem />
          <CommentsListItem />
          <CommentsListItem />
        </Box>
      </Container>
    </div>
  )
}

export default Dashboard