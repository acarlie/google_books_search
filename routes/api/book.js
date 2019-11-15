const router = require('express').Router();
const bookController = require('../../controllers/bookController');

router
    .route('/')
    .get(bookController.findAll)
    .post(bookController.create);

router
    .route('/:id')
    .get(bookController.findOne)
    .put(bookController.update)
    .delete(bookController.delete);

router
    .route('/saved')
    .get(bookController.findSaved);

module.exports = router;
