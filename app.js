const express = require('express')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize');
const port = 3000
const app = express()
const session = require('express-session')

app.use(session({
    secret: 'oh wow',
    resave: true, //restart server= restart cookies
    saveUninitialized: false // ?
}))

app.use(express.json()) //session

const sequelize = new Sequelize('postgres', process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD, {
  host: 'localhost',
  dialect: 'postgres'
})

app.set('view engine', 'ejs') // includes the .ejs file in the 'views' folder. 
app.use(express.static(__dirname + '/views')); //include css
app.use(bodyParser.urlencoded({ extended: false }))

const result = Sequelize.define('result', {
    moodScore: Sequelize.INTEGER,
})

const movie = sequelize.define('movie', {
    imdbScore: Sequelize.INTEGER
})

result.hasMany(movie)
//results has many movies = will add result.id as a column in the movie table.  
//if result.moodScore is matching with movie.imdbScore => show random movie from imdb list 

//--- MOVIE TABLE---//
//if jon assign values to all the movies - value will be added to table 'movie', column: imdbScore with the value 0-2

//----RESULT TABLE---//
//result.id will be based on session? = each session gets a value assigned based on the score they get from the 'form' + weather API

app.get('/movie', function(req, res){
    movie.findAll({where: {resultId: movie.imdbScore}, raw:true}).then( (movie => {
       res.render('movie', {
           movie: movie
        })
}))
})

//---PROBLEM CHECK WITH LINDSEY ---//
// result id is not the value of the moodscore, how to link 

//--- git ---//
//when jonathan have pushed his changes into master. first commit in your branch. go to branch master, git pull, to get jons new files. then switch to your branch - git merge master, to merge the changes  



