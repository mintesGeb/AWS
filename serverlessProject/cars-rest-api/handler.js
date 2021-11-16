"use strict";

const serverless = require("serverless-http");
const express = require("express");
const app = express();

// const bodyParser = require("body-parser");
const AWS = require("aws-sdk");
const db = new AWS.DynamoDB.DocumentClient();
const { v4: uuidv4 } = require("uuid");
const e = require("express");

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

app.get("/test", (req, res) => {
  res.status(200).json({ foo: "bar" });
});

app.get("/cars", async (req, res) => {
  const params = {
    TableName: "carsTable",
  };
  const results = await db.scan(params).promise();
  res.status(200).json({ cars: result });
});

// app.patch("/cars/:id", async (req, res) => {
//   const data = req.body;
//   const params = {
//     TableName: "carsTable",
//     Item: {
//       id: data.id,
//       make: data.make,
//       model: data.model,
//       year: data.year,
//     },
//   };
//   try {
//     await db.put(params).promise();
//     res.status(201).json({ car: params.Item });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// app.post("/cars", async (req, res) => {
//   const data = req.body;
//   const params = {
//     TableName: "carsTable",
//     Item: {
//       id: uuidv4(),
//       make: data.make,
//       model: data.model,
//       year: data.year,
//     },
//   };
//   try {
//     await db.put(params).promise();
//     res.status(201).json({ car: params.Item });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// app.delete("/cars/:id", async (req, res) => {
//   const params = {
//     TableName: "carsTable",
//     Key: {
//       id: req.params.id,
//     },
//   };
//   await db.delete(params).promise();
//   res.status(200).json({ success: true });
// });

module.exports.app = serverless(app);
