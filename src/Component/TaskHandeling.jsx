/* React imports */
import React, { useState } from 'react'
/* Component imports */
import AllTask from './AllTask';
/* Style component */
import { CustomTextfield, HeroSection, InputContainer, TaskContainer } from '../Stlye/HeroSetionStyle'
/* Mui imports */
import { Box, Grid, Typography, Checkbox } from '@mui/material'
import Divider from '@mui/material/Divider';
import AddIcon from '@mui/icons-material/Add';

const TaskHandeling = () => {
    const [isTaskPresnt, setisTaskPresnt] = useState(true);
    const [value, setvalue] = useState('');
    const [taskList, setTasklist] = useState([])
    /*  Function to add task */
    const saveTask = (e) => {
        e.preventDefault();
        setTasklist(prev => [...prev, value]);
        console.log("This is task one");
    }
    /*  Function to handle the input */
    const handleInputChange = (e) => {
        setvalue(e.target.value)

    }
    console.log("value", value);
    console.log("taskList", taskList);
    return (
        <HeroSection>
            {/*  Title and Total task count  */}
            <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Typography variant="h3" color="initial" className='task_title'>Today&apos;s agenda</Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} >
                    <Typography variant="h5" color="initial" className='task_count' >No of today&apos;s tasks: {taskList.length}</Typography>
                </Grid>
            </Grid>
            <Divider color="#0F172A" variant="middle" />
            {/* Add  new tasks section  */}
            <TaskContainer>
                {/* Input field starts from here   */}
                <Grid container>
                    <Grid item xs={11} sm={8} md={8} lg={5}>
                        <InputContainer>
                            <AddIcon fontSize='medium' sx={{ color: "#e2e8f0", cursor: "pointer" }} onClick={saveTask} />
                            <CustomTextfield
                                id="input-with-sx"
                                variant="standard"
                                fullWidth placeholder='Enter your task here...'
                                onChange={handleInputChange}
                            />
                        </InputContainer>
                    </Grid>
                </Grid>
                {/* Input field ends from here   */}
                {/* Add Task with  checkboxes and crud features*/}
                {
                    isTaskPresnt ?
                        <>
                            {/* <AllTask /> */}
                            <AllTask taskList={taskList} />

                        </>
                        : "There is no task  added yet."
                }
            </TaskContainer>


        </HeroSection>
    )
}

export default TaskHandeling
