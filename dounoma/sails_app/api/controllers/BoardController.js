module.exports = {
  index: async function (req, res) {
    var data = await Board.find();
    return res.view({
      title: "sample",
      msg: "Boardモデルを利用します",
      data: data
    });
  },
  index_posted: async function (req, res) {
    await Board.create(req.body);
    return res.redirect("/board");
  },
  edit: async function (req, res) {
    const id = parseInt(req.param("id"));
    var data = await Board.findOne({id: id});
    return res.view({
      title: "sample",
      msg: "boardモデルを更新します",
      data: data
    });
  },
  edit_posted: async function (req, res) {
    const id = parseInt(req.param("id"));
    await Board.updateOne({id: id}).set(req.body);
    return res.redirect("/board");
  },

  delete: async function (req, res) {
    const id = parseInt(req.param("id"));
    var data = await Board.findOne({id: id});
    return res.view({
      title: "sample",
      msg: "boardモデルを削除します",
      data: data
    });
  },
  delete_posted: async function (req, res) {
    const id = parseInt(req.param("id"));
    await Board.destroyOne({id: id});
    return res.redirect("/board");
  },
}
