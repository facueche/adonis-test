import RegisterPersonAction from "App/Application/RegisterPersonAction";
import PersonRepository from "../Repositories/PersonRepository";

export default class RegisterPersonController
{
    public handle = async (request) => {
        const data = request.body();
        const personRepository: PersonRepository = new PersonRepository();

        const uuid: string = personRepository.generateUuid();
        const name: string = data.name;
        const age: number = data.age;

        const action: RegisterPersonAction = new RegisterPersonAction();
        action
            .setUuid(uuid)
            .setName(name)
            .setAge(age)
            .handle();
    }
}
