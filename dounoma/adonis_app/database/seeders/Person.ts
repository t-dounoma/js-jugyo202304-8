import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Person from "App/Models/Parson"

export default class extends BaseSeeder {
  public async run () {
    await Person.createMany([
      {
        name:"taro",
        email:"taro@yamada",
        age:39,
      },
      {
        name:"hanako",
        email:"hanako@yamada",
        age:32,
      },
      {
        name:"sachiko",
        email:"tar32o@y34amada",
        age:17,
      },
    ])
    // Write your database queries inside the run method
  }
}
