//
// Entity User: routes
//

const router = require('express').Router();
const { Add, List, Info, Change, Delete } = require('./controller');

router.post('/', Add);
router.get('/', List);

router.get('/:id', Info);
router.put('/:id', Change);
router.delete('/:id', Delete);

module.exports = router;