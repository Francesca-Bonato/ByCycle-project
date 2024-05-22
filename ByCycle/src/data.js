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
  [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1568849676085-51415703900f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmljaWNsZXR0ZSUyMGJsb2d8ZW58MHx8MHx8fDA%3D",
      title: "The growing trend of combining cycling with other workouts",
      abstract:
        "Cycling has long been known for its cardiovascular benefits, but a new trend is emerging that combines cycling with other forms of exercise such as yoga and strength training. This hybrid approach maximizes fitness gains and provides a well-rounded workout experience. Enthusiasts say it helps them stay engaged and prevents workout monotony.",
      highlight: false,
      main: "The popularity of combining cycling with other workouts stems from its effectiveness in targeting different muscle groups and improving overall fitness. Spinning classes, for example, incorporate high-intensity interval training (HIIT) on stationary bikes, while combining cycling with yoga can enhance flexibility and core strength. Strength training exercises like squats and lunges complement cycling by building power and endurance in the legs. This holistic approach can lead to significant improvements in cardiovascular health, muscular strength, and flexibility.",
    },
    {
      id: 2,
      img: "https://plus.unsplash.com/premium_photo-1673637205535-9d5f386bfb7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODl8fGJpY2ljbGV0dGUlMjBibG9nfGVufDB8fDB8fHww",
      title: "Thrilling finishes at international mountain biking championship",
      abstract:
        "The recent international mountain biking championship was nothing short of spectacular, with thrilling finishes that kept spectators on the edge of their seats. Competitors from around the world showcased their skills on some of the most challenging terrains. Highlights included nail-biting sprints to the finish line and remarkable displays of endurance and technique.",
      highlight: false,
      main: "The international mountain biking championship is a testament to the athleticism, skill, and courage of mountain bikers. The challenging courses push riders to their limits, demanding exceptional technical ability and strategic decision-making. The close finishes and come-from-behind victories add to the drama and excitement of the competition. Witnessing these elite athletes compete is an inspiration to mountain bikers of all levels, showcasing the pinnacle of the sport.",
    },
    {
      id: 3,
      img: "https://plus.unsplash.com/premium_photo-1667520245581-3024538bf044?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fGJpY2ljbGV0dGUlMjBibG9nfGVufDB8fDB8fHww",
      title: "How bicycles are becoming the main choice in city transportation",
      abstract:
        "In many cities around the world, bicycles are becoming the preferred mode of transportation. This shift is driven by a combination of factors including environmental concerns, health benefits, and urban congestion. Cities are responding by building more bike lanes and implementing bike-sharing programs, making cycling a safer and more convenient option for commuters.",
      highlight: false,
      main: "The rise of cycling in cities is a positive development for both environmental and health reasons. Bicycles produce zero emissions, contributing to cleaner air and a reduced carbon footprint. Cycling is also a healthy and active mode of transportation, providing exercise and reducing reliance on cars. As cities invest in cycling infrastructure, such as dedicated bike lanes and secure parking facilities, cycling becomes a more attractive option for commuters. This shift can lead to reduced traffic congestion, improved air quality, and a healthier population.",
    },
    {
      id: 4,
      img: "https://plus.unsplash.com/premium_photo-1706300225677-19374d17ede6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAxfHxiaWNpY2xldHRlJTIwYmxvZ3xlbnwwfHwwfHx8MA%3D%3D",
      title: "Exploring the impact of cycling on mental health",
      abstract:
        "Recent studies have highlighted the positive effects of cycling on mental health. Regular cycling can reduce stress, anxiety, and depression. It promotes the release of endorphins, which are natural mood lifters. Additionally, cycling provides a sense of freedom and adventure, which can be incredibly beneficial for mental well-being.",
      highlight: true,
      main: "Cycling offers a powerful tool for improving mental health. The rhythmic nature of pedaling and the focus required for navigating traffic can be meditative, promoting relaxation and reducing stress. Exercise releases endorphins, natural mood elevators that combat feelings of anxiety and depression. Cycling outdoors provides a welcome escape from daily pressures, allowing you to connect with nature and experience a sense of freedom and accomplishment. Whether it's a leisurely ride through a park or a challenging climb, cycling can significantly enhance your mental well-being.",
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1528629297340-d1d466945dc5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGJpY2ljbGV0dGUlMjBibG9nfGVufDB8fDB8fHww",
      title: "Cycling gear trends for the upcoming season",
      abstract:
        "As the new season approaches, cycling gear trends are evolving. Innovations in materials and design are making gear more comfortable and efficient. From lightweight helmets to moisture-wicking jerseys, the focus is on enhancing performance and safety. Additionally, eco-friendly gear is gaining popularity as cyclists become more environmentally conscious.",
      highlight: false,
      main: "The cycling gear industry is constantly innovating to provide cyclists with the best possible equipment. New materials like lightweight, breathable fabrics improve comfort and performance during rides. Advanced helmet designs prioritize safety while maintaining ventilation. Technological advancements are leading to the integration of features like lights and GPS tracking into cycling apparel. Additionally, the growing concern for environmental sustainability is driving the demand for eco-friendly cycling gear made from recycled materials or produced through sustainable practices.",
    },
    {
      id: 6,
      img: "https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGJpY2ljbGV0dGUlMjBibG9nfGVufDB8fDB8fHww",
      title: "Top cycling destinations around the world",
      abstract:
        "For cycling enthusiasts looking to explore new terrains, there are several top destinations around the world that offer breathtaking views and challenging routes. From the rugged trails of the Swiss Alps to the scenic coastal paths of New Zealand, these destinations provide unforgettable cycling experiences. Plan your next adventure and discover the beauty of these top cycling spots.",
      highlight: false,
      main: "The world offers a vast array of cycling destinations catering to all experience levels and preferences. Breathtaking mountain ranges like the Swiss Alps or the Rockies challenge experienced cyclists with steep climbs and rewarding vistas. Picturesque coastal routes, such as those found in New Zealand or California, provide stunning ocean views and a relaxed riding experience. Historic cities like Amsterdam or Copenhagen offer well-developed cycling infrastructure and a unique cultural immersion. Choosing a cycling destination can be based on desired terrain, cultural experiences, and overall adventure you seek.",
    },
  ],
  [
    {
      id: 7,
      img: "https://images.unsplash.com/photo-1505705694340-019e1e335916?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmljaWNsZXRhfGVufDB8fDB8fHww",
      title: "The benefits of cycling for cardiovascular health",
      abstract:
        "Cycling is an excellent way to improve cardiovascular health. It strengthens the heart, lowers blood pressure, and enhances circulation. Regular cycling can significantly reduce the risk of heart disease and stroke. It's a low-impact exercise that's easy on the joints, making it suitable for people of all ages and fitness levels.",
      highlight: false,
    },
    {
      id: 8,
      img: "https://images.unsplash.com/photo-1615632778185-48e15a6f68bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmljaWNsZXRhfGVufDB8fDB8fHww",
      title: "Cycling tips for beginners",
      abstract:
        "Starting a cycling routine can be daunting for beginners. It's important to start slowly and gradually increase the intensity and duration of your rides. Make sure to invest in a good quality bike and helmet. Learn basic maintenance skills to keep your bike in good condition. Join a local cycling group for support and motivation.",
      highlight: false,
    },
    {
      id: 9,
      img: "https://images.unsplash.com/photo-1545575439-3261931f52f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJpY2ljbGV0YXxlbnwwfHwwfHx8MA%3D%3D",
      title: "The best cycling apps for tracking your rides",
      abstract:
        "There are several apps available that can enhance your cycling experience by tracking your rides, monitoring your progress, and providing route suggestions. Apps like Strava, MapMyRide, and Komoot are popular choices among cyclists. They offer features like GPS tracking, performance analysis, and social networking with other cyclists.",
      highlight: false,
    },
    {
      id: 10,
      img: "https://images.unsplash.com/photo-1531851454380-ab14ff755bfb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGJpY2ljbGV0YXxlbnwwfHwwfHx8MA%3D%3D",
      title: "How to choose the right bike for you",
      abstract:
        "Choosing the right bike depends on your riding style, terrain, and personal preferences. There are different types of bikes available, including road bikes, mountain bikes, and hybrid bikes. Consider factors like frame material, wheel size, and gear systems. Test ride different models to find the one that feels most comfortable and suits your needs.",
      highlight: false,
    },
    {
      id: 11,
      img: "https://source.unsplash.com/random/300x300",
      title: "Essential cycling accessories for a safe ride",
      abstract:
        "To ensure a safe and enjoyable ride, it's important to have the right accessories. A good helmet, lights, reflective gear, and a bell are essential for visibility and safety. Additionally, consider carrying a repair kit, water bottle, and a bike lock. These accessories can enhance your cycling experience and provide peace of mind.",
      highlight: false,
    },
    {
      id: 12,
      img: "https://images.unsplash.com/photo-1619194728665-36281d450fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGJpY2ljbGV0YXxlbnwwfHwwfHx8MA%3D%3D",
      title: "Cycling events to look forward to this year",
      abstract:
        "This year, there are several exciting cycling events taking place around the world. From local charity rides to international competitions, there's something for every cyclist. Some notable events include the Tour de France, Giro d'Italia, and the RideLondon festival. Participating in these events can be a great way to challenge yourself and connect with other cycling enthusiasts.",
      highlight: false,
    },
  ],
  [
    {
      id: 13,
      img: "https://images.unsplash.com/photo-1571081790807-6933479d240f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGJpY2ljbGV0YXxlbnwwfHwwfHx8MA%3D%3D",
      title: "The history of cycling: From invention to modern sport",
      abstract:
        "Cycling has a rich history that dates back to the early 19th century. The first bicycles, known as 'running machines,' were developed in Europe. Over the years, advancements in technology and design transformed bicycles into the modern machines we use today. Cycling has evolved from a mode of transportation to a popular sport enjoyed by millions worldwide.",
      highlight: false,
    },
    {
      id: 14,
      img: "https://images.unsplash.com/photo-1511277918544-4e638c620c25?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGJpY2ljbGV0YXxlbnwwfHwwfHx8MA%3D%3D",
      title: "Tips for maintaining your bike",
      abstract:
        "Regular maintenance is crucial to keep your bike in good working condition. Basic tasks include checking tire pressure, lubricating the chain, and inspecting brakes and gears. Cleaning your bike regularly helps prevent rust and prolongs its lifespan. It's also important to get your bike serviced by a professional mechanic at least once a year.",
      highlight: false,
    },
    {
      id: 15,
      img: "https://images.unsplash.com/photo-1635159339046-68a9ac16a04d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGJpY2ljbGV0YXxlbnwwfHwwfHx8MA%3D%3D",
      title: "The environmental benefits of cycling",
      abstract:
        "Cycling is an eco-friendly mode of transportation that reduces carbon emissions and traffic congestion. It requires less energy and resources compared to driving a car. By choosing to cycle instead of drive, you contribute to a cleaner and healthier environment. Cycling also promotes sustainable urban development by reducing the need for extensive road infrastructure.",
      highlight: false,
    },
    {
      id: 16,
      img: "https://images.unsplash.com/photo-1714015262881-5bfaf6defb20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJpY2ljbGV0YSUyMGJteHxlbnwwfHwwfHx8MA%3D%3D",
      title: "Exploring scenic cycling routes in your area",
      abstract:
        "Exploring local scenic cycling routes can be a rewarding experience. Many areas have dedicated bike paths and trails that offer beautiful views and a safe environment for cyclists. Whether you prefer urban routes or countryside trails, there's something for everyone. Use online resources and local maps to discover the best routes in your area.",
      highlight: false,
    },
    {
      id: 17,
      img: "https://images.unsplash.com/photo-1613324089487-c618f5a52630?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fGJpY2ljbGV0YXxlbnwwfHwwfHx8MA%3D%3D",
      title: "The impact of cycling on community building",
      abstract:
        "Cycling can play a significant role in building stronger communities. Group rides and cycling events bring people together, fostering a sense of camaraderie and shared purpose. Community bike programs and advocacy groups work to improve cycling infrastructure and promote cycling as a healthy and sustainable mode of transportation.",
      highlight: false,
    },
    {
      id: 18,
      img: "https://images.unsplash.com/photo-1626021397894-adae15b5ee76?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fGJpY2ljbGV0YXxlbnwwfHwwfHx8MA%3D%3D",
      title: "Cycling safety tips for urban environments",
      abstract:
        "Cycling in urban environments can be challenging due to traffic and other hazards. To stay safe, always wear a helmet and use lights and reflective gear. Follow traffic rules and be aware of your surroundings. Use bike lanes where available and signal your intentions to other road users. Being vigilant and prepared can help prevent accidents and ensure a safe ride.",
      highlight: false,
    },
  ],
  [
    {
      id: 19,
      img: "https://source.unsplash.com/random/300x300",
      title: "How to prepare for a long-distance cycling tour",
      abstract:
        "Preparing for a long-distance cycling tour requires careful planning and training. Start by building up your stamina and endurance with regular rides. Plan your route and accommodations in advance. Pack essential gear, including repair tools, food, and water. Listen to your body and take breaks when needed. Proper preparation can make your tour a memorable and enjoyable experience.",
      highlight: false,
    },
    {
      id: 20,
      img: "https://images.unsplash.com/photo-1605537473255-b10095a6c1e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHxiaWNpY2xldGF8ZW58MHx8MHx8fDA%3D",
      title: "The rise of e-bikes: Pros and cons",
      abstract:
        "E-bikes are becoming increasingly popular as an alternative to traditional bicycles. They offer the advantage of assisted pedaling, making it easier to tackle hills and longer distances. However, they can be more expensive and heavier than regular bikes. It's important to consider your needs and preferences before deciding if an e-bike is right for you.",
      highlight: false,
    },
    {
      id: 21,
      img: "https://source.unsplash.com/random/300x300",
      title: "Cycling as a family activity",
      abstract:
        "Cycling is a great activity for families to enjoy together. It promotes physical fitness, encourages outdoor exploration, and provides an opportunity for quality time. Choose family-friendly routes that are safe and suitable for all ages. Consider using child seats or trailers for younger children. Make cycling a regular family activity to build healthy habits and create lasting memories.",
      highlight: false,
    },
    {
      id: 22,
      img: "https://source.unsplash.com/random/300x300",
      title: "Innovations in cycling technology",
      abstract:
        "Advancements in technology are continuously improving the cycling experience. From smart helmets with built-in communication systems to GPS-enabled bike computers, these innovations enhance safety and performance. Electric shifting systems and aerodynamic designs are also making bikes faster and more efficient. Keep an eye on the latest tech trends to stay ahead in the cycling world.",
      highlight: false,
    },
    {
      id: 23,
      img: "https://source.unsplash.com/random/300x300",
      title: "The role of cycling in sustainable urban planning",
      abstract:
        "As cities strive to become more sustainable, cycling plays a crucial role in urban planning. Incorporating bike lanes, bike-sharing programs, and cycling-friendly infrastructure can reduce traffic congestion and pollution. Encouraging cycling as a primary mode of transportation supports a healthier population and more livable cities.",
      highlight: false,
    },
    {
      id: 24,
      img: "https://source.unsplash.com/random/300x300",
      title: "Cycling adventures: Stories from around the world",
      abstract:
        "Cycling enthusiasts from around the world share their stories of epic adventures and unforgettable rides. From cross-country tours to mountain expeditions, these stories highlight the joy and challenges of cycling. They inspire others to embark on their own cycling journeys and explore new destinations on two wheels.",
      highlight: false,
    },
  ],
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
