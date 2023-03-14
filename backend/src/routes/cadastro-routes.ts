import express, { NextFunction, Request, Response } from 'express';

import Cadastro from '../models/cadastro-model';

const router = express.Router();

router.post('/', (req: Request, res: Response, next: NextFunction) => {

  res.send('Post do cadastro');
});

router.get('/', (req: Request, res: Response, next: NextFunction) => {

  const lista: Cadastro[] = [
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

  res.send(lista);
});

export default router;
