import image_three from "./assets/images/img_homepage/img_rectangle_7_1.png";
import image_four from "./assets/images/img_homepage/img_rectangle_7_410x427.png";
import image_five from "./assets/images/img_homepage/img_rectangle_7_2.png";

const blogData = [
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

const communityData = [
  {
    id: 1,
    title: "Best Bikepacking Routes in Europe",
    description: `Hey everyone! I'm planning a bikepacking trip across Europe this summer and I'm looking for some route suggestions. I'm interested in scenic routes that offer a mix of challenging terrains and beautiful landscapes. Any recommendations or personal experiences to share? Thanks!`,
    author: {
      name: "Mario Rossi",
      profilePic: "https://example.com/profile-pic.jpg",
    },
    replies: [
      {
        id: 1,
        text: `If you haven't already, check out the EuroVelo routes. EuroVelo 6, which goes from the Atlantic Ocean to the Black Sea, is absolutely stunning and covers a diverse range of landscapes. Another personal favorite is the Danube Cycle Path - it's relatively easy and passes through some beautiful towns and cities.`,
        author: {
          name: "Luigi Verdi",
          profilePic: "https://example.com/profile-pic-2.jpg",
        },
      },
      {
        id: 2,
        text: `I second the EuroVelo routes! Additionally, the Great Divide Mountain Bike Route in Spain is incredible if you're up for a challenge. The landscapes are breathtaking and it's a great mix of off-road trails and paved paths. Happy cycling!`,
        author: {
          name: "Francesca Negri",
          profilePic: "https://example.com/profile-pic-2.jpg",
        },
      },
    ],
  },
  {
    id: 2,
    title: "Tips for Improving Climbing Endurance",
    description: `Hi all! I've been struggling with long climbs during my rides and I'm looking for advice on how to improve my endurance and technique. What are your go-to strategies for building strength and stamina for uphill cycling? Any specific training routines or dietary tips?`,
    author: {
      name: "Giulia Brambilla",
      profilePic: "https://example.com/profile-pic.jpg",
    },
    replies: [
      {
        id: 1,
        text: `Hi there! For improving your climbing endurance, I recommend incorporating interval training into your routine. Short, intense bursts of climbing followed by recovery periods can really help build your strength. Also, don't forget to stay hydrated and fueled - proper nutrition is key!`,
        author: {
          name: "Daniele de Lise",
          profilePic: "https://example.com/profile-pic-2.jpg",
        },
      },
      {
        id: 2,
        text: `One thing that helped me a lot was focusing on my core strength. Strong core muscles can make a big difference in your overall stability and power when climbing. Planks, Russian twists, and leg raises are great exercises to add to your training. Good luck!`,
        author: {
          name: "Maria Chiara Andreini",
          profilePic: "https://example.com/profile-pic-2.jpg",
        },
      },
    ],
  },
];

export { blogData, eventsData, communityData };
