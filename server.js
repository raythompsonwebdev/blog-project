const express = require("express");
const home = require("./routes/home.js");
const createPost = require("./routes/createPost.js");
const deletePost = require("./routes/deletePost.js");
const post = require("./routes/post.js");
const path = require("path");
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
const staticHandler = express.static(path.join(__dirname, "public"));
server.use(staticHandler);

//display blog posts
server.get("/posts", home.get);

// get single blog post
server.get("/posts/:id", post.get);

//delete blog post
server.delete("/posts/:id", deletePost.post);

// display add blog post form
server.get("/posts-add", createPost.get);
// create blog post
server.post("/posts-add", createPost.post);

//error handling
server.use((request, response) => {
  const html = `
  <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Say Something Nice!</title>
        <link href="public/css/style.css" type="text/css" rel="stylesheet"> 
      </head>
      <body>
      <nav>
        <ul>
        <li>
            <a href="/posts">Home</a>
          </li>
          <li>
            <a href="/posts-add">add post</a>
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
