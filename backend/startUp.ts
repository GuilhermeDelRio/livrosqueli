import * as express from 'express';
import * as bodyParser from 'body-parser';

import DataBase from './infra/database';
import BookController from './controller/bookController';
import Auth from './infra/auth';

class StartUp {
  public app: express.Application;
  private _database: DataBase;
  private bodyParser;

  constructor() {
    this.app = express();

    this._database = new DataBase();
    this._database.createConnection();

    this.middler();
    this.routes();
  }

  middler() {
    this.app.use(bodyParser.json());
		this.app.use(bodyParser.urlencoded({ extended: false }))
  }
  
  routes() {
		this.app.route('/').get((req, res) => {
			res.send({ versao: '0.0.1' })
		});

    // Auth
    //this.app.use(Auth.validate);

    // Book
    this.app.route('/api/v1/book/').post(BookController.create);
    this.app.route('/api/v1/book/').get(BookController.get);
    this.app.route('/api/v1/book/:id').get(BookController.getById);
    this.app.route('/api/v1/book/:id').put(BookController.update);
    this.app.route('/api/v1/book/:id').delete(BookController.delete);
	}
}

export default new StartUp();