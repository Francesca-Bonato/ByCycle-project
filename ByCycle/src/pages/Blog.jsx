import { useState } from "react";
import animation_logo from "../assets/images/ByCycle logo ridotto.png";
import { Link } from "react-router-dom";
import { blogData } from "../data";
import Button from "../components/Button";

function Blog() {
  const [index, setIndex] = useState(0);
  const highlightNews = blogData
    .flatMap((arr) => arr)
    .find((item) => item.highlight === true);
  //Function to return to top page
  function handleClick() {
    window.scrollTo({ top: 0 });
  }
  return (
    <>
      {/* Main container with responsive padding*/}
      <div className="flex flex-col justify-center max-w-[1400px] mx-auto pt-16 px-5 md:px-10 lg:px-16">
        {/* Main title */}
        <h1 className="text-center text-neutral-800 font-medium leading-[55px]">
          Blog
        </h1>
        {/* Highlight blog article */}
        <section className="flex items-center justify-center gap-12 flex-wrap lg:flex-nowrap lg:justify-between xl:pt-16 py-8">
          <div className="flex flex-col items-center justify-center gap-16 lg:flex-row">
            {/* Text section */}
            <div className="flex flex-col items-center justify-center gap-5 break-words w-full lg:w-[42%] lg:items-start">
              <h5 className="w-full text-center text-[35px] font-bold leading-[125%] break-words lg:text-left xl:text-[40px]">
                {highlightNews.title}
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
                {highlightNews.abstract}
              </p>
              <div>
                <Button innerText="Read our latest article" />
              </div>
            </div>

            {/* Image section */}
            <div className="w-full lg:w-auto">
              <img
                src={highlightNews.img}
                alt="highlighted blog post image"
                className="w-full h-[300px] rounded-[16px] object-cover lg:h-[560px]"
              />
            </div>
          </div>
        </section>

        {/* All blog articles */}
        <section id="tabs-content" className="w-full">
          <div className="text-center text-neutral-800 text-[44px] font-medium leading-[55px] pt-16">
            All blog articles
          </div>
          <div className="flex flex-wrap max-w-[1444px] justify-center pt-16 pb-7 gap-[50px]">
            {/* Mapping through the blog data and displaying each blog post */}
            {blogData[index].map((item) => (
              <>
                {/* Single Blog post card */}
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

                    <Link
                      to={`/blog/${item.id}`}
                      className="w-full"
                      onClick={handleClick}
                    >
                      <p className="!font-medium transition-all hover:text-[#26425a] underline">
                        Read More
                      </p>
                    </Link>
                  </div>
                </div>
              </>
            ))}
          </div>
        </section>
        {/* Pagination buttons to switch between different sets of blog data */}
        <div className="flex items-center justify-center py-[20px] gap-2">
          <button
            className={`transition-all rounded-[5px] p-3 hover:bg-[#232323] hover:text-white ${
              index === 0 ? "bg-[#232323] text-white" : ""
            }`}
            onClick={() => setIndex(0)}
          >
            1
          </button>
          <button
            className={`transition-all rounded-[5px] p-3 hover:bg-[#232323] hover:text-white ${
              index === 1 ? "bg-[#232323] text-white" : ""
            }`}
            onClick={() => setIndex(1)}
          >
            2
          </button>
          <button
            className={`transition-all rounded-[5px] p-3 hover:bg-[#232323] hover:text-white ${
              index === 2 ? "bg-[#232323] text-white" : ""
            }`}
            onClick={() => setIndex(2)}
          >
            3
          </button>
          <button
            className={`transition-all rounded-[5px] p-3 text-black hover:bg-[#232323] hover:text-white ${
              index === 3 ? "bg-[#232323] text-white" : ""
            }`}
            onClick={() => setIndex(3)}
          >
            4
          </button>
        </div>
      </div>
    </>
  );
}

export default Blog;
