/* React imports */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
/* style import */
import { CustomTypography, Tasks } from '../Stlye/AllTaskStyle';
/*Mui imports  */
import { Typography, Checkbox, Grid } from '@mui/material';
/* Context imports */
// import { ref, set } from "firebase/database";
// import { db } from '../utils/firebase';
import { useFirebase } from '../context/firebaseFunction';

const AllTask = ({ taskList }) => {
    const [checkedTasks, setCheckedTasks] = useState({});
    const [checkedBoxValue, setcheckedBoxValue] = useState({});//This one hold the active checkbox value
    const firebase = useFirebase();
    console.log("firebase hook", firebase);
    /* Function  to handle checkboxes */
    const handleCheckboxChange = (taskId) => {
        console.log("taskId", taskId);
        /* This will return which checkbox in active */
        setCheckedTasks(prevCheckedTasks => ({
            ...prevCheckedTasks,
            [taskId]: !prevCheckedTasks[taskId]
        }));

        /* This will return a active checked box content */
        const Value = taskList.find((item, ind) => ind === taskId)
        console.log("This is checkbox value", Value);

        setcheckedBoxValue(prevCheckedTasksValue => ({
            ...prevCheckedTasksValue,
            [taskId]: Value
        }))


    };

    /*   store data into firebase database */
    firebase.storeDataIntoFirebase(checkedBoxValue, '/today' + new Date().getDate());

    // set(ref(db, '/task'), {
    //     checkedBoxValue

    // });

    // console.log("checkedBoxValue", checkedBoxValue);
    // console.log("checkedTasks", checkedTasks);


    return (
        <Grid container>
            {taskList.map((task, index) => (
                <Grid item xs={12} sm={12} md={6} lg={8} key={index}>
                    <Tasks>
                        <Checkbox
                            color="success"
                            checked={checkedTasks[index] || false}
                            onChange={() => handleCheckboxChange(index)}
                        />
                        <CustomTypography variant="h6" color="initial">
                            {task}
                        </CustomTypography>
                    </Tasks>
                </Grid>
            ))}
        </Grid>
    );
};

AllTask.propTypes = {
    taskList: PropTypes.array.isRequired
};

export default AllTask;
