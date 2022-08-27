import React from 'react'
import "./css/Blog.css";
import blogs from "./blogData.json";
import { Link } from 'react-router-dom';

export default function Blog() {
    return (
        <section className="blog">
        {
            blogs.map((blog,i)=>{
                return <div className="card">
                <div class="card-top">
					<img src={blog.image} alt="Blog Name"/>
				</div>
				<div class="card-info">
					<h2>{blog.Title}</h2>
					<span class="date">{blog.date}</span>
					<p class="excerpt">{blog.text.slice(0,100).concat("...")}</p>
				</div>
				<div class="card-bottom flex-row">
                    <p class="author">- By {blog.author}</p>
					<Link to={`/blog/${i}`} class="button">Read More</Link>
				</div>
            </div>
            })
        }
        </section>
    )
}
