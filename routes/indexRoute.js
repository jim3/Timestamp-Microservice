const express = require("express");
const router = express.Router();
const { timeConverter } = require("../services/timeConverter");

router.get("/", function (req, res) {
    res.sendFile(__dirname + "/views/index.html");
});

router.get("/", function (req, res) {
    res.render("index");
});

// route if no timestamp is provided
router.get("/api", function (req, res) {
    const unixTimeStamp = Date.now(); // get current unix timestamp
    const utcTime = new Date(unixTimeStamp).toUTCString(); // convert unix timestamp to utc time
    res.json({
        unix: unixTimeStamp,
        utc: utcTime,
    });
});

// route if timestamp is provided
router.get("/api/:timestamp", function (req, res) {
    const { timestamp } = req.params;
    let unixTimeStamp;
    let utcTime;

    if (/^\d+$/.test(timestamp)) {
        unixTimeStamp = parseInt(timestamp);
        utcTime = new Date(unixTimeStamp).toUTCString();
    } else {
        const result = timeConverter(timestamp);
        if (result.error) {
            res.status(400).json({ error: result.error });
            return;
        }
        unixTimeStamp = result.unix;
        utcTime = result.utc;
    }

    res.json({
        unix: unixTimeStamp,
        utc: utcTime,
    });
});

// route if date and timestamp is provided
router.get("/api/:timestamp/:date", function (req, res) {
    const { timestamp, date } = req.params;
    const isoStr = `${date} ${timestamp}`;
    const result = timeConverter(isoStr);

    if (result.error) {
        res.status(400).json({ error: result.error });
        return;
    }

    res.json({
        unix: result.unix,
        utc: result.utc,
    });
});

module.exports = router;
