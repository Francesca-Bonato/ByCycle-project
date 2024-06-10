/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "axios";

const ThreadReplies = ({ threadId, refresh }) => {
  // State to hold the list of replies, loading and error states
  const [repliesList, setRepliesList] = useState([]);
  const [loadingReplies, setLoadingReplies] = useState(false);
  const [errorReplies, setErrorReplies] = useState(null);

  useEffect(() => {
    getReplies(threadId);
  }, [threadId, refresh]);

  //function to fetch thread replies
  const getReplies = async (threadId) => {
    setLoadingReplies(true);
    setErrorReplies(null);
    try {
      // Prende i dati al server usando una richiesta GET
      const response = await axios.get(
        `http://localhost:4000/community/replies/${threadId}`
      );
      console.log(response);
      setRepliesList(response.data);
    } catch (error) {
      console.error(error.message);
      setErrorReplies(error);
    } finally {
      setTimeout(() => {
        setLoadingReplies(false);
      }, 500);
    }
  };

  return (
    <div className="sm:px-4 mt-5">
      <hr />
      <h3 className="text-xl font-semibold my-3">Comments:</h3>
      {loadingReplies ? (
        <p>Loading replies...</p>
      ) : errorReplies ? (
        <p>Error fetching replies: {errorReplies.message}</p>
      ) : (
        repliesList.map((reply) => (
          <div key={reply.id} className="w-full rounded-xl border p-3 mt-3">
            <p>{reply.text}</p>
            <p className="text-sm text-gray-500 mt-3">
              Commented by:{" "}
              <span className="font-bold">{reply.author_username}</span>
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default ThreadReplies;
