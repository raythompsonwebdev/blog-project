const db = require("../database/connection.js");
const layout = require("../layout.js");

async function get(request, response) {
  try {
    //const { id } = req.params;

    const id = parseInt(request.params.id);

    const todo = await db.query("SELECT * FROM blogpost WHERE id = $1", [id]);

    const postItem = todo.rows[0];

    const html = layout(
      "Posts",
      ` <h1>Blog posts</h1>
          <article class="blog-post">
          <header class="blog-header">
            <h1 class="blog-title">${postItem.blogtitle}</h1>
            <h2>User : ${postItem.name}</h2>
          </header>
          
          <p>${postItem.blogpost}</p>
          <a href=/delete-post/${postItem.id}>Delete Post</a>
          <footer class="blog-footer">Time submitted: <time>${postItem.date}</time></footer>      
        </article>
      `
    );
    response.send(html);
  } catch (err) {
    console.error(err.message);
  }
}

module.exports = { get };
