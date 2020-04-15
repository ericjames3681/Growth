const router = require("express").Router();
const request = require("request");
const TOKEN = process.env.TOKEN;
const API_URL = "https://trefle.io/api/plants/?token=";

router.get("/", function (req, res) {
  request(API_URL + TOKEN, function (error, response, body) {
    res.json(body);
  });
});

module.exports = router;
