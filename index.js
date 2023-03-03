const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204
const port = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/views/index.html");
});

// your first API endpoint...
app.get("/api/hello", function (req, res) {
    res.json({ greeting: "hello API" });
});

// A request to `/api/:date?` with a valid date (a valid ISO-8601 date string) should return a JSON object
// with a unix key that is a Unix timestamp of the input date in milliseconds (as type Number)
app.get("/api/:date?", (req, res) => {
    let dateStr = req.params.date;

    // if no date is provided, use the current date
    if (!dateStr) {
        dateStr = new Date().toISOString();
    }

    // parse the date string
    let date = new Date(dateStr);

    // check if the date is valid
    if (isNaN(date.getTime())) {
        res.json({ error: "Invalid date" });
    } else {
        // convert the date to Unix timestamp format
        let unixTime = date.getTime() / 1000;
        res.json({ unix: unixTime });
    }
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
