const noteData = require('./db/db.json');


// create (POST request)
app.post("/api/notes", (req, res) => {
    const { title, text } = req.body;
    if (title && text) {
        const addedNote = {
          title,
          text,
          note_id: uuid(),
        };
    
        db.push(addedNote);
      } else {
        res.json("Enter a title and a text!");
      }
    });
    
//read (GET request)
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "public/notes.html"));
  });
// update (PUT request)

//delete(DELETE request)
app.listen(PORT, () =>
  console.log(`The server is listening at http://localhost:${PORT}`)
);