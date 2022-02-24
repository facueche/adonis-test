import Person from "App/Domain/Models/Person";

export default class PersonBuilderService
{
    private uuid: string;
    private name: string;
    private age: number;

    public setUuid = (uuid: string): this => {
        this.uuid = uuid;
        return this;
    }

    public setName = (name: string): this => {
        this.name = name;
        return this;
    }

    public setAge = (age: number): this => {
        this.age = age;
        return this;
    }

    public handle = (): Person => {
        return new Person(this.uuid, this.name, this.age);
    }
}
