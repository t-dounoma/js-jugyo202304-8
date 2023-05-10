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
    message = "名前を入力";
    msg = "";
    return res.view({
      title: "Sample!",
      message: message,
    });
  },
  index_posted: async function (req, res) {
    msg = req.body.msg;
    message = "こんにちは、" + msg + "さん！";
    return res.view({
      title: "Sample!",
      message: message,
      msg: msg,
    });
  },

  /**
   * `SampleController.add()`
   */
  add: async function (req, res) {
    return res.json({
      todo: "add() is not implemented yet!",
    });
  },

  /**
   * `SampleController.edit()`
   */
  edit: async function (req, res) {
    return res.json({
      todo: "edit() is not implemented yet!",
    });
  },

  /**
   * `SampleController.delete()`
   */
  delete: async function (req, res) {
    return res.json({
      todo: "delete() is not implemented yet!",
    });
  },
};
