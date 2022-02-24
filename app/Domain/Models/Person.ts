import * as PersonRegistered from "App/Domain/Events/PersonRegistered";
import Event from '@ioc:Adonis/Core/Event'

export default class Person
{
    private uuid: string;
    private name: string;
    private age: number;

    public constructor(uuid: string, name: string, age: number)
    {
        this.uuid = uuid;
        this.name = name;
        this.age = age;
    }

    public static register = (uuid: string, name: string, age: number): Person => {
        let person = new Person(uuid, name, age);
        Event.emit(PersonRegistered.eventName, new PersonRegistered.default(person)); // TODO: create en event manager on infrastructure layer
        return person;
    }

    public getUuid = (): string => {
        return this.uuid;
    }

    public getName = (): string => {
        return this.name;
    }

    public getAge = (): number => {
        return this.age;
    }
}
