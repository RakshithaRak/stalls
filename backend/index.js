const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const verifyToken = require("./middlewares/verifyToken");
require("./services/MongoDb");
const storeRoutes = require("./routes/Stores");

app.use(cors());
app.use(express.json());

app.use(verifyToken);

app.use("/stores", storeRoutes);

app.listen(PORT, () => console.log(`Server is listening at port ${PORT}.`));
