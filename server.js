const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const itemsRouter = require("./routes/items.route");

dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/items", cors(), itemsRouter);

const PORT = process.env.APP_PORT || 5000;
app.listen(PORT, console.log(`Server is running on http://localhost:${PORT}`));
