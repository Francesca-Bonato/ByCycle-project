/* eslint-disable react/prop-types */
import ContentLoader from "react-content-loader";

const MyPlaceholder = ( {viewbox, children }) => (
  <ContentLoader
    width={"100%"}    // Larghezza totale che rappresenta la somma delle larghezze dei rettangoli e i margini
    speed={2}
    primarycolor="#f3f3f3"
    secondarycolor="#ecebeb"
    viewBox={viewbox}
  >
    <div>{children}</div>

  </ContentLoader>
);

export default MyPlaceholder;
