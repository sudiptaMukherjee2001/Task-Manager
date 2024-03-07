/* React imports */
import React from 'react'
import PropTypes from 'prop-types';
/* Component imports */

/* Style component */
import { AnimatedNavbar, SidenavContainer } from '../Stlye/SidenavStyle'
/* Mui imports */
import { Typography, useMediaQuery } from '@mui/material'

/* Framer motion import*/
import { motion } from "framer-motion";


const Navbar = ({ navLinkText, showCorrectComp, animatedNavPageOpen, setanimatedNavPageOpen }) => {
    const isMobile = useMediaQuery('(max-width:900px)');

    const getCurrComp = (item) => {
        showCorrectComp(item)
        setanimatedNavPageOpen(false)
    }
    return (
        <>
            <SidenavContainer>
                {
                    navLinkText.map((item, ind) => {
                        return (
                            <Typography fontFamily="Rubik" fontWeight={400} fontSize={"1.5rem"} key={ind} color="#0f172a" className='navLink' onClick={() => getCurrComp(item)}>
                                {item}

                            </Typography>

                        )
                    })
                }
            </SidenavContainer>
            {
                isMobile && animatedNavPageOpen ?

                    <motion.div
                        // initial={{ opacity: 0, x: "100%", scale: 0.5 }}
                        // animate={{ opacity: 1, x: 0, scale: 1, }}
                        initial={{ opacity: 0, y: "-100%", scale: 0.5 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        style={{ position: "relative", zIndex: "100" }}
                        transition={{
                            duration: 0.2,
                            ease: [0, 0.91, 0.3, 4.01],
                            scale: {
                                type: "spring",
                                damping: 18,
                                stiffness: 100,
                                restDelta: 0.001
                            }
                        }}

                    >
                        <AnimatedNavbar>
                            {
                                navLinkText.map((item, ind) => {
                                    return (
                                        <Typography fontFamily="Rubik" fontWeight={400} fontSize={"2rem"} key={ind} color="#e2e8f0" className='navLink' onClick={() => getCurrComp(item)}>
                                            {item}

                                        </Typography>

                                    )
                                })
                            }
                        </AnimatedNavbar>
                    </motion.div>

                    : null
            }
        </>
    )
}
Navbar.propTypes = {
    navLinkText: PropTypes.array,
    showCorrectComp: PropTypes.func,
    animatedNavPageOpen: PropTypes.any,
    setanimatedNavPageOpen: PropTypes.func
}
export default Navbar
