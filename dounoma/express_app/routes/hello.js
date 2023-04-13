const express = require('express');
const router = express.Router();

const db = [
  {name:"taro",mail:"taro@yamada"},
  {name:"hanako",mail:"hanako@flower"},
  {name:"sachiko",mail:"sachiko@happy"}
]
  router.get('/',function (req,res,nect){
    const data = {
      title:"hello",
      message:"データを表示します",
      db:db
    }
  res.render('hello',  {data} );
});

module.exports = router;
