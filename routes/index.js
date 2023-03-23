const express = require('express');

const router = express.Router();
const userController = require('../controllers/user');

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

// 获取用户信息
router.get('/get_user', userController.showUser);

module.exports = router;
