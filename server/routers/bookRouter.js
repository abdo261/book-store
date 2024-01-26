const router = require('express').Router()
const {getAll,create,getById,remove,update,getBooksByCategory,getAllBooksPopulate,updateManyByCategory} = require('../controllers/bookController')

router.get('/',getAll)
router.get('/:id',getById)
router.get('/populate',getAllBooksPopulate)
router.get('/category/:id',getBooksByCategory)
router.post('/',create)
router.delete('/:id',remove)
router.put('/:id',update)
router.put('/updateMany/:categoryId', updateManyByCategory);



module.exports = router
