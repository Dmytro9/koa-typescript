import * as Koa from 'koa';
import * as logger from 'koa-logger';
import * as Router from 'koa-router';
import taskRouter from './routes/tasks';


const app = new Koa();
const router = new Router();

app.use(logger());


router.get('/', async ctx => {
  ctx.body = 'Welcome to App';
});


app.use(router.routes());
app.use(taskRouter.routes());


app.listen(3001);

console.log('My Koa server is app and listening on port 3001');