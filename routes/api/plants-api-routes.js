const router = require("express").Router();
const request = require("request");
const TOKEN = process.env.TOKEN;

router.get("/", function (req, res) {
  request("https://trefle.io/api/plants/?token=" + TOKEN, function (
    error,
    response,
    body
  ) {
    res.json(body);
  });
});

module.exports = router;
