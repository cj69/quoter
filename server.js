const express = require("express");
const path = require("path");

const quotes = [
  "You're programming! How cool is that?",
  "You can do it as if its a great weight on you, or you can do it as if its all a part of the dance.",
  "Change what you can't accept, accept what you can't change.",
  "If you have the opportunity to play this game of life, you need to appreciate every moment. Alot of people don't appreciate the moment until its passed.",
  "Practice any art, music, singing, dancing, acting, drawing, painting, sculpting, poetry, fiction, essays, reportage, no matter how well or badly, not to get money for fame, but to experience becoming, to find out what's inside you, to make your soul grow.",
  "The noblest art is making others happy. - P.T. Barnum",
  "Every experience, no matter how bad it seems, holds within it a blessing of some kind. The goal is to find it. - Buddha",
  "Life has more imagination than we carry in our dreams. - Christopher Columbus",
  "It's me against me, I wanted to feel something besides defeat? I had to invent a guy that didn't exist. - David Goggins",
  "The first principle is that you must not fool yourself and you are the easiest person to fool. - Richard Feynman"
];

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

const app = express();

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/quote", function(req, res) {
  res
    .json({
      quote: getRandomQuote()
    })
    .end();
});

app.use("/public", express.static("./public"));

app.listen(3000);
console.log("listening on http://localhost:3000");