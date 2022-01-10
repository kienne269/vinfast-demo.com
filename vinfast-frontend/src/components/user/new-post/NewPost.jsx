import React from 'react'
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import './new-post.scss'
const NewPost = () => {
    return (
        <div className='new__post'>
            <div className="container">
                <Editor />
            </div>
        </div>
    )
}

export default NewPost
