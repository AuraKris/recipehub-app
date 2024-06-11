import React from 'react';
import { Link } from 'react-router-dom';
import { useForum } from './ForumContext';

export default function Forum() {
    const { posts, tutorials } = useForum();
    function truncateWords(text, maxWords) {
        const words = text.split(' ');
        if (words.length > maxWords) {
            return words.slice(0, maxWords).join(' ') + '...';
        }
        return text;
    }
    return (
        <div className="forum">
            <h1>Forum</h1>
            <Link to="/forum/new" className="btn btn-create">Create New Post</Link>

            <div className="section-forum">
                <h2>Tutorials</h2>
                <div className="tutorials-list">
                    {tutorials.map(tutorial => (
                        <div key={tutorial.id} className="tutorial-summary">
                            <h2>{tutorial.title}</h2>
                            <p>{tutorial.content}</p>
                            {tutorial.image && <img src={URL.createObjectURL(tutorial.image)} alt="Tutorial" />}
                        </div>
                    ))}
                </div>
            </div>

            <div className="section-forum">
                <h2>Previous Threads</h2>
                <div className="posts-list">
                    {posts.map(post => (
                        <Link to={`/forum/${post.id}`} key={post.id} className="post-summary">
                            <h2>{post.title}</h2>
                            <p>{truncateWords(post.content, 80)}</p>
                            {post.image && <img src={URL.createObjectURL(post.image)} alt="Post" />}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
