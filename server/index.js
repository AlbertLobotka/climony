const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const topics = [
  {
    id: "mobility",
    name: "Alltagsmobilität",
    color: "#265D4D",
    image: "http://localhost:3001/images/topic1.png",
  },
  {
    id: "lifestyle",
    name: "Lifestyle",
    image: "http://localhost:3001/images/topic2.png",
    color: "#FFC84C",
  },
  {
    id: "living",
    name: "Wohnen",
    image: "http://localhost:3001/images/topic3.png",
    color: "#73A7C0",
  },
  {
    id: "travel",
    name: "Reisen",
    image: "http://localhost:3001/images/topic4.png",
    color: "#FF712C",
  },
];

const articles = [
  {
    id: "1",
    title: "CO2-Impact vom Heizen",
    shortDescription: "Beschreibungstext über diesen Artikel",
    readingTime: 3,
    image: "http://localhost:3001/images/article1.png",
  },
  {
    id: "2",
    title: "Energieverbrauch im Haushalt",
    shortDescription:
      "Beschreibungstext über diesen Artikel Beschreibungstext über",
    readingTime: 6,
    image: "http://localhost:3001/images/article2.png",
  },
  {
    id: "3",
    title: "Möglichkeiten zur Reduktion",
    shortDescription: "Beschreibungstext über diesen Artikel",
    readingTime: 4,
    image: "http://localhost:3001/images/article3.png",
  },
  {
    id: "4",
    title: "Möglichkeiten der Förderung",
    shortDescription:
      "Beschreibungstext über diesen Artikel Beschreibungstext über",
    readingTime: 8,
    image: "http://localhost:3001/images/article4.png",
  },
];

// ROUTE: /topics
app.get("/topics", function (_, res) {
  res.json(topics);
});

// ROUTE: /topics/$category
["mobility", "lifestyle", "living", "travel"].forEach((category) => {
  app.get(`/topics/${category}`, function (_, res) {
    const topic = topics.find((topic) => topic.id === category);
    res.json({
      id: category,
      category: topic.name,
      color: topic.color,
      title: `Lerne über ${category}`,
      description: `Wie wirkt sich eigentlich ${category} auf deine Emissionen aus?`,
      articles,
    });
  });
});

// ROUTE: /topics/$category/$id
["mobility", "lifestyle", "living", "travel"].forEach((category) => {
  articles.forEach((article) => {
    app.get(`/topics/${category}/${article.id}`, function (_, res) {
      res.json({
        id: article.id,
        publishedAt: 1681379009,
        readingTime: article.readingTime,
        title: article.title,
        image: article.image,
        description: `Hier lernst du das Wichtigste rund um ${category}: Die wichtigsten Facts vom Umweltbundesamt auf 5 Slides für dich zusammengefasst.`,
      });
    });
  });
});

app.use(express.static("public"));

// Setting the server to listen at port 3001
app.listen(3001, function () {
  console.log("Server is running at port 3001");
});
