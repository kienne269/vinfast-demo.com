import React, { useState, useEffect } from 'react'
import {useSelector} from 'react-redux'
import { selectUser } from '../../../redux/user/userSlice';
import CommentForm from '../comment-form/CommentForm';
import CommentDetail from '../comment-detail/CommentDetail';
import axios from 'axios'
import './comment-view.scss'

const CommentView = (props) => {

  const user = useSelector(selectUser)
    const createCommentApi = []
    const updateCommentApi = []
    const deleteCommentApi = []
    const [backendComments, setBackendComments] = useState([]);
  const [activeComment, setActiveComment] = useState(null);
  const getReplies = (commentId) =>
    backendComments
      .filter((backendComment) => backendComment.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );

  const getCommentsApi = () => {
      
  }
  const addComment = (text, parentId) => {
    createCommentApi(text, parentId).then((comment) => {
      setBackendComments([comment, ...backendComments]);
      setActiveComment(null);
    });
  };

  const updateComment = (text, commentId) => {
    updateCommentApi(text).then(() => {
      const updatedBackendComments = backendComments.map((backendComment) => {
        if (backendComment.id === commentId) {
          return { ...backendComment, body: text };
        }
        return backendComment;
      });
      setBackendComments(updatedBackendComments);
      setActiveComment(null);
    });
  };
  const deleteComment = (commentId) => {
    if (window.confirm("Are you sure you want to remove comment?")) {
      deleteCommentApi().then(() => {
        const updatedBackendComments = backendComments.filter(
          (backendComment) => backendComment.id !== commentId
        );
        setBackendComments(updatedBackendComments);
      });
    }
  };

  useEffect( () => {
    const getCommentsApi = async () => {
      try {
          // const res = await block1Api.getAll()
          const res = await axios.get(`http://localhost/vinfast/vinfast-backend/api/post/readComment.php?post_id=${props.post_id}`)
          setBackendComments(res.data.data)
      } catch(err) {
          console.log(err)
      }
  }
  getCommentsApi()
  }, [props.post_id]);
    return (
        <>
          <CommentForm submitLabel="Write" handleSubmit={addComment} />
          <div className="comments__container">
            {backendComments.map((item, index) => (
              <div className="comments__container__detail">
                <div className="comments__avatar">
                  <img src={user.avatar} alt="" />
                </div>
                <div className="comments__container__content">
                  <h5 className="comments__arthor">{user.name}</h5>
                  <div className="comments__text">{item.content}</div>
                  <p className='comments__created'>
                    <span>{item.created_at}</span>
                    <span className='comments__likeComment'></span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
    )
}

export default CommentView
