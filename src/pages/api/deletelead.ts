import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../lib/prisma';
import { PrismaClient } from '@prisma/client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'DELETE') {
    const { id } = req.query;

        const prisma = new PrismaClient()
    try {
        const lead = await prisma.lead.delete({
        where: {
          id: Number(id),
        },
      });
      res.status(200).json(lead);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Falha ao deletar lead' });
    }
  } else {
    res.status(405).json({ error: 'Método não permitido.' });
  }
}