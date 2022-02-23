export default class RegisterPersonController
{
    public handle = async (request) => {
        let data = request.body();

        let name: string = data.name;
        let age: number = data.age;
    }
}
