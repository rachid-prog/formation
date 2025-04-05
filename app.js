const express= require('express');
const app = express();
const dotenv= require('dotenv')

 dotenv.config();

 app.use(express.json()).use(express.urlencoded({ extended: true}));

 app.use((req, res, next)=>{
    console.log(req.url, (new Date().toISOString()).replace('T', ' ').replace('Z',''))
    next()
 })

 //connexiona la base de donnée 
 
 const mongoose= require('mongoose');
 mongoose.connect(process.env.MONGODB_URI)
 .then(()=> console.log('Connexion réussie à la base de données ☻☻'))
 .catch((err)=> console.log(err));
 



 app.listen(process.env.PORT, ()=> console.log(`En écoute sur http://localhost:${process.env.PORT} ☻`));