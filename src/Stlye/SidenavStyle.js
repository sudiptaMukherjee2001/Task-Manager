/* Mui imports */
import { Box, styled, Button, TextField } from '@mui/material'

export const SidenavContainer = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    paddingInline: "2.6rem",
    justifyContent: "center",
    rowGap: "3rem",
    minHeight: "20%",
    marginTop: "2rem",
    ".navLink": {
        cursor: "pointer"
    }

}))