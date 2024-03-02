/* React imports */
import PropTypes from 'prop-types';

/* Component imports */
/* Style component */
import { CustomTypography, Tasks } from '../Stlye/AllTaskStyle'
/* Mui imports */
import { Typography, Checkbox, Grid } from '@mui/material'


const AllTask = ({ taskList }) => {

    return (
        <Grid container>

            {
                taskList.map((tasks, ind) => {
                    return (
                        <Grid item xs={12} sm={12} md={6} lg={8} key={ind} >

                            <Tasks>
                                <Checkbox color="success" />
                                <CustomTypography variant="h6" color="initial">
                                    {console.log("task", tasks)}
                                    {tasks}
                                </CustomTypography>
                            </Tasks>

                        </Grid>
                    )
                })

            }




        </Grid>
    )
}
AllTask.propTypes = {
    // Title: PropTypes.string.isRequired,
    taskList: PropTypes.array

};

export default AllTask