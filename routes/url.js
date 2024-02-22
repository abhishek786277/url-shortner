const url = require("../db/dbquery");
const express = require("express");
const router = express.Router();
const shortid = require("shortid");
const isUrl = require("is-url-http");

router.post("/", middle);

async function middle(req, res) {
  console.log("hiii");
  console.log(req.body);
  const user_url = req.body.url;
  console.log(isUrl(user_url));
  if (!isUrl(user_url)){
    return res.status(400).json({ error: "url is required" });
  }
    const shortId = shortid();
    // console.log( typeof user_url)
    try {
      await url.create({
        shortid: shortId,
        redirectURL: user_url,
      });
    } catch (error) {
      console.log(error);
    }
    return res.json({ id: shortId });
  }


module.exports = router;
