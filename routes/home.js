const db = require("../database/connection.js");
const layout = require("../layout.js");

const get = (request, response) => {
  try {
    //assign post items to empty string
    let postitems = "";

    db.query("SELECT * FROM blogpost", (error, results) => {
      if (error) {
        throw error;
      } else {
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
                    <a href=/posts/${post.id}>got to post</a>
                    <footer class="blog-footer">Time submitted: <time>${post.date}</time></footer>      
                  </article>`;
        });
        const html = layout(
          "Home",
          `  <h1>Say Something Nice!</h1>
              ${postitems}
          `
        );

        response.send(html);
      }
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { get };
