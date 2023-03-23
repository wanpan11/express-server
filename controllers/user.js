// 引用用户模版数据
const User = require('../models/user');

const userController = {
  // showUser 获取用户数据并返回到页面
  async showUser(req, res) {
    try {
      const userData = await User.all();
      res.json({
        code: 200,
        message: '操作成功',
        data: userData,
      });
    } catch (e) {
      res.json({ code: 0, message: '操作失败', data: e });
    }
  },
};

module.exports = userController;
