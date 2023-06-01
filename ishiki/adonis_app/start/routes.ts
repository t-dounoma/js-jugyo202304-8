/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from "@ioc:Adonis/Core/Route";

Route.get("/", async ({ view }) => {
  const data = {
    title: "AdonisJS Sample",
    message: "これはサンプルで用意したページです。",
  };
  return view.render("welcome", data);
});

Route.get("/sample/:id/:pass", "SamplesController.index");
Route.post("/sample", "SamplesController.index_posted");
Route.get("/person", "PeopleController.index");
Route.get("/person/add", "PeopleController.add");
Route.post("/person/add", "PeopleController.add_posted");
Route.any("/person/find", "PeopleController.find");
Route.get("/person/edit/:id", "PeopleController.edit");
Route.post("/person/edit/:id", "PeopleController.edit_posted");
Route.get("/person/del/:id", "PeopleController.delete");
Route.post("/person/del/:id", "PeopleController.delete_posted");
