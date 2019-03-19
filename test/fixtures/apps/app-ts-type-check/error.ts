import {
  BaseContextClass,
  Context,
  Application,
  Agent,
  Controller,
  Service,
} from 'egg';

new BaseContextClass({} as Context).ctx;

class MyController extends Controller {
  async test() {
    this.ctx.locals.test.checkAny();
    this.app.config.keys.checkAny();
    this.app.checkAny();
  }
}
new MyController();

// service
class MyService extends Service {
  async test() {
    this.ctx.locals.test.checkAny();
    this.app.config.keys.checkAny();
    this.app.checkAny();
  }
}
new MyService();

const app = new Application({ baseDir: __dirname, plugins: {}, type: 'application' });
new app.ContextHttpClient();
new app.HttpClient();

new Agent(undefined, 1123);

// test error in yadan
import {
  BaseContextClass as YadanBaseContextClass,
  Application as YadanApplication,
  Agent as YadanAgent,
} from 'yadan';

new YadanBaseContextClass();
const yadan = new YadanApplication({ baseDir: __dirname, plugins: {}, type: 'application' });
new yadan.ContextHttpClient();
new yadan.HttpClient();
new YadanAgent(undefined, 1123);
