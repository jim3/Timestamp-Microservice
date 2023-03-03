## Timestamp Microservice

---

Returns a given date to the user in JSON format with both the Unix timestamp and the UTC string.
If no date is given, returns the current date. If the date is invalid, returns an error message.

### API Usage:

| Input                | Output                                                            |
| :------------------- | :---------------------------------------------------------------- |
| /api/                | { "unix": 1677715200000, "utc": "Thu, 02 Mar 2023 00:00:00 GMT" } |
| /api/timestamp/      | { "unix": 1677715200000, "utc": "Thu, 02 Mar 2023 00:00:00 GMT" } |
| /api/timestamp/date: | { "unix": 1677715200000, "utc": "Thu, 02 Mar 2023 00:00:00 GMT" } |

### Example Usage:

| Input                        | Output                                                            |
| :--------------------------- | :---------------------------------------------------------------- |
| /api/timestamp/1451001600000 | { "unix": 1451001600000, "utc": "Fri, 25 Dec 2015 00:00:00 GMT" } |
| /api/timestamp/2015-12-25    | { "unix": 1451001600000, "utc": "Fri, 25 Dec 2015 00:00:00 GMT" } |
