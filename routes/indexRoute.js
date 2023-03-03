const express = require("express");
const router = express.Router();
const { timeConverter } = require("../services/timeConverter");

router.get("/", function (req, res) {
    res.sendFile(__dirname + "/views/index.html");
});

// test route
router.get("/api/hello", function (req, res) {
    res.json({ greeting: "hello API" });
});

// api endpoint for the timestamp microservice
router.get("/api/:date", function (req, res) {
    let isoStr = req.params.date;
    const unixTimeStamp = timeConverter(isoStr);
    const utcTime = timeConverter(isoStr);
    res.json({
        unix: unixTimeStamp.unix,
        utc: utcTime.utc,
    });
});

module.exports = router;
