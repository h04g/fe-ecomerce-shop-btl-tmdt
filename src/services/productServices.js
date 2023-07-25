import axios from './custom-axios';

const getAllProductApi = () => {
    return axios.get("/products")
}

const deleteProductsApi = (id) => {
    return axios.delete("/products/6", {id})
}

const addNewProductApi = (id, title, price, description, category, image) => {
    return axios.post("/products", {id,title, price, description, category, image})
}
const updateProductApi = (id, updatedProductData) => {
    return axios.put(`/products/${id}`, updatedProductData)
}

export {getAllProductApi, deleteProductsApi, addNewProductApi, updateProductApi}