import Card from "@mui/material/Card"
import Grid from "@mui/material/Grid"
import CardHeader from "@mui/material/CardHeader"
import TextField from "@mui/material/TextField"
import Divider from "@mui/material/Divider"
import CardContent from "@mui/material/CardContent"
import FormHelperText from "@mui/material/FormHelperText"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import Link from 'next/link'
import { useState } from "react"
import Box  from "@mui/material/Box"
import AddNewEntryBox from "../../src/Components/AddNewEntryBox"


function Add() {
  return (
    <Container>
      <h2> <Box sx={{ display: "flex", }}>
        <h2>Kommentaaride lisamine</h2>
        <Button variant="outlined" href='/dashboard' style={{ height: "20%", marginLeft: "auto", marginTop: "auto", marginBottom: "auto" }}>Dashboard</Button>
      </Box></h2>
      <div>
        <AddNewEntryBox />
      </div>
      <p>Sissekandeid kokku: 0</p>
    </Container>
  )
}
export default Add