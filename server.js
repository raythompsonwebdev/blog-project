const express = require("express");
const home = require("./routes/home.js");
const createPost = require("./routes/createPost.js");
const deletePost = require("./routes/deletePost.js");
const posts = require("./routes/posts.js");
const post = require("./routes/post.js");
//const { append } = require("express/lib/response");
//const db = require("./database/connection.js");
//const posts = require("./posts.js");
const server = express();

//Middleware
server.use(express.json());

const bodyParser = express.urlencoded({ extended: false });
server.use(bodyParser);

const PORT = process.env.PORT || 3333;

// serve static files
const staticHandler = express.static("public");
server.use(staticHandler);

//display blog posts
server.get("/", home.get);

//get all blogs
server.get("/posts", posts.get);

// get single blog post
server.get("/post/:id", post.get);

//delete blog post
server.post("/post/:id", deletePost.post);

// display add blog post form
server.get("/add-post/", createPost.get);

// create blog post
server.post("/add-post/", createPost.post);

//error handling
server.use((request, response) => {
  const html = `
  <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Say Something Nice!</title>
        <link href="css/style.css" type="text/css" rel="stylesheet"> 
      </head>
      <body>
      <nav>
        <ul>
        <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/add-post">add post</a>
          </li>
          
        </ul>
      </nav>
      <main>
      <h1>Not found</h1>
        
        </main>
      </body>
    </html>
  `;
  response.status(404).send(html);
});

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
