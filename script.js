const express = require("express")
const app = express()

app.use(function(req, res, next){
    console.log("middleware working !!")
 next()
})

app.use(express.static('./public'))

// app.get ('/', function(req, res){
//     res.send('Hello World')
// })

app.get ('/hello', function(req, res){
    res.send('Hello pranjal')
})

app.get('/hello/:profile', function(req, res){
    res.send('Hello ' + req.params.profile)
})

app.set("view engine", "ejs");

app.get('/', function(req, res){
    res.render("index")
})

app.get("/error", (req, res) => {
    res.render("errorPage", { Error: "Something went wrong!" });
});

app.use(function errorHandler (err, req, res, next) {
    if (res.headersSent) {
      return next(err)
    }
    res.status(500)
    res.render('error', { error: err })
  })



app.listen(5000);


