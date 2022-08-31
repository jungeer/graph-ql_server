const router = require("koa-router")();

function useRouter(app) {
  router.get("/", (ctx, next) => {
    ctx.body = "hello";
  });
  router.post("/addUser", (ctx, next) => {
    ctx.body = "addUser";
  });
  router.get("/getUserList", (ctx, next) => {
    ctx.body = [{ name: "junger " }];
  });
  router.get("/gerUserDetail", (ctx, next) => {
    ctx.body = {
      id: `${ctx.request.query.id}`,
      name: "jungeer",
    };
  });

  app.use(router.routes()); // 启动路由
  /**
   * 作用
   * 是官方文档的推荐用法,我们可以看到router.allowedMethods()
   * 用在了路由匹配router.routes()之后,
   * 所以在当所有路由中间件最后调用.此时根据ctx.status设置response响应头
   */
  app.use(router.allowedMethods());
}

module.exports = useRouter;
