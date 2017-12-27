import 'reflect-metadata';

import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda';
import { Container } from "inversify";
import {
  Request,
  Response,
  Middleware,
  Controller,
  Router,
  Dynamo,
  Event,
  Route,
  registerProviders as appRegisterProviders
} from 'mindless-framework';
import { routes } from './routes';

export async function start(event: Event, context: Context, callback: Callback) {
  let request = new Request(event);

  let container = new Container();

  appRegisterProviders(container);

  let router = new Router<Middleware, Controller, Route<Middleware, Controller>>(request, container);
  router.route(routes);
  router.dispatchMiddleware();

  let res: Response = await router.dispatchController();

  callback(null, res.toAWSLambdaIntegrationResponse());
}
