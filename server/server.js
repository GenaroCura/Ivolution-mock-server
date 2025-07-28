import express from 'express';
import users from './usersMock.js';
import cors from 'cors';
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post('/auth/login', (req, res) => {
  const { email, password } = req.body;



  const userAuth = users.find(user => user.identifier === email && user.password === password);
  if(userAuth){
    console.log('Authenticated user:', userAuth);

    return res.json({
      success: true,
      token: 'fake-token',
      user: userAuth,
    });
  }
});

app.listen(port, () => {
  console.log(`Servidor mock corriendo en http://localhost:${port}`);
});