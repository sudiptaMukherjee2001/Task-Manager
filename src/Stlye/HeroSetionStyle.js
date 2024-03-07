/* Mui imports */
import { Box, styled, Button, TextField } from '@mui/material'

export const HeroSection = styled(Box)({
    // backdropFilter: ' blur(0px) saturate(135%)',
    // - webkit - backdrop - filter: blur(0px) saturate(135 %);
    // backgroundColor: '#ffff',
    // backgroundColor: 'rgb(255 255 255 / 40%)',
    borderRadius: '10px',
    // border: ' 1.3px solid #4b5563',
    height: "96vh",
    width: "97%",
    margin: "auto",
    overflowY: "scroll",


    "::-webkit-scrollbar": {
        display: "none"
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

export const FloatingBtn = styled(Box)(({ theme }) => ({
    position: "absolute",
    // border: "2px solid red",
    bottom: "20px",
    right: "30px"

}))

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
