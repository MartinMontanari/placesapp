import express, {Application} from 'express';
import bodyParser from 'body-parser';
import morgan  from 'morgan';

//Routes
import IndexRoutes from '../presentation/http/routes/index.routes';
import PlacesRoutes from '../presentation/http/routes/places.routes';

export class App {

    private app: Application;

    constructor(private port?: number | string) {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    private settings(){
        this.app.set('port', this.port || process.env.PORT || 3000 );
    }

    private middlewares() {
        this.app.use(morgan('dev'));
        this.app.use(bodyParser.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    private routes(){
        this.app.use(IndexRoutes);
        this.app.use('/places',PlacesRoutes);
    }

    async listen() {
        await this.app.listen(this.app.get('port'));
        console.log('Server on port ', this.app.get('port'));
    }

}
