import React from 'react'
import Paper from "@mui/material/Paper"
import { Box } from '@mui/system'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Button  from '@mui/material/Button';
import VisibilityIcon from '@mui/icons-material/Visibility';
import IconButton from '@mui/material/IconButton';
import Link from 'next/link'

function CommentsListItem() {
    return (
        <Paper sx={{ width: { xs: '100%', sm: '20em' } }} style={{
            width: "20em",
            padding: 8,
        }} elevation={3}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box sx={{display:"flex"}}>
                    <div>
                        <h3 style={{ marginTop: "0", marginBottom: "0" }}>Nädal 1</h3>
                        <small>10.11.22-15.11.22</small>
                    </div>
                    <div style={{marginLeft:"auto"}}>
                      <IconButton href='/dashboard/view/asd'>
                        <VisibilityIcon/>
                      </IconButton>
                      <IconButton disabled>
                      <CheckCircleIcon color='error'/>
                      </IconButton>
                    </div>
                </Box>
                <small style={{marginTop:"0.1em"}}>Juhendaja kommentaar:</small>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, ratione. Voluptatum sint, facilis dolorum, numquam qui odio adipisci quidem aspernatur tenetur repudiandae corrupti minima similique architecto! Ipsum ipsa architecto dolorum!   </p>
            </Box>
        </Paper>
    )
}

export default CommentsListItem