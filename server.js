const express = require("express");
//const path = require("path");
const db = require("./database/connection.js");
//const posts = require("./posts.js");
const server = express();

const bodyParser = express.urlencoded({ extended: false });

// serve static files
const staticHandler = express.static("public");
server.use(staticHandler);

server.get("/", (request, response) => {
  //assign post items to empty string
  let postitems = "";

  db.query("SELECT * FROM blogpost", (error, results) => {
    if (error) {
      throw error;
    }
    //console.log(results.rows);
    const posts = results.rows;
    // loop over array of post object key and value entries ;
    posts.map((post) => {
      // add postItem values to post
      postitems += `<article class="blog-post">
                  <header class="blog-header">
                    <h1 class="blog-title">${post.blogtitle}</h1>
                    <h2>User : ${post.name}</h2>
                  </header>
                  
                  <p>${post.blogpost}</p>
                  <footer class="blog-footer">Time submitted: <time>${post.date}</time></footer>      
                </article>`;
    });
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
});

server.get("/add-post", (request, response) => {
  const html = `
  <!doctype html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Add a Post!</title>
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
      <h1>Create a Post</h1>
      <form id="add-blog" method="POST">
        <label for="name">User name</label>
        <input id="name" name="name">

        <label for="blogtitle">Blog Title</label>
        <input id="blogtitle" name="blogtitle">

        <label for="mood">Mood</label>
        <input id="mood" name="moode">

        <label for="blogpost">Blog Post</label>
        <textarea id="blogpost" name="blogpost" rows="10"></textarea>

        <button>Search</button>
      </form>
      </main>
    </body>
  </html>
  `;
  response.send(html);
});

server.post("/add-post", bodyParser, (request, response) => {
  const { name, blogtitle, blogpost, mood } = request.body;
  db.query(
    `INSERT INTO blogpost(name, blogtitle, blogpost, mood) VALUES ($1, $2, $3, $4)`,
    [name, blogtitle, blogpost, mood]
  ).then((data) => {
    console.log(data);
  });
  //const name = newPost.name.toLowerCase();
  //posts[name] = newPost;
  response.redirect("/");
});

//error handling
server.use((request, response) => {
  response.status(404).send("<h1>Not found</h1>");
});

const PORT = 3333;
server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
