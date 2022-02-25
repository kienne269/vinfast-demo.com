import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import {useSelector} from 'react-redux'
import { selectUser } from '../../../redux/user/userSlice';
import postApi from '../../../api/postApi';
import './comment-view.scss'

const CommentView = (props) => {

  const user = useSelector(selectUser)
  const [backendComments, setBackendComments] = useState([]);
  const [hasComment, setHasComment] = useState(false);
  const [show, setShow] = useState(false)
    const [active, setActive] = useState(0)

    const [text, setText] = useState('');
    const location = useLocation()

    const handleCreateComment = async (e) => {

      const formData = {
        content : text,
        user_id : user.id,
        post_id : location.pathname.slice(6,8),
        published_at : new Date()
      }
      if (e.key === 'Enter') {
        try {
          await postApi.createComment(formData)
          alert("Viết bình luận thành công")
          setText('')
          setHasComment(true)
        } catch(err) {
            console.log(err)
        }
      }
    };

  useEffect(() => {
    const getCommentsApi = async () => {
      try {
          const res = await postApi.getAllComments(props.post_id)
          setBackendComments(res.data)
          setHasComment(false)
      } catch(err) {
          console.log(err)
      }
    }
    getCommentsApi()
  }, [props.post_id, hasComment]);

    return (
        <>
          <div className="count">
              {backendComments.length}
              <p>bình luận</p>    
            </div>
          <div className='comment__form'>
            <img src={user.avatar} alt="" />
            <input
                className={text !== '' ? "comment__form__text active" : "comment__form__text"}
                onChange={(e) => setText(e.target.value)}
                placeholder='Viết bình luận của bạn...'
                onKeyPress={handleCreateComment}
                value={text}
            />
            <div className="comment__form__action">
              <button className="cancel">Hủy</button>
              <button onClick={handleCreateComment} className={text !== '' ? 'send-up active' : 'send-up'}>Bình luận</button>
            </div>
          </div>
          <div className="comments__container">
            {
              backendComments ? backendComments.map((item, index) => (
                <div className="comments__container__detail" key={index}>
                  <div className="comments__avatar">
                    <img src={item.avatar} alt="" />
                  </div>
                  <div className="comments__container__content">
                    <h5 className="comments__arthor">{item.name}</h5>
                    <div className="comments__text">{item.content}</div>
                    <p className='comments__created'>
                      <span>{item.created_at}</span>
                      <span className='comments__likeComment'></span>
                    </p>
                  </div>
                </div>
                
              )) : null
            }
          </div>
        </>
    )
}

export default CommentView
