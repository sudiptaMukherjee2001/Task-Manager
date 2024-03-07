/* React imports */
import React from 'react'
import PropTypes from 'prop-types';
/* Mui imports */
import {
    Box,

    Typography,
    Dialog,

    DialogContent,

    Button,
    TextField
} from '@mui/material'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

// eslint-disable-next-line react/prop-types
const DialogBox = ({ openDialogBox, setOpenDialogBox }) => {
    const handleCloseDialogBox = () => {
        setOpenDialogBox(false);
    };

    const handleSelectPriority = () => {
        console.info('You clicked the Chip.');
    };
    return (
        <Dialog
            className='test'
            onClose={handleCloseDialogBox}
            aria-labelledby="customized-dialog-title"
            open={openDialogBox}

            sx={{
                '.MuiDialog-paper': {
                    minWidth: '50vw',
                    // maxHeight: '70vh',
                    "@media screen and (max-width:800px)": {
                        minWidth: '96vw',
                        maxHeight: '60vh',
                    }

                }

            }}
        >

            <Box display={"flex"}
                justifyContent={"space-between"}
            >

                <Button id="customized-dialog-title" sx={{ m: 0, p: 2 }} disableFocusRipple={true} disableRipple={true} onClick={handleCloseDialogBox} >
                    <Typography fontSize={"1.1rem"} fontFamily="Rubik" fontWeight={600} color="#0f172a" >Cancel</Typography>
                </Button>
                <Button variant="outlined" disableFocusRipple={true} disableRipple={true} sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    border: "1px solid #0f172a !important",
                    paddingInline: "2rem",

                    "&:hover": { // Apply hover effect directly to the Button
                        borderColor: "#0f172a !important",

                    },



                }}>
                    <Typography fontSize={"1.1rem"} fontFamily="Rubik" fontWeight={600} color="#0f172a" >Add task</Typography>
                </Button>
            </Box>
            <DialogContent dividers>
                <Typography variant="h6" fontFamily="Rubik" color="#0f172a" mb={"0.2rem"}>Task name</Typography>
                {/* <TextField variant="filled" label="Title" color="default" focused fullWidth size='medium' /> */}
                <TextField variant="outlined" size='small' sx={{
                    ".MuiOutlinedInput-notchedOutline": {
                        // color: "#000"
                        borderColor: "#F9F9F8 !important",
                        borderRadius: "0.7rem",
                    },
                    ".MuiInputBase-input": {

                        borderRadius: "0.7rem",
                        background: "#F9F9F8 ",
                    }
                }}
                    helperText="*Enter your task"
                    fullWidth
                    focused
                />
                <Typography variant="h6" color="#0f172a" mb={"0.2rem"} mt={"1rem"} fontFamily="Rubik">Assign Date and time</Typography>
                <TextField variant="outlined" size='small' sx={{
                    ".MuiOutlinedInput-notchedOutline": {
                        // color: "#000"
                        borderColor: "#F9F9F8 !important",
                        borderRadius: "0.7rem",
                    },
                    ".MuiInputBase-input": {

                        borderRadius: "0.7rem",
                        background: "#F9F9F8 ",
                    }
                }}
                    helperText="*Enter  due date and time"
                    fullWidth
                    focused
                />
                <Typography variant="h6" color="#0f172a" mb={"0.2rem"} mt={"1rem"} fontFamily="Rubik">Priority</Typography>

                <Stack direction="row" spacing={1}>
                    <Chip label="High" onClick={handleSelectPriority} sx={{ fontFamily: "Rubik", color: "#f1f5f9", bgcolor: "red", borderRadius: "8px", height: "28px" }} />
                    <Chip label="Medium" onClick={handleSelectPriority} sx={{ fontFamily: "Rubik", color: "#65a30d", bgcolor: "#d9f99d", borderRadius: "8px", height: "28px" }} />
                </Stack>
            </DialogContent>

        </Dialog>
    )
}
DialogBox.prototype = {
    openDialogBox: PropTypes.bool,
    setOpenDialogBox: PropTypes.func,
}

export default DialogBox