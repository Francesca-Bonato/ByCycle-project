/* eslint-disable react/prop-types */

const ThreadReplies = ({ replies}) => (
  <div className="sm:px-4 mt-5">
    <hr />
    <h3 className="text-xl font-semibold my-3">Comments:</h3>
    {replies.map((reply) => (
      <div key={reply.id} className="w-full rounded-xl border p-3 mt-3">
        <p>{reply.text}</p>
        <p className="text-sm text-gray-500 mt-3">Commented by: {reply.author_username}</p>
      </div>
    ))}
  </div>
);

export default ThreadReplies;
