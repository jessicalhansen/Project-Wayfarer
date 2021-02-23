const router = require('express').Router();
const controllers = require('../controllers');

// City Index
router.get('/', controllers.cities.index);

// City Show
router.get('/:id', controllers.cities.show);

// City Create
router.post('/', controllers.cities.create);

// City Update
router.put('/:id', controllers.cities.update);

// City Delete
router.delete('/:id', controllers.cities.destroy);

module.exports = router;
