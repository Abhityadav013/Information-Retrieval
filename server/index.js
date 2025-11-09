const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.post("/recommend", async (req, res) => {
  // forward request to ML API
  const result = await fetch("http://ml-service:8000/recommend", {
    method: "POST",
    body: JSON.stringify(req.body),
    headers: { "Content-Type": "application/json" },
  });
  const data = await result.json();
  res.json(data);
});

app.listen(5000, () => console.log("Backend running on port 5000"));
