import express from 'express';
import proxy from 'express-http-proxy';
import handleRender from './helpers/handleRender';

const app = express();

// app.get('*', (req, res) => {
//   // console.log(req.cookies);
//   res.send(serverRenderer(req));
// });

console.log(process.env);
const forwardedHost = process.env.X_FORWARDED_HOST
  ? process.env.X_FORWARDED_HOST
  : 'localhost:3000';
app.use(
  '/api',
  proxy('http://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator: (opts) => {
      opts.headers['x-forwarded-host'] = forwardedHost;
      return opts;
    },
  }),
);
app.use(express.static('public'));
app.use(handleRender);

app.listen(3000, () => {
  console.log('Start listenting on port 3000');
});
