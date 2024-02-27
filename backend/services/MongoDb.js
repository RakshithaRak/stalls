const mongoose = require("mongoose");

const mongoDbIpAddress = process.env.MONGODB_IP_ADDRESS;
const mongoDbPort = process.env.MONGODB_PORT;
const dbName = process.env.MONGODB_DB;

// const uri = `mongodb://${mongoDbIpAddress}:${mongoDbPort}/${dbName}`;
const uri = process.env.MONGODB_DB_ATLAS;

mongoose
  .connect(uri)
  .then(() => console.log("Connected to mongodb."))
  .catch((err) =>
    console.error(`Error while connecting to mongodb:- ${err.message}.`)
  );
