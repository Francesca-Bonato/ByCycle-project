import { useEffect, useState } from "react";
import { communityData } from "../data.js"; //import the dummy database
import Button from "../components/Button.jsx";

const Community = () => {
  // State to hold the list of threads
  const [threadList, setThreadList] = useState([]);
  // States to hold the new thread input
  const [threadTitle, setThreadTitle] = useState(""); ////////////// New thread title
  const [threadDescription, setThreadDescription] = useState(""); // New thread description
  // State to hold the reply input
  const [replyText, setReplyText] = useState(""); ////////////////////// Reply text
  // State to hold the active threads
  const [activeThreadId, setActiveThreadId] = useState(null); //////////// Id of active thread (comments are visible)

  // useEffect to initialize the thread list from the dummy database on component mount
  useEffect(() => {
    setThreadList(communityData);
  }, []);

  // Function to create a new thread
  const createThread = () => {
    // Show alert if either thread input is empty
    if (threadTitle.trim() === "" || threadDescription.trim() === "") {
      alert("Please insert a title and a description for the new thread");
      return;
    }

    // Create a new thread object
    const newThread = {
      id: threadList.length + 1, ///////// Unique ID for the new thread
      title: threadTitle, //////////////// The title of the new thread
      description: threadDescription,
      author: {
        name: "Nome Utente", ///////////// ////////////////////////// Replace this with the actual user's name
        profilePic: "https://example.com/default-profile-pic.jpg", // Replace this with the actual user's profile pic
      },
      replies: [], ////////////////////////////////////////////////// Array initialized with no replies
    };

    // Update the dummy database
    communityData.push(newThread);

    // Update the state with the new thread list
    setThreadList([...communityData]);

    console.log("Thread created successfully!");

    // Clear the thread inputs
    setThreadTitle("");
    setThreadDescription("");
  };

  // Function to create a new reply to an existing thread
  const createReply = (threadId) => {
    // Show alert if reply input is empty
    if (replyText.trim() === "") {
      alert("Inserisci una risposta.");
      return;
    }

    // Update dummy database with the new reply
    const updatedThread = threadList.map((thread) =>
      thread.id === threadId
        ? {
            ...thread,
            replies: [
              ...thread.replies,
              {
                id: thread.replies.length + 1,
                text: replyText,
                author: {
                  name: "Nome Utente",
                  profilePic: "https://example.com/default-profile-pic.jpg",
                },
              },
            ],
          }
        : thread
    );

    // Update threadList state
    setThreadList(updatedThread);

    // Clear the reply text input
    setReplyText("");

    //Keep the thread active after the addition of the reply
    setActiveThreadId(threadId);
  };

  // Function to handle the click on Visualize Comments/Hide Comments button
  const toggleComments = (threadId) => {
    if (activeThreadId === threadId) {
      // If thread is active, hide comments
      setActiveThreadId(null);
    } else {
      // Otherwise, activate the thread to visualize the comments
      setActiveThreadId(threadId);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center pt-16 px-5 md:px-10 lg:px-16 2xl:text-lg">
      {/* Main heading */}
      <h1 className="text-center text-neutral-800  font-medium leading-[55px]">
        Join the discussion
      </h1>
      {/* Introductory text */}
      <p className="text-zinc-500 text-justify md:font-semibold max-w-[1260px] py-8">
        Dive into the heart of our community in the ByCycle Forum, where biking
        enthusiasts from around the world come together to share their passion.
        This is the place to find and participate in discussions on all things
        cycling — from gear and routes to tips and experiences. Please note, to
        create threads or reply to existing ones, you need to be logged in.{" "}
        <br /> <br />
        <strong>
          Join the conversation and connect with fellow cyclists today!
        </strong>
      </p>

      {/* Subheading for new thread creation */}
      <h2 className="text-center text-neutral-800 font-medium leading-[55px] pt-8">
        Create a Thread
      </h2>

      {/* Form to create a new thread */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createThread();
        }}
        className=" w-full py-8 max-w-[1260px]"
      >
        {/* Input for new thread title */}
        <input
          type="text"
          placeholder="Title"
          value={threadTitle}
          onChange={(e) => setThreadTitle(e.target.value)}
          className="w-full border border-gray-300 rounded-xl p-2 mb-2"
        />
        {/* Textarea for new thread description */}
        <textarea
          placeholder="Description"
          value={threadDescription}
          onChange={(e) => setThreadDescription(e.target.value)}
          className="w-full border border-gray-300 rounded-xl p-2 mb-2"
        />
        {/* Button to submit new thread*/}
        <Button innerText="Create Thread" className="max-w-[190px] mt-3" />
      </form>

      {/* Subheading for active threads section */}
      <h2 className="text-center text-neutral-800 font-medium leading-[55px] pt-8">
        Active threads
      </h2>

      {/* Container for displaying the list of threads */}
      <div className="w-full flex flex-col items-center justify-center max-w-[1260px] py-8">
        {/*List of active threads*/}
        {threadList.map((thread) => (
          <>
            {/* thread card */}
            <div
              key={thread.id}
              className="w-full border border-gray-300 p-4 mb-4 rounded-xl"
            >
              <h3 className="text-xl font-semibold mb-2">{thread.title}</h3>
              <p className="text-gray-600 mb-2">{thread.description}</p>
              <p className="text-sm text-gray-500 mb-4">
                Created by: {thread.author.name}
              </p>

              {/* Button to visualize or hide comments */}
              <button
                onClick={() => toggleComments(thread.id)}
                className="min-w-[119px] h-[48px] font-semibold rounded-[24px] bg-gray-200 hover:bg-gray-300 text-gray-800 px-8 mt-4"
              >
                {activeThreadId === thread.id
                  ? "Hide Comments"
                  : "Visualize Comments"}
              </button>

              {/* Section to visualize comments if the thread is active and it has comments */}
              {activeThreadId === thread.id && thread.replies.length > 0 && (
                <div className="sm:px-4">
                  {/* Comment section */}
                  <div className="mt-5">
                    <hr />
                    <h3 className="text-xl font-semibold my-3">Comments:</h3>
                    {/* List of comments */}
                    {thread.replies.map((reply) => (
                      <>
                        {/* Comment box */}
                        <div
                          key={reply.id}
                          className="w-full rounded-xl border p-3 mt-3"
                        >
                          <p>{reply.text}</p>
                          <p className="text-sm text-gray-500 mt-3">
                            Commented by: {reply.author.name}
                          </p>
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              )}
              {/* Form to create a reply for an active thread */}
              {activeThreadId === thread.id && (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    createReply(thread.id);
                  }}
                  className="my-4 sm:px-4"
                >
                  <h3 className="text-xl font-semibold my-3">
                    Tell us your thoughts:
                  </h3>
                  {/* Reply input */}
                  <textarea
                    placeholder="Write a comment here"
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    className="w-full rounded-xl border p-2 mb-2"
                  />
                  {/* Button to submit the reply */}
                  <Button innerText="Reply" />
                </form>
              )}
            </div>
          </>
        ))}
      </div>
    </main>
  );
};

export default Community;
