import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Person from "App/Models/Person";

export default class extends BaseSeeder {
  public async run() {
    await Person.createMany([
      {
        name: "taro",
        email: "taro@yamada",
        age: 39,
      },
      {
        name: "hanako",
        email: "hanako@flower",
        age: 28,
      },
      {
        name: "sachiko",
        email: "sachiko@happy",
        age: 17,
      },
    ]);
  }
}
