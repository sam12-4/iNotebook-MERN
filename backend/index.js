// const connectToMongo = require("./db");
// const express = require('express')

// connectToMongo();
// const app = express()
// port = 3000;
// app.get('/', (req, res) => {
//   res.send('hello world')
// })


// app.listen(port, ()=>{
//     console.log("Server is running on port: " + port);
// })
const connectToMongo = require("./db");
const express = require('express')

connectToMongo();
const app = express()
const port = 3001;

// Define an API endpoint for getting data at the root path
app.get('/', (req, res) => {
  // Logic to fetch data from MongoDB
  // Then send the data as a response
  res.send('This is your API response' );
});

app.listen(port, () => {
  console.log("Server is running on port: http://localhost:" + port);
});
