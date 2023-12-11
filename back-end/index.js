

const express = require('express')
const cors = require('cors')
const routes=require('./routes/route')
const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(cors());

const users = require('./routes/route')
const path= require ('path')
const db= require('./models/model')
const { user } = require('./controllers/userController')


app.use('/static', express.static(path.join(__dirname, 'public')));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

(async () => {
    await db.sequelize.sync(); 
})(); 

app.use((req, res, next) => {
    console.log(new Date().toLocaleDateString());
    next();
})


app.get('/', [
    (req, res, next) => {
        res.send('This is the home page!')
    }
]);

app.use(function(request, response, next) {
    console.log('This is global middleware!');
    next();
});
// 
(async () => {
    await db.sequelize.sync(); 
    connectToDatabase();
  })(); 
  
  function connectToDatabase() {
    db.sequelize
      .authenticate()
      .then(() => {
        console.log('Connection has been established successfully.');
      })
      .catch((error) => {
        console.error('Unable to connect to the database:', error);
      });
  }

const PORT= 3000
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})




