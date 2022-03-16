const skills = [
    {id: 123, skill: 'HTML', done: true},
    {id: 456, skill: 'CSS', done: false},
    {id: 789, skill: 'JS', done: false}
  ];
  
  module.exports = {
    getAll,
    getOne
  };
  
  function getAll() {
    return skills;
  }

  function getOne(id) {
    // URL params are strings - convert to a number
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }