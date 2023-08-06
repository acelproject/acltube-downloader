const express = require("express");
const cors = require("cors");
const ytdl = require("ytdl-core");
const app = express();

app.use(cors());

const port = 5000;
app.listen(port, () => {
  console.log(`Listen the server ${port}`);
});

app.get("/download", (req, res) => {
  var URL = req.query.value;
  // res.json({ url: URL });

  res.header("Content-Disposition", `attachment; filename=${URL}`);

  ytdl(URL, {
    format: "mp4",
  }).pipe(res);
});
