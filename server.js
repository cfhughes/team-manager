const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());

require('./server/config/mongoose');

// routes
app.use('/players_json', require('./server/config/routes/team.routes'));

app.use(express.static( __dirname + '/public/dist/public' ));

app.all("*", (req,res,next) => {
  res.sendFile(path.resolve("./public/dist/public/index.html"))
});

app.listen(8000, () => console.log(`express listening on port 8000`));