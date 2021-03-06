import  express from  'express';
import  config  from  './config.js';

const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req,res)=>{
    res.render('index', {engine:'EJS'} );
});





app.listen(config.port, ()=>{
    console.info(`running on ${config.port}`);
});