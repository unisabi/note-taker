const router = require("express").Router();
const noteData = require("../db/db.json");
const { writeFile } = require("fs");
const { v4: uuidv4 } = require("uuid");
let store = require("../db/db.json");

// create (POST request)
router.post("/notes", ({ body }, res) => {
  body.id = uuidv4();
  store.push(body);
  console.log(store);

  writeFile("./db/db.json", JSON.stringify(store), (err) => {
    if (err) throw err;
    res.json(store);
  });
});

//read (GET request)
router.get("/notes", (req, res) => res.json(store));




//delete(DELETE request)
router.delete('/notes/:id', ({params}, res) => {
  store = store.filter(({id})=> id!=params.id);
  writeFile('./db/db.json', JSON.stringify(store), err => {
    if(err) throw err;
    res.json(store);
  })
})



module.exports = router;
