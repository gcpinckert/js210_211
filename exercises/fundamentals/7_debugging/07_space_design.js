// Roles (salary still to be determined)

const ceo = {
  tasks: ['company strategy', 'resource allocation', 'performance monitoring'],
  salary: 0,
};

const developer = {
  tasks: ['turn product vision into code'],
  salary: 0,
};

const scrumMaster = {
  tasks: ['organize scrum process', 'manage scrum teams'],
  salary: 0,
};

// Team -- we're hiring!

const team = {};

team['ceo'] = 'Kim';            // by using bracket notation we're assigning the object as they property name
team['scrumMaster'] = 'Alice';  // and a string representation of that is used instead of 'ceo' like we want
team['developer'] = undefined;

const company = {
  name: 'Space Design',
  team,
  projectedRevenue: 500000,
};

console.log('element reference with string property values');
console.log(`----{ ${company.name} }----`);
console.log(`CEO: ${company.team['ceo']}`);
console.log(`Scrum master: ${company.team['scrumMaster']}`);
console.log(`Projected revenue: $${company.projectedRevenue}`);

console.log('logging the actual object referenced by variable names');
console.log(ceo);
console.log(developer);
console.log(scrumMaster);

// ----{ Space Design }----
// CEO: undefined
// Scrum master: undefined
// Projected revenue: $500000
