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
          postitems += `
          <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static">
              <strong class="d-inline-block mb-2 text-primary">${post.name}</strong>
              <h3 class="mb-0">${post.blogtitle}</h3>
              <div class="mb-1 text-muted">${post.date}</div>
              <p class="card-text mb-auto">${post.blogpost}</p>
              <a href="/posts/${post.id}" class="stretched-link">Continue reading</a>
            </div>
            <div class="col-auto d-none d-lg-block">
              <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>            
            </div>
          </div>
          `;
        });
        const html = layout(
          "Home",
          `  <h1>Say Something Nice!</h1>
          <div class="col-md-6 mx-auto">
              ${postitems}
              </div>
          `
        );

        // set cookie
        response.cookie("hello", "this is my cookie", {
          httpOnly: true,
          maxAge: 1000 * 60, // 60,000ms (60s)
          sameSite: "lax",
        });

        response.send(html);
      }
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { get };
