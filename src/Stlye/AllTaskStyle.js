import { Box, styled, Button, TextField, Typography } from '@mui/material'

export const TaskContainer = styled(Box)({
    paddingBlock: "1.2rem",
    paddingInline: "3rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [" @media (max-width: 800px)"]: {
        paddingInline: "1rem"



    }

});
export const TaskBox = styled(Box)({
    borderRadius: "8px",
    padding: "10px",
    backgroundColor: "#FFF9DE",
    width: "100%",
    // height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    boxShadow: `2px 0px 5px rgb(255 255 255 / 54%)`,

    // flexWrap: "wrap",
    ".taskBoxHeader": {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        ".taskBoxHeaderTitle": {
            color: "#0f172a",
            fontSize: "1.2rem",
            marginBottom: "0.3rem",

        }
    },
    ".assignDate": {
        marginBottom: "0.9rem",
        color: "#334155"
    }
});
export const AllTaskWarpper = styled(Box)(({ theme, ...props }) => ({
    display: `${props.flex ? 'flex' : 'none'}`,
    flexWrap: `${props.flexWrap ? "wrap" : "none"}`,
    gap: `${props.gap ? "1rem" : "none"}`,
    margin: `${props.margin ? "auto" : "none"}`,
    height: `${props.height ? "100%" : "none"}`,
    overflowY: "scroll",
    // border: "2px solid red",

    "::-webkit-scrollbar": {
        display: "none"
    },
}));
export const CustomTypography = styled(Typography)(({ theme }) => ({
    // border: "2px solid red",
    marginBottom: "0.6rem"
}))
