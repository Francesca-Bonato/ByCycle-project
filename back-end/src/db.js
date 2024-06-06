import mysql from "mysql";
import dotenv from "dotenv";
dotenv.config()

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  multipleStatements: true,
  //debug: true
});



db.connect((err) => {
  if (err) {
    console.error("Database connection failed" + err.stack);
    return;
  }
  console.log("Connected to database");
});

const setupDb = () => {
  db.query(
    `
      SET FOREIGN_KEY_CHECKS=0;
      DROP TABLE IF EXISTS thread_replies;
      DROP TABLE IF EXISTS threads;
      DROP TABLE IF EXISTS events;
      DROP TABLE IF EXISTS blog_posts;
      DROP TABLE IF EXISTS correct_answers;
      DROP TABLE IF EXISTS answer_options;
      DROP TABLE IF EXISTS questions;
      DROP TABLE IF EXISTS quiz;
      DROP TABLE IF EXISTS users;
      DROP TABLE IF EXISTS roles;
      SET FOREIGN_KEY_CHECKS=1;
      CREATE TABLE roles (
      id BIGINT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(50) NOT NULL
      );
      CREATE TABLE users (
        id BIGINT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(50) NOT NULL UNIQUE,
        firstname VARCHAR(50),
        lastname VARCHAR (50),
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(250) NOT NULL,
        role_id BIGINT NOT NULL,
        birth_date DATE,
        join_date DATE default current_date,
        description TEXT,
        profile_pic VARCHAR(255) DEFAULT "../assets/images/registration-image.jpg",
        created_at timestamp default current_timestamp NOT NULL,
        FOREIGN KEY (role_id) REFERENCES roles(id)
        );
      CREATE TABLE quiz (
          id INT PRIMARY KEY AUTO_INCREMENT,
          img VARCHAR(255) NOT NULL,
          title VARCHAR(255) NOT NULL,
          description TEXT NOT NULL
      );
      CREATE TABLE questions (
          id INT PRIMARY KEY AUTO_INCREMENT,
          quiz_id INT NOT NULL,
          question TEXT NOT NULL,
          FOREIGN KEY (quiz_id) REFERENCES quiz(id)
      );
      CREATE TABLE answer_options (
          id INT PRIMARY KEY AUTO_INCREMENT,
          question_id INT NOT NULL,
          option_text TEXT NOT NULL,
          FOREIGN KEY (question_id) REFERENCES questions(id)
      );
      CREATE TABLE correct_answers (
          id INT PRIMARY KEY AUTO_INCREMENT,
          question_id INT NOT NULL,
          answer_text TEXT NOT NULL,
          FOREIGN KEY (question_id) REFERENCES questions(id)
      );
      CREATE TABLE blog_posts (
        id INT PRIMARY KEY AUTO_INCREMENT,
        img VARCHAR(255) NOT NULL,
        title VARCHAR(255) NOT NULL,
        abstract TEXT NOT NULL,
        highlight BOOLEAN NOT NULL DEFAULT FALSE,
        main TEXT
      );
      CREATE TABLE events (
        id INT PRIMARY KEY AUTO_INCREMENT,
        title VARCHAR(255) NOT NULL,
        img VARCHAR(255),
        startDate DATE NOT NULL,
        endDate DATE NOT NULL,
        eventLocation VARCHAR(255) NOT NULL,
        description TEXT,
        highlight BOOLEAN NOT NULL DEFAULT FALSE,
        level ENUM('beginner', 'intermediate', 'expert') NOT NULL,
        trip BOOLEAN NOT NULL DEFAULT FALSE
      );
      CREATE TABLE threads (
        id INT PRIMARY KEY AUTO_INCREMENT,
        title VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        author_id BIGINT NOT NULL,
        FOREIGN KEY (author_id) REFERENCES users(id)
      );
      CREATE TABLE thread_replies (
        id INT PRIMARY KEY AUTO_INCREMENT,
        text TEXT NOT NULL,
        thread_id INT NOT NULL,
        author_id BIGINT NOT NULL,
        FOREIGN KEY (thread_id) REFERENCES threads(id),
        FOREIGN KEY (author_id) REFERENCES users(id)
      );
      `,
    (error, results, fields) => {
      if (error) throw error;
    }
  );

  db.query(
    `
      INSERT INTO roles (id, name)
      VALUES (1, 'admin');

      INSERT INTO roles (id, name)
      VALUES (2, 'user');

      INSERT INTO roles (id, name)
      VALUES (3, 'super-admin');

      INSERT INTO users (username, firstname, lastname, email, password, role_id)
      VALUES
        ('Mario51', 'Mario', 'Rossi', 'mario.rossi@email.com', '12345', 2),
        ('Dracula945', 'Luigi', 'Verdi', 'luigi.verdi@email.com', '54321', 2),
        ('ILoveBiking', 'Maria Chaira', 'Andreini', 'mariachiara.andreini@email.com', '98765', 2);

      INSERT INTO quiz (id, img, title, description)
      VALUES
        (1, "https://images.unsplash.com/photo-1693811925823-f1cde657490a?q=80&w=2685&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "Bicycle Inventors and History", "Test your knowledge about the inventors and key historical milestones of the bicycle."),
        (2, "https://images.unsplash.com/photo-1669637751236-9b28eae5faf5?q=80&w=2632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "Bicycle Maintenance Essentials", "Learn how to properly maintain your bicycle with questions on tire pressure, lubrication, and more."),
        (3, "https://fiabitalia.it/wp-content/uploads/2021/06/FIAB_Cicloturismo_2-copia-scaled.jpg", "Bicycle Riding Tips", "Discover the best practices for efficient and safe cycling, from saddle position to chain care.");

      INSERT INTO questions (id, quiz_id, question)
      VALUES
      (1, 1, "Who is generally considered the inventor of the bicycle?"),
      (2, 1, "In what year was the first bicycle invented?"),
      (3, 1, "What was the original name of the bicycle when it was invented?"),
      (4, 1, "When was the first bicycle with pedals introduced?"),
      (5, 1, "Who introduced the modern concept of the bicycle with two wheels of the same diameter?");

      INSERT INTO questions (id, quiz_id, question)
      VALUES
      (6, 2, "How often should you check your bicycle's tire pressure?"),
      (7, 2, "Which parts of the bicycle should you lubricate regularly?"),
      (8, 2, "How can you prevent rust on your bicycle's metal parts?"),
      (9, 2, "When should you replace your bicycle's brake pads?"),
      (10, 2, "What should you do if your bicycle's gears start to skip or click while pedaling?");

      INSERT INTO questions (id, quiz_id, question)
      VALUES
      (11, 3, "What is the correct saddle position for efficient pedaling?"),
      (12, 3, "What is the ideal tire pressure for a road bike?"),
      (13, 3, "What should you do if you hear a strange noise coming from your bicycle's rear wheel?"),
      (14, 3, "When should you replace your bicycle's chain?"),
      (15, 3, "What is the correct method for cleaning your bicycle's chain?");

      INSERT INTO answer_options (question_id, option_text)
      VALUES
      (1, "Leonardo da Vinci"),
      (1, "Karl Drais"),
      (1, "Pierre Michaux"),
      (1, "J.K. Starley"),
      (2, "1700"),
      (2, "1801"),
      (2, "1817"),
      (2, "1863"),
      (3, "Laufmaschine"),
      (3, "Draisine"),
      (3, "Biciclette"),
      (3, "Velocipede"),
      (4, "1840"),
      (4, "1853"),
      (4, "1867"),
      (4, "1885"),
      (5, "Pierre Michaux"),
      (5, "John Kemp Starley"),
      (5, "James Starley"),
      (5, "John Boyd Dunlop");

      INSERT INTO answer_options (question_id, option_text)
      VALUES
      (6, "Every month"),
      (6, "Every week"),
      (6, "Every two weeks"),
      (6, "Before every ride"),
      (7, "Only the chain"),
      (7, "Only the brakes"),
      (7, "Only the wheel hubs"),
      (7, "Chain, hubs, and crankset"),
      (8, "By applying oil"),
      (8, "By keeping the bicycle indoors"),
      (8, "By using anti-rust products"),
      (8, "By cleaning and lubricating regularly"),
      (9, "Every two years"),
      (9, "Every six months"),
      (9, "Only when they no longer work"),
      (9, "When they wear out to the limit"),
      (10, "Nothing, it is normal"),
      (10, "Adjust the derailleur cable tension"),
      (10, "Replace the derailleur cable"),
      (10, "Replace the derailleur");

      INSERT INTO answer_options (question_id, option_text)
      VALUES
      (11, "At hip level"),
      (11, "Below knee level"),
      (11, "At knee level"),
      (11, "Above hip level"),
      (12, "20-30 psi"),
      (12, "30-40 psi"),
      (12, "70-90 psi"),
      (12, "100-120 psi"),
      (13, "Ignore it"),
      (13, "Tighten the spokes"),
      (13, "Check the hub and cassette"),
      (13, "Lubricate the chain"),
      (14, "Every 500 km"),
      (14, "Every 1000 km"),
      (14, "When it is visibly worn"),
      (14, "When it frequently skips while pedaling"),
      (15, "Using only water"),
      (15, "Using a specific chain cleaner"),
      (15, "Using motor oil"),
      (15, "Using soap and water");

      INSERT INTO correct_answers (question_id, answer_text)
      VALUES
      (1, "Karl Drais"),
      (2, "1817"),
      (3, "Laufmaschine"),
      (4, "1867"),
      (5, "John Kemp Starley");

      INSERT INTO correct_answers
      (question_id, answer_text)
      VALUES
      (6, "Every week"),
      (7, "Chain, hubs, and crankset"),
      (8, "By cleaning and lubricating regularly"),
      (9, "When they wear out to the limit"),
      (10, "Adjust the derailleur cable tension");

      INSERT INTO correct_answers (question_id, answer_text)
      VALUES
      (11, "At hip level"),
      (12, "70-90 psi"),
      (13, "Check the hub and cassette"),
      (14, "When it is visibly worn"),
      (15, "Using a specific chain");

      INSERT INTO blog_posts (img, title, abstract, highlight, main)
      VALUES
      ("https://images.unsplash.com/photo-1568849676085-51415703900f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmljaWNsZXR0ZSUyMGJsb2d8ZW58MHx8MHx8fDA%3D",
      "The growing trend of combining cycling with other workouts",
      "Cycling has long been known for its cardiovascular benefits, but a new trend is emerging that combines cycling with other forms of exercise such as yoga and strength training. This hybrid approach maximizes fitness gains and provides a well-rounded workout experience. Enthusiasts say it helps them stay engaged and prevents workout monotony.",
       FALSE,
      "The popularity of combining cycling with other workouts stems from its effectiveness in targeting different muscle groups and improving overall fitness. Spinning classes, for example, incorporate high-intensity interval training (HIIT) on stationary bikes, while combining cycling with yoga can enhance flexibility and core strength. Strength training exercises like squats and lunges complement cycling by building power and endurance in the legs. This holistic approach can lead to significant improvements in cardiovascular health, muscular strength, and flexibility."),

      ("https://plus.unsplash.com/premium_photo-1673637205535-9d5f386bfb7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODl8fGJpY2ljbGV0dGUlMjBibG9nfGVufDB8fDB8fHww",
      "Thrilling finishes at international mountain biking championship",
      "The recent international mountain biking championship was nothing short of spectacular, with thrilling finishes that kept spectators on the edge of their seats. Competitors from around the world showcased their skills on some of the most challenging terrains. Highlights included nail-biting sprints to the finish line and remarkable displays of endurance and technique.",
       FALSE,
      "The international mountain biking championship is a testament to the athleticism, skill, and courage of mountain bikers. The challenging courses push riders to their limits, demanding exceptional technical ability and strategic decision-making. The close finishes and come-from-behind victories add to the drama and excitement of the competition. Witnessing these elite athletes compete is an inspiration to mountain bikers of all levels, showcasing the pinnacle of the sport."),

      ("https://plus.unsplash.com/premium_photo-1667520245581-3024538bf044?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fGJpY2ljbGV0dGUlMjBibG9nfGVufDB8fDB8fHww",
      "How bicycles are becoming the main choice in city transportation",
      "In many cities around the world, bicycles are becoming the preferred mode of transportation. This shift is driven by a combination of factors including environmental concerns, health benefits, and urban congestion. Cities are responding by building more bike lanes and implementing bike-sharing programs, making cycling a safer and more convenient option for commuters.",
       FALSE,
      "The rise of cycling in cities is a positive development for both environmental and health reasons. Bicycles produce zero emissions, contributing to cleaner air and a reduced carbon footprint. Cycling is also a healthy and active mode of transportation, providing exercise and reducing reliance on cars. As cities invest in cycling infrastructure, such as dedicated bike lanes and secure parking facilities, cycling becomes a more attractive option for commuters. This shift can lead to reduced traffic congestion, improved air quality, and a healthier population."),

      ("https://plus.unsplash.com/premium_photo-1706300225677-19374d17ede6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAxfHxiaWNpY2xldHRlJTIwYmxvZ3xlbnwwfHwwfHx8MA%3D%3D",
      "Exploring the impact of cycling on mental health",
      "Recent studies have highlighted the positive effects of cycling on mental health. Regular cycling can reduce stress, anxiety, and depression. It promotes the release of endorphins, which are natural mood lifters. Additionally, cycling provides a sense of freedom and adventure, which can be incredibly beneficial for mental well-being.",
       TRUE,
      "Cycling offers a powerful tool for improving mental health. The rhythmic nature of pedaling and the focus required for navigating traffic can be meditative, promoting relaxation and reducing stress. Exercise releases endorphins, natural mood elevators that combat feelings of anxiety and depression. Cycling outdoors provides a welcome escape from daily pressures, allowing you to connect with nature and experience a sense of freedom and accomplishment. Whether it's a leisurely ride through a park or a challenging climb, cycling can significantly enhance your mental well-being."),

      ("https://images.unsplash.com/photo-1528629297340-d1d466945dc5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGJpY2ljbGV0dGUlMjBibG9nfGVufDB8fDB8fHww",
       "Cycling gear trends for the upcoming season",
       "As the new season approaches, cycling gear trends are evolving. Innovations in materials and design are making gear more comfortable and efficient. From lightweight helmets to moisture-wicking jerseys, the focus is on enhancing performance and safety. Additionally, eco-friendly gear is gaining popularity as cyclists become more environmentally conscious",
        FALSE,
       "The cycling gear industry is constantly innovating to provide cyclists with the best possible equipment. New materials like lightweight, breathable fabrics improve comfort and performance during rides. Advanced helmet designs prioritize safety while maintaining ventilation. Technological advancements are leading to the integration of features like lights and GPS tracking into cycling apparel. Additionally, the growing concern for environmental sustainability is driving the demand for eco-friendly cycling gear made from recycled materials or produced through sustainable practices."),

      ("https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGJpY2ljbGV0dGUlMjBibG9nfGVufDB8fDB8fHww",
        "Top cycling destinations around the world",
        "For cycling enthusiasts looking to explore new terrains, there are several top destinations around the world that offer breathtaking views and challenging routes. From the rugged trails of the Swiss Alps to the scenic coastal paths of New Zealand, these destinations provide unforgettable cycling experiences. Plan your next adventure and discover the beauty of these top cycling spots.",
         FALSE,
        "The world offers a vast array of cycling destinations catering to all experience levels and preferences. Breathtaking mountain ranges like the Swiss Alps or the Rockies challenge experienced cyclists with steep climbs and rewarding vistas. Picturesque coastal routes, such as those found in New Zealand or California, provide stunning ocean views and a relaxed riding experience. Historic cities like Amsterdam or Copenhagen offer well-developed cycling infrastructure and a unique cultural immersion. Choosing a cycling destination can be based on desired terrain, cultural experiences, and overall adventure you seek.");

      INSERT INTO blog_posts (img, title, abstract, highlight)
      VALUES
      ("https://images.unsplash.com/photo-1505705694340-019e1e335916?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmljaWNsZXRhfGVufDB8fDB8fHww",
        "The benefits of cycling for cardiovascular health",
        "Cycling is an excellent way to improve cardiovascular health. It strengthens the heart, lowers blood pressure, and enhances circulation. Regular cycling can significantly reduce the risk of heart disease and stroke. It's a low-impact exercise that's easy on the joints, making it suitable for people of all ages and fitness levels.",
         FALSE),

      ("https://images.unsplash.com/photo-1615632778185-48e15a6f68bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmljaWNsZXRhfGVufDB8fDB8fHww",
        "Cycling tips for beginners",
        "Starting a cycling routine can be daunting for beginners. It's important to start slowly and gradually increase the intensity and duration of your rides. Make sure to invest in a good quality bike and helmet. Learn basic maintenance skills to keep your bike in good condition. Join a local cycling group for support and motivation.",
         FALSE),

      ("https://images.unsplash.com/photo-1545575439-3261931f52f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJpY2ljbGV0YXxlbnwwfHwwfHx8MA%3D%3D",
        "The best cycling apps for tracking your rides",
        "There are several apps available that can enhance your cycling experience by tracking your rides, monitoring your progress, and providing route suggestions. Apps like Strava, MapMyRide, and Komoot are popular choices among cyclists. They offer features like GPS tracking, performance analysis, and social networking with other cyclists.",
         FALSE),

      ("https://images.unsplash.com/photo-1531851454380-ab14ff755bfb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGJpY2ljbGV0YXxlbnwwfHwwfHx8MA%3D%3D",
        "How to choose the right bike for you",
        "Choosing the right bike depends on your riding style, terrain, and personal preferences. There are different types of bikes available, including road bikes, mountain bikes, and hybrid bikes. Consider factors like frame material, wheel size, and gear systems. Test ride different models to find the one that feels most comfortable and suits your needs.",
         FALSE),

      ("https://images.unsplash.com/photo-1501147830916-ce44a6359892?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmljaXxlbnwwfHwwfHx8MA%3D%3D",
        "Essential cycling accessories for a safe ride",
        "To ensure a safe and enjoyable ride, it's important to have the right accessories. A good helmet, lights, reflective gear, and a bell are essential for visibility and safety. Additionally, consider carrying a repair kit, water bottle, and a bike lock. These accessories can enhance your cycling experience and provide peace of mind.",
         FALSE),

      ("https://images.unsplash.com/photo-1619194728665-36281d450fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGJpY2ljbGV0YXxlbnwwfHwwfHx8MA%3D%3D",
        "Cycling events to look forward to this year",
        "This year, there are several exciting cycling events taking place around the world. From local charity rides to international competitions, there's something for every cyclist. Some notable events include the Tour de France, Giro d'Italia, and the RideLondon festival. Participating in these events can be a great way to challenge yourself and connect with other cycling enthusiasts.",
         FALSE),

      ("https://images.unsplash.com/photo-1571081790807-6933479d240f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGJpY2ljbGV0YXxlbnwwfHwwfHx8MA%3D%3D",
        "The history of cycling: From invention to modern sport",
        "Cycling has a rich history that dates back to the early 19th century. The first bicycles, known as 'running machines', were developed in Europe. Over the years, advancements in technology and design transformed bicycles into the modern machines we use today. Cycling has evolved from a mode of transportation to a popular sport enjoyed by millions worldwide.",
         FALSE),

      ("https://images.unsplash.com/photo-1511277918544-4e638c620c25?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGJpY2ljbGV0YXxlbnwwfHwwfHx8MA%3D%3D",
        "Tips for maintaining your bike",
        "Regular maintenance is crucial to keep your bike in good working condition. Basic tasks include checking tire pressure, lubricating the chain, and inspecting brakes and gears. Cleaning your bike regularly helps prevent rust and prolongs its lifespan. It's also important to get your bike serviced by a professional mechanic at least once a year.",
         FALSE),

      ("https://images.unsplash.com/photo-1635159339046-68a9ac16a04d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGJpY2ljbGV0YXxlbnwwfHwwfHx8MA%3D%3D",
        "The environmental benefits of cycling",
        "Cycling is an eco-friendly mode of transportation that reduces carbon emissions and traffic congestion. It requires less energy and resources compared to driving a car. By choosing to cycle instead of drive, you contribute to a cleaner and healthier environment. Cycling also promotes sustainable urban development by reducing the need for extensive road infrastructure.",
         FALSE),

      ("https://images.unsplash.com/photo-1714015262881-5bfaf6defb20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJpY2ljbGV0YSUyMGJteHxlbnwwfHwwfHx8MA%3D%3D",
        "Exploring scenic cycling routes in your area",
        "Exploring local scenic cycling routes can be a rewarding experience. Many areas have dedicated bike paths and trails that offer beautiful views and a safe environment for cyclists. Whether you prefer urban routes or countryside trails, there's something for everyone. Use online resources and local maps to discover the best routes in your area.",
         FALSE),

      ("https://images.unsplash.com/photo-1613324089487-c618f5a52630?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fGJpY2ljbGV0YXxlbnwwfHwwfHx8MA%3D%3D",
        "Cycling safety tips for urban environments",
        "Cycling in urban environments can be challenging due to traffic and other hazards. To stay safe, always wear a helmet and use lights and reflective gear. Follow traffic rules and be aware of your surroundings. Use bike lanes where available and signal your intentions to other road users. Being vigilant and prepared can help prevent accidents and ensure a safe ride.",
        FALSE),

      ("https://images.unsplash.com/photo-1626021397894-adae15b5ee76?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fGJpY2ljbGV0YXxlbnwwfHwwfHx8MA%3D%3D",
        "The impact of cycling on community building",
        "Cycling can play a significant role in building stronger communities. Group rides and cycling events bring people together, fostering a sense of camaraderie and shared purpose. Community bike programs and advocacy groups work to improve cycling infrastructure and promote cycling as a healthy and sustainable mode of transportation.",
        FALSE);

        INSERT INTO events (title, img, startDate, endDate, eventLocation, description, highlight, level, trip)
        VALUES
          ('MTB tour Schwarzeald-Cross', '"./assets/images/img_homepage/img_rectangle_7_410x427.png"', '2024-06-08', '2024-06-12', 'Ettlingen, Germany',
          'The MTB Schwarzwald-Cross Tour is an exhilarating adventure through the breathtaking landscapes of the Black Forest. This tour offers a unique experience for mountain biking enthusiasts, combining technical trails with spectacular views. During the tour, cyclists will have the opportunity to explore hidden paths, traverse dense forests, and overcome challenging elevations, fully immersing themselves in unspoiled nature. Whether you are an experienced cyclist or a beginner seeking adventure, the MTB Schwarzwald-Cross Tour promises to be an unforgettable experience, rich in adrenaline and natural beauty.', TRUE, 'beginner', TRUE),

          ('Csain Tourism Cup 2024', '"./assets/images/img_homepage/img_rectangle_7_1.png"', '2024-03-01', '2024-03-31', 'Imperia, Liguria, Italy',
          'The Csain Tourism Cup is an event for e-bikes, gravel bikes, and road bikes in the orientation category, held in the Liguria region of Italy. It was first organized in 2022. The 2024 edition of the Csain Tourism Cup is part of the Csain Ciclismo Liguria circuit and will take place on Friday, March 1, 2024, starting in Imperia, Province of Imperia, Liguria. Organizer: The event is open to all cyclists with valid 2024 memberships, including those affiliated with the Italian Cycling Federation, affiliated entities, foreign federations, and foreign entities. The game is simple! Once you complete the registration, you will receive an email with your objective map, which is the Csain Tourism app (the maps are the same for all participants at the same level). To win, you need to take a photo with your bike in all the zones indicated on the map (make sure the photo clearly shows the place where you are for verification by the jury. Group photos with multiple participants are valid).', FALSE, 'beginner', FALSE),

          ('Transmurgiana: Bike Journey in the Heart of Apulia', '"./assets/images/img_homepage/img_rectangle_7_2.png"', '2024-05-24', '2024-05-31', 'Bari, Puglia, Italy',
          'The TRANSMURGIANA is a bicycle adventure in the heart of Apulia, one of the most beautiful regions in Southern Italy. This is a self-guided journey, lasting 8 days (7 nights), starting from Bari (the regional capital). Along the route, you will visit: Alberobello, the city of “Trulli,” with its unique dry-stone houses with conical roofs (UNESCO SITE); Matera, one of the oldest cities in the world, entirely carved into the rock (UNESCO SITE); Castel del Monte, one of the most famous castles in Italy with its octagonal shape and many secrets still hidden (UNESCO SITE); The Alta Murgia National Park, the only continental pseudo-steppe in Italy (a Protected Area on the verge of becoming a UNESCO Geo Park); The coast of the city of Trani, called the “Pearl of the Adriatic” for the white limestone with which its entire historic center is built, and the beautiful Romanesque cathedral a few meters from the sea, one of the most beautiful cathedrals in Europe.', FALSE, 'intermediate', TRUE),

          ('Tuscany Trail', '"./assets/images/img_homepage/image-six-rectangle.jpg"', '2024-05-24', '2024-05-25', 'Castagneto Carducci, Toscana, Italy',
          'The Tuscany Trail is a gravel bike event in the bikepacking category in Italy, in the Tuscany region, and it was first organized in 2014. The 2024 edition of the Tuscany Trail will take place on Friday, May 24, 2024, starting from Castagneto Carducci, in the province of Livorno, Tuscany. The Tuscany Trail offers a 460 km route for gravel bikes.', FALSE, 'expert', FALSE);

          INSERT INTO threads (id, title, description, author_id)
          VALUES

            (1, "Best Bikepacking Routes in Europe",
            "Hey everyone! I'm planning a bikepacking trip across Europe this summer and I'm looking for some route suggestions. I'm interested in scenic routes that offer a mix of challenging terrains and beautiful landscapes. Any recommendations or personal experiences to share? Thanks!", 1),

            (2, "Tips for Improving Climbing Endurance",
            "Hi all! I've been struggling with long climbs during my rides and I'm looking for advice on how to improve my endurance and technique. What are your go-to strategies for building strength and stamina for uphill cycling? Any specific training routines or dietary tips?", 2);

            INSERT INTO thread_replies (id, text, thread_id, author_id)
            VALUES

              (1, "If you haven't already, check out the EuroVelo routes. EuroVelo 6, which goes from the Atlantic Ocean to the Black Sea, is absolutely stunning and covers a diverse range of landscapes. Another personal favorite is the Danube Cycle Path - it's relatively easy and passes through some beautiful towns and cities.", 1, 3),

              (2, "I second the EuroVelo routes! Additionally, the Great Divide Mountain Bike Route in Spain is incredible if you're up for a challenge. The landscapes are breathtaking and it's a great mix of off-road trails and paved paths. Happy cycling!", 1, 2),

              (3, "Hi there! For improving your climbing endurance, I recommend incorporating interval training into your routine. Short, intense bursts of climbing followed by recovery periods can really help build your strength. Also, don't forget to stay hydrated and fueled - proper nutrition is key!", 2, 1),

              (4, 'One thing that helped me a lot was focusing on my core strength. Strong core muscles can make a big difference in your overall stability and power when climbing. Planks, Russian twists, and leg raises are great exercises to add to your training. Good luck!', 2, 3);
              `,
    (error, results, fields) => {
      if (error) throw error;
    }
  );
};

//setupDb();

export { db };
