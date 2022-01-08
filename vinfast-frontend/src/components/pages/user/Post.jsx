import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import PostView from '../../user/post-view/PostView'
const Post = () => {
    let params = useParams();
    console.log(params)
    
    const [posts, setPosts] = useState([])

    const getPostById = (id) => posts.find(e => e.id === id)
    const post = getPostById(params.id)
    console.log(posts)

    useEffect(() => {
        
        axios.get('http://localhost/vinfast/vinfast-backend/api/post/readPost.php')
                .then(res => {
                    const persons = res.data;
                    console.log(persons)
                    setPosts( persons.data);
                })
                .catch(error => console.log(error));              
    }, [])

    return (
        <div className='post'>
            <PostView post={post}/>
        </div>
    )
}

export default Post
