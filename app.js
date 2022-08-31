const Koa = require("koa");

const bodyParser = require("koa-bodyparser");

const useRouter = require("./router/");

const app = new Koa();

useRouter(app);

app.use(bodyParser());

app.listen(3001, () => {
  console.log("server starting at port 3001");
});
