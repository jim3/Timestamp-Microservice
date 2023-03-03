// (((Time·Converter·Service)))
const timeConverter = (isoStr) => {
    // if given a date string, convert it to a date
    if (typeof isoStr === "string") {
        isoStr = new Date(isoStr);
    }

    // if the date is not provided, use the current date
    if (!isoStr) {
        isoStr = new Date().toISOString();
    }

    // if the date is invalid, return an error
    if (isoStr.toString() === "Invalid Date") {
        return { error: "Invalid Date" };
    }
    const unixTimeStamp = new Date(isoStr).getTime();
    const utcTime = new Date(isoStr).toUTCString();
    return { unix: unixTimeStamp, utc: utcTime };
};

module.exports = { timeConverter };
