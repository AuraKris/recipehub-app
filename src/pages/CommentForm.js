import React, { useState, forwardRef } from 'react';
import { useComments } from './CommentsContext';

const CommentForm = forwardRef(({ postId }, ref) => {
    const { addComment } = useComments();
    const [title, setTitle] = useState('');
    const [comment, setComment] = useState('');
    const [photo, setPhoto] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newComment = {
            title,
            comment,
            photo
        };
        addComment(postId, newComment);
        setTitle('');
        setComment('');
        setPhoto(null);
    };

    return (
        <form className="comment-form" onSubmit={handleSubmit} ref={ref}>
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required/>
            <textarea placeholder="Your Comment" value={comment} onChange={(e) => setComment(e.target.value)} required/>
            <input type="file" accept="image/*" onChange={(e) => setPhoto(e.target.files[0])} />
            <button className="btn" type="submit">Submit</button>
        </form>
    );
});

export default CommentForm;
