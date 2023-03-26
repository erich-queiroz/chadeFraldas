import express, { NextFunction, Request, Response } from 'express';

import Presente from '../models/presente-model';

import repository from '../repository/presente-repository';

const router = express.Router();

router.post('/', (req: Request, res: Response, next: NextFunction) => {

  const presente: Presente = req.body;

  repository.create(presente, (id) => {
    if(id) {
      presente.id = id;

      res.status(201)
         .location(`/${id}`)
         .json(presente)
         .send();

      return;
    }

    res.status(400)
       .send();
  });
});

router.get('/', (req: Request, res: Response, next: NextFunction) => {
  repository.getAll((presentes) => res.json(presentes));
});

export default router;
