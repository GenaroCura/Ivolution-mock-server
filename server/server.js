import express from 'express';
import users from './usersMock.js';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());


app.get('/', (req,res) =>{
  return res.status(200).json({server: 'Funcionando perfecto bro'})
});

app.post('/auth/login', (req, res) => {
  const { email, password } = req.body;

  const userAuth = users.find(
    (user) => user.identifier === email && user.password === password
  );

  if (userAuth) {
    console.log('Authenticated user:', userAuth.name);
    const { password: userPassword, ...userProfile } = userAuth;
    return res.json({
      success: true,
      token: 'fake-token',
      user: userProfile,
    });
  } else {
    return res.status(401).json({
      success: false,
      message: 'Credenciales inválidas',
    });
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});