const express = require('express');
const router = express.Router();

const db = [
  { name: 'taro', mail: 'taro@yamada' },
  { name: 'hanako', mail: 'hanako@flower' },
  { name: 'sachiko', mail: 'sachiko@happy' },
  { name: 'jiro', mail: 'jiro@change' },
];

router.get('/', function (req, res) {
  const data = {
    title: 'Hello',
    message: 'これはsampleで追加されたページです',
    db: db,
  };
  res.render('hello', data);
});

module.exports = router;
