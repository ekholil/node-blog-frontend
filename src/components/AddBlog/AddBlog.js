import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

import './addblog.css'

const AddBlog = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    
    const onSubmit = data => {
        axios.post('http://localhost:5000/blogs', data)
        .then(res => {
            console.log(res)
            if(res.status === 200){
                reset()
                
               
                alert('Record Added Succesfully')
            }
            
        })
    };
    return (
        <div className="parent">
            
            <form onSubmit={handleSubmit(onSubmit)}>
    
           
  
      <input placeholder="img URL" {...register("img", { required: true })} />
      <input placeholder="Name" {...register("name", { required: true })} />
      <input placeholder="Author " {...register("instructor", { required: true })} />
      <textarea rows="10" placeholder="blog" {...register("blog", { required: true })} />
     
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
        </div>
    );
};

export default AddBlog;