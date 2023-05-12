const Router = require('express')
const { getAll, create, getById, update } = require('../controllers/ticket')

const router = Router()

router.get('/', getAll)
router.get('/:id', getById)
router.post('/', create)
router.patch('/:id', update)
//router.put('/:id', [isAdmin], update)
//router.delete('/:id', [isAdmin], deleteById)

module.exports = router
