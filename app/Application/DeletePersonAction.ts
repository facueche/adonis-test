import Person from "App/Domain/Models/Person";

export default class DeletePersonAction
{
    private person: Person;

    public setPerson = (person: Person): this => {
        this.person = person;
        return this;
    }

    public handle = () => {
        this.person.delete();
    }
}
