var express = require('express');
var router = express.Router();

const passport = require('passport');

let location = require('../controllers/location');
let user = require('../controllers/user');

let { isLoggedIn, hasAuth } = require('../middleware/hasAuth');

/* Authentication routes. */
router.get('/api/login', user.show_login);
router.get('/api/signup', user.show_signup);
router.post('/api/login', user.login);
//router.post('/api/login', user.login);
router.post('/api/signup', user.signup);
router.post('/api/logout', user.logout);
router.get('/api/logout', user.logout);

/* Location routes. */
router.get('/', location.home);
router.post('/api/location/',  
   location.submit_location
);

router.get('/api/locations', isLoggedIn, location.show_locations);
router.get("/api/location/:location_id", isLoggedIn, location.show_location);

router.get('/api/location/:location_id/edit', hasAuth, location.show_edit_location);
router.post('/api/location/:location_id/edit', hasAuth, location.edit_location);

router.post('/api/location/:location_id/delete', hasAuth, location.delete_location);
router.post('/api/location/:location_id/delete-json', hasAuth, location.delete_location_json);


module.exports = router;
