const express = require("express");
const dotenv = require("dotenv");

const chats = require("./data/data");

const app = express();
dotenv.config();

app.get("/api/chat", (req, res, next) => {
    res.send(chats);
});

app.get("/api/chat/:id", (req, res, next) => {
    const singleChat = chats.find((c) => c._id === req.params.id);
    res.send(singleChat);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}.`);
});
