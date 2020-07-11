import { Request, Response } from 'express';
import { parseISO } from 'date-fns';
import { getCustomRepository } from 'typeorm';

import AppointmentsRepository from '../repositories/appointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';

export default class AppointmentsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const appointmentsRepository = getCustomRepository(AppointmentsRepository);
    const appointments = await appointmentsRepository.find();

    return response.json(appointments);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { provider_id, date } = request.body;

    const parsedDate = parseISO(date);

    const createAppointment = new CreateAppointmentService();

    const appointment = await createAppointment.execute({
      provider_id,
      date: parsedDate,
    });

    return response.json(appointment);
  }
}
