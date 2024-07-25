import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from '@prisma/client';

export default async function handlerReadUser(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
      console.log("reqbody get user",req.body)
  
      const prisma = new PrismaClient();
      console.log("bati aqui no get user")
      const { email, password } = req.query;

    try {
      const userFound = await prisma.user.findUnique({
        where: {
          email: String(email),
        },
      });

      console.log(userFound);

      if (userFound && userFound.password === password) {
        res.status(200).json(userFound);
      } else {
        res.status(401).json({ error: 'Email ou senha inválidos' });
      }
      } catch (error:any) {
        res.status(500).json({ error: 'Falha ao buscar user' });
      }
    } else {
      res.status(405).json({ error: 'Método não permitido' });
    }
  }
