const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(express.static('client'));
//app.use(express.json());
app.use(bodyParser.text());


app.get('/', (req, res) => {
  console.log(req.body);

  res.status(200).send('hello');
})

app.post('/upload_json', (req, res) => {
  var reqBody = req.body;
  var upload = reqBody.slice(7);

  console.log(upload);

  var uploadObj = JSON.parse(upload);

  fs.readFile(path.join(__dirname, '/client/index.html'), 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      console.log(data);
      res.write(data);
      res.end(upload);
    }
  });


});


app.listen(3000, () => console.log("Listending to server"));

