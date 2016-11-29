import * as express from "express";
import * as logger from "morgan";

const app = express();
app.use(logger('dev'));
app.use(express.static('.'));

app.get('/', function (req, res, next) {
  try {
    res.sendFile('index.html', { root: __dirname + '\\..'});
  } catch (e) {
    next(e)
  }
})



app.listen(process.env.PORT || 3000, function () {
  console.log('Listening on http://localhost:' + (process.env.PORT || 3000) + ' pid: ' + process.pid)
})
