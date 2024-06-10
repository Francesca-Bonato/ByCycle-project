import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import axios from "axios";
import PlaceholderBlogDetails from "../components/PlaceholderBlogDetails";

function BlogPostDetails() {
  // Get the "id" parameter from the URL using useParams
  const { id } = useParams();

  // State to hold the article data, loading and error states
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Effect hook to fetch the article data
  useEffect(() => {
    fetchArticle(id);
  }, [id]);

  // Function to fetch the article by ID
  const fetchArticle = async (id) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`http://localhost:4000/blog/${id}`); // Fetch article from a specific endpoint with a dynamic id parameter
      setArticle(response.data[0]);
      console.log(response.data[0]);
    } catch (error) {
      console.error(error.message);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <PlaceholderBlogDetails />
      ) : error ? (
        <p>Error fetching article details: {error.message}</p>
      ) : (
        // Render blog article details if the article is found
        <>
          {/* Main container with responsive padding */}
          <section className="container-xs flex items-center justify-center flex-col max-w-[1260px] mx-auto py-16 px-5 md:px-10 lg:px-16 2xl:text-lg">
            {/* Article title and subheading*/}
            <h3 className="text-center text-neutral-800 font-medium leading-[55px] mb-3">
              {article.title}
            </h3>
            <p className="text-center">***</p>
            {article.abstract && (
              <div>
                <h6 className="text-justify text-neutral-800 font-medium mt-4 mb-4">
                  {article.abstract}
                </h6>
                <p className="text-center mb-4 lg:hidden">***</p>
              </div>
            )}

            {/* Flexible container for image and text*/}
            <div className="flex flex-col-reverse items-center justify-center gap-10 flex-wrap lg:flex-row lg:flex-nowrap lg:justify-between lg:mt-6">
              {/* Article image */}
              <div className="w-full lg:w-auto">
                <img
                  src={article.img}
                  alt={article.title}
                  className="w-full h-[300px] object-center rounded-[16px] object-cover sm:object-center lg:w-[560px] lg:h-[500px]"
                />
              </div>

              {/* Article content and other information */}
              {article.main && (
                <div className="flex flex-col items-center my-[10px] justify-center gap-5 break-words w-full lg:w-[42%]">
                  <p className="text-zinc-500 text-justify md:font-semibold py-4">
                    {article.main}
                  </p>
                </div>
              )}
            </div>
            <Link to="/blog">
              <Button
                innerText="←  Back to all blog articles "
                className="mt-8"
              />
            </Link>
          </section>
        </>
      )}
    </>
  );
}

export default BlogPostDetails;
