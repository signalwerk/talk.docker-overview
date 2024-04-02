import express from "express";

const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send(
    `<pre>

200 – Dockerfile stages – Hello World!
evn.TEST: ${process.env.TEST || "not set"}

</pre>`,
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
