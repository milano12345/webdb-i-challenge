const server = require("./server.js");
const express = require("express");
const accountsRouter = require("./data/accounts/accountsRouter");

server.use("/api/accounts", accountsRouter);
server.use(express.json());

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
