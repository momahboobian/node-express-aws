const express = require("express");
const app = express();

const PORT = 3000 || process.env.PORT;

let visitors = 0;

app.get("/", (req, res) => {
  visitors++;
  const date = new Date();
  res.send(`
    <html>
      <head>
        <title>Welcome to my website</title>
        <link rel="stylesheet" type="text/css" href="style.css">
      </head>
      <body>
        <h1>Welcome to my website</h1>
        <p>Current time is ${date.toLocaleString()} and you are visitor number ${visitors}</p>
        <p>Thank you for visiting!</p>
      </body>
    </html>
  `);
});

app.use(express.static("public"));

app.listen(PORT, () => console.log("Server start listening..."));
