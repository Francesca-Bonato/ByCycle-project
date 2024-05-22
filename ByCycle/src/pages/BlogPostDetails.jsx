import { useParams } from "react-router-dom";
import { blogData } from "../data";
import { Link } from "react-router-dom";

function BlogPostDetails() {
  // Get the "id" parameter from the URL using useParams
  const { id } = useParams();
  // Find the event in the event data that matches the provided id
  const post = blogData
    .flatMap((arr) => arr)
    .find((article) => article.id === parseInt(id));

  // If the event is not found, display an error message
  if (!post) {
    return <p>Article not found</p>;
  }

  // Render event details if the event is found
  return (
    <>
      {/* Main container with responsive padding */}
      <section className="container-xs flex items-center justify-center flex-col max-w-[1260px] mx-auto py-16 px-5 md:px-10 lg:px-16 2xl:text-lg">
        {/* Article title and subheading*/}
        <h3 className="text-center text-neutral-800 font-medium leading-[55px] mb-3">
          {post.title}
        </h3>
        <p className="text-center">***</p>
        {post.abstract && (
          <div>
            <h6 className="text-justify text-neutral-800 font-medium mt-4 mb-4">
              {post.abstract}
            </h6>
            <p className="text-center mb-4 lg:hidden">***</p>
          </div>
        )}

        {/* Flexible container for image and text*/}
        <div className="flex flex-col-reverse items-center justify-center gap-10 flex-wrap lg:flex-row lg:flex-nowrap lg:justify-between lg:mt-6">
          {/* Article image */}
          <div className="w-full lg:w-auto">
            <img
              src={post.img}
              alt={post.title}
              className="w-full h-[300px] object-center rounded-[16px] object-cover sm:object-center lg:w-[560px] lg:h-[500px]"
            />
          </div>

          {/* Article content and other information */}
          {post.main && (
            <div className="flex flex-col items-center my-[10px] justify-center gap-5 break-words w-full lg:w-[42%]">
              <p className="text-zinc-500 text-justify md:font-semibold py-4">
                {post.main}
              </p>
            </div>
          )}
        </div>
        <Link to="/blog">
          <button className="bg-[#232323] text-white pt-3 pb-3 pl-8 pr-8 rounded-[40px]  mt-10 border transition hover:border-solid hover:border-[#232323] hover:bg-white hover:text-black">
           ◀️ Return to the blog
          </button>
        </Link>
      </section>
    </>
  );
}

export default BlogPostDetails;
