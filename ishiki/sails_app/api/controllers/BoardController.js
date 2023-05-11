/**
 * BoardController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  index: async function (req, res) {
    var data = await Board.find();
    return res.view({
      title: "Sample!",
      msg: "Boardモデルを利用します。",
      data: data,
    });
  },
};
