import express from "express";
import home from "./routes/home.js";
import createPost from "./routes/createPost.js";
import deletePost from "./routes/deletePost.js";
import updatePost from "./routes/updatePost.js";
import post from "./routes/post.js";
import login from "./routes/login.js";
import register from "./routes/register.js";
import path from "path";
//import bodyParser from "body-parser";
import {fileURLToPath} from 'url';

//set up file paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3333;

const server = express();

// bodyparser setup
//server.use(bodyParser.urlencoded({ extended: true }));
//server.use(bodyParser.json());

//Middleware - bodyparser setup updated
const bodyParser = express.urlencoded({ extended: false });
server.use(bodyParser);
server.use(express.json());

// serve static files
const staticHandler = express.static(path.join(__dirname, "public"));
server.use(staticHandler);

// this is for images folder on path images
const staticImages = express.static(path.join(__dirname, "public/images"));
server.use(staticImages);

//display blog posts
server.get("/posts", home);

// get single blog post
server.get("/posts/:id", post);

//delete blog post
server.post("/posts/:id", deletePost);

// create blog post
server.post("/create-post", createPost);

// update single blog post
server.put("/posts-update", updatePost);

server.get("/login", login);

server.get("/register", register);

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
            <a href="/">Home</a>
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
