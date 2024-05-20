import image_three from "./assets/images/img_homepage/img_rectangle_7_1.png";
import image_four from "./assets/images/img_homepage/img_rectangle_7_410x427.png";
import image_five from "./assets/images/img_homepage/img_rectangle_7_2.png";

const newsData = [
  {
    title: "The growing trend of combining cycling with other workouts",
    img: image_four,
  },
  {
    title: "Thrilling finishes at international mountain biking championship",
    img: image_three,
  },
  {
    title: "How bicycles are becoming the main choice in city transportation",
    img: image_five,
  },
];

const eventsData = [
  {
    id: 1,
    title: "MTB tour Schwarzeald-Cross",
    img: image_four,
    eventDate: "8-12 June 2024",
    eventLocation: "Ettlingen, Germany",
    description: `The MTB Schwarzwald-Cross Tour is an exhilarating adventure through the breathtaking landscapes of the Black Forest.
    This tour offers a unique experience for mountain biking enthusiasts, combining technical trails with spectacular views.
    During the tour, cyclists will have the opportunity to explore hidden paths, traverse dense forests, and overcome challenging elevations,
    fully immersing themselves in unspoiled nature. Whether you are an experienced cyclist or a beginner seeking adventure,
    the MTB Schwarzwald-Cross Tour promises to be an unforgettable experience, rich in adrenaline and natural beauty.`,
    highlight: true,
    level: "beginner",
    trip: true,
  },
  {
    id: 2,
    title: "Csain Tourism Cup 2024",
    img: image_three,
    eventDate: "1-31 March 2024",
    eventLocation: "Imperia, Liguria, Italy",
    description: `The Csain Tourism Cup is an event for e-bikes, gravel bikes, and road bikes in the orientation category, held in the Liguria region of Italy. It was first organized in 2022.
    The 2024 edition of the Csain Tourism Cup is part of the Csain Ciclismo Liguria circuit and will take place on Friday, March 1, 2024, starting in Imperia, Province of Imperia, Liguria.
    Organizer: The event is open to all cyclists with valid 2024 memberships, including those affiliated with the Italian Cycling Federation, affiliated entities, foreign federations, and foreign entities.
    The game is simple! Once you complete the registration, you will receive an email with your objective map, which is the Csain Tourism app (the maps are the same for all participants at the same level). To win, you need to take a photo with your bike in all the zones indicated on the map (make sure the photo clearly shows the place where you are for verification by the jury. Group photos with multiple participants are valid).`,
    highlight: false,
    level: "beginner",
    trip: false,
  },
  {
    id: 3,
    title: "Transmurgiana: Bike Journey in the Heart of Apulia",
    img: image_five,
    eventDate: "24-31 May 2024",
    eventLocation: "Bari, Puglia, Italy",
    description: `The TRANSMURGIANA is a bicycle adventure in the heart of Apulia, one of the most beautiful regions in Southern Italy.
    This is a self-guided journey, lasting 8 days (7 nights), starting from Bari (the regional capital). Along the route, you will visit:
    Alberobello, the city of “Trulli,” with its unique dry-stone houses with conical roofs (UNESCO SITE);
    Matera, one of the oldest cities in the world, entirely carved into the rock (UNESCO SITE);
    Castel del Monte, one of the most famous castles in Italy with its octagonal shape and many secrets still hidden (UNESCO SITE);
    The Alta Murgia National Park, the only continental pseudo-steppe in Italy (a Protected Area on the verge of becoming a UNESCO Geo Park);
    The coast of the city of Trani, called the “Pearl of the Adriatic” for the white limestone with which its entire historic center is built,
    and the beautiful Romanesque cathedral a few meters from the sea, one of the most beautiful cathedrals in Europe.`,
    highlight: false,
    level: "intermediate",
    trip: true,
  },
  {
    id: 4,
    title: "Tuscany Trail",
    img: image_five,
    eventDate: "24-25 May 2024",
    eventLocation: "Castagneto Carducci, Toscana, Italy",
    description: `Tuscany Trail is a gravel bike event in the bikepacking category in Italy,
    in the Tuscany region, and it was first organized in 2014. The 2024 edition of the Tuscany Trail
    will take place on Friday, May 24, 2024, starting from Castagneto Carducci, in the province of Livorno, Tuscany.
    The Tuscany Trail offers a 460 km route for gravel bikes.`,
    highlight: false,
    level: "expert",
    trip: false,
  },
];

export { newsData, eventsData };

