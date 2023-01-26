import { Router } from 'express';
import * as apiControlle from '../controllers/apiControlle'

const router = Router();

router.get('/ping', apiControlle.ping)
router.get('/randon',apiControlle.randon)
router.get('/nome/:nome', apiControlle.nome)

export default router;