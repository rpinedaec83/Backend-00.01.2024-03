const express = require('express')
const app = express()
require('dotenv').config();

const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.send('<image src="https://plamoscale.com/images/fog1labs1/fulls/85.jpg">')
})

app.get('/img', (req, res) => {
    var image1 = '49.jpg';

  var base64Img = require('base64-img');
  var imageData1 = base64Img.base64Sync(image1);
  var base64Data = imageData1.replace(/^data:image\/(png|jpeg|jpg);base64,/, '');
  var img = Buffer.from(base64Data, 'base64');

  res.writeHead(200, {
    'Content-Type': 'image/png',
    'Content-Length': img.length
  });
  res.end(img);
  })
app.post('/', (req, res) => {
    res.send('Hello World desde el post!')
})

app.put('/', (req, res) => {
    res.send('Hello World desde el post!')
})

app.patch('/', (req, res) => {
    res.send('Hello World desde el post!')
})

app.delete('/', (req, res) => {
    res.send('Hello World desde el post!')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})