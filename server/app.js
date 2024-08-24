import express from "express";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
// import { createWriteStream } from "fs";
import morgan from "morgan";
// import session from "./session/index.js";
// import compression from "compression";
// import home from "./routes/home/index.js";
// import admin from "./routes/admin/index.js";
import api from "./routes/api/index.js";
import connectToDb from "./db/index.js";
// import helmet from "helmet";
import cors from "cors";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 8000;

// app.use(
//   helmet({
//     contentSecurityPolicy: {
//       directives: {
//         defaultSrc: ["'self'"],
//         scriptSrc: ["'self'", "'nonce-ps0QMWhuej5oqzobisuQnA=='"],
//         objectSrc: ["'self'"],
//         // Add other directives as needed
//       },
//     },
//   })
// );
const logFile = join(__dirname, "the-gram.log");

// app.use(compression());
app.use("/assets", express.static(join(__dirname, "public")));
app.use(express.static(join(__dirname, "public", "client")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173", // Allow requests from localhost:5173 (or whatever port your frontend is on)
    methods: ["GET", "POST", "PUT", "DELETE"], // Allow specific HTTP methods
    credentials: true, // If you need to send cookies
  })
);
// app.use("/admin", session(app));
// app.use(
//   "/admin",
//   session({
//     name: "sessId",
//     secret: process.env.sessionSecret,
//     resave: false,
//     saveUninitialized: true,
//     cookie: {
//       secure: app.get("env") === "production" ? true : false,
//       httpOnly: true,
//       maxAge: 18000000, // 5 hours
//     },
//   })
// );
app.use(morgan(":method - :url - :date - :response-time ms"));
// app.use(
//   morgan(":method - :url - :date - :response-time ms", {
//     stream: createWriteStream(logFile, { flags: "a" }),
//   })
// );

// app.set("view engine", "pug");

// app.use("/admin", admin);
app.use("/api", api);
// app.use("/", home);

Promise.all([connectToDb()])
  .then(() =>
    app.listen(PORT, () =>
      console.log(`My App(The-Gram) is cooking on port ${PORT}!`)
    )
  )
  .catch((error) => {
    console.error(`MongoDB Atlas Error: ${error}`);
    process.exit();
  });

// Promise.all([connectToDb()])
//   .then(() =>
//     app.listen(8000, () =>
//       console.log(`My App(The-Gram) is cooking on port 8000!`)
//     )
//   )
//   .catch((error) => {
//     console.error(`MongoDB Atlas Error: ${error}`);
//     process.exit();
//   });
