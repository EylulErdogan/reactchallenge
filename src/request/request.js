import axios from "axios"
import { apiUrl } from "../apiConfig";
import { useState } from "react";



export const getAllPhotos = async () => {
    const options ={
        method: 'GET',
        url:`${apiUrl}/photos`
    }
    try {
        const result = await axios(options);
        return result.data;
    }
    catch(error){
        throw error;
    }
}
export const getAllPosts = async () => {
    const options ={
        method: 'GET',
        url:`${apiUrl}/posts`
    }
    try {
        const result = await axios(options);
        return result.data;
    }
    catch(error){
        throw error;
    }
}
