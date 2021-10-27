import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'
const Header = () => {
    return (
        <div>
            <Link className="link" to="/home">All Blogs</Link>
            <Link className="link" to="/addblog">Add new blog</Link>
            <Link className="link" to="/manage">Manage blogs</Link>
        </div>
    );
};

export default Header;