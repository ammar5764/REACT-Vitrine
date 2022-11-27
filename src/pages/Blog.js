import React, { useEffect, useState } from 'react';
import Buttons from '../component/Buttons';
import "bootstrap/dist/css/bootstrap.min.css";
import Mouse from '../component/Mouse';
import Navigations from '../component/Navigations';
import axios from 'axios';
import Articles from '../component/Articles';

const Blog = () => {
    const [blogData, setBlogData] = useState([]);
    const [author, setAuthor] = useState("");
    const [textArea, setTextArea] = useState("");
    const [error, setError] = useState(false);

    const getData = async () => {
        try {
            const response = await axios.get("http://localhost:3004/user")
            setBlogData(response.data)
        } catch (error) {
            console.log(error);
        }
    }
   

    useEffect(() => {
        getData()
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (textArea.length < 140) {
            setError(true)
        }else{
            axios.post("http://localhost:3004/user",{
                author,
                content:textArea,
                date:Date.now()
            });
            setAuthor("");
            setError(false);
            setTextArea("");
            getData()
        }
        getData()
    }

    return (
        
        <div className='blog-container'>
      
            <Navigations/>
            <h1>Blog</h1>

            <form onSubmit={(e) => handleSubmit(e)} >
                <div className="mb-3">

                    <input type="text"
                        className="form-control"
                        id="author"
                        placeholder="name"
                        onChange={(e) => setAuthor(e.target.value)}
                        value={author}
                    />
                </div>
                <div className="mb-3">

                    <textarea
                        className="form-control"
                        id="message"
                        placeholder='message'
                        onChange={(e) => setTextArea(e.target.value)}
                        style={{ border: error ? "1px solid red" : "1px solid black" }}
                        value={textArea}
                    ></textarea>
                    {error && <p>votre message doit contenir au moins 140 caractères</p>}
                </div>
                <div className="mb-3">
                    <button type='submit'>send</button>
                </div>
            </form>
  
            <ul className='data'>
                {blogData.map((article, index) => (
                    <Articles key={index} articles={article} />
                ))}
            </ul>
        
            <Buttons left={"/contact"} />
        </div>
    );
};

export default Blog;