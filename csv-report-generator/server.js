const express = require('express');
const bodyParser = require('body-parser');

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





  res.end('posted');

});


app.listen(3000, () => console.log("Listending to server"));

