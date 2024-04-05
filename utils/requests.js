import axios from 'axios';

const BASE_URL = 'https://dummyjson.com';

//fetch products
export const fetchProducts = async() => {
    try{
        const response = await axios.get(`${BASE_URL}/products`)
        return response
    }
    catch(err){
        console.log(err)
    }
}