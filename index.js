import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World! , From kaiten ');
});



app.listen(port, () => {
  console.log(`Sample app listening on port ${port}`);
});