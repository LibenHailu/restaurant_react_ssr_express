const express = require("express");
const register = require("@react-ssr/express/register");
const { pool } = require("./db/db");

const app = express();

app.use(express.static("public"));

(async () => {
  await register(app);

  app.get("/", async (req, res) => {
    try {
      const result = await pool.query(
        "SELECT name,getPriceInETB(menus) as price,description,picture,cat_name from menus"
      );
      // console.log(res.rows);
      res.render("index", { rows: result.rows });
    } catch (error) {
      console.error(error);
    }
  });

  app.listen(3001, () => {
    console.log("> Ready on http://localhost:3001");
  });
})();
