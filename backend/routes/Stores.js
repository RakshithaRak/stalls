const express = require("express");
const router = express.Router();
const storeModel = require("../models/Store");

router.get("/", async (req, res, next) => {
  try {
    const data = await storeModel.find();

    return res.send({ status: "success", data });
  } catch (error) {
    console.error(error);
    return res.send({ status: "failed", message: error.message });
  }
});

router.get("/:branch_name", async (req, res, next) => {
  try {
    const { branch_name } = req.params;

    const data = await storeModel.findOne({ branch_name });

    return res.send({ status: "success", data });
  } catch (error) {
    console.error(error);
    return res.send({ status: "failed", message: error.message });
  }
});

router.post("/", async (req, res, next) => {
  try {
    await storeModel.create(req.body);

    return res.send({ status: "success", message: "Store created" });
  } catch (error) {
    console.error(error);
    return res.send({ status: "failed", message: error.message });
  }
});

module.exports = router;
