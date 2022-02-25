import Person from "../Models/Person";

export default class PersonUpdated
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

export const eventName = 'person.updated';
