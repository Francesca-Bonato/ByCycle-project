import { useState } from "react";
import PropTypes from "prop-types";
import Button from "../components/Button.jsx";

const ThreadForm = ({ onCreateThread }) => {
  // States to hold the new thread input
  const [threadTitle, setThreadTitle] = useState("");
  const [threadDescription, setThreadDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateThread(threadTitle, threadDescription);
    // Clear the thread inputs
    setThreadTitle("");
    setThreadDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full py-8 max-w-[1260px]">
      {/* Input for new thread title */}
      <input
        id="threadTitle"
        name="threadTitle"
        type="text"
        placeholder="Title"
        value={threadTitle}
        onChange={(e) => setThreadTitle(e.target.value)}
        className="w-full border border-gray-300 rounded-xl p-2 mb-2"
      />
      {/* Textarea for new thread description */}
      <textarea
        id="threadDescription"
        name="threadDescription"
        placeholder="Description"
        value={threadDescription}
        onChange={(e) => setThreadDescription(e.target.value)}
        className="w-full border border-gray-300 rounded-xl p-2 mb-2"
      />
      <Button innerText="Create Thread" className="max-w-[190px] mt-3" />
    </form>
  );
};

ThreadForm.propTypes = {
  onCreateThread: PropTypes.func.isRequired, // Defines the onCreateThread prop as a required function
};

export default ThreadForm;
