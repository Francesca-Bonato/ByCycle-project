import { useEffect, useState } from "react";
import ThreadForm from "../components/ThreadForm";
import ThreadReplies from "../components/ThreadReplies";
import ReplyForm from "../components/ReplyForm";
import axios from "axios";

const Community = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  //utente loggato
  const isLoggedIn = localStorage.getItem("user");

  // State to hold the list of threads, loading and error states
  const [threadList, setThreadList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // State to hold the ID of the currently active thread (for displaying comments)
  const [activeThreadId, setActiveThreadId] = useState(null);

  //state to refresh replies list
  const [refresh, setRefresh] = useState(null);

  //function to fetch thread list
  const fetchThreads = async () => {
    setLoading(true);
    setError(null);
    try {
      // Prende i dati al server usando una richiesta GET
      const response = await axios.get("http://localhost:4000/community");
      setThreadList(response.data);
    } catch (error) {
      console.error(error.data.msg);
      setError(error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  };

  // useEffect to initialize the thread list and the thread replies from the database on component mount
  useEffect(() => {
    fetchThreads();
  }, []);

  // Function to create a new thread
  const createThread = async (title, description) => {
    // Show alert if either thread input is empty
    if (title.trim() === "" || description.trim() === "") {
      alert("Please insert a title and a description for the new thread");
      return;
    }
    try {
      // Create a new thread object
      const newThread = {
        title, // The title of the new thread
        description, // The description of the new thread
        author: user.id, // The name of the author extracted from the local storage
      };
      //Send new thread data to back-end
      const response = axios.post("http://localhost:4000/community", newThread);
      if (response.status === 201) {
        console.log("Thread created successfully!");
      }
      fetchThreads();
    } catch (error) {
      console.error("Error creating thread:", error);
      alert(error.data.msg);
    }
  };

  // Function to handle the click on Visualize Comments/Hide Comments button
  const toggleComments = (threadId) => {
    // If the thread is active, hide comments; otherwise, activate the thread to visualize the comments
    setActiveThreadId(activeThreadId === threadId ? null : threadId);
  };

  return (
    <main className="flex flex-col items-center justify-center pt-16 px-5 md:px-10 lg:px-16 2xl:text-lg">
      {/* Main heading */}
      <h1 className="text-center text-neutral-800 font-medium leading-[55px]">
        Join the discussion
      </h1>
      {/* Introductory text */}
      <p className="text-zinc-500 text-justify md:font-semibold max-w-[1260px] py-8">
        Dive into the heart of our community in the ByCycle Forum, where biking
        enthusiasts from around the world come together to share their passion.
        This is the place to find and participate in discussions on all things
        cycling — from gear and routes to tips and experiences. Please note, to
        create threads or reply to existing ones, you need to be logged in.
        <br /> <br />
        <strong>
          Join the conversation and connect with fellow cyclists today!
        </strong>
      </p>
      <img
        className="h-[500px] rounded-[5px] object-cover"
        src="https://images.unsplash.com/photo-1598609363592-f2dc587ffcb0?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      {/* Subheading for new thread creation */}
      <h2 className="text-center text-neutral-800 font-medium leading-[55px] pt-8">
        Create a Thread
      </h2>
      {isLoggedIn ? null : (
        <p className="text-red-500 text-center">
          You need to login before posting in our community
        </p>
      )}

      {/* Form to create a new thread */}
      <ThreadForm onCreateThread={createThread} />

      <img
        className="h-[500px] rounded-[5px] object-cover"
        src="https://images.unsplash.com/photo-1669748828862-44819cec7d6b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      {/* Subheading for active threads section */}
      <h2 className="text-center text-neutral-800 font-medium leading-[55px] pt-8">
        Active threads
      </h2>

      {/* Container for displaying the list of threads */}
      <div className="w-full flex flex-col items-center justify-center max-w-[1260px] py-8">
        {/* List of active threads */}
        {loading ? (
          <p>Loading threads...</p>
        ) : error ? (
          <p>Error fetching threads: {error.message}</p>
        ) : (
          threadList.length > 0 &&
          [...threadList].reverse().map((thread) => (
            <div
              key={thread.id}
              className="w-full border border-gray-300 p-4 mb-4 rounded-xl"
            >
              {/* Thread card */}
              <h3 className="text-xl font-semibold mb-2">{thread.title}</h3>
              <p className="text-gray-600 mb-2">{thread.description}</p>
              <p className="text-sm text-gray-500 mb-4">
                Created by: {thread.author_username}
              </p>

              {/* Button to visualize or hide comments */}
              <button
                onClick={() => toggleComments(thread.id)}
                className="min-w-[119px] h-[48px] font-semibold rounded-[24px] bg-gray-200 hover:bg-gray-300 text-gray-800 px-8 mt-4"
                disabled={!isLoggedIn}
              >
                {activeThreadId === thread.id
                  ? "Hide Comments"
                  : "Visualize Comments"}
              </button>

              {/* Section to visualize comments if the thread is active */}
              {activeThreadId === thread.id && (
                <>
                  {/* Component to display the list of replies */}
                  <ThreadReplies threadId={thread.id} refresh={refresh} />
                  {/* Form to create a new reply */}
                  <ReplyForm
                    threadId={thread.id}
                    onCreateReply={setRefresh}
                    user={user}
                  />
                </>
              )}
            </div>
          ))
        )}
      </div>
    </main>
  );
};

export default Community;
