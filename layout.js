function layout(title, content) {
  return /*html*/ `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>${title}</title>
      <link href="/css/style.css" type="text/css" rel="stylesheet">   
    </head>
    <nav>
      <ul>
        <li>
          <a href="/posts">Home</a>
        </li>
        <li>
          <a href="/posts-add">add post</a>
        </li>        
      </ul>
    </nav>        
    <body>
      <main>
        ${content}
      </main>
    </body>
    </html> `;
}

module.exports = layout;
