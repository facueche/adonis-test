import PersonRepository from "../Repositories/PersonRepository"

export default class FetchPeopleController
{
    public handle = async ({response}) => {
        const personRepository: PersonRepository = new PersonRepository();
        const people = await personRepository.fetchAll();

        response.send(people);
    }
}
