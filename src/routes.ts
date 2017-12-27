// Mindless imports
import { MindlessRoute, RouteUrl, HttpMethods } from 'mindless-framework';

// App imports
import { ExampleController1 } from './controllers/example';


export const routes: MindlessRoute[] = [
    {
        url: new RouteUrl('/param1/:param1/param2/:param2'),
        method: HttpMethods.GET,
        controller: ExampleController1,
        middleware: [],
        function: "get"
    },
    {
        url: new RouteUrl('/'),
        method: HttpMethods.POST,
        controller: ExampleController1,
        middleware: [],
        function: "post"
    }
];