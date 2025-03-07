# Difference Between Node.js and Express.js ?

### Node.js
    - A runtime environment that allows JavaScript to run outside the browser. Provides a platform to execute JavaScript code on the server-side. 
    Includes built-in modules like http, fs, path, etc and Can handle server-side operations such as file system access, networking, and database interactions.

### Express.js
    - A lightweight web framework built on top of Node.js. Simplifies server-side development by providing tools and features for handling routes, requests, and middleware. Helps in setting up routes (GET, POST, etc.). Supports middleware for request handling. Makes handling HTTP requests and responses easier.

# Why Express.JS

    - Because HTTP is hard to use so that's why we use express.js. using express.js makes easier to use and access our code.

# Major Parts in Express.js to learn

    - Routing
    - HTTP Methods (Get, Post, Delete)
    - Middleware
    - Request and Response
    - Route Parameters (Params)
    - Templating Engines
    - Static Files
    - Error Handling

# Routing

    - Routing is the process of defining paths (URLs) that an application should handle and how it responds to requests. Deals with URL patterns and mapping them to handlers.

#### Routing Works based on HTTP Method 

## Example

    const express = require("express");
    const app = express();

    app.get("/users", (req, res) => {
    res.send("Fetching all users");
    });

    app.post("/users", (req, res) => {
    res.send("Creating a new user");
    });

    app.put("/users/:id", (req, res) => {
    res.send(`Updating user with ID ${req.params.id}`);
    });

    app.delete("/users/:id", (req, res) => {
    res.send(`Deleting user with ID ${req.params.id}`);
    });

    app.listen(3000, () => console.log("Server running on port 3000"));

# HTTP Method

    - HTTP methods define the type of operation a request wants to perform (e.g., GET, POST, PUT, DELETE).

#### HTTP methods are independent but used within routes.

## Example

    app.get("/users", (req, res) => {
        res.send("Fetching all users");
    });
    app.post("/users", (req, res) => {
        res.send("Creating a new user");
    });
    app.put("/users/:id", (req, res) => {
        res.send(`Updating user with ID ${req.params.id}`);
    });
    app.delete("/users/:id", (req, res) => {
        res.send(`Deleting user with ID ${req.params.id}`);
    });

# Middleware

    - Middleware in Express.js is a function that runs between the request and response. It can modify the request, response, or end the request cycle.
    
## Example
    const express = require("express")
    const app = express()

    app.use(function(req, res, next){
        console.log("middleware working !!") 
    next()
    })

    app.get ('/', function(req, res){
        res.send('Hello World')
    })

    app.get ('/hello', function(req, res){
        res.send('Hello pranjal')
    })

    app.listen(5000);  

# Request & Response

    - Request mein hamare paas data hota hai jaise ki device location, device info and other things but Response mein controls hote hain jinke basis par ham server se response bhej paate hain

## Next()
    - Next is just a push so that our request can move on to the next thing which should be executed.
    - It is used to call the next middleware function in the stack. If the current middleware function 
    does not call next(), the request will be left hanging. matlab ham jab tak Next call nahi karenge tab tak doosre path par nahi jaa paenge hamara page bas loading par hi atak jaata hai.

# Route Parameters (Params)
    
    - Jab bhi hamein route dynamic karni hoti hai ham " : " ka use karte hain. Isi prakriya ko ham route parameters kehte hain  

## Example

    app.get('/hello/:profile', function(req, res){
        res.send('Hello ' + req.params.profile)
    })
 
    - ab ham jo bhi path likhenge profile ki jagah hamein hello ke baad vahi likha hua show hoga

# Template Engine
    
    - Ye ek markup style hai jo ki baad mein convert ho jaati hai HTML mein. Jiase ki " ejs " vaise hote to bohot saare hain jaise ki pug & jade but ham use ejs karte hain jyda kyuki ye similar to HTML hota hai isliye.
    " Ek tareeke se ham isko HTML hi keh bol sakte hai but some superpowers like ham html ko dynamic nahi bana sakte hain par ejs ko bana sakte hain "
    - isko ham kisi bhi request ke phale ye line (code) " app.set("view engine", "ejs"); " likh ke use kar sakte hain

## Example 

    app.set("view engine", "ejs");

    app.get('/', function(req, res){
        res.render("index")
    })

    app.get('/', function(req, res){
        res.render("index", {name: "Pranjal", age: 20}) // yahan se ham directly values define kar sket hain jisse hamare ejs file mein jahan jahan bhi vo word rahega vahan ye value aa jaegi 
    })

    // ham ejs file jahan bhi ye value use karana chahenge " <%= name %>, <%= age %> " ye likh kar ham use kar skte hain

# Static Files

    -Static files are assets like HTML, CSS, JavaScript, images, videos, and fonts that do not change dynamically and are served directly to the client.
    ham kewal ye likhkar script.js file ya index.js file mein " app.use(express.static("public")); " hamari public folder mein assets use kar skte hain.

## Example

    /script.js

    const express = require("express");
    const app = express();

    app.use(express.static("public")); // Serve static files from "public" folder

    app.listen(3000, () => console.log("Server running on port 3000"));

    /views/index.ejs

    <link rel="stylesheet" href="../stylesheets/index.css"> // ham ye link se css file add kar sakte hain jo bhi css file add karni ho
     
     // aur isi tarah se ham images, stylesheets, and javascripts ki file use kar skte hain 

# Error Handling
    
    - Error handling in Express.js is the process of catching and managing errors in your application to prevent crashes and provide meaningful responses to users.

    we use middleware function to throw the error

    app.use((err, req, res, next) => {
        console.error(err.stack); // Log the error
        res.status(500).send("Something went wrong!");
    });

#### Handling Route Errors with next()

    app.get("/", (req, res, next) => {
    try {
        throw new Error("Oops! Something went wrong.");
    } catch (err) {
        next(err); // Pass the error to the middleware
    }
    });
