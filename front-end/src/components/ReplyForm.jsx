/* eslint-disable react/prop-types */
import { useState } from "react";
import axios from "axios";
import Button from "../components/Button.jsx";

const ReplyForm = ({ onCreateReply, threadId, user}) => {
  const [replyText, setReplyText] = useState("");

   // Function to create a new reply to an existing thread
   const createReply = async (threadId, text) => {
    // Show alert if reply input is empty
    if (text.trim() === "") {
      alert("Inserisci una risposta.");
      return;
    }
    // Send new reply data to back-end
    try {
      // Create a new reply object
      const newReply = {
        text, // The text of the new reply
        thread_id: threadId, //the ID of the commented thread
        author_id: user.id, // The name of the author extracted from the local storage
      };
      const response = await axios.post(
        `http://localhost:4000/community/replies/${threadId}`,
        newReply
      );
      console.log(response)
      if (response.status === 201) {
        console.log("Reply created successfully!");
        onCreateReply(Date.now());
      }
    } catch (error) {
      console.error("Error creating reply:", error);
      alert(error.data.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createReply(threadId, replyText);
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
