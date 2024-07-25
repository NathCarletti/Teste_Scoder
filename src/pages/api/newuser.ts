import { NextApiRequest, NextApiResponse } from 'next';
//import { prisma } from '../../lib/prisma';
import { PrismaClient } from '@prisma/client';

export default async function handlerCreateUser(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, password, phone,cpf  }  = req.body;
    const prisma = new PrismaClient()
    try {
      const userFound = await prisma.user.findMany();
      console.log("bati aqui2", name, email, password, phone,cpf);

      const user2 = await prisma.user.create({
        data:{  name:name, email:email,password: password, phone:phone,cpf:cpf }
        //  name: 'asdasd',
        //   email: 'as2@hotmail.com',
        //   password: 'lsaaaa',
        //   phone: 12912,
        //   cpf: 'aswd'
        // }
      });
        console.log(userFound);
      /*
      userFound[0].name = name;
      userFound[0].email = email;
      userFound[0].id = 294;
      console.log(userFound)*/
      // const userCreated = await prisma.user.createMany({
      //   data:{
      //     ...userFound
      //   },
      // });
      // const user = await prisma.user.upsert({
      //   where:{
      //     email: email,
      //   },
      //   update: {
      //     name: userFound[0].name,
      //     email,
      //     password,
      //     cpf,
      //     phone
      //   },
      //   create:{
      //     name: 'asdasdq',
      //     email: 'sopijas',
      //     password: 'asodjqwe',
      //     cpf: 'asdasd',
      //     phone: 12093123
      //   }
      // });
      console.log( 'aqui',user2)
      res.status(201).json(user2);
    } catch (error:any) {
      res.status(500).json({ error: 'Falha ao criar usuário.' });
    }
  } else {
    res.status(405).json({ error: 'Método não permitido.' });
  }
}