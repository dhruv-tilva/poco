import axios from "./axios";

export default async function getImages() {
    const images = await axios.get("/items/dishes")
    return images.data.data
}