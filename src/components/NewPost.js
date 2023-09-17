import React, { useState } from 'react'
import Navbar from './Navbar'
import { apiUrl } from '../apiConfig';
import axios from 'axios';

export default function NewPost() {
  
    const [post,setPost] = useState({});
    const handleChange =(e)=>{
        setPost({...post,[e.target.id]:e.target.value});
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        
        axios.post(`${apiUrl}/posts`,post)
        .then(res => console.log(res))
        .catch(err=> console.error(err.message));
    }
 

    return (
    <div className='container'>
        <Navbar/>
        <form onSubmit={(e)=>handleSubmit(e)}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" className="form-control" id="title" placeholder='Title' onChange={(e)=>handleChange(e)}/>
  </div>
  <div className="mb-3">
    <label htmlFor="body" className="form-label">Body</label>
    <input type="text" className="form-control" id="body" placeholder='Body'onChange={(e)=>handleChange(e)}/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}
