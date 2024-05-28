import Parallax from "../components/ParallaxComponent";
import Jumbotron from "../components/Jumbotron";
import AboutUsHomepage from "../components/AboutUsHomepage";
import NewsSection from "../components/NewsSection";
import CarouselBlog from "../components/CarouselBlog";
import CarouselQuiz from "../components/CarouselQuiz";
import Animated_Carrousell from "../components/Animated_Carrousell";


function Homepage() {
  return (
    <>
      {/* jumbotron section */}
      <Jumbotron />
      {/* About Us section */}
      <AboutUsHomepage />
      {/* news section */}
      <NewsSection />
      {/* Blog carousel */}
      <CarouselBlog />
      {/* Quiz carousel */}
      <CarouselQuiz />
      <Parallax />
      {/* sponsor animated */}
      <Animated_Carrousell />
    </>
  );
}
export default Homepage;
