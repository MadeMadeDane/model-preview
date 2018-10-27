const express = require('express');
const app = express();
const port = 3000;
app.use('/game', express.static("castle_o_puzzles_web"));
app.use('/home', express.static("src"));
app.use(express.static("model-view"));
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})
