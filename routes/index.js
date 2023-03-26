const express = require('express');

const router = express.Router();
const userController = require('../controllers/user');

router.get('/login', (req, res) => {
  res.cookie('user', 'jay', {
    maxAge: 2000000, httpOnly: true, domain: '.sky.yh', sameSite: 'strict',
  });
  res.json({ code: 0, message: '登录成功' });
});

router.get('/name', (req, res) => {
  res.json({ code: 0, message: 'name', data: req.cookies });
});

// 获取用户信息
router.get('/get_user', userController.showUser);

module.exports = router;
