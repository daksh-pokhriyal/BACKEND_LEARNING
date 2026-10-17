# steps to initialize server

# install all outside src !!

# make server.js outside src but mistakenly make it inside !

0. make a folder eg-> day_x
1. npm init -y
2. npm i express, and make folder src
3. make app.js, server.js
4. to execute -> node app.js
5. then write code, make models/notes.model.js and config/database.js
6. npm i mongoose
7. databse se connect krne se phele -> npm i mongoose (outside src)
8. mongoDB compass pe jake cluster banao (copy connection string)

9. but use nodemon -> npx nodemon server.js

# app.js -> for creating server and middleware
# server.js -> for starting the server


# connection string ko public kabhi nhi krte so use .env, and install dotenv outside src

use like :- 

require('dotenv').config({
    path: path.resolve(__dirname, '../../.env')
});




