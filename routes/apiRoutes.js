const router = require("express").Router();
const noteData = require("../db/db.json");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

// create (POST request)
router.post("/notes", (req, res) => {
  const { title, text } = req.body;
  if (title && text) {
    const addedNote = {
      title,
      text,
      note_id: uuidv4(),
    };
    console.log(addedNote);
    const jdata = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"));
    jdata.push(addedNote);
   return res.json(addedNote);
    console.log(jdata);
  } else {
    res.json("Enter a title and a text!");
  }
});

//read (GET request)
router.get("/notes", (req, res) => {
  console.log("getNotesRoute");
  const jdata = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"));
  res.json(jdata);
  console.log(jdata);
});
// update (PUT request)

//delete(DELETE request)
module.exports = router;
