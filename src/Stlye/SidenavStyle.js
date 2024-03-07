/* Mui imports */
import { Box, styled, Button, TextField } from '@mui/material'

export const SidenavContainer = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    paddingInline: "2.6rem",
    rowGap: "3rem",
    minHeight: "20%",
    marginTop: "2rem",
    ".navLink": {
        cursor: "pointer"
    },
    [" @media (max-width: 800px)"]: {
        display: "none"


    }

}))

export const AnimatedNavbar = styled(Box)(({ theme }) => ({
    backdropFilter: "blur(12px) saturate(180%)",
    // -webkit-backdrop-filter: blur(16px) saturate(180%);
    backgroundColor: "rgba(17, 25, 40, 0.54)",
    borderRadius: "9px",
    border: "1px solid rgba(255, 255, 255, 0.125)",
    height: "80vh",
    position: "absolute",
    left: "0",
    right: "0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    rowGap: "4rem",
    alignItems: "center",
    zIndex: "100",
    overflow: "hidden",

}))