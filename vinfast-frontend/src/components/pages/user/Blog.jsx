import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import postApi from '../../../api/postApi'

const Blog = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {

        const getAllPost = async () => {
            try {
                const res = await postApi.getAll()
                setPosts(res.data)
            } catch(err) {
                console.log(err)
            }
        }
        getAllPost()            
    }, [])

    return (
        <div className="blog">
            <div className="container">
                <div className='row'>
                    {
                        posts ? posts.map((item, index) => (
                            <Link className='l-4 post' to={`/blog/${item.id}`} key={index}>
                                <div className='test'>
                                    <img className="post__image" src={`/images/posts/${item.picture}`} alt="" />
                                    <div className="post__footer">
                                        <p className="post__name">{item.username}</p>
                                        <h5 className="post__title">{item.title}</h5>
                                        <div className="post__excerpt">{item.excerpt}</div>
                                    </div>
                                </div>
                            </Link>
                        )) : null
                    }
                </div>
            </div>
        </div>
    )
}

export default Blog
