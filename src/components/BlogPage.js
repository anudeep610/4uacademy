import React from 'react';
import "./css/BlogPage.css";
import blogs from "./blogData.json";
import {useParams} from "react-router-dom";

export default function BlogPage() {
    const {index} = useParams();
  return (
        <section className='fullBlog'>
            <h1 className='blog-heading'>{blogs[index].Title}</h1>
            <div className="blog-details">
                <p className="blog-author">-By {blogs[index].author}</p>
                <p className='blog-date'>{blogs[index].date}</p>
            </div>
            <hr />
            <img className="blog-image" src={blogs[index].image} alt="" />
            <p className='blog-text'>{blogs[index].text}</p>
        </section>
    )
}

