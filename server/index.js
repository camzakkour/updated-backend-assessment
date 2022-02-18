const express = require("express");
const cors = require("cors");
const ctrl = require("./controller.js")

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});


app.get("/api/fortune", (req, res) => {
  const fortunes = ["A beautiful, smart, and loving person will be coming into your life.",
  "Adventure can be real happiness.", "Take the high road.", 'Your mind is your greatest asset.', 'Your life will be happy and peaceful.'
];

// choose random fortune
let randomIndex = Math.floor(Math.random() * fortunes.length);
let randomFortune = fortunes[randomIndex];

res.status(200).send(randomFortune);

});

app.get("/api/motivation", (req, res) => {
  const motivations = [`C Bum Motivation: https://youtu.be/8fzh-gKZhaw`,
           "Eric Thomas Motivation: https://youtu.be/t7r26mlCAOM",
           "David Goggins Motivation: https://youtu.be/PzeC2VP24vM",
  ];

  // choose random artist
  let randomIndex = Math.floor(Math.random() * motivations.length);
  let randomMotivation = motivations[randomIndex];

  res.status(200).send(randomMotivation);
  
});

app.get('/api/cars', ctrl.getAllCars)
app.post('/api/cars', ctrl.createCar)


app.listen(4000, () => console.log("Server running on 4000"));