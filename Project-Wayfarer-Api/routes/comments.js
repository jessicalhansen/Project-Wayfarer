const router = require('express').Router();
const controllers = require('../controllers');

// Comment Index
router.get('/filter/:postId', controllers.comments.index);

// Comment Show
router.get('/:id', controllers.comments.show);

// Comment Create
router.post('/', controllers.comments.create);

// Comment Update
router.put('/:id', controllers.comments.update);

// Comment Delete
router.delete('/:id', controllers.comments.destroy);

module.exports = router;
