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

-- Quiz section
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

-- Blog section
CREATE TABLE blog_posts (
  id INT PRIMARY KEY AUTO_INCREMENT,
  img VARCHAR(255) NOT NULL,
  title VARCHAR(255) NOT NULL,
  abstract TEXT NOT NULL,
  highlight BOOLEAN NOT NULL DEFAULT FALSE,
  main TEXT
);

-- CREATE TABLE blog_data (
--     post_id INT,
--     category_id INT,
--     FOREIGN KEY (post_id) REFERENCES blog_posts(id)
-- );

-- News & Events section
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

-- Community section
CREATE TABLE threads (
  id INT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  author_id BIGINT NOT NULL,
  FOREIGN KEY (author_id) REFERENCES users(id)
);

CREATE TABLE thread_replies (
  id INT PRIMARY KEY,
  text TEXT NOT NULL,
  thread_id INT NOT NULL,
  author_id BIGINT NOT NULL,
  FOREIGN KEY (thread_id) REFERENCES threads(id),
  FOREIGN KEY (author_id) REFERENCES users(id)
);
