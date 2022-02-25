import PersonRepository from "../Repositories/PersonRepository";
import RegisterPersonAction from "App/Application/RegisterPersonAction";

export default class RegisterPersonController
{
    public handle = async ({request, response}) => {
        const data = request.body();
        const personRepository: PersonRepository = new PersonRepository();

        const uuid: string = personRepository.generateUuid();
        const name: string = data.name;
        const age: number = data.age;

        const action: RegisterPersonAction = new RegisterPersonAction();
        const person = action
            .setUuid(uuid)
            .setName(name)
            .setAge(age)
            .handle();

        response
            .status(201)
            .send(person);
    }
}
