import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux'
import { useLocation } from 'react-router-dom';
import { selectUser } from '../../../redux/user/userSlice';
import postApi from '../../../api/postApi';
import './comment-form.scss'
const CommentForm = () => {
    const user = useSelector(selectUser);
    const [text, setText] = useState('');
    const [active, setActive] = useState(false);
    const [hide, setHide] = useState(false);
    const location = useLocation()
    
    useEffect(() => {
      const inputDiv = document.querySelector(".comment__form__text")
      inputDiv.addEventListener("input", inputEvt => {
        setText(inputDiv.innerHTML);
        setActive(inputDiv.innerHTML !== '')
      }, false);
    }, [])

    const createComment = async (e) => {
      // e.preventDefault();

      const formData = {
        content : text,
        user_id : user.id,
        post_id : location.pathname.slice(6,8),
        published_at : new Date()
      }
      console.log(formData)
      if (e.key === 'Enter') {
        try {
          await postApi.createComment(formData)
          alert("Viết bình luận thành công")
          setText('null')
        } catch(err) {
            console.log(err)
        }
      }
    };

  return <div className='comment__form'>
            <img src={user.avatar} alt="" />
            <input
                contentEditable="true"
                className={active ? "comment__form__text active" : "comment__form__text"}
                onChange={(e) => setText(e.target.value)}
                placeholder='Viết bình luận của bạn...'
                onKeyPress={createComment}
            />
            <div className="comment__form__action">
              <button className="cancel">Hủy</button>
              <button onClick={createComment} className={active ? 'send-up active' : 'send-up'}>Bình luận</button>
            </div>
        </div>;
};

export default CommentForm;
