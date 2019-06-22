const models = require('../models');

exports.home = function(req, res, next) {
    res.render('home', { title: 'Express', user: req.user });
  }

  exports.submit_location = function(req, res, next) {
    return models.Location.create({
      classroom: req.body.location_classroom,
      description: req.body.location_description,
      longitude: req.body.location_longitude,
      latitude: req.body.location_latitude
    }).then(location => {
      res.redirect('/api/locations');
    })
  }

  exports.show_locations = function(req, res, next) {
    models.Location.findAll().then(locations => {
      res.render('location/locations', {title: 'Express', locations: locations});
    })
  }

  exports.show_location = function(req, res, next) {
    return models.Location.findOne({
      where : {
        id :req.params.location_id
      }
    }).then(location => {
      res.render('location/location', {location: location});
    })
  }

  exports.show_edit_location = function(req, res, next) {
    return models.Location.findOne({
      where : {
        id :req.params.location_id
      }
    }).then(location => {
      res.render('location/edit_location', {location: location});
    })
  }

  exports.edit_location = function(req, res, next) {
    req.params.location_id
    req.body.location_classroom
    req.body.location_description
    req.body.location_longitude
    req.body.location_latitude

    return models.Location.update({
      classroom: req.body.location_classroom,
      description: req.body.location_description,
      longitude: req.body.location_longitude,
      latitude: req.body.location_latitude
    }, {
      where: {
        id: req.params.location_id
      }
    }).then(result => {
      res.redirect('/api/location/' + req.params.location_id);
    })
  }

  exports.delete_location = function(req, res, next) {
    return models.Location.destroy({
      where: {
        id: req.params.location_id
      }
    }).then(result => {
      res.redirect('/api/locations');
    })
  }

  exports.delete_location_json = function(req, res, next) {
    return models.Location.destroy({
      where: {
        id: req.params.location_id
      }
    }).then(result => {
      res.send({msg:"Success"});
    })
  }