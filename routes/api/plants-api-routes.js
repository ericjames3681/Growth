const router = require("express").Router();
const request = require("request");
const TOKEN = process.env.TOKEN;
const API_URL = "https://trefle.io/api/v1/plants/";

router.get("/", function (req, res) {
  request(API_URL + "?token=" + TOKEN, function (error, response, body) {
    res.json(body);
  });
});

router.get("/search", function (req, res) {
  request(API_URL + "search?token=" + TOKEN + "&q=" + req.query.term, function (
    error,
    response,
    body
  ) {
    res.json(body);
  });
});

router.get("/detail", function (req, res) {
  request(API_URL + req.query.id + "?token=" + TOKEN, function (
    error,
    response,
    body
  ) {
    res.json(body);
  });
});

module.exports = router;
