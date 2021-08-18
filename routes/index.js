///////////////////////////
///// routes/index.js /////
///////////////////////////

/// collecting packaged endpoints ///

const router = require('express').Router();

const apiRoutes = require('./api');

router.use('/api', apiRoutes);

// error for request to any non-existant endpoints
router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;

