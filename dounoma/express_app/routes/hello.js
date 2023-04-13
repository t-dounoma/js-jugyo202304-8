const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  const data = {
    title: "Hello",
    message: "これはsampleで追加されたページです"
  };
  res.render('hello',  {data} );
});

module.exports = router;
