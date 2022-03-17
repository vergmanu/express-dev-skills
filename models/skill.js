const skills = [
    {id: 123, skill: 'HTML', done: true},
    {id: 456, skill: 'CSS', done: false},
    {id: 789, skill: 'JS', done: false}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create, 
    deleteOne,
  };
  
  function getAll() {
    return skills;
  }

  function getOne(id) {
    // URL params are strings - convert to a number
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }

  function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);
  }

  function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
  }