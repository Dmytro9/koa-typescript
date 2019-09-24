import * as Koa from 'koa';
import * as logger from 'koa-logger';
import * as Router from 'koa-router';


const app = new Koa();
const router = new Router();

app.use(logger());


router.get('/', async ctx => {
  ctx.body = 'Welcome to App';
});


app.use(router.routes());


app.listen(3000);

console.log('My Koa server is app and listening on port 3000');