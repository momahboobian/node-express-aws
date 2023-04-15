const express = require("express");
const app = express();

const PORT = 3000 || process.env.PORT;

const fs = require("fs");

function getCurrentTime() {
  const date = new Date();
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: "Europe/London",
  };
  return date.toLocaleString("en-US", options);
}

app.get("/time", (req, res) => {
  const currentTime = getCurrentTime();
  res.send(currentTime);
});

app.get("/", (req, res) => {
  fs.readFile("visitors.txt", (err, data) => {
    if (err) throw err;
    let visitors = parseInt(data);
    visitors++;
    fs.writeFile("visitors.txt", visitors.toString(), (err) => {
      if (err) throw err;
      const currentTime = getCurrentTime();
      res.send(`
        <html>
          <head>
            <title>Welcome visitor 😊</title>
            <link rel="stylesheet" type="text/css" href="style.css">
          </head>
          <body>
            <h1>Welcome to my website</h1>
           
            <p>Current time is <span id="time">${currentTime}</span></p>
            <p>And you are visitor number <span id="visitors">${visitors}</span></p>
            <span id="thanks">Thank you for visiting!</span>
          </body>
          <script>
            function updateTime() {
              const xhr = new XMLHttpRequest();
              xhr.open("GET", "/time", true);
              xhr.onload = function() {
                document.getElementById("time").innerHTML = xhr.responseText;
              }
              xhr.send();
            }

            updateTime();
            setInterval(updateTime, 1000);
          </script>
        </html>
      `);
    });
  });
});

app.use(express.static("public"));

app.listen(PORT, () => console.log("Server start listening..."));
