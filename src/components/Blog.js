import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'
const Blog = (props) => {
    const {_id, img, name, instructor, blog} = props.blog;
    
    return (
        <div className="blog">
            <img src={img} alt="pictures" />
            <h2>{name}</h2>
            <p>By : {instructor}</p>
            <p>{blog.substring(0, 80).concat('...') }</p>
            <Link to={`/singleblog/${_id}`}> 
                <button>See More</button>
            </Link>
        </div>
    );
};

export default Blog;