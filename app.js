const Koa = require("koa");

const bodyParser = require("koa-bodyparser");

const useRouter = require("./router/");

const useMongoDB = require("./mongo-server/");

const app = new Koa();

// 数据库连接成功再开启 3000 端口服务
useMongoDB(() => {
  useRouter(app);

  app.use(bodyParser());

  app.listen(3000, () => {
    console.log("server starting at port 3000");
  });
});
