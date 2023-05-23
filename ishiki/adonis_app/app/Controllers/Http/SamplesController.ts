import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class SamplesController {
  public async index(ctx: HttpContextContract) {
    const data = {
      title: "Sample",
      message: "これは、SampleControllerのindexアクションです。",
    };
    return ctx.view.render("samples/index", data);
  }

  public async index_posted(ctx: HttpContextContract) {
    const data = {
      title: "Sample",
      message: JSON.stringify(ctx.request.body()),
    };
    return ctx.view.render("samples/index", data);
  }
}
