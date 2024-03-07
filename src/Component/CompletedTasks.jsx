import React from 'react'
/* Component imports */
import Taskbox from './Taskbox'
/* Mui imports */
import { Grid, Typography } from '@mui/material'

const CompletedTasks = ({ componentTitle }) => {
    return (
        <>
            <Grid container mb={"1rem"}>
                <Grid xs={12} sm={12} md={12} lg={12} >
                    <Typography variant="h4" color="#0f172a">{componentTitle}</Typography>
                </Grid>
            </Grid>
            <Grid container height={"100%"} columnGap={"1rem"} rowGap={"1rem"} >
                <Grid item xs={12} sm={12} md={5} lg={5} >
                    <Taskbox />
                </Grid>

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
            </Grid>
            <Grid item xs={12} sm={12} md={5} lg={5} >
                <Taskbox />
            </Grid>
            <Grid item xs={12} sm={12} md={5} lg={5} >
                <Taskbox />
            </Grid> */}
            </Grid>
        </>
    )
}

export default CompletedTasks