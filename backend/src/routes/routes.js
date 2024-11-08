const express = require('express');
const router = express.Router();
const auth = require('../controllers/auth');

router.post('/auth', auth.post);
  
/* POST programming language */
// router.post('/', programmingLanguagesController.create);

/* PUT programming language */
// router.put('/:id', programmingLanguagesController.update);

/* DELETE programming language */
// router.delete('/:id', programmingLanguagesController.remove);

module.exports = router;