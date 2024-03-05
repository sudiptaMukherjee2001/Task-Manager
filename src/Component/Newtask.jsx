import React from 'react'
/* Component imports */
import Taskbox from './Taskbox'
/* Mui imports */
import { Grid } from '@mui/material'

const Newtask = () => {
    return (
        <Grid container height={"100%"} columnGap={"1rem"} rowGap={"1rem"} >
            <Grid item xs={12} sm={12} md={5} lg={5} border={"2px solid red"}>
                <Taskbox />
            </Grid>
            <Grid item xs={12} sm={12} md={5} lg={5} >
                <Taskbox />
            </Grid>
            <Grid item xs={12} sm={12} md={5} lg={5} >
                <Taskbox />
            </Grid>
            {/* <Grid item xs={12} sm={12} md={5} lg={5} >
                <Taskbox />
            </Grid>
            <Grid item xs={12} sm={12} md={5} lg={5} >
                <Taskbox />
            </Grid> */}
            {/* <Grid item xs={12} sm={12} md={5} lg={5} >
                <Taskbox />
            </Grid>
            <Grid item xs={12} sm={12} md={5} lg={5} >
                <Taskbox />
            </Grid>
            <Grid item xs={12} sm={12} md={5} lg={5} >
                <Taskbox />
            </Grid>
            <Grid item xs={12} sm={12} md={5} lg={5} >
                <Taskbox />
            </Grid>
            <Grid item xs={12} sm={12} md={5} lg={5} >
                <Taskbox />
            </Grid>
            <Grid item xs={12} sm={12} md={5} lg={5} >
                <Taskbox />
            </Grid>
            <Grid item xs={12} sm={12} md={5} lg={5} >
                <Taskbox />
            </Grid>
            <Grid item xs={12} sm={12} md={5} lg={5} >
                <Taskbox />
            </Grid>
            <Grid item xs={12} sm={12} md={5} lg={5} >
                <Taskbox />
            </Grid> */}
        </Grid>
    )
}

export default Newtask