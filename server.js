const express = require("express");
//const path = require("path");
const posts = require("./posts.js");

const server = express();

// serve static files
const staticHandler = express.static('public');;
server.use(staticHandler);

server.get("/", (request, response) => {
  let postitems = "";
  for (const post of posts) {
    postitems += `<article class="blog-post">
                <header class="blog-header">
                  <h1 class="blog-title">${post.title}</h1>
                  <h2>User : ${post.user}</h2>
                </header>
                
                <p>${post.blogpost}</p>
                <footer class="blog-footer">Time submitted: <time>${post.date}</time></footer>      
              </article>`;
  }
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
      <h1>Say Something Nice!</h1>
        ${postitems}
      </main>
    </body>
  </html>
  `;
  response.send(html);
});

const bodyParser = express.urlencoded({ extended: false });

server.get("/add-post", (request, response) => {
  const html = `
  <!doctype html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>POst!</title>
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
      <h1>Create a Post</h1>
      <form method="POST">
        <label id="username">DUser name</label>
        <input id="username" name="username">

        <label id="blogtitle">Blog Title</label>
        <input id="blogtitle" name="blogtitle">

        <label id="mood">Mood</label>
        <input id="mood" name="moode">

        <label id="blogpost">Blog Post</label>
        <textarea id="blogpost" name="blogpost"></textarea>

        <label id="meeting-time">Time</label>
        <input type="datetime-local" id="meeting-time"
       name="meeting-time" value="2018-06-12T19:30"
       min="2018-06-07T00:00" max="2018-06-14T00:00">

        <button>Search</button>
      </form>
      </main>
    </body>
  </html>
  `;
  response.send(html);
});

server.post("/add-post", bodyParser, (request, response) => {
  const newPost = request.body;
  const username = newPost.username.toLowerCase();
  const blogpost = newPost.blogpost;

  console.log(username, blogpost);
  //posts[username] = newPost;
  //response.redirect("/");
});

const PORT = 3333;
server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));