import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { createObjectCsvWriter } from 'csv-writer';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const leads = await prisma.lead.findMany();

      const csvWriter = createObjectCsvWriter({
        path: 'leads.csv',
        header: [
          { id: 'id', title: 'ID' },
          { id: 'name', title: 'Name' },
          { id: 'city', title: 'City' },
          { id: 'state', title: 'State' },
          { id: 'price', title: 'Price' },
          { id: 'supply_type', title: 'Supply Type' },
          { id: 'mes', title: 'Mes' },
          { id: 'createdAt', title: 'Created At' }
        ]
      });

      await csvWriter.writeRecords(leads);

      const filePath = path.join(process.cwd(), 'leads.csv');
      const fileContents = fs.readFileSync(filePath);

      res.setHeader('Content-Type', 'text/csv');
      res.setHeader('Content-Disposition', `attachment; filename=leads.csv`);
      res.status(200).send(fileContents);
    } catch (error) {
      res.status(500).json({ error: 'Falha ao exportar CSV' });
    } finally {
      await prisma.$disconnect();
    }
  } else {
    res.status(405).json({ error: 'Método não permitido' });
  }
}