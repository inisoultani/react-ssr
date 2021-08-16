import express from 'express';
import handleRender from './helpers/handleRender';

const app = express();

// app.get('*', (req, res) => {
//   // console.log(req.cookies);
//   res.send(serverRenderer(req));
// });

app.use(express.static('public'));
app.use(handleRender);

app.listen(3000, () => {
  console.log('Start listenting on port 3000');
});
