// ----------------------
// Timestamp Microservice
// ----------------------

const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204
const port = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/views/index.html");
});

app.get("/api/hello", function (req, res) {
    res.json({ greeting: "hello API" });
});

const timeConverter = (isoStr) => {
    // if no date is provided, use the current date
    if (!isoStr) {
        isoStr = new Date().toISOString();
    }
    // if the date is a number, convert it to a string
    if (Number.isInteger(isoStr)) {
        isoStr = new Date(isoStr).toISOString();
    }
    // if the date is a string, convert it to a date object
    if (typeof isoStr === "string") {
        isoStr = new Date(isoStr);
    }
    // if the date is invalid, return an error
    if (isoStr.toString() === "Invalid Date") {
        res.json({ error: "Invalid Date" });
    }
    // return the unix timestamp and utc string
    const unixTimeStamp = new Date(isoStr).getTime();
    const utcTime = new Date(isoStr).toUTCString();
    return { unix: unixTimeStamp, utc: utcTime };
};

app.get("/api/:date?", (req, res) => {
    let isoStr = req.params.date;
    const unixTimeStamp = timeConverter(isoStr);
    const utcTime = timeConverter(isoStr);

    res.json({
        unix: unixTimeStamp.unix,
        utc: utcTime.utc,
    });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
