const db = require("../database/connection.js");
const layout = require("../layout.js");

function get(request, response) {
  try {
    // convert string to number
    const id = parseInt(request.params.id);

    db.query("SELECT * FROM blogpost WHERE id = $1", [id]).then((result) => {
      const postItem = result.rows[0];

      const html = layout(
        "Posts",
        `<div class="col-md-6 mx-auto"> 
        <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-primary">${postItem.name}</strong>
          <h3 class="mb-0">${postItem.blogtitle}</h3>
          <div class="mb-1 text-muted">${postItem.date}</div>
          <p class="card-text mb-auto">${postItem.blogpost}</p>
          <form id="delete" method="post" action=/posts/${postItem.id}">
              <button>Search</button>
          </form>          
        </div>
        <div class="col-auto d-none d-lg-block">
          <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>            
        </div>
      </div>
      </div>
       `
      );

      response.send(html);
    });
  } catch (err) {
    console.error(err.message);
  }
}

module.exports = { get };
