"use client";
import { useState } from "react";

export default function Comment() {
  const [comment, setComment] = useState<string>(""); 
  const [comments, setComments] = useState<string[]>([]); 

  const onClickHandler = () => {
    if (comment.trim() !== "") { 
      setComments((prevComments) => [...prevComments, comment]); 
      setComment(""); 
    }
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  return (
    <div >
      <div className="space-y-4 mb-6 flex flex-col justify-center items-center">
        {comments.length > 0 ? (
          comments.map((text, index) => (
            <div key={index} className="p-4 bg-white rounded-lg shadow-md w-[300px] sm:w-[500px]">
              <p className="text-[#262522]">{text}</p>
            </div>
          ))
        ) : (
          <p className="text-[#262522] font-semibold text-center ">No comments yet</p>
        )}
      </div>

      {/* Comment input form */}
      <div className="flex flex-col space-y-4 justify-center items-center">
        <h3 className="text-[24px] font-bold text-[#262522] text-center">Comment Section</h3>
        <textarea
          value={comment}
          onChange={onChangeHandler}
          className="p-4 bg-white rounded-lg shadow-sm sm:w-[500px] w-[300px]"
          placeholder="Write your comment"
        />
        <button
          onClick={onClickHandler}
          className="w-[160px] py-2 bg-red-400 text-[#262522] font-medium rounded-lg hover:bg-red-500 "
        >
          Submit
        </button>
      </div>
    </div>
  );
}

