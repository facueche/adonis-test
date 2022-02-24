import {v4 as uuid} from 'uuid';
import Database from '@ioc:Adonis/Lucid/Database'
import Person from 'App/Domain/Models/Person';
import PersonBuilderService from 'App/Application/PersonBuilderService';

export default class PersonRepository
{
    public generateUuid = (): string => {
        return uuid();
    }

    public fetchAll = async () => {
        const peopleData = await Database
            .from('people')
            .select('*');

        const personBuilderService: PersonBuilderService = new PersonBuilderService();
        const people: Person[] = peopleData.map((personData) => {
            return personBuilderService
                .setUuid(personData.uuid)
                .setName(personData.name)
                .setAge(personData.age)
                .handle();
        })

        return people;
    }
}
