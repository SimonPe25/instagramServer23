import Router from 'express';
import PostController from "./PostControllers.js";

const router = new Router()

// router.get('/', function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.send('Hello World');
//   })
  
//   app.listen(3000, function () {
//     console.log('alive');
//   })

router.put('/users', PostController.update)
router.get('/users/:id', PostController.getOne)
router.get('/', PostController.getAll)


export default router;

