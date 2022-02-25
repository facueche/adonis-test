import Database from '@ioc:Adonis/Lucid/Database';
import PersonUpdated from "App/Domain/Events/PersonUpdated";

export default class UpdatePerson
{
    public static handle = async (event: PersonUpdated) => {
        const person = event.getPerson();

        await Database
            .from('people')
            .where('uuid', person.getUuid())
            .update({
                name: person.getName(),
                age: person.getAge(),
                updated_at: new Date(),
            })
    }
}
