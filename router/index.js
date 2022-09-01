const router = require("koa-router")();

const mongoose = require("mongoose");

const Model = require("../mongo-server/models");

function useRouter(app) {
  router.get("/", async (ctx, next) => {
    ctx.body = "hello";
  });

  /**
   * 新增用户
   */
  router.post("/addUser", async (ctx, next) => {
    await next();
    const user = new Model.User(ctx.request.body);
    const saveResult = await user.save();
    ctx.body = saveResult ? "success" : "fail";
  });

  /**
   * 获取用户列表
   */
  router.get("/getUserList", async (ctx, next) => {
    ctx.body = await Model.User.find();
  });

  /**
   * 根据 userId 获取用户详情
   */
  router.get("/gerUserDetailByUserId", async (ctx, next) => {
    const userId = ctx.request.query.userId;
    if (userId) {
      ctx.body = await Model.User.findOne({ userId });
      return;
    }
    ctx.body = "不是一个合法的 userID";
    // if (mongoose.isValidObjectId(userId)) {
    //   ctx.body = await Model.User.find({ userId });
    //   return;
    // }
    // ctx.body = "不是一个合法的 userID";
  });

  /**
   * 根据 userId 删除用户
   */
  router.delete("/deleteUserByUserId", async (ctx, next) => {
    const userId = ctx.request.query.userId;
    if (userId) {
      ctx.body = await Model.User.remove({ userId });
      return;
    }
    ctx.body = "不是一个合法的 userID";
    // if (mongoose.isValidObjectId(userId)) {
    //   ctx.body = await Model.User.remove({ userId });
    //   return;
    // }
    // ctx.body = "不是一个合法的 userID";
  });

  app.use(router.routes());
  app.use(router.allowedMethods());
}

module.exports = useRouter;
