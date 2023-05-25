import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class SamplesController {
  public async index(ctx: HttpContextContract) {
    var list = ctx.session.get("list");
    if (list == undefined) {
      list = [];
      ctx.session.put("list", list);
    }
    const data = {
      title: "Sample",
      message: "メッセージを送信：",
      list: list,
    };
    return ctx.view.render("samples/index", data);
  }

  public async index_posted(ctx: HttpContextContract) {
    const list = ctx.session.get("list");
    const msg = ctx.request.input("msg");
    list.unshift(ctx.request.input("msg"));
    ctx.session.put("list", list);
    const data = {
      title: "Sample",
      message: "「" + msg + "」を送信しました。",
      list: list,
    };
    return ctx.view.render("samples/index", data);
  }
}
