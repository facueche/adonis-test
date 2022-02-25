import Database from "@ioc:Adonis/Lucid/Database";
import PersonDeleted from "App/Domain/Events/PersonDeleted";

export default class DeletePerson
{
    public static handle = async (event: PersonDeleted) => {
        const person = event.getPerson();

        await Database
            .from('people')
            .where('uuid', person.getUuid())
            .delete();
    }
}
