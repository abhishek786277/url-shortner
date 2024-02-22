const express = require("express");
const cors = require("cors");
const { connecttodatabase } = require("./db/db");
const urlroutes = require("./routes/url");
const URL = require("./db/dbquery");
const app = express();

app.use(cors());
connecttodatabase();

app.use(express.json());

app.use("/url", urlroutes);

app.get("/:id", async (req, res) => {
  const shortId = req.params.id;
  try {
    const entry = await URL.findOne({ shortid: shortId });
    if(entry){
      console.log(entry.redirectURL)
      return res.json({geturl:entry.redirectURL});
    }
    else{
      return res.send("Not found")
    }
  } catch (error) {
    return console.log(error);
  }
});

app.listen(3000, () => {
  console.log("server started.................");
});
