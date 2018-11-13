import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';;
import routes from './src/routes/restRoute'

const app =express();

const PORT=3000

//mongoose connection
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost/restDB', { useNewUrlParser: true });

//body -parser
app.use(bodyParser.urlencoded({extended:true}));

routes(app)

//This is for serving static files
app.use(express.static('public'));

app.get('/',(req,res)=>
    res.send(`Server is running on the Port : ${PORT}`)
);

app.listen(PORT , ()=>
console.log(`Your server is running on the port no : ${PORT}`)
);