import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForum } from './ForumContext';
import { useComments } from './CommentsContext';
import CommentForm from './CommentForm';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

export default function PostDetails() {
    const { id } = useParams();
    const { posts, upvotePost, downvotePost } = useForum();
    const post = posts.find(p => p.id === parseInt(id));
    const navigate = useNavigate();

    const { comments, upvoteComment, downvoteComment } = useComments();
    const postComments = comments[id] || [];

    if (!post) {
        return <h2>Post not found</h2>;
    }

    const handleUpvotePost = () => {
        upvotePost(id);
    };

    const handleDownvotePost = () => {
        downvotePost(id);
    };

    const handleUpvoteComment = (commentIndex) => {
        upvoteComment(id, commentIndex);
    };

    const handleDownvoteComment = (commentIndex) => {
        downvoteComment(id, commentIndex);
    };

    return (
        <div className="post-details">
            <button className="btn" onClick={() => navigate(-1)}>Back</button>
            <div className="post-details-sec">
                <h1>{post.title}</h1>
                <p>{post.content}</p>
                {post.image && <img src={URL.createObjectURL(post.image)} alt="Post" />}
                <div className="post-actions">
                    <button className="upv" onClick={handleUpvotePost} style={{ display: 'flex', alignItems: 'center' }}>
                        <ThumbUpIcon /><span>({post.upvotes || 0})</span>
                    </button>
                    <button className="downv" onClick={handleDownvotePost} style={{ display: 'flex', alignItems: 'center' }}>
                        <ThumbDownIcon /><span>({post.downvotes || 0})</span>
                    </button>
                </div>
            </div>
            <div className="comments">
                <h2>Comments</h2>
                {postComments.map((comment, index) => (
                    <div className="comment" key={index}>
                        <h3>{comment.title}</h3>
                        <p>{comment.comment}</p>
                        {comment.photo && <img src={URL.createObjectURL(comment.photo)} alt="Comment" />}
                        <div className="comment-actions">
                            <button className="upv" onClick={() => handleUpvoteComment(index)} style={{ display: 'flex', alignItems: 'center' }}>
                                <ThumbUpIcon /> <span>({comment.upvotes || 0})</span>
                            </button>
                            <button className="downv" onClick={() => handleDownvoteComment(index)} style={{ display: 'flex', alignItems: 'center' }}>
                                <ThumbDownIcon /> <span>({comment.downvotes || 0})</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <CommentForm postId={id} />
        </div>
    );
}
