const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const MongoClient = require('mongodb').MongoClient;
MongoClient.connect(
  'mongodb+srv://admin:7216@boilerplate.nmhbm.mongodb.net/?retryWrites=true&w=majority',
  (err, client) => {
    app.listen(8080, () => {
      console.log('listening on 8080');
    });
  }
);

// app.listen(8080, function () {
//   console.log('listening on 8080');
// });

app.use(express.static(path.join(__dirname, '../build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.post('/workout/post', (req, res) => {
  res.send('전송완료');
});
app.post('/diet/post', (req, res) => {
  res.send('전송완료');
  console.log(req.body);
});
