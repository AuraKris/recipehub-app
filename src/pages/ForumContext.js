import React, { createContext, useContext, useState } from 'react';
import { useAuth } from './AuthContext';

const ForumContext = createContext();

export function useForum() {
    return useContext(ForumContext);
}

export function ForumProvider({ children }) {
    const { user } = useAuth();
    const [posts, setPosts] = useState([]);
    const [tutorials, setTutorials] = useState([
        {
            id: 1,
            title: "Welcome to the Forum",
            content: "This is a place where you can share and discuss recipes.",
            image: null,
        },
        {
            id: 2,
            title: "How to Use the Forum",
            content: "Create a new post to share your recipes or discuss topics.",
            image: null,
        },
    ]);

    const addPost = (title, content, image) => {
        const newPost = {
            id: posts.length + 1,
            title,
            content,
            image,
            upvotes: 0,
            downvotes: 0,
            username: user.username
        };
        setPosts([...posts, newPost]);
    };

    const upvotePost = (postId) => {
        setPosts(prevPosts =>
            prevPosts.map(post =>
                post.id === parseInt(postId) ? { ...post, upvotes: (post.upvotes || 0) + 1 } : post
            )
        );
    };

    const downvotePost = (postId) => {
        setPosts(prevPosts =>
            prevPosts.map(post =>
                post.id === parseInt(postId) ? { ...post, downvotes: (post.downvotes || 0) + 1 } : post
            )
        );
    };

    return (
        <ForumContext.Provider value={{ posts, tutorials, addPost, upvotePost, downvotePost }}>
            {children}
        </ForumContext.Provider>
    );
}
