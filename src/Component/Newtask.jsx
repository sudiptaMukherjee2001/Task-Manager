import React, { useEffect, useState } from 'react'
/* Component imports */
import Taskbox from './Taskbox'
/* Mui imports */
import { Grid, Typography } from '@mui/material'
import { getAllTask } from '../utils/lib/getAllTask'
// eslint-disable-next-line react/prop-types
const Newtask = ({ allTaskSection, componentTitle }) => {
    const [tasks, setTasks] = useState([]);
    const fetchTasks = async () => {
        const fetchedTask = await getAllTask();
        setTasks(fetchedTask)
    }
    useEffect(() => {
        fetchTasks();
        return () => { fetchTasks() }
    }, [])

    return (
        <>
            <Grid container mb={"1rem"}>
                <Grid xs={12} sm={12} md={12} lg={12} >
                    <Typography variant="h4" color="#0f172a" fontFamily="Rubik">{componentTitle}</Typography>
                </Grid>
            </Grid>
            <Grid container height={"100%"} columnGap={"1rem"} rowGap={"1rem"} >
                {
                    tasks.map((item, ind) => {

                        return (

                            <Grid item xs={12} sm={12} md={5} lg={5} key={ind}>
                                <Taskbox allTaskSection={allTaskSection} tasks={tasks} data={item} />
                            </Grid>
                        )
                    })

                }


            </Grid>
        </>
    )
}

export default Newtask