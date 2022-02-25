import Person from "App/Domain/Models/Person";

export default class PersonDeleted
{
    private person: Person;

    public constructor(person: Person)
    {
        this.person = person;
    }

    public getPerson = (): Person => {
        return this.person;
    }
}

export const eventName = 'person.deleted';
