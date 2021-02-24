const router = require('express').Router();
const controllers = require('../controllers');

// Post Index
router.get('/filter/:cityId', controllers.posts.index);

// Post Show
router.get('/:id', controllers.posts.show);

// Post Create
router.post('/', controllers.posts.create);

// Post Update
router.put('/:id', controllers.posts.update);

// Post Delete
router.delete('/:id', controllers.posts.destroy);

module.exports = router;
