import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForum } from './ForumContext';

export default function NewPost() {
    const { addPost } = useForum();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        addPost(title, content, image);
        navigate('/forum');
    };

    return (
        <div className="new-post">
            <h1>Create New Post</h1>
            <form onSubmit={handleSubmit} className="new-post-form">
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                    className="form-input"
                    required
                />
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Content"
                    className="form-textarea"
                    required
                />
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setImage(e.target.files[0])}
                    className="form-input"
                />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}
