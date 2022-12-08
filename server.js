const express = require('express')
const app = express()
const PORT = 3000;

app.use(require('./routes'));

app.use(express.static('./public'))


app.listen(PORT, ()=> console.log(`Now listening on http://localhost:${PORT}`));