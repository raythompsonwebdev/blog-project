const db = require("../database/connection.js");
const layout = require("../layout.js");

function get(request, response) {
  const html = layout(
    "Create Post",
    `  
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
  
  `
  );
  response.send(html);
}

function post(request, response) {
  const { name, blogtitle, blogpost, mood, date } = request.body;
  db.query(
    `INSERT INTO blogpost(name, blogtitle, blogpost, mood , date) VALUES ($1, $2, $3, $4, $5)`,
    [name, blogtitle, blogpost, mood, date]
  ).then((data) => {
    console.log(data);
  });

  response.redirect("/posts");
}

module.exports = { get, post };
