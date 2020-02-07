import React, { useState, useEffect } from 'react';

const Blogs = (props) => {
    const [setBlogs] = useState([]);

    if (props.auth.isAuth === false) {
        props.history.push("/login");
    }

    useEffect(() => {
        fetch("/blogs")
            .then(response => response.json())
            .then(data => {
                setBlogs(JSON.parse(data.body));
            })
    }, []);

    const renderBlogs = () => {
        return (
            <div>
            <br></br>
            <h3>Today I found a really cool picture from internet. I loved it!! Take a minute to admire this beautiful picture!!!</h3>
            <img src="https://a01191804demo.s3-us-west-2.amazonaws.com/pics/clouds.jpg" alt="blog image"></img>
            </div>
        );
    }

    return (
        <div>
            <h1 className="text-center">Welcome to your own blog!</h1>
            {renderBlogs()}
        </div>
    );
}

export default Blogs;