import {Link} from 'react-router-dom'
import React, { useEffect, useState } from 'react';




const Manage = () => {
    const [blogs, setBlogs] = useState([])
    
    useEffect(()=> {
        fetch('http://localhost:5000/blogs')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
const handleDelete = id => {
   const proceed =  window.confirm('Are You Sure?')
   if(proceed){
    fetch(`http://localhost:5000/blogs/${id}`, {
        method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                const remaining = blogs.filter(blog => blog._id !== id)
                setBlogs(remaining)
                
            }
            console.log(data)
        })
   }
    
}

    return (
        <div>
            <div>
            <table width="100%">
                {
                    blogs.map(blog => {
                        return <tr>
                            <td>{blog.name}</td>
                            <td>{blog.instructor}</td>
                            <td><Link to={`/editblog/${blog._id}`}><button>Edit</button></Link></td>
                            <td><button onClick={() =>handleDelete(blog._id)}>Delete</button></td>
                        </tr>
                       
                    })
                }
            </table>
            
            </div>
           
        </div>
    );
};

export default Manage;