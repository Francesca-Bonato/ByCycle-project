import PropTypes from "prop-types";

const ThreadReplies = ({ replies }) => (
  <div className="sm:px-4 mt-5">
    <hr />
    <h3 className="text-xl font-semibold my-3">Comments:</h3>
    {replies.map((reply) => (
      <div key={reply.id} className="w-full rounded-xl border p-3 mt-3">
        <p>{reply.text}</p>
        <p className="text-sm text-gray-500 mt-3">Commented by: {reply.author.name}</p>
      </div>
    ))}
  </div>
);

// Define the propTypes for the component
ThreadReplies.propTypes = {
  replies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      author: PropTypes.shape({
        name: PropTypes.string.isRequired,
        profilePic: PropTypes.string.isRequired,
      }).isRequired,
    })
  ).isRequired,
};

export default ThreadReplies;
