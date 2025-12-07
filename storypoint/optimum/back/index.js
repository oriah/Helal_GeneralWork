require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// const fetch = require("node-fetch");
const app = express();
const PORT = 3000;
const buildingsRouter = require("./routers/buildings");
// async function callMonday() {
//   const url = "https://api.monday.com/v2";
//   const query = `
// query {
//   boards(ids: 2009305418) {
//     name
//     items_page(limit: 400) {
//       items {
//         id
//         name
//         group {
//           id
//           title
//         }
//         column_values {
//           column {
//             id
//             title
//           }
//           text
//           value
//         }
//       }
//     }
//   }
// }
// `;
//   const response = await fetch(url, {
//     method: "POST",
//     headers: {
//       Authorization:
//         "eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjM4ODQ5MjYxNywiYWFpIjoxMSwidWlkIjo1MDgwMjI0MCwiaWFkIjoiMjAyNC0wNy0yNFQxNToxODoxMC4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTk1MDEzNjAsInJnbiI6ImV1YzEifQ.dlXZJ2nspi1fhvIlRUUx-bmsOXwPM0Q_-gPPVx9X_7o",
//       "API-Version": "2023-04",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ query }),
//   });

//   const data = await response.json();
//   console.log(JSON.stringify(data, null, 2));
// }
app.use(cors());

app.use(bodyParser.json());
app.use("/buildings", buildingsRouter);
app.get("/", (req, res) => {
  res.send("Hello World from Node.js + Express!");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
