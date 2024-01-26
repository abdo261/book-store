
const express = require('express');
const uploadController = require('../controllers/imageController');

const router = express.Router();


router.get('/:objectID', uploadController.get);
router.get('/name/:filename', uploadController.getByName);
router.get('/', uploadController.getAll);
router.post('/', uploadController.uploadImage);
router.delete('/:objectID', uploadController.remove);
router.delete('/name/:filename', uploadController.removeByName);
  
 
  
module.exports = router;
