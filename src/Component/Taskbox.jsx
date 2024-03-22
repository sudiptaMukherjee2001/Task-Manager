import React, { useState } from 'react'
/* style imports */
import { TaskBox } from '../Stlye/AllTaskStyle'
/* Mui imports */
import { Box, Typography, Checkbox } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Chip from '@mui/material/Chip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
/* Components imports */
import DialogBox from './DialogBox';
/* Api  service imports */
// eslint-disable-next-line react/prop-types
const Taskbox = ({ allTaskSection, data, tasks }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [openDialogBox, setOpenDialogBox] = React.useState(false);



    const handleClickOpenDialogBox = (id) => {
        console.log("This id", id);
        setOpenDialogBox(true);
    };
    const open = Boolean(anchorEl);
    const handleOpenMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseMenu = () => {
        setAnchorEl(null);
    };
    // console.log("Data", data);
    return (
        <TaskBox >
            {/* TaskBox Header */}
            <Box className="taskBoxHeader">
                <Typography className="taskBoxHeaderTitle" fontFamily="Rubik" >
                    {data.taskName}
                </Typography>
                <MoreHorizIcon sx={{ color: "#0f172a", cursor: "pointer" }} onClick={handleOpenMenu} />
            </Box>
            {/* Task assign date */}
            <Box className="assignDate">
                <Typography fontFamily="Rubik" fontWeight={"500"}>
                    Assign Date : {data.assignDate}
                </Typography>

            </Box>
            {/* Task priority */}
            <Box className="priority" display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
                <Chip label={`${data.priority}`} sx={{ color: "#f1f5f9", bgcolor: `${data.priority === "High" ? "red" : data.priority === "Medium" ? "green" : "orange"}`, borderRadius: "8px", height: "28px", fontFamily: "Rubik" }} />
                {
                    allTaskSection === "All task" ?
                        <Box display={'flex'} alignItems={"center"}>

                            <Checkbox
                                color="success"
                                sx={{
                                    padding: "0px"
                                }}
                            />

                        </Box> : ""
                }

            </Box>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleCloseMenu}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={() => handleClickOpenDialogBox(data._id)}>Edit</MenuItem>
                <MenuItem >Delete</MenuItem>
            </Menu>
            <DialogBox openDialogBox={openDialogBox} setOpenDialogBox={setOpenDialogBox} editTaskData={data} />
        </TaskBox>
    )
}

export default Taskbox