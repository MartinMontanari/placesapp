import { Router } from 'express';
const router = Router();

import { indexWelcome } from '../actions/index/indexControler';

router.route('/').get(indexWelcome);

export default router;