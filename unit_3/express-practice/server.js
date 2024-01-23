const express = require('express');
// fs means filesystem

const fs = require('fs')

const app = express();

app.engine('madeline', (filePath, options, callback) =>{
    fs.readFile(filePath, (err, content) =>{
    if(err) return callback(err)

    const rendered = content.toString()
    .replace('#title#', '<title>' + options.tile + '</title>')
    .replace('#message#', '<h1>' + options.message + '</h1>').replace('#content#','<div>'+ options.content + '</div>' )
    return callback(null, rendered)
    })
})

app.set('views', './views') // specify the views directory
app.set('view engine', 'madeline') // register the hypatia view engine

// app.get('/', function(req,res){
//     res.send("<h1>Hello Express</h1>");
// });

app.get('/', (req,res) => {
    res.render('template', {title: 'Hey', message: 'Hello there!', content: 'I am the Boss Ricky Ross' })
})

app.get('/about-me', (req, res) => {
    res.render('template', { title: 'Hey', message: 'Rick Ross!', content: 'The most underated Rapper in the game' })
  })
  
  app.get('/another-one', (req, res) => {
    res.render('template', { title: 'We The Best', message: 'Who!', content: 'We Taking Over, Major Key Alert, Yall know who it is, All I do is win' })
  })

app.listen(3000, function(){
    console.log('listening on port 3000')
})

