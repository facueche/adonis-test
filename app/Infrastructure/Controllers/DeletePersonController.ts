import DeletePersonAction from "App/Application/DeletePersonAction";
import PersonRepository from "../Repositories/PersonRepository";

export default class DeletePersonController
{
    public handle = async ({params, response}) => {
        const personUuid = params.uuid;
        const personRepository: PersonRepository = new PersonRepository();
        const person = await personRepository.fetchByUuid(personUuid);
        const action: DeletePersonAction = new DeletePersonAction();

        action
            .setPerson(person)
            .handle();

        response.json(person);
    }
}
