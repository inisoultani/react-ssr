import express from 'express';
import serverRenderer from './helpers/serverRenderer';

const app = express();

app.use(express.static('public'));
app.get('/', (req, res) => {
  res.send(serverRenderer());
});

app.listen(3000, () => {
  console.log('Start listenting on port 3000');
});
