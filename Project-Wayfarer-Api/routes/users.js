const router = require('express').Router();
const controllers = require('../controllers');

// User Create
router.post('/', controllers.users.create);
// User login
router.post('/login', controllers.users.login);

// User get
router.get('/:id', controllers.users.show);

// User Update
router.put('/:id', controllers.users.update);

// User Delete
router.delete('/:id', controllers.users.destroy);

module.exports = router;
