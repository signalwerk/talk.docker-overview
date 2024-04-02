import express from "express";

const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send(
    `<pre>

300 – Docker compose mount – Hello World!
evn.TEST: ${process.env.TEST || "not set"}
evn.OTHER: ${process.env.OTHER || "not set"}

</pre>`,
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
