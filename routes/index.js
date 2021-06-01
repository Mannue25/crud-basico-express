

const {Router} = require('express');
const router = Router();

// controllers
const {getRoutes, getIdRoutes, postIdRountes, putIdRoutes} = require('../controllers/index')



router.get('/', getRoutes)

router.get('/:id', getIdRoutes)

router.post('/', postIdRountes)
router.put('/api/:id', putIdRoutes)



module.exports = router;