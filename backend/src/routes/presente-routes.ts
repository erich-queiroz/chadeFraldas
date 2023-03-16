import express, { NextFunction, Request, Response } from 'express';

import Presente from '../models/presente-model';

import repository from '../repository/presente-repository';

const router = express.Router();

router.post('/', (req: Request, res: Response, next: NextFunction) => {

  const presente: Presente = req.body;

  repository.create(presente, (id) => {
    if(id) {
      res.status(201)
         .location(`/${presente.id}`)
         .json(presente)
         .send();

      return;
    }

    res.status(400)
       .send();
  });
});

router.get('/', (req: Request, res: Response, next: NextFunction) => {

  const lista: Presente[] = [
    {
      id: 1,
      nome: "Assis",
      descricao: "Fraldas",
      valor: 100.0
    },
    {
      id: 2,
      nome: "Deyse",
      descricao: "Chupeta",
      valor: 212.34      
    }
  ];

  res.json(lista);
});

export default router;
