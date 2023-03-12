import express, { NextFunction, Request, Response } from 'express';

import Cadastro from '../models/cadastro-model';

const router = express.Router();

router.post('/', (req: Request, res: Response, next: NextFunction) => {

  res.send('Post do cadastro');
});

router.get('/', (req: Request, res: Response, next: NextFunction) => {

  const lista

  res.send('Lista dos cadastros');
});

module.exports.deafult = router;
