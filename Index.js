const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

app.get('/api/greet', (req, res) => {
  res.json({ message: "Hello from Render API!" });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server running...");
});
