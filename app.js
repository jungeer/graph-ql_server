const Koa = require("koa");

const bodyParser = require("koa-bodyparser");

const useMongoDB = require("./mongo-server/");

const useRouter = require("./router/");

const useGraphqlServer = require("./graphql/");

const app = new Koa();

// 数据库连接成功再开启 3000 端口服务
useMongoDB(() => {
  app.use(bodyParser());
  useRouter(app);
  useGraphqlServer(app);
  app.listen(3000, () => {
    console.log("server starting at port 3000");
  });
});
