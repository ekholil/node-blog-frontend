import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import './../AddBlog/addblog.css'
const EditBlog = () => {
    const [blog, setBlog] = useState({})
    const {id} = useParams()
   
    
    useEffect(() => {
        fetch(`http://localhost:5000/blogs/${id}`)
        .then(res => res.json())
        .then(data => setBlog(data))
    }, [])
    const handleSubmit = e => {
      const url = `http://localhost:5000/blogs/${id}`
        fetch(url, {
            method: 'PUT',
            headers : {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(blog)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount === 1){
                alert('Blog updated')
                setBlog({})
            }
        })
        e.preventDefault()
    };
    const imgChange = e => {
        const newName = e.target.value;
        const updatedBlog = {img: newName, name: blog.name, instructor: blog.instructor, blog: blog.blog}
        setBlog(updatedBlog)
    }
    const nameChange = e => {
        const newName = e.target.value;
        const updatedBlog = {img: blog.img, name: newName, instructor: blog.instructor, blog: blog.blog}
        setBlog(updatedBlog)
    }
    const insChange = e => {
        const newName = e.target.value;
        const updatedBlog = {img: blog.img, name: blog.name, instructor: newName, blog: blog.blog}
        setBlog(updatedBlog)
    }
    const blogChange = e => {
        const newName = e.target.value;
        const updatedBlog = {img: blog.img, name: blog.name, instructor: blog.instructor, blog: newName}
        setBlog(updatedBlog)
    }
    return (
        <div className="parent">
            
            <form onSubmit={handleSubmit}>
                <input onChange={imgChange} value={blog.img || ''} type="text" placeholder="img url" />
                <input onChange={nameChange} value={blog.name || ''} type="text" placeholder="name" />
                <input onChange={insChange} value={blog.instructor || ''} type="text" placeholder="Mentor" />
                <textarea onChange={blogChange} value={blog.blog || ''} rows="10" type="text" placeholder="blog" />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default EditBlog;