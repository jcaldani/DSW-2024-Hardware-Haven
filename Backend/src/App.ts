/*import express from 'express'

const app = express()

 

app.use('/', (req, res) =>{res.send('Hello!!')}) //res.json

app.listen(3000, ()=>{
    console.log('Server is running on http://localhost:3000/')
})*/

console.clear();
import './config/env.js'
//import connectMongoDB from './config/Mongodb.js';
import  {  httpHarwareHavenServer  } from "./config/http.js"; 
const bootstrap = async ()=>{

//await connectMongoDB(process.env.MONGODB_URL);

const custom_port = Number(process.env.PORT);

httpHarwareHavenServer.listen(custom_port,()=>{
console.log(`Harware Haven Server is listening on port: ${custom_port}`);
});

};
bootstrap();
