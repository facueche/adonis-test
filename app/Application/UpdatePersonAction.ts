import Person from "App/Domain/Models/Person";

export default class UpdatePersonAction
{
    private person: Person;
    private name: string;
    private age: number;

    public setPerson = (person: Person): this => {
        this.person = person;
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

    public handle = () => {
        this.person.update(this.name, this.age);
    }
}
