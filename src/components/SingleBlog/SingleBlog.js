import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './../home.css'

const SingleBlog = () => {
    const [blog, setBlog] = useState({})
    const {id} = useParams()
    
    useEffect(() => {
        fetch(`http://localhost:5000/blogs/${id}`)
        .then(res => res.json())
        .then(data => setBlog(data))
    }, [])
    return (
        <div className="blogdetail">
            <img src={blog.img} alt="" />
            <h2>{blog.name}</h2>
            <small>{blog.instructor}</small>
            <p>{blog.blog}</p>
        </div>
    );
};

export default SingleBlog;