const router = require("express").Router();
const { test } = require("../controllers/testController");

//route and then controller plugged in from test controller
router.get("/test", test);
module.exports = router;
