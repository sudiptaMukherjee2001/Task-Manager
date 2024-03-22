import axios from "axios"

export const storeAllTask = async (taskInfo) => {

    await axios.post("http://localhost:8000/", taskInfo)
        .then(response => {
            console.log('Success:', response.data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}