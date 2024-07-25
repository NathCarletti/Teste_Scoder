import { NextApiRequest, NextApiResponse } from 'next';
//import { prisma } from '../../lib/prisma';
import { PrismaClient } from '@prisma/client';
import { connect } from 'http2';

export default async function handlerCreateLead(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    console.log("reqbody",req.body)
    const { name, city, state, price, supply_type, mes }  = req.body;

    const prisma = new PrismaClient()
    console.log("bati aqui",  { name, city, state, price, supply_type, mes })
    try {
      const lead = await prisma.lead.create({ 
       data: { name, city, state, price, supply_type, mes}
        /*data:{
          city: 'asdasd',
          mes: 'asdqw',
          name: 'lsadd',
          price: 120312,
          state: 'asd',
          supply_type: 'asdqw',
        }*/
      })

      console.log(lead)
      res.status(201).json(lead);
    } catch (error:any) {
      res.status(500).json({ error: 'Falha ao criar lead' });
    }
  } else {
    res.status(405).json({ error: 'Método não permitido' });
  }
}