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
import * as PersonRegistered from 'App/Domain/Events/PersonRegistered'
import StorePerson from 'App/Infrastructure/Listeners/StorePerson'

Event.on(PersonRegistered.eventName, StorePerson.handle);
