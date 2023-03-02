const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 }));
const port = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/views/index.html");
});

// your first API endpoint...
app.get("/api/hello", function (req, res) {
    res.json({ greeting: "hello API" });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
