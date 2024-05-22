import { useParams } from "react-router-dom";
import { blogData } from "../data";

function BlogPostDetails() {
  // Get the "id" parameter from the URL using useParams
  const { id } = useParams();
  // Find the event in the event data that matches the provided id
  const post = blogData.find((event) => event.id === parseInt(id));

  // If the event is not found, display an error message
  if (!post) {
    return <p>Article not found</p>;
  }

  // Render event details if the event is found
  return (
    <>
      {/* Main container with responsive padding */}
      <section className="container-xs flex items-center justify-center flex-col max-w-[1260px] mx-auto py-16 px-5 md:px-10 lg:px-16 2xl:text-lg">
        {/* Article title */}
        <h3 className="text-center text-neutral-800 font-medium leading-[55px] mb-3">
          {post.title}
        </h3>
        {/* Flexible container for image and text*/}
        <div className="flex flex-col-reverse items-center justify-center gap-10 flex-wrap lg:flex-row lg:flex-nowrap lg:justify-between">
          {/* Article image */}
          <div className="w-full lg:w-auto">
            <img
              src={post.img}
              alt={post.title}
              className="w-full h-[300px] object-top rounded-[16px] object-cover sm:object-center lg:h-100 lg:h-[560px]"
            />
          </div>
          <div className="flex flex-col items-center my-[10px] justify-center gap-5 break-words w-full lg:w-[42%]">
            {/* Article content and other information */}
            <ul className="text-zinc-500 text-justify md:font-semibold py-8">
              <li className="pb-8">{post.content}</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogPostDetails;
