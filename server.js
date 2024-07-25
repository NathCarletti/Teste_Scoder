require('dotenv').config();
const express = require('express');
const next = require('next');
const { connectDB } = require('./db');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  connectDB();

  // Defina suas rotas de API aqui
  server.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
  });

  /*server.post('/api/newuser', async (req, res) => {
    const { name, email, password, cpf, phone } = req.body;
    console.log("bati aqui 2", req.body)
    try {
      const user = await prisma.user.create({
        data: {
          name,
          email,
          password,
          cpf,
          phone
        },
      });
      res.status(201).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Falha ao criar usuario' });
    }
  });

  server.post('/api/newlead', async (req, res) => {
    const {name, city, state, price, supply_type, mes} = req.body;
    console.log("bati aqui 3", req.body)
    try {
      const lead = await prisma.lead.create({
        data: {
          name,
          city,
          state,
          price,
          supply_type,
          mes
        },
      });
      res.status(201).json(lead);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Falha ao criar lead' });
    }
  });*/



  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(300, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});