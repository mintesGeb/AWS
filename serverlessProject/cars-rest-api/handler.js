"use strict";

const serverless = require("serverless-http");
const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const AWS = require("aws-sdk");
const db = new AWS.DynamoDB.DocumentClient();
const { v4: uuidv4 } = require("uuid");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/test", (req, res) => {
  res.status(200).json({ foo: "bar" });
});

module.exports.app = serverless(app);
