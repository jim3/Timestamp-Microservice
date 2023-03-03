// (((Time·Converter·Service)))
const timeConverter = (isoStr) => {
    if (!isoStr) {
        isoStr = new Date().toISOString();
    }
    if (Number.isInteger(isoStr)) {
        isoStr = new Date(isoStr).toISOString();
    }
    if (typeof isoStr === "string") {
        isoStr = new Date(isoStr);
    }
    // if the date is invalid, return an error
    if (isoStr.toString() === "Invalid Date") {
        res.json({ error: "Invalid Date" });
    }
    const unixTimeStamp = new Date(isoStr).getTime();
    const utcTime = new Date(isoStr).toUTCString();
    return { unix: unixTimeStamp, utc: utcTime };
};

module.exports = { timeConverter };
