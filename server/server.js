import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import home from "./routes/home.js";
import createPost from "./routes/createPost.js";
import deletePost from "./routes/deletePost.js";
import updatePost from "./routes/updatePost.js";
import post from "./routes/post.js";
import logoutUser from "./routes/logoutUser.js";
import loginUser from "./routes/loginUser.js";
import registerUser from "./routes/registerUser.js";
import path from "path";
import { fileURLToPath } from "url";
import rateLimit from "express-rate-limit";
//set up file paths for static files - updated
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 8000;

//express server
const server = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

// Apply the rate limiting middleware to all requests
server.use(limiter);

//cors options
const corsOptions = { credentials: false, origin: PORT || "*" };
server.use(cors(corsOptions));

// cookie parser
server.use(cookieParser(process.env.COOKIE_SECRET));

//Middleware - bodyparser setup updated
const bodyParser = express.urlencoded({ extended: false });
server.use(bodyParser);
server.use(express.json());
// bodyparser old setup
//server.use(bodyParser.urlencoded({ extended: true }));
//server.use(bodyParser.json());

// serve static files
const staticHandler = express.static(path.join(__dirname, "public"));
server.use(staticHandler);

// this is for images folder on path images
const staticImages = express.static(path.join(__dirname, "public/images"));
server.use(staticImages);

//display blog posts
server.get("/posts", home);

// get single blog post
server.get("/posts/:id", post);

//delete blog post
server.post("/posts/:id", deletePost);

// create blog post
server.post("/create_post", createPost);

// update single blog post
server.put("/update_post", updatePost);

// register user route
server.post("/register_user", registerUser);

// login login route
server.post("/login", loginUser);

// login logout route
server.post("/logout", logoutUser);

// // get users route
// server.get("/users", registerUser.get);

//error handling
server.use((request, response) => {
  const html = `
  <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Say Something Nice!</title>
        <link href="public/css/style.css" type="text/css" rel="stylesheet"> 
      </head>
      <body>
      <nav>
        <ul>
        <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/posts-add">add post</a>
          </li>
          
        </ul>
      </nav>
      <main>
      <h1>Not found</h1>
        
        </main>
      </body>
    </html>
  `;
  response.status(404).send(html);
});

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
