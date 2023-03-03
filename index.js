const express = require("express");
const app = express();
const indexRoute = require("./routes/indexRoute");
const cors = require("cors");
const port = process.env.PORT || 3000;

app.use(cors({ optionsSuccessStatus: 200 }));
app.use(express.static("public"));

app.use("/", indexRoute);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
