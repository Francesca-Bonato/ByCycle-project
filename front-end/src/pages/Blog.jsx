import { useEffect, useState } from "react";
import animation_logo from "../assets/images/ByCycle logo ridotto.png";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import axios from "axios";
import MyPlaceholder from "../components/MyPlaceholder";

function Blog() {
  // State to hold the list of threads, loading and error states
  const [articleList, setArticleList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // State variables for pagination: current page and total number of pages
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // State variables for the highlighted article, loading state, and error state
  const [highlightedArticle, setHighlightedArticle] = useState([]);
  const [loadingHighlight, setLoadingHighlight] = useState(false);
  const [errorHighlight, setErrorHighlight] = useState(null);

  // Effect hook to fetch articles and highlighted article whenever the currentPage changes
  useEffect(() => {
    fetchBlogArticles(currentPage);
    fetchHighlightedArticle();
  }, [currentPage]);

  // Function to fetch the list of articles for a given page
  const fetchBlogArticles = async (page = 1) => {
    setLoading(true); // Set loading state to true
    setError(null);
    try {
      // Fetch data from the server using a GET request
      const response = await axios.get(
        `http://localhost:4000/blog?page=${page}`
      );
      setArticleList(response.data.articles); // Set the list of articles
      setTotalPages(response.data.totalPages); // Set the total number of pages
    } catch (error) {
      console.error(error.message); // Log the error message
      setError(error); // Set the error state
    } finally {
      setTimeout(() => {
        setLoading(false); // Set loading state to false after a delay
      }, 500);
    }
  };

  // Function to handle page change
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage); // Update the current page if within valid range
    }
  };

  // Function to fetch the highlighted article
  const fetchHighlightedArticle = async () => {
    setLoadingHighlight(true);
    setErrorHighlight(null);
    try {
      const response = await axios.get(
        "http://localhost:4000/blog/highlighted"
      ); // Fetch highlighted article from a specific endpoint
      setHighlightedArticle(response.data[0]);
    } catch (error) {
      console.error(error.message);
      setErrorHighlight(error);
    } finally {
      setLoadingHighlight(false);
    }
  };

  return (
    <>
      {/* Main container with responsive padding*/}
      <div className="flex flex-col justify-center max-w-[1400px] mx-auto pt-16 px-5 md:px-10 lg:px-16">
        {/* Main title */}
        <h1 className="text-center text-neutral-800 font-medium leading-[55px]">
          Blog
        </h1>
        {loadingHighlight ? (
          <p>Loading main article...</p>
        ) : errorHighlight ? (
          <p>Error fetching main article: {error.message}</p>
        ) : (
          highlightedArticle && (
            /* Highlight blog article */
            <section className="flex items-center justify-center gap-12 flex-wrap lg:flex-nowrap lg:justify-between xl:pt-16 py-8">
              <div className="flex flex-col items-center justify-center gap-16 lg:flex-row">
                {/* Text section */}
                <div className="flex flex-col items-center justify-center gap-5 break-words w-full lg:w-[42%] lg:items-start">
                  <h5 className="w-full text-center text-[35px] font-bold leading-[125%] break-words lg:text-left xl:text-[40px]">
                    {highlightedArticle.title}
                  </h5>
                  <div className="flex xl:w-full ">
                    <img
                      src={animation_logo}
                      alt="ByCycle logo"
                      className="animate-spin"
                      width={"100px"}
                    />
                  </div>
                  <p className="leading-[150%] text-lg text-gray-600 break-words text-justify">
                    {highlightedArticle.abstract}
                  </p>
                  <Link
                    to={`/blog/${highlightedArticle.id}`}
                    className="flex lg:w-full mb-7"
                  >
                    <Button innerText="Read our latest article" />
                  </Link>
                </div>

                {/* Image section */}
                <div className="w-full lg:w-auto">
                  <img
                    src={highlightedArticle.img}
                    alt="highlighted blog post image"
                    className="w-full h-[300px] rounded-[16px] object-cover lg:h-[560px]"
                  />
                </div>
              </div>
            </section>
          )
        )}
        {/* All blog articles */}
        <section id="tabs-content" className="w-full">
          <div className="text-center text-neutral-800 text-[44px] font-medium leading-[55px] pt-16">
            All blog articles
          </div>
          {loading ? (
            <MyPlaceholder viewbox="0 0 960 1088">
            {/* Prima riga */}
            <rect x="0" y="0" rx="5" ry="5" width="300" height="524" />
            <rect x="330" y="0" rx="5" ry="5" width="300" height="524" />
            <rect x="660" y="0" rx="5" ry="5" width="300" height="524" />
            {/* Seconda riga */}
            <rect x="0" y="564" rx="5" ry="5" width="300" height="524" />
            <rect x="330" y="564" rx="5" ry="5" width="300" height="524" />
            <rect x="660" y="564" rx="5" ry="5" width="300" height="524" />
            </MyPlaceholder>
          ) : error ? (
            <p>Error fetching articles: {error.message}</p>
          ) : (
            <div className="flex flex-wrap max-w-[1444px] justify-center pt-16 pb-7 gap-[50px]">
              {/* Mapping through the blog data and displaying each blog post */}
              {articleList.map((item) => (
                // Single Blog post card
                <div
                  key={item.title}
                  className="flex flex-col gap-6 items-center justify-between"
                >
                  {/* Blog post image */}
                  <div className="w-[300px] h-[300px] rounded-[12px] overflow-hidden">
                    <Link to={`/blog/${item.id}`} className="w-full">
                      <img
                        src={item.img}
                        alt="card image"
                        className="w-full rounded-[12px] object-cover h-full cursor-pointer transition duration-300 ease-in-out hover:scale-110"
                      />
                    </Link>
                  </div>
                  {/* Blog post title and read more link */}
                  <div className="flex w-full flex-col justify-between items-start h-[200px] gap-[20px] max-w-[300px]">
                    <p
                      size="xl"
                      className="text-center text-3xl font-bold w-full leading-[130%] tracking-[-0.48px]"
                    >
                      {item.title}
                    </p>

                    <Link to={`/blog/${item.id}`} className="w-full">
                      <p className="!font-medium transition-all hover:text-[#26425a] underline">
                        Read More
                      </p>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
        {/* Pagination buttons to switch between different sets of blog data */}
        <div className="flex items-center justify-center py-[20px] gap-2">
          {/*  <button
            className={`transition-all rounded-[5px] p-3 hover:bg-[#232323] hover:text-white ${
              currentPage === 1 ? "bg-[#232323] text-white" : ""
            }`}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button> */}
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              className={`transition-all rounded-[5px] p-3 hover:bg-[#232323] hover:text-white ${
                currentPage === index + 1 ? "bg-[#232323] text-white" : ""
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          {/* <button
            className={`transition-all rounded-[5px] p-3 hover:bg-[#232323] hover:text-white ${
              currentPage === totalPages ? "bg-[#232323] text-white" : ""
            }`}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button> */}
        </div>
      </div>
    </>
  );
}

export default Blog;
