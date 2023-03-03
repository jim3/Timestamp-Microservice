## Timestamp Microservice

---

Returns a given date to the user in JSON format. If no date is given, returns the current date. If the date is invalid, returns an error message.

### API Usage:

| Input                  | Output                                                            |
| :--------------------- | :---------------------------------------------------------------- |
| /api/timestamp/        | { "unix": 1677715200000, "utc": "Thu, 02 Mar 2023 00:00:00 GMT" } |
| /api/timestamp/invalid | { "error" : "Invalid Date" }                                      |
