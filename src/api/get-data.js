import axios from "./axios"

export default async function getData() {
    const data = await axios.get("/items/blogs");
    return data.data.data;
}