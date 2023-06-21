import { ENDPOINT } from "../Utills/helper";
import {get, post} from "../web.request";

export const getProductList = (pageNumber) =>{
    return get(`${ENDPOINT}?limit=10&skip=${pageNumber*10}`);
};

export const addProductData = (data) =>{
    return post(`${ENDPOINT}/add`,data);
};

export const singleProductdata = (id) =>{
    return get(`${ENDPOINT}/${id}`)
}