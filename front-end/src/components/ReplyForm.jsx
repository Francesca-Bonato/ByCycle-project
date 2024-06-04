/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "../components/Button.jsx";

const ReplyForm = ({ onCreateReply }) => {
  const [replyText, setReplyText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateReply(replyText);
    setReplyText("");
  };

  return (
    <form onSubmit={handleSubmit} className="my-4 sm:px-4">
      <h3 className="text-xl font-semibold my-3">Tell us your thoughts:</h3>
      <textarea
        placeholder="Write a comment here"
        value={replyText}
        onChange={(e) => setReplyText(e.target.value)}
        className="w-full rounded-xl border p-2 mb-2"
      />
      <Button innerText="Reply" />
    </form>
  );
};

export default ReplyForm;
