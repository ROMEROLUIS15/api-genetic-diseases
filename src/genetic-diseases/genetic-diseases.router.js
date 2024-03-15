const  express = require( 'express' );
const { update, findOne, create, findAll, toDelete } = require('./genetic-diseases.controllers');

const generitDiseasesMiddlewares = require('./genetic-diseases.middlewares');
// const {saludo1, saludo2} = require('./genetic-diseases.middlewares'); --- desectructurado
const router = express.Router();


// router.get('/api/genetic-diseases', generitDiseasesMiddlewares.saludo1, findAll)
router.route('/api/genetic-diseases', generitDiseasesMiddlewares.saludo1)
.get(findAll) //creando variable findAll realiza la misma funcion
router.post('/api/genetic-diseases', create)
router.get('/api/genetic-diseases/:id', findOne)


router.patch('/api/genetic-diseases/:id', generitDiseasesMiddlewares.saludo2, update)
router.delete('/api/genetic-diseases/:id', generitDiseasesMiddlewares.saludo2, toDelete)


module.exports = router;