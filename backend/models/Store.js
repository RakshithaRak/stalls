const { Schema, model } = require("mongoose");

const StoreSchema = new Schema({
  branch_name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    min: 10,
    max: 500,
  },
  image: String,
  address: {
    type: String,
    required: true,
    min: 10,
    max: 100,
  },
  phone_no: String,
  email: {
    type: String,
    required: true,
  },
  store_timings: {
    type: {},
    required: true,
  },
});

module.exports = model("Store", StoreSchema);
