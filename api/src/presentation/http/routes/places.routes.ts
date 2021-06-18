import {Router} from 'express';
const router = Router();
import { getPlaces } from '../actions/places/placesController';


router.route('')
    .get(getPlaces);

export default router;