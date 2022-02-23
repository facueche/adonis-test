import {v4 as uuid} from 'uuid';

export default class PersonRepository
{
    public generateUuid = (): string => {
        return uuid();
    }
}
