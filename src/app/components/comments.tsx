"use client";
import React, { useState } from 'react';

interface Comment {
  id: number;
  name: string;
  email: string;
  text: string;
}

const CommentSection = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [text, setText] = useState<string>('');
  const [editCommentId, setEditCommentId] = useState<number | null>(null);
  const [editText, setEditText] = useState<string>('');

  const handleSubmitComment = () => {
    if (!name || !email || !text) {
      alert("Please fill in all fields.");
      return;
    }

    if (editCommentId === null) {
      // Adding new comment
      const newComment: Comment = {
        id: Date.now(), // unique ID
        name,
        email,
        text,
      };
      setComments((prevComments) => [...prevComments, newComment]);
    } else {
      // Editing existing comment
      setComments((prevComments) =>
        prevComments.map((comment) =>
          comment.id === editCommentId ? { ...comment, text: editText } : comment
        )
      );
      setEditCommentId(null);
      setEditText('');
    }

    setName('');
    setEmail('');
    setText('');
  };

  const handleEditComment = (id: number, text: string) => {
    setEditCommentId(id);
    setEditText(text);
  };

  const handleDeleteComment = (id: number) => {
    setComments((prevComments) => prevComments.filter((comment) => comment.id !== id));
  };

  return (
    <div className="comment-section mt-10">
      <h3 className="font-bold text-xl">Enter Comment</h3>
      
      <div className="mt-4">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border px-3 py-2 w-full mb-2"
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border px-3 py-2 w-full mb-2"
        />
        <textarea
          placeholder="Your Comment"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border px-3 py-2 w-full mb-2"
        ></textarea>
        
        <button
          onClick={handleSubmitComment}
          className="bg-blue-500 text-white px-4 py-2"
        >
          {editCommentId ? "Update Comment" : "Post Comment"}
        </button>
      </div>

      <div className="comments-list mt-8">
        <h4 className="font-bold text-lg">Comments</h4>
        {comments.length === 0 ? (
          <p>No comments yet.</p>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="comment p-4 mb-4 border">
              <div className="flex justify-between">
                <p className="font-semibold">{comment.name}</p>
                <p className="text-sm text-gray-600">{comment.email}</p>
              </div>
              <p className="mt-2">{comment.text}</p>
              <div className="flex mt-2 gap-4">
                <button
                  onClick={() => handleDeleteComment(comment.id)}
                  className="text-red-500"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CommentSection;





