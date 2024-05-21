import image_three from "./assets/images/img_homepage/img_rectangle_7_1.png";
import image_four from "./assets/images/img_homepage/img_rectangle_7_410x427.png";
import image_five from "./assets/images/img_homepage/img_rectangle_7_2.png";
import image_six from "./assets/images/img_homepage/image-six-rectangle.jpg";
import bycycleIcon from "./assets/images/bycycle-icon-quiz.svg";

const quizData = [
  {
    id: 1,
    icon: bycycleIcon,
    title: "Bicycle Inventors and History",
    description:
      "Test your knowledge about the inventors and key historical milestones of the bicycle.",
    questions: [
      {
        id: 1,
        question: "Who is generally considered the inventor of the bicycle?",
        options: [
          "Leonardo da Vinci",
          "Karl Drais",
          "Pierre Michaux",
          "J.K. Starley",
        ],
        correctAnswer: "Karl Drais",
        difficulty: "medium",
        score: 6,
      },
      {
        id: 2,
        question: "In what year was the first bicycle invented?",
        options: ["1700", "1801", "1817", "1863"],
        correctAnswer: "1817",
        difficulty: "medium",
        score: 6,
      },
      {
        id: 3,
        question:
          "What was the original name of the bicycle when it was invented?",
        options: ["Laufmaschine", "Draisine", "Biciclette", "Velocipede"],
        correctAnswer: "Laufmaschine",
        difficulty: "difficult",
        score: 8,
      },
      {
        id: 4,
        question: "When was the first bicycle with pedals introduced?",
        options: ["1840", "1853", "1867", "1885"],
        correctAnswer: "1867",
        difficulty: "medium",
        score: 6,
      },
      {
        id: 5,
        question:
          "Who introduced the modern concept of the bicycle with two wheels of the same diameter?",
        options: [
          "Pierre Michaux",
          "John Kemp Starley",
          "James Starley",
          "John Boyd Dunlop",
        ],
        correctAnswer: "John Kemp Starley",
        difficulty: "difficult",
        score: 8,
      },
    ],
  },
  {
    id: 2,
    icon: bycycleIcon,
    title: "Bicycle Maintenance Essentials",
    description:
      "Learn how to properly maintain your bicycle with questions on tire pressure, lubrication, and more.",
    questions: [
      {
        id: 1,
        question: "How often should you check your bicycle's tire pressure?",
        options: [
          "Every month",
          "Every week",
          "Every two weeks",
          "Before every ride",
        ],
        correctAnswer: "Every week",
        difficulty: "medium",
        score: 6,
      },
      {
        id: 2,
        question: "Which parts of the bicycle should you lubricate regularly?",
        options: [
          "Only the chain",
          "Only the brakes",
          "Only the wheel hubs",
          "Chain, hubs, and crankset",
        ],
        correctAnswer: "Chain, hubs, and crankset",
        difficulty: "medium",
        score: 6,
      },
      {
        id: 3,
        question: "How can you prevent rust on your bicycle's metal parts?",
        options: [
          "By applying oil",
          "By keeping the bicycle indoors",
          "By using anti-rust products",
          "By cleaning and lubricating regularly",
        ],
        correctAnswer: "By cleaning and lubricating regularly",
        difficulty: "medium",
        score: 6,
      },
      {
        id: 4,
        question: "When should you replace your bicycle's brake pads?",
        options: [
          "Every two years",
          "Every six months",
          "Only when they no longer work",
          "When they wear out to the limit",
        ],
        correctAnswer: "When they wear out to the limit",
        difficulty: "medium",
        score: 6,
      },
      {
        id: 5,
        question:
          "What should you do if your bicycle's gears start to skip or click while pedaling?",
        options: [
          "Nothing, it is normal",
          "Adjust the derailleur cable tension",
          "Replace the derailleur cable",
          "Replace the derailleur",
        ],
        correctAnswer: "Adjust the derailleur cable tension",
        difficulty: "difficult",
        score: 8,
      },
    ],
  },
  {
    id: 3,
    icon: bycycleIcon,
    title: "Bicycle Riding Tips",
    description:
      "Discover the best practices for efficient and safe cycling, from saddle position to chain care.",
    questions: [
      {
        id: 1,
        question: "What is the correct saddle position for efficient pedaling?",
        options: [
          "At hip level",
          "Below knee level",
          "At knee level",
          "Above hip level",
        ],
        correctAnswer: "At hip level",
        difficulty: "medium",
        score: 6,
      },
      {
        id: 2,
        question: "What is the ideal tire pressure for a road bike?",
        options: ["20-30 psi", "30-40 psi", "70-90 psi", "100-120 psi"],
        correctAnswer: "70-90 psi",
        difficulty: "medium",
        score: 6,
      },
      {
        id: 3,
        question:
          "What should you do if you hear a strange noise coming from your bicycle's rear wheel?",
        options: [
          "Ignore it",
          "Tighten the spokes",
          "Check the hub and cassette",
          "Lubricate the chain",
        ],
        correctAnswer: "Check the hub and cassette",
        difficulty: "medium",
        score: 6,
      },
      {
        id: 4,
        question: "When should you replace your bicycle's chain?",
        options: [
          "Every 500 km",
          "Every 1000 km",
          "When it is visibly worn",
          "When it frequently skips while pedaling",
        ],
        correctAnswer: "When it is visibly worn",
        difficulty: "medium",
        score: 6,
      },
      {
        id: 5,
        question:
          "What is the correct method for cleaning your bicycle's chain?",
        options: [
          "Using only water",
          "Using a specific chain cleaner",
          "Using motor oil",
          "Using soap and water",
        ],
        correctAnswer: "Using a specific chain cleaner",
        difficulty: "difficult",
        score: 8,
      },
    ],
  },
];

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
    startDate: "8-06-2024",
    endDate: "12-06-2024",
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
    startDate: "1-03-2024",
    endDate: "31-03-2024",
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
    startDate: "24-05-2024",
    endDate: "31-05-2024",
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
    img: image_six,
    startDate: "24-05-2024",
    endDate: "25-05-2024",
    eventLocation: "Castagneto Carducci, Toscana, Italy",
    description: `The Tuscany Trail is a gravel bike event in the bikepacking category in Italy,
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

export { quizData, blogData, eventsData, communityData };
