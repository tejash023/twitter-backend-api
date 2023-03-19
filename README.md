# Twitter App Backend

The Twitter app backend project is built on Node.js, and MongoDB. The project also utilizes JSON Web Tokens (JWT) for authentication purposes.

The backend is responsible for handling various functionalities of a Twitter-like social media application, such as user authentication, user account management, tweet creation and retrieval, likes and comments on tweets/posts.

## Features

- User should be able to create a post
  - The tweet cannot have more than 250 chars
  - Every tweet will be having support for image uploads
- Post should be visible to all those users are registered with the app
- Anyone who is authenticated can comment on a post/tweet
  - User can comment on a comment as well
- Anyone who is authenticated can like on a post/tweet
  - User can like comments as well
- Pagination on tweets
- User authentication
- Image upload support for each tweet using Amazon S3

## Folder Structure

```

.
└── src/
  ├── config/
  │   ├── datbase.js
  │   ├── file-upload-s3-config.js
  │   └── jwt-middleware
  ├── controllers/
  │   ├── auth-controller/
  │   │   ├── signup
  │   │   └── login
  │   ├── comment-controller/
  │   │   └── createComment
  │   ├── like-controller/
  │   │   └── toggleLike
  │   └── tweet-controller/
  │       └── createTweet
  ├── middlewares/
  ├── models/
  │   ├── comments/
  │   ├── hashtags/
  │   ├── like/
  │   ├── tweet/
  │   └── user/
  ├── repository/
  │   ├── index/
  │   ├── crud-repository/
  │   ├── comment-repository/
  │   ├── like-repository/
  │   ├── tweet-repository/
  │   ├── hashtag-repository/
  │   ├── like-repository/
  │   └── user-repository/
  ├── routes/
  │   ├── v1/
  │   │   └── index/
  │   └── index/
  ├── services/
  │   ├── index/
  │   ├── like-services/
  │   ├── user-services/
  │   ├── comment-services/
  │   └── tweet-services/
  ├── utils/
  │   └── error-codes/
  └── index.js

```

## Run Locally

## Prerequisites

- Node.js and NPM installed on your system
- MongoDB installed on your system or access to a remote MongoDB instance
- Git installed on your system (optional)

## Steps to follow

1.  Clone the repository:

    `git clone https://github.com/tejash023/twitter-backend-api.git`

    Alternatively, you can download the project as a ZIP archive and extract it to a folder.

2.  Install the dependencies:

        `cd twitter-backend-api

    npm install`

3.  Configure environment variables:

    Create a `.env` file in the project root directory and set the following environment variables:

    ```PORT=3000
    MONGODB_URI=<your-mongodb-uri>
    JWT_SECRET=<your-jwt-secret>
    AWS_REGION = <your-aws-region>
    AWS_SECRET_ACCESS_KEY=<your-aws-key>
    ACCESS_KEY_ID=<your-aws-id>
    BUCKET_NAME=<your-aws-bucket-name>

    ```

4.  Start the server:

    `npm start`

5.  Access the application:

        Open a web browser and go to `http://localhost:3000`. You should see the application running.

That's it! You can now start exploring the application locally on your system.
