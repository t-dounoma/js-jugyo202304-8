/**
 * SampleController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {


  /**
   * `SampleController.index()`
   */
  index: async function (req, res) {
    if (req.param('id')){
      message = "あなたのIDは、" + req.param('id') + "です。"
    }else{
      message = "名前を入力"
    }
    if (req.query.name){
      message += "(あなたの名前は、" + req.query.name + "ですね？）"
    }
    if (req.method == "POST"){
      message = "こんにちは" + req.body.msg + "さん"
    }
    return res.view({
      title:"Sample!",
      message:message
    })
  },

  index_posted: async function (req, res) {
    const msg = req.body.msg
    const message = "こんにちは" + req.body.msg + "さん"
    return res.view({
      title: "sample",
      message: message,
      msg: msg
    });
  },



  /**
   * `SampleController.add()`
   */
  add: async function (req, res) {
    return res.json({
      todo: 'add() is not implemented yet!'
    });
  },

  /**
   * `SampleController.edit()`
   */
  edit: async function (req, res) {
    return res.json({
      todo: 'edit() is not implemented yet!'
    });
  },

  /**
   * `SampleController.delete()`
   */
  delete: async function (req, res) {
    return res.json({
      todo: 'delete() is not implemented yet!'
    });
  }

};

