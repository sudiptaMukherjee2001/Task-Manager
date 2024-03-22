const mongoose = require('mongoose');

//  Define the schema for a task
const taskSchema = mongoose.Schema({
    taskName: {
        type: String,
        required: true
    },
    assignDate: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        required: true
    },
})
//Creating the collection AllTask
const taskDetails = mongoose.model('taskDetails', taskSchema)

module.exports = taskDetails;