import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Person from "App/Models/Person";

export default class PeopleController {
  public async index(ctx: HttpContextContract) {
    const people = await Person.all();
    const data = {
      title: "Sample",
      message: "Lucid",
      data: people,
    };
    return ctx.view.render("people/index", data);
  }

  public async add(ctx: HttpContextContract) {
    const data = {
      title: "Add",
      message: "Personの新規作成:",
    };
    return ctx.view.render("people/add", data);
  }

  public async add_posted(ctx: HttpContextContract) {
    await Person.create(ctx.request.body());
    return ctx.response.redirect("/person");
  }
}
