const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let data = [
  {
    name: "Nithin",
    age: 22,
    place: "Kerala",
  },
  {
    name: "Anunitha",
    age: 21,
    place: "Tamil Nadu",
  },
  {
    name: "Nigitha",
    age: 22,
    place: "Kerala",
  },
  {
    name: "Annsita",
    age: 21,
    place: "Tamil Nadu",
  },
];

app.get("/api/data", (req, res) => {
  res.json(data);
});

app.post("/api/data", (req, res) => {
  const { name, place, age } = req.body;
  const newData = { name, place, age };
  data.push(newData);
  res.status(201).json(newData);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
