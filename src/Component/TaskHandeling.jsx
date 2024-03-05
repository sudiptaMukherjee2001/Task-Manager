/* React imports */
import React, { useState } from 'react'
/* Component imports */
import Navbar from './Navbar';
/* Style component */
import {
    CustomTextfield,
    HeroSection,
    InputContainer,

} from '../Stlye/HeroSetionStyle'
import {
    TaskContainer, AllTaskWarpper
} from '../Stlye/AllTaskStyle'
/* Mui imports */
import { Box, Grid, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import Newtask from './Newtask';



const TaskHandeling = () => {
    /*     const [isTaskPresnt, setisTaskPresnt] = useState(true);
        const [value, setvalue] = useState('');
        const [taskList, setTasklist] = useState([]) */
    /*  Function to add task */
    /*     const saveTask = (e) => {
            e.preventDefault();
            setTasklist(prev => [...prev, value]);
           
        } */
    /*  Function to handle the input */
    /*  const handleInputChange = (e) => {
         setvalue(e.target.value)
 
     } */
    const navLinkText = ["All task", "Completed task", "Top priority task", "Statistics"]



    return (
        <HeroSection>
            {/*  Title and add new task modal  */}
            <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={12} >
                    <TaskContainer className='task_container_header'>
                        <Typography variant="h4" color="initial" className='task_title' sx={{ color: "#0f172a" }}>todo</Typography>
                        <AddIcon fontSize='medium' sx={{ color: "#0f172a", cursor: "pointer" }} />
                    </TaskContainer>
                </Grid>
            </Grid>


            <Grid container height={"100%"}>
                {/* Left side navigation bar */}
                <Grid item xs={12} sm={12} md={3} lg={3} >
                    <Navbar navLinkText={navLinkText} />
                </Grid>
                {/* right side content */}
                {/* <Box height={"100%"}> */}

                <Grid item xs={12} sm={12} md={9} lg={9} height={"100%"}>
                    {/* This container will contain all the tasks */}

                    <AllTaskWarpper
                        flex={true}
                        flexWrap={true}
                        margin={true}
                        height={true}
                        padding={true}
                        width={true}
                        className='AllTaskWarpper'
                    // border={"2px solid red"}

                    >

                        <Newtask />
                    </AllTaskWarpper>
                </Grid>
                {/* </Box> */}
            </Grid>

            {/* <Divider color="#0F172A" variant="middle" /> */}
            {/* Add  new tasks section  */}
            {/* <TaskContainer> */}
            {/* Input field starts from here   */}
            {/* <Grid container>
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
                </Grid> */}
            {/* Input field ends from here   */}
            {/* Add Task with  checkboxes and crud features*/}
            {
                // isTaskPresnt ?
                //     <>
                //         {/* <AllTask /> */}
                //         <AllTask taskList={taskList} />

                //     </>
                //     : "There is no task  added yet."
            }
            {/* </TaskContainer> */}


        </HeroSection >
    )
}

export default TaskHandeling
