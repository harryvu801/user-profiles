var users = [
  {
    name: 'Preston McNeil',
    password: 'password1',
    friends: ['Lindsey Mayer', 'Terri Ruff']
  },
  {
    name: 'Ryan Rasmussen',
    password: '$akgfl#',
    friends: ['Lindsey Mayer']
  },
  {
    name: 'Terri Ruff',
    password: 'hunter2',
    friends: ['Lindsey Mayer', 'Preston McNeil']
  },
  {
    name: 'Lindsey Mayer',
    password: '777mittens777',
    friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
  },
  {
    name: 'test',
    password: 'test',
  }
];



module.exports = {
  login: (req, res, next)=> {
    for (var i=0; i<users.length; i++){
      if(users[i].name === req.body.name && users[i].password === req.body.password){
        req.session.currentUser = users[i];
        console.log(req.session.currentUser);
        return res.send({userFound: true});
      }
    }
    return res.send({userFound:false})
  }
};
