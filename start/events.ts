/*
|--------------------------------------------------------------------------
| Preloaded File
|--------------------------------------------------------------------------
|
| Any code written inside this file will be executed during the application
| boot.
|
*/
import Event from '@ioc:Adonis/Core/Event'
import * as PersonDeleted from 'App/Domain/Events/PersonDeleted';
import * as PersonRegistered from 'App/Domain/Events/PersonRegistered'
import * as PersonUpdated from 'App/Domain/Events/PersonUpdated';
import DeletePerson from 'App/Infrastructure/Listeners/DeletePerson';
import StorePerson from 'App/Infrastructure/Listeners/StorePerson'
import UpdatePerson from 'App/Infrastructure/Listeners/UpdatePerson';

Event.on(PersonRegistered.eventName, StorePerson.handle);
Event.on(PersonUpdated.eventName, UpdatePerson.handle);
Event.on(PersonDeleted.eventName, DeletePerson.handle);
