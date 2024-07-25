import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from '@prisma/client';

export default async function handlerReadLead(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
      console.log("reqbody get",req.body)
  
      const prisma = new PrismaClient();
      console.log("bati aqui no get")
      try {
        const leadFound = await prisma.lead.findMany()
        
        console.log(leadFound)

        res.status(201).json(leadFound);
      } catch (error:any) {
        res.status(500).json({ error: 'Falha ao buscar lead' });
      }
    } else {
      res.status(405).json({ error: 'Método não permitido' });
    }
  }
