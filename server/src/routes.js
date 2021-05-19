const router = require('express').Router();

router.get('/', (req, res) => {
  res.json(['Server']);
});

module.exports = router;