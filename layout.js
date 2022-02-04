function layout(title, content) {
  return /*html*/ `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>${title}</title>
      
      <link href="/css/style.css" type="text/css" rel="stylesheet"> 
      <link href="/css/bootstrap.css" type="text/css" rel="stylesheet">   
    </head>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark" aria-label="Fourth navbar example">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Blog</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarsExample04">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/posts">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/posts-add">Add Post</a>
          </li>
          <li class="nav-item">
            <a class="nav-link href="">Disabled</a>
          </li>
          
        </ul>
        <form>
          <input class="form-control" type="text" placeholder="Search" aria-label="Search">
        </form>
      </div>
    </div>
  </nav>          
    <body>
      <main>
        ${content}
      </main>
    </body>
    </html> `;
}

module.exports = layout;
