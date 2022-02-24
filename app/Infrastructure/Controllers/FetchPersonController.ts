import PersonRepository from "../Repositories/PersonRepository"

export default class FetchPersonController
{
    public handle = async ({response, params}) => {
        const personRepository: PersonRepository = new PersonRepository();
        const personUuid: string = params.uuid;

        const person = await personRepository.fetchByUuid(personUuid);

        response.json(person);
    }
}
