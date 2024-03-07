/* React imports */
import React, { useState } from 'react'
/* Component imports */
import Navbar from './Navbar';
import Newtask from './Newtask';
import CompletedTasks from './CompletedTasks';
import PriorityTasks from './PriorityTasks';
import Stats from './Stats';
import DialogBox from './DialogBox';
/* Style component */
import {
    CustomTextfield,
    FloatingBtn,
    HeroSection,
    InputContainer,

} from '../Stlye/HeroSetionStyle'
import {
    TaskContainer, AllTaskWarpper
} from '../Stlye/AllTaskStyle'
/* Mui imports */
import {
    Box,
    Grid,
    Typography,

} from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import Fab from '@mui/material/Fab';
import useMediaQuery from '@mui/material/useMediaQuery';


const TaskHandeling = () => {

    const navLinkText = ["All task", "Completed task", "Top priority task", "Statistics"]
    const [toggelComp, setToggelComp] = useState(navLinkText)
    const [openDialogBox, setOpenDialogBox] = React.useState(false);
    const [animatedNavPageOpen, setanimatedNavPageOpen] = React.useState(false);
    const isMobile = useMediaQuery('(max-width:900px)');

    const handleClickOpenDialogBox = () => {
        setOpenDialogBox(true);
    };
    const showCorrectComp = (currComp) => {
        setToggelComp(currComp)
    }
    const handelOpenAnimatedNavPage = () => {

        setanimatedNavPageOpen(!animatedNavPageOpen);
    }


    return (
        <>
            <HeroSection>
                {/*  Title and add new task modal   */}
                <Grid container>
                    <Grid item xs={12} sm={12} md={12} lg={12} >
                        <TaskContainer className='task_container_header'>
                            <Typography variant="h4" color="initial" className='task_title' sx={{ color: "#0f172a" }}>todo.</Typography>
                            <AddIcon fontSize='medium' sx={{ color: "#0f172a", cursor: "pointer" }} onClick={handleClickOpenDialogBox} />
                        </TaskContainer>
                    </Grid>
                </Grid>


                <Grid container>
                    {/* Left side navigation bar */}
                    <Grid item xs={12} sm={12} md={3} lg={3} >
                        <Navbar navLinkText={navLinkText} showCorrectComp={showCorrectComp} setanimatedNavPageOpen={setanimatedNavPageOpen} animatedNavPageOpen={animatedNavPageOpen} />
                    </Grid>
                    {/* right side content */}

                    <Grid item xs={12} sm={12} md={9} lg={9} >
                        {/* This container will contain all the tasks */}


                        <AllTaskWarpper
                            flex={true}
                            flexWrap={true}
                            margin={true}
                            // height={true}
                            padding={true}
                            width={true}
                            className='AllTaskWarpper'
                        >
                            {/* Showing which tab is selected */}
                            {
                                // toggelComp === "All task" ?
                                //     <Newtask allTaskSection={"All task"} componentTitle={"All task"} /> :
                                toggelComp === "Completed task" ? <CompletedTasks componentTitle={"Completed task"} /> :
                                    toggelComp === "Statistics" ? <Stats componentTitle={"Statistics"} /> :
                                        <Newtask allTaskSection={"All task"} componentTitle={"All task"} />
                            }
                        </AllTaskWarpper>

                    </Grid>
                </Grid>

                <DialogBox openDialogBox={openDialogBox} setOpenDialogBox={setOpenDialogBox} />

            </HeroSection >
            {
                isMobile ?

                    <FloatingBtn >

                        <Fab size="medium" color="secondary" aria-label="add">
                            {/* CloseIcon */}
                            {animatedNavPageOpen ? <CloseIcon onClick={handelOpenAnimatedNavPage} /> : <AddIcon onClick={handelOpenAnimatedNavPage} />}

                        </Fab>
                    </FloatingBtn>

                    : null
            }
        </>
    )
}

export default TaskHandeling
