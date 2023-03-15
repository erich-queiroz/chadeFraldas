import dotenv from 'dotenv';
import express, { Express, NextFunction, Request, Response } from 'express';

import cors from 'cors';
import createError from 'http-errors';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import indexRouter from './routes/index';
import presenteRouter from './routes/presente-routes';

dotenv.config();

const port = process.env.PORT || 3000;

const app: Express = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  cors({
    origin: [`http://localhost:${port}`]
  })
);

app.use('/', indexRouter);
app.use('/cadastro', presenteRouter);

// catch 404 and forward to error handler
app.use(function(req: Request, res: Response, next: NextFunction) {
  next(createError(404));
});

// error handler
app.use(function(err:any, req: Request, res: Response, next: NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(port, function () {
  console.log(`Example app listening at http://localhost:${port}!`);
});
