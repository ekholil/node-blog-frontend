import React, { useEffect, useState } from 'react';
import AddBlog from './AddBlog/AddBlog';
import Blog from './Blog';


const Home = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(()=> {
        fetch('http://localhost:5000/blogs')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
    return (
        <div>
            <div className="blogs">
            {
                blogs.map(blog => <Blog key={blog._id} blog={blog} />)
            }
            
            </div>
         
        </div>
    );
};

export default Home;