const Router = require('express');

const plantsController = require('../controllers/plantsController');

const router = new Router()

router.post('/', plantsController.create)
router.get('/', plantsController.getAll)
router.get('/:id', plantsController.getOne)
router.put('/:id', plantsController.update)
router.delete('/:id', plantsController.destroy)

module.exports = router;