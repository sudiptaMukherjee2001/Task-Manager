import React from 'react'
/* style imports */
import { TaskBox } from '../Stlye/AllTaskStyle'
/* Mui imports */
import { Box, Typography, Checkbox } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Chip from '@mui/material/Chip';
const Taskbox = () => {
    return (
        <TaskBox >
            {/* TaskBox Header */}
            <Box className="taskBoxHeader">
                <Typography className="taskBoxHeaderTitle">
                    ALgebra
                </Typography>
                <MoreHorizIcon sx={{ color: "#0f172a", cursor: "pointer" }} />
            </Box>
            {/* Task assign date */}
            <Box className="assignDate">
                <Typography>
                    Assign Date : 17/06/2021
                </Typography>

            </Box>
            {/* Task priority */}
            <Box className="priority" display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
                <Chip label="High" sx={{ color: "#f1f5f9", bgcolor: "red", borderRadius: "8px", height: "28px" }} />
                <Box display={'flex'} alignItems={"center"}>

                    <Checkbox
                        color="success"
                        sx={{
                            padding: "0px"
                        }}
                    />

                </Box>

            </Box>

        </TaskBox>
    )
}

export default Taskbox