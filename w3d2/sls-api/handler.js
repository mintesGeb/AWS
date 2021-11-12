"use strict";
const AWS = require("aws-sdk");
const db = new AWS.DynamoDB.DocumentClient({ apiVersion: "2012-08-10" });
const uuid = require("uuid/v4");

const postTable = process.env.POSTS_TABLE;

function response(statusCode, message) {
  return {
    statusCode,
    body: JSON.stringify(message),
  };
}

module.exports.createPost = (event, context, callback) => {
  const reqBody = JSON.parse(event.body);
  const post = {
    id: uuid(),
    createdAt: new Date().toISOString(),
    userId: 1,
    title: reqBody.title,
    body: reqBody.body,
  };
  return db
    .put({
      TableName: postsTable,
      Item: post,
    })
    .promise()
    .then(() => {
      callback(null, response(201, post));
    })
    .catch((err) => response(null, response(err.statusCode, err)));
};


// aws cognito-idp sign-up --client-id nd04a85d1dev001ma6c77t7td --username mintes4@gmail.com --password Asdf1234! --user-attributes Name=name,Value=Mintes --region us-east-1

// aws cognito-idp initiate-auth --auth-flow USER_PASSWORD_AUTH --client-id nd04a85d1dev001ma6c77t7td --auth-parameters USERNAME=mintes4@gmail.com,PASSWORD=Asdf1234! --region us-east-1

// filter @message like /System error/
// | stats count(*) as exceptionCount by bin(1h)
// | sort exceptionCount describe
