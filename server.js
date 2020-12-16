const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const itemsRouter = require("./routes/items.route");

dotenv.config();

app.use("/items", cors(), itemsRouter);

const PORT = process.env.APP_PORT || 5000;
app.listen(PORT, console.log(`Server is running on http://localhost:${PORT}`));
