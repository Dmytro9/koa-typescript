import * as Koa from 'koa';
import * as logger from 'koa-logger';
import * as Router from 'koa-router';
import taskRouter from './routes/tasks';
import bodyParser = require('koa-bodyparser');

const app = new Koa();
const router = new Router();
const PORT = process.env.PORT || 3000;

app.use(logger());
app.use(bodyParser());


router.get('/', async ctx => {
  ctx.body = 'Welcome to App';
});


app.use(router.routes());
app.use(taskRouter.routes());


app.listen(PORT);

console.log(`My Koa server is app and listening on port ${PORT}`);