const router = require('express').Router();
const controllers = require('../controllers');

// User Index
router.post('/login', controllers.users.login);

// User Show
router.get('/:id', controllers.users.show);

// User Create
router.post('/', controllers.users.create);

// User Update
router.put('/:id', controllers.users.update);

// User Delete
router.delete('/:id', controllers.users.destroy);

module.exports = router;
