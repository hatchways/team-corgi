const colors = require("colors");
const path = require("path");
const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const { notFound, errorHandler } = require("./middleware/error");
const connectDB = require("./db");
const { join } = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
const profilePhoto = require("./routes/profilePhoto");
const notificationRouter = require("./routes/notifications");
const profileRouter = require("./routes/profile");
const protect = require("./middleware/auth");
const conversationRouter = require("./routes/conversations");
const requestRouter = require("./routes/requests");

const { json, urlencoded } = express;
let users = [];
connectDB();
const app = express();
const server = http.createServer(app);

const io = socketio(server, {
    cors: {
        origin: "*",
    },
});


io.use((socket, next) => {
    protect;
    next();
})
io.on("connection", (socket) => {
  console.log("user connected");
    socket.on('login', ({ user }) => {
        users.push(user);
        console.log(users)
    });
    socket.on('logout', ({ user }) => {
        users = users.filter((u) => u.id !== user.id);
        console.log(users);
    })

    socket.on('disconnect', () => { console.log('Total Users', users.length) })
});

if (process.env.NODE_ENV === "development") {
    app.use(logger("dev"));
}
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, "public")));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use((req, res, next) => {
    req.io = io;
    next();
});
app.use(cors());

app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/api/pic", profilePhoto);
app.use("/notifications", notificationRouter);
app.use("/profile", profileRouter);
app.use("/conversations", conversationRouter);
app.use("/request", requestRouter);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/client/build")));

    app.get("*", (req, res) =>
        res.sendFile(path.resolve(__dirname), "client", "build", "index.html")
    );
} else {
    app.get("/", (req, res) => {
        res.send("API is running");
    });
}

app.use(notFound);
app.use(errorHandler);

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
    console.log(`Error: ${err.message}`.red);
    // Close server & exit process
    server.close(() => process.exit(1));
});

module.exports = { app, server };