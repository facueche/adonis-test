import Database from '@ioc:Adonis/Lucid/Database';
import PersonRegistered from "App/Domain/Events/PersonRegistered";
import Person from 'App/Domain/Models/Person';

export default class StorePerson
{
    public static handle = async (event: PersonRegistered) => {
        const person: Person = event.getPerson();

        await Database
            .table('people')
            .insert({
                uuid: person.getUuid(),
                name: person.getName(),
                age: person.getAge()
            })
    }
}
