import * as PersonRegistered from "App/Domain/Events/PersonRegistered";
import * as PersonUpdated from "App/Domain/Events/PersonUpdated";
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
        const person = new Person(uuid, name, age);

        Event.emit(PersonRegistered.eventName, new PersonRegistered.default(person)); // TODO: create en event manager on infrastructure layer

        return person;
    }

    public update = (name: string, age: number): Person => {
        this.name = name;
        this.age = age;

        Event.emit(PersonUpdated.eventName, new PersonUpdated.default(this)); // TODO: create en event manager on infrastructure layer

        return this;
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
