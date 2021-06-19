import { useEffect, useState } from "react"

import {Card} from 'react-bootstrap';

import axios from 'axios';

import '../css/blog.css';

export default function Blog() {
    const [blog, setBlog] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(async () => {
        try {
            let apiUrl = `https://www.googleapis.com/blogger/v3/blogs/${process.env.REACT_APP_BLOG_ID}/posts?key=${process.env.REACT_APP_API_TOKEN}`;
            let result = await axios.get(apiUrl);
            setBlog(result);
        }
        catch(error) {
            console.log(error);
        }
        finally {
            setLoading(false);
        }
    })

    if(loading) {
        return (
            <div className="blog-div">
                <h1 className="title-blog">Blog Posts</h1>
                <p>Loading blogs</p>
            </div>
        )
    }
    if(loading == false && blog.data == undefined) {
        return (
            <div className="blog-div">
                <h1 className="title-blog">Blog Posts</h1>
                <p> 
                    <a href="https://devtonytoma.blogspot.com/">
                    Too many calls to the blog api. Check back in a couple of minutes,
                    or visit me blog here.
                    </a>
                </p>
            </div>
        )
    }

    return (
        <div className="blog-div">
            <h3 className="title-blog">Blog Posts</h3>
            <DisplayBlogs blog={blog}/>       
        </div>
    )
}

function DisplayBlogs(props) {
    return(
        <div className="card-container">
                { 
                    props.blog.data.items.map((post, index) => {
                        let content = post.content.substring(0, 50).replace(/<\/?[^>]+(>|$)/g, "");
                        return(
                            <a className="no-select" href={post.url}>
                            <Card className="card-blog">
                                <Card.Body>
                                    <Card.Title>{post.title}</Card.Title>
                                    <Card.Text>{content}...</Card.Text>
                                    <Card.Text>
                                        <CommentIcon/> {post.replies.totalItems}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            </a>
                        )
                    })
                }
            </div>
    )
}

function CommentIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left" viewBox="0 0 16 16">
            <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
        </svg>
    )
}