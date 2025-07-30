const users = [
  {
    identifier: 'santinavarro@sur.com',
    _id: 'user-001',
    name: 'Santiago Navarro',
    password: 'asd123',
    institution_id: [
      {
        _id: '156489asdjew1564',
        name: 'Gym el sur',
        role: 'colaborador',
      },
    ],
    image: 'https://placehold.co/200x200/E6E6E6/000000?text=SN', 
  },
  {
     identifier: 'gena@boca.com',
    _id: 'user-002',
    name: 'Genaro Cura',
    password: 'asd123',
    institution_id: [
      {
        _id: '12390589023-asdjkl213jks-23456',
        name: 'Boca Juniors',
        role: 'administrador',
      },
    ],
    image: 'https://placehold.co/200x200/E6E6E6/000000?text=GC',
  },
  {
     identifier: 'sebaIvolution@gmail.com',
    _id: 'user-003',
    name: 'Sebastian Centurion',
    password: 'seba123',
    institution_id: [{
       _id: '12390589023-asdjkl213jks-26456',
        name: 'Ivolution',
        role: 'colaborador',
    },
    ],
    image: 'https://placehold.co/200x200/E6E6E6/000000?text=GC'
  }
];

export default users;