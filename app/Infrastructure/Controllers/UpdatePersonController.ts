import UpdatePersonAction from "App/Application/UpdatePersonAction";
import PersonRepository from "../Repositories/PersonRepository"

export default class UpdatePersonController
{
    public handle = async ({request, params, response}) => {
        const data = request.body();
        const personRepository: PersonRepository = new PersonRepository();
        const personUuid: string = params.uuid;
        const person = await personRepository.fetchByUuid(personUuid);
        const action: UpdatePersonAction = new UpdatePersonAction();

        action
            .setPerson(person)
            .setName(data.name)
            .setAge(data.age)
            .handle();

        response.json(person);
    }
}
