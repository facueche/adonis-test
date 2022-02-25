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
| import './routes/customer'
|
*/

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import FetchPeopleController from 'App/Infrastructure/Controllers/FetchPeopleController';
import FetchPersonController from 'App/Infrastructure/Controllers/FetchPersonController';
import RegisterPersonController from 'App/Infrastructure/Controllers/RegisterPersonController'
import Route from '@ioc:Adonis/Core/Route'
import UpdatePersonController from 'App/Infrastructure/Controllers/UpdatePersonController';

Route.post('person', async (ctx: HttpContextContract) => {
  return new RegisterPersonController().handle(ctx);
})
Route.get('person', async (ctx: HttpContextContract) => {
  return new FetchPeopleController().handle(ctx);
})
Route.get('person/:uuid', async (ctx: HttpContextContract) => {
  return new FetchPersonController().handle(ctx);
})
Route.put('person/:uuid', async (ctx: HttpContextContract) => {
  return new UpdatePersonController().handle(ctx);
})
