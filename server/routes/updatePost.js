const db = require("../database/connection.js");
const layout = require("../layout.js");

function get(request, response) {
  const html = layout(
    "Update Post",
    `  
      <h1>Update a Post</h1>
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
  const { id, name, blogtitle, blogpost, mood, date } = request.body;
  db.query(
    ` 
      UPDATE blogpost 
      SET name = $2, 
      SET blogtitle = $3, 
      SET blogpost = $4, 
      SET mood = $5, 
      SET date = $6
      WHERE id = $1
    `,
    [id, name, blogtitle, blogpost, mood, date]
  ).then((data) => {
    console.log(data);
  });

  response.redirect("/posts");
}

module.exports = { get, post };
