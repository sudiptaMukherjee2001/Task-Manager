const express = require('express');
const cors = require('cors');
/* Mongo db import */
const mongoose = require('mongoose');
const taskDetails = require("./model/model");
// -----------------------------------------------------------
const app = express();
app.use(cors());

app.use(express.json());

// Adding a task to taskDetails collection/table
app.post('/', (req, res) => {
    const { taskName, assignDate, priority } = req.body;

    let newTask = new taskDetails({
        taskName: taskName,
        assignDate: assignDate,
        priority: priority,

    })
    newTask.save().then((task) => {
        res.send(task)
    }).catch((err) => {
        console.log(err)
    })
})

// Get all the task
app.get('/task', async (req, res) => {
    try {
        // Fetch all tasks from the database
        const tasks = await taskDetails.find();

        res.json(tasks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})
// updated the task content
app.put("/update/:id", async (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;

    try {
        const data = await taskDetails.findByIdAndUpdate(id, updatedData, { new: true });
        res.json({ success: true, message: "Successfully updated", data });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to update", error });
    }

})

//  Delete a specific task by its ID

app.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await taskDetails.deleteOne({ _id: id })
        res.send({ success: "Deleted" });
    }
    catch (er) {
        res.status(500).json({ success: false, message: "Failed to update", er });

    }


})

/* Mongo db connect */
mongoose.connect("mongodb://localhost:27017/task-manager", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB Connected'))
    .catch((err) => console.error(err));

app.listen(8000, () => {
    console.log(`Server Started at ${8000}`)
})