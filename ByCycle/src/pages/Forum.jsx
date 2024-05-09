import { useState } from "react";

let initialDataComment = [
  {
    name: "John Doe",
    date: "April 17, 2023",
    title: "Title simple 1",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium tenetur, suscipit sunt odit similique incidunt modi ratione sapiente, mollitia laudantium debitis molestiae quis voluptate inventore non libero iure eos quibusdam?",
  },
  {
    name: "John Doe",
    date: "April 17, 2023",
    title: "Title simple 2",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium tenetur, suscipit sunt odit similique incidunt modi ratione sapiente, mollitia laudantium debitis molestiae quis voluptate inventore non libero iure eos quibusdam?",
  },
  {
    name: "John Doe",
    date: "April 17, 2023",
    title: "Title simple 3",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium tenetur, suscipit sunt odit similique incidunt modi ratione sapiente, mollitia laudantium debitis molestiae quis voluptate inventore non libero iure eos quibusdam?",
  },
];

function Forum() {
  const [dataComment, setDataComment] = useState(initialDataComment);
  const [newComment, setNewComment] = useState({
    name: "",
    title: "",
    comment: "",
  });
  const [editIndex, setEditIndex] = useState(-1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewComment((prevComment) => ({
      ...prevComment,
      [name]: value,
    }));
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    if (newComment.name && newComment.title && newComment.comment) {
      const currentDate = new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      if (editIndex !== -1) {
        // Update existing comment
        const updatedComments = dataComment.map((comment, index) =>
          index === editIndex
            ? {
                name: newComment.name,
                date: currentDate,
                title: newComment.title,
                comment: newComment.comment,
              }
            : comment
        );
        setDataComment(updatedComments);
        setEditIndex(-1);
      } else {
        // Add new comment
        const updatedComments = [
          {
            name: newComment.name,
            date: currentDate,
            title: newComment.title,
            comment: newComment.comment,
          },
          ...dataComment,
        ];
        setDataComment(updatedComments);
      }
      setNewComment({ name: "", title: "", comment: "" });
    }
  };

  const handleDelete = (index) => {
    const updatedComments = dataComment.filter((comment, i) => i !== index);
    setDataComment(updatedComments);
    // Reset editIndex if deleting the currently edited comment
    if (index === editIndex) {
      setEditIndex(-1);
    }
  };

  const handleEdit = (index) => {
    const commentToEdit = dataComment[index];
    setNewComment({
      name: commentToEdit.name,
      title: commentToEdit.title,
      comment: commentToEdit.comment,
    });
    setEditIndex(index);
  };

  return (
    <div>
      <div className="bg-gray-100 p-6">
        <h2 className="text-lg font-bold mb-4">DISCUSSION</h2>
        <div className="flex flex-col space-y-4">
          {/* Form Section */}
          <form
            className="bg-white p-4 rounded-lg shadow-md"
            onSubmit={handleAddComment}
          >
            <h3 className="text-lg font-bold mb-2">
              {editIndex === -1 ? "Add a comment" : "Edit comment"}
            </h3>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                name="name"
                type="text"
                value={newComment.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="title"
              >
                Title
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="title"
                name="title"
                type="text"
                value={newComment.title}
                onChange={handleInputChange}
                placeholder="Enter your title"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="comment"
              >
                Comment
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="comment"
                name="comment"
                rows="3"
                value={newComment.comment}
                onChange={handleInputChange}
                placeholder="Enter your comment"
              ></textarea>
            </div>
            <button
              className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              {editIndex === -1 ? "Submit" : "Save Changes"}
            </button>
          </form>

          {/* Comment Section */}
          {dataComment.map((com, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-bold">{com.name}</h3>
              <p className="text-gray-700 text-sm mb-2">{com.date}</p>
              <span className="font-bold">{com.title}</span>
              <p className="text-gray-700">{com.comment}</p>
              {/* Show delete and edit buttons if the user is the author */}
              <div className="flex justify-end mt-2">
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2 focus:outline-none focus:shadow-outline"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  onClick={() => handleEdit(index)}
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Forum;
