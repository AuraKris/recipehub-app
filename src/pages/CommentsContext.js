import React, { createContext, useContext, useState } from 'react';

const CommentsContext = createContext();

export function useComments() {
    return useContext(CommentsContext);
}

export function CommentsProvider({ children }) {
    const [comments, setComments] = useState({});

    const addComment = (postId, newComment) => {
        setComments(prevComments => ({
            ...prevComments,
            [postId]: [...(prevComments[postId] || []), { ...newComment, upvotes: 0, downvotes: 0 }]
        }));
    };

    const upvoteComment = (postId, commentIndex) => {
        setComments(prevComments => {
            const updatedComments = { ...prevComments };
            if (updatedComments[postId] && updatedComments[postId][commentIndex]) {
                updatedComments[postId][commentIndex].upvotes += 1;
            }
            return updatedComments;
        });
    };

    const downvoteComment = (postId, commentIndex) => {
        setComments(prevComments => {
            const updatedComments = { ...prevComments };
            if (updatedComments[postId] && updatedComments[postId][commentIndex]) {
                updatedComments[postId][commentIndex].downvotes += 1;
            }
            return updatedComments;
        });
    };

    return (
        <CommentsContext.Provider value={{ comments, addComment, upvoteComment, downvoteComment }}>
            {children}
        </CommentsContext.Provider>
    );
}
