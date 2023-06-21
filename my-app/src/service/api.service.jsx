// get Product List 
import {get} from "../web.request";

export const getProductList = () =>{
    return get(`https://dummyjson.com/products?limit=10&skip=10`);
}