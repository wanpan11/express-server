const express = require('express');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.json({ code: 0, message: 'users', data: req.cookies });
});

module.exports = router;
