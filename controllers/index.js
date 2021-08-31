////////////////////////////////
///// controllers/index.js /////
////////////////////////////////

/// collecting packaged endpoints ///

const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);


// error for request to any non-existant endpoints
router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;

