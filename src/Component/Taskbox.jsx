import React from 'react'
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
const Taskbox = ({ allTaskSection }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [openDialogBox, setOpenDialogBox] = React.useState(false);


    const handleClickOpenDialogBox = () => {
        setOpenDialogBox(true);
    };
    const open = Boolean(anchorEl);
    const handleOpenMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseMenu = () => {
        setAnchorEl(null);
    };
    return (
        <TaskBox >
            {/* TaskBox Header */}
            <Box className="taskBoxHeader">
                <Typography className="taskBoxHeaderTitle" fontFamily="Rubik" variant="h5">
                    Algebra
                </Typography>
                <MoreHorizIcon sx={{ color: "#0f172a", cursor: "pointer" }} onClick={handleOpenMenu} />
            </Box>
            {/* Task assign date */}
            <Box className="assignDate">
                <Typography fontFamily="Rubik" fontWeight={"500"}>
                    Assign Date : 17/06/2021
                </Typography>

            </Box>
            {/* Task priority */}
            <Box className="priority" display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
                <Chip label="High" sx={{ color: "#f1f5f9", bgcolor: "red", borderRadius: "8px", height: "28px", fontFamily: "Rubik" }} />
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
                <MenuItem onClick={handleClickOpenDialogBox}>Edit</MenuItem>
                <MenuItem >Delete</MenuItem>
            </Menu>
            <DialogBox openDialogBox={openDialogBox} setOpenDialogBox={setOpenDialogBox} />
        </TaskBox>
    )
}

export default Taskbox