import * as Router from 'koa-router';

const router = new Router();

router.get('/tasks', async ctx => {
    ctx.body = 'Return all tasks';
});

router.get('/tasks/:id', async ctx => {
    ctx.body = `Return tasks with id ${ctx.params.id}`;
});

router.post('/tasks', async ctx => {
    ctx.body = 'Create a new task';
});

router.put('/tasks/:id', async ctx => {
    ctx.body = `Update task with id ${ctx.params.id}`;
});

router.delete('/tasks/:id', async ctx => {
    ctx.body = `Delete task with id ${ctx.params.id}`;
});

export default router;
