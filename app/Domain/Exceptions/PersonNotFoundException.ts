import { Exception } from '@adonisjs/core/build/standalone'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PersonNotFoundException extends Exception
{
    public constructor()
    {
        super('Person not found');
    }

    public handle(error: this, ctx: HttpContextContract)
    {
        return ctx.response.status(404).json({ error: this.message });
    }
}
