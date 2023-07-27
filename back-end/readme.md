i. Database Structure:

The database structure for this application includes three main collections: `videos`, `products`, and `comments`, which correspond to the features required for the REST API.

1. `videos` collection:
   - Schema:
     - `videoId`: A unique identifier for each video from YouTube.
     - `thumbnailUrl`: URL of the image thumbnail for the video.

2. `products` collection:
   - Schema:
     - `productId`: A unique identifier for each product.
     - `videoId`: A reference to the corresponding video's `videoId` in the `videos` collection.
     - `link`: The link to the product related to the video.
     - `title`: The title or name of the product.
     - `price`: The price of the product.

3. `comments` collection:
   - Schema:
     - `videoId`: A reference to the corresponding video's `videoId` in the `videos` collection.
     - `username`: The name of the user who submitted the comment.
     - `comment`: The user's comment.
     - `timestamp`: The timestamp indicating when the comment was submitted (defaulted to the current date and time).

ii. Folder Structure:
```
- controllers
  - videoController.js
  - productController.js
  - commentController.js
- models
  - video.js
  - product.js
  - comment.js
- services
  - videoService.js
  - productService.js
  - commentService.js
- routes
  - route.js
```

iii. API Structure:

The API structure follows RESTful principles, using Express.js as the server framework. It consists of three main endpoints, each corresponding to a specific feature:

1. Video Endpoint:
   - URL: `/api/videos`
   - HTTP Method: GET
   - Purpose: Fetches a list of videos with their videoIds and thumbnail URLs.

2. Product Endpoint:
   - URL: `/api/products/:videoId`
   - HTTP Method: GET
   - Purpose: Fetches a list of products related to a specific video based on its `videoId`.

3. Comment Endpoint:
   - URL: `/api/comments/:videoId`
   - HTTP Method: GET
   - Purpose: Fetches a list of comments for a specific video based on its `videoId`.
   - URL: `/api/comments`
   - HTTP Method: POST
   - Purpose: Submits a new comment for a specific video and saves it in the database.

iv. List API Requests and Responses:

1. Video Thumbnail List:
   - Request:
     - URL: `/api/videos`
     - Method: GET
   - Response:
     ```
     [
       {
         "_id": <bson.ObjectId>,
         "videoId": <videoId>,
         "thumbnailUrl": string
       },
       {
         "_id": <bson.ObjectId>,
         "videoId": <videoId>,
         "thumbnailUrl": string
       },
       ...
     ]
     ```

2. Product List:
   - Request:
     - URL: `/api/products/:videoId`
     - Method: GET
   - Response:
     ```
     [
       {
         "videoId": <videoId>,
         "link": string,
         "title": string,
         "price": float
       },
       {
         "videoId": <videoId>,
         "link": string,
         "title": string,
         "price": float
       },
       ...
     ]
     ```

3. Comment List:
   - Request:
     - URL: `/api/comments/:videoId`
     - Method: GET
   - Response:
     ```
     [
       {
         "_id": <bson.ObjectId>,
         "username": string,
         "comment": string,
         "timestamp": timestamp
       },
       {
         "_id": <bson.ObjectId>,
         "username": string,
         "comment": string,
         "timestamp": timestamp
       },
       ...
     ]
     ```

4. Submit Comment:
   - Request:
     - URL: `/api/comments`
     - Method: POST
     - Payload:
       ```
       {
         "username": string,
         "comment": string,
         "videoId": <videoId>
       }
       ```
   - Response (Success):
     ```
     {
      "success": true,
      "comment": {
        "videoId": <videoId>,
        "username": string,
        "comment": string,
        "_id": "<bson.ObjectId>",
        "timestamp": timestamp,
        "__v": 0
      }
     }
     ```

v. How to run in local
To run your Express.js application with the MongoDB database locally, follow these steps:

1. Install MongoDB: Download and install MongoDB on your local machine. You can find the installation instructions for your specific operating system on the MongoDB website: https://docs.mongodb.com/manual/installation/

2. Clone your project: If you haven't already, clone your project repository to your local machine.

3. Install dependencies: Open a terminal or command prompt, navigate to the root folder of your project, and run the following command to install the required dependencies specified in your `package.json`:

```
npm install
```

4. Start MongoDB: Start the MongoDB server on your local machine. Depending on your installation method, this may involve running a command like `mongod` or starting the MongoDB service.

5.  Run the `mongodb-query.js` script to populate your database with the sample data. This script will create a new database called `tokoplay` and populate it with the sample data from the `mongodb-query.json` file. You can run using mongoshell or MongoDB Compass.

6. Connect to MongoDB: In your Express.js application, ensure that you have set up the connection to the local MongoDB database. Open and edit mongoURI variable in `app.js`:

```javascript
const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/your_database_name';
```

Replace `'your_database_name'` with the name of your MongoDB database.

7. Start the server: Start your Express.js server using the following command:

```
npm start
```

8. Access your application: Once the server is running, you can access your application in your web browser by navigating to `http://localhost:port`, where `port` is the port number specified in your Express.js configuration (e.g., 3000, 8080, etc.). The default to port for this project is 3000.

9. Test the APIs: Use tools like cURL, Postman, or your favorite web browser to test the different endpoints and functionalities of your REST API.