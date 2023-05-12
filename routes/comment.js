const Router = require('express')
const { getAll, create, getById } = require('../controllers/comment')

const router = Router()

router.get('/', getAll)
router.get('/:id', getById)
router.post('/', create)
//router.put('/:id', [isAdmin], update)
//router.delete('/:id', [isAdmin], deleteById)

module.exports = router
