const Router = require('express')
const { getAll, create, getById, login } = require('../controllers/user')

const router = Router()

router.get('/', getAll)
router.get('/:id', getById)
router.post('/', create)
router.post('/login', login)
//router.put('/:id', [isAdmin], update)
//router.delete('/:id', [isAdmin], deleteById)

module.exports = router
