import axios from "axios"

export const getAllTask = async () => {

    const response = await axios.get("http://localhost:8000/task");
    return response.data;

}