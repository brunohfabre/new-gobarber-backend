import { Router } from 'express';

import ensureAuthenticated from '@shared/middlewares/ensureAuthenticated';

import AppointmentsController from '../controllers/AppointmentsController';

const appointmentsRouter = Router();
const appointmentsController = new AppointmentsController();

appointmentsRouter.use(ensureAuthenticated);

appointmentsRouter.get('/', appointmentsController.index);
appointmentsRouter.post('/', appointmentsController.create);

export default appointmentsRouter;
