import { Controller, Response, Request } from "mindless-framework";
import { injectable } from "inversify";

@injectable()
export class ExampleController1 extends Controller {

    public async get(param1: string, param2: string): Promise<Response> {
        let result = Number(param1) + Number(param2);

        return new Response(200, { result });
    }

    public async post(request: Request): Promise<Response> {
        let bodyProperty1 = request.get('test1');
        let bodyProperty2 = request.get('test2');

        let result = bodyProperty1 + bodyProperty2;

        return new Response(200, { result });
    }
}