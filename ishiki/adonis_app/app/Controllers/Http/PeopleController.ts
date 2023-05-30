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

  public async edit(ctx: HttpContextContract) {
    const id = ctx.request.param("id");
    const person = await Person.find(id);
    const data = {
      title: "Edit",
      message: "Person id=" + id + "の編集",
      person: person,
    };
    return ctx.view.render("people/edit", data);
  }

  public async edit_posted(ctx: HttpContextContract) {
    const id = ctx.request.param("id");
    const person = await Person.find(id);
    await person?.merge(ctx.request.body()).save();
    return ctx.response.redirect("/person");
  }
}
