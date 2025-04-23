const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 5099;

app.use(cors());
app.use(express.json()); // JSON support

// RouteOptimize - JSON fayldan o‘qib qaytaradi
app.get("/routeOptimize", (req, res) => {
  const filePath = path.join(__dirname, "data.json");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Fayl o‘qishda xatolik" });
    }

    try {
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    } catch (parseErr) {
      res.status(500).json({ error: "JSON formatda xatolik bor" });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server ishga tushdi: http://localhost:${PORT}`);
});
