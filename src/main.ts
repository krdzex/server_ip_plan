import bodyParser from "body-parser";
import express from "express";

function boostrap() {
  const app = express();

  app.use(bodyParser.json());

  const port = process.env.PORT || 3000
  app.listen(port, () => {
    console.log(`[APP] - Starting application on port ${port}`);
  });
}

boostrap();
