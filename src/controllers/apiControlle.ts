import { Request, Response } from 'express';
import { Phrase } from '../models/Phrase';

export const ping =  (req: Request, res: Response) => {
  res.json({ pong: true});
}

export const randon =  (req: Request, res: Response) => {
  let nRadon: number = Math.floor(Math.random() * 100);
  res.json({ nRadon: nRadon})
}

export const nome = (req: Request, res: Response) => {
  let nome: string = req.params.nome
  res.json({ nome: nome})
}