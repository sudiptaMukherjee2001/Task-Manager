import axios from "axios"

export const updateTask = async (id, updatedData) => {
    console.log("THis id and updated data", id, updatedData);
    // const data = await axios.put("http://localhost:8000/update",updatedData)
    const data = await axios.put(`http://localhost:8000/update/${id}`, updatedData);

    return data;

}