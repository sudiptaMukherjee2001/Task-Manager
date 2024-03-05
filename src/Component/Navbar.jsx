/* React imports */
import React from 'react'
import PropTypes from 'prop-types';
/* Component imports */

/* Style component */
import { SidenavContainer } from '../Stlye/SidenavStyle'
/* Mui imports */
import { Typography } from '@mui/material'

const Navbar = ({ navLinkText }) => {
    console.log('====================================');
    console.log(navLinkText, "navLinkText");
    console.log('====================================');
    return (
        <SidenavContainer>
            {
                navLinkText.map((item, ind) => {
                    return (
                        <Typography variant="h5" key={ind} color="#0f172a" className='navLink'>
                            {item}

                        </Typography>

                    )
                })
            }




        </SidenavContainer>
    )
}
Navbar.propTypes = {
    navLinkText: PropTypes.array
}
export default Navbar
