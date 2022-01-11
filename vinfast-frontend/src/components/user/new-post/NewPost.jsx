import React, {useState} from 'react'
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from 'draftjs-to-html';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import axios from 'axios'
import { useNavigate } from 'react-router-dom';

import './new-post.scss'
const NewPost = () => {

    const navigate = useNavigate ();

    const [userInfo, setUserInfo] = useState({
        title: '',
        
    })

    const onChangeValue = (e) => {
        setUserInfo({
            ...userInfo,
            [e.target.name]:e.target.value
        })
    }

    let editorState = EditorState.createEmpty();
    const [description, setDescription] = useState(editorState)

    const onEditorStateChange = (editorState) => {
        setDescription(editorState)
    }
    
    const [isError, setIsError] = useState(null)
    const addDetails = async (e) => {
        try {
            e.preventDefault();
            e.persist();
            if(userInfo.description.value.length < 50) {
                setIsError('Vui lòng nhập độ dài thông tin mô tả từ 50 ký tự trở lên');
                return
            }
            axios.post('http://localhost/vinfast/vinfast-backend/api/admin/createProducts.php', {
                title: userInfo.title,
                description: userInfo.description.value
            })
            .then(res => {
                if(res.data.success === true) {
                    navigate('/');
                }
            })
        } catch (error) {
            throw error
        }
    }

    return (
        <div className='new__post'>
            <div className="container">
                <div className="row">
                    <div className="l-12 new__post__title">
                        <input onChange={onChangeValue} placeholder='Tiêu đề' type="text" name="title" id="title" />
                    </div>
                    <div className="l-12 new__post__editor">
                        <Editor
                            editorState={description}
                            toolbarClassName='toolbarClassName'
                            wrapperClassName="demo-wrapper"
                            editorClassName="demo-editor"
                            onEditorStateChange={onEditorStateChange}
                        />
                        <textarea style={{display: 'none'}} disabled ref={(val) => userInfo.description = val} value={draftToHtml(convertToRaw(description.getCurrentContent()))} />
                    </div>
                    {isError !== null && <div className='errors'>{isError}</div>}
                    <div className="l-12 new__post__submit">
                        <button onClick={addDetails}>Xuất bản</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewPost
