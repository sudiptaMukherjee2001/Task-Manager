import axios from "axios"

export const deleteTask = async (id) => {
    console.log('====================================');
    console.log(id);
    console.log('====================================');
    const data = await axios.delete(`http://localhost:8000/delete/${id}`)
    return data;
}