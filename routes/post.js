const db = require("../database/connection.js");
const layout = require("../layout.js");

function get(request, response) {
  try {
    //const { id } = request.params;

    const id = parseInt(request.params.id);

    db.query("SELECT * FROM blogpost WHERE id = $1", [id]).then((result) => {
      const postItem = result.rows[0];

      const html = layout(
        "Posts",
        ` <h1>Blog posts</h1>
          <article class="blog-post">
            <header class="blog-header">
              <h1 class="blog-title">${postItem.blogtitle}</h1>
              <h2>User : ${postItem.name}</h2>
            </header>
            
            <p>${postItem.blogpost}</p>          
            <footer class="blog-footer">Time submitted: <time>${postItem.date}</time></footer>      
          </article>
          <a href=/post/${postItem.id}>Delete Post</a>
       `
      );

      response.send(html);
    });
  } catch (err) {
    console.error(err.message);
  }
}

module.exports = { get };
