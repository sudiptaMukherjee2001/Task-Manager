/* Mui imports */
import { Box, styled, Button, TextField } from '@mui/material'

export const HeroSection = styled(Box)({
    backdropFilter: ' blur(0px) saturate(135%)',
    // -webkit-backdrop-filter: blur(0px) saturate(135%);
    backgroundColor: ' rgba(109, 109, 133, 0.51)',
    borderRadius: '12px',
    border: ' 1px solid rgba(255, 255, 255, 0.125)',
    height: "90vh",
    width: "98%",
    margin: "auto",
    overflowY: "scroll",


    "::-webkit-scrollbar": {
        display: "none"
    },
    ".task_title": {
        // color: "#",
        color: "#e2e8f0",
        paddingLeft: "0.6rem",
        paddingTop: "1.2rem",
    },
    ".task_count": {
        color: "#e2e8f0",
        paddingLeft: "1.2rem",

        marginBlock: "0.6rem"


    },
    [" @media (max-width: 800px)"]: {
        width: "100%",
        ".task_count": {
            textAlign: "center",
            marginTop: "0.6rem",



        }
    }

});
export const TaskContainer = styled(Box)({
    paddingLeft: "1.2rem",
});
export const InputContainer = styled(Box)({
    display: "flex",
    alignItems: "center",
    marginTop: "1rem",
    marginBottom: "0.8rem",
});
export const CustomTextfield = styled(TextField)({

    // border: "2px solid red",
    '.MuiInputBase-root': {
        border: "2px solid ywllow",

        "&::after": {
            borderBottom: "none"
        }

    },
    input: {

        "&::placeholder": {
            color: "#fff"

        },


    }


});
