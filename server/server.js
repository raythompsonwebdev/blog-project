import "dotenv/config";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import home from "./routes/home.js";
import createPost from "./routes/createPost.js";
import deletePost from "./routes/deletePost.js";
import updatePost from "./routes/updatePost.js";
import post from "./routes/post.js";
import logoutUser from "./routes/logoutUser.js";
import loginUser from "./routes/loginUser.js";
import registerUser from "./routes/registerUser.js";
import userProfile from "./routes/userProfile.js";
import { notFound } from "./middleware/errorMiddleware.js";
import path from "path";
import { fileURLToPath } from "url";
import rateLimit from "express-rate-limit";
//set up file paths for static files - updated
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 8000;

//express server
const server = express();

// set express trust proxy to 1 , default is false.
server.set("trust proxy", 1);

// cookie parser
server.use(cookieParser(process.env.COOKIE_SECRET));

// Cross Origin Resource Sharing
const whitelist = [process.env.URL, "http://localhost:3000"];
//cors options
const corsOptions = {
  origin: whitelist,
  methods: ["GET", "POST"],
  credentials: true,
};
server.use(cors(corsOptions));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

// Apply the rate limiting middleware to all requests
server.use(limiter);

//Middleware - bodyparser setup updated
// for parsing application/xwww-form-urlencoded
server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.json());

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

// user profile route
server.get("/user", userProfile);

//error handling
server.use(notFound);

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
