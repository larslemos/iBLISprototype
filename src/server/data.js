module.exports = {
  people: getPeople(),
  patients:  getPatients(),
  tests: getTests()
};

function getPeople() {
  return [
    { id: 1, firstName: 'John', lastName: 'Papa', age: 25, location: 'Florida' },
    { id: 2, firstName: 'Ward', lastName: 'Bell', age: 31, location: 'California' },
    { id: 3, firstName: 'Colleen', lastName: 'Jones', age: 21, location: 'New York' },
    { id: 4, firstName: 'Madelyn', lastName: 'Green', age: 18, location: 'North Dakota' },
    { id: 5, firstName: 'Ella', lastName: 'Jobs', age: 18, location: 'South Dakota' },
    { id: 6, firstName: 'Landon', lastName: 'Gates', age: 11, location: 'South Carolina' },
    { id: 7, firstName: 'Haley', lastName: 'Guthrie', age: 35, location: 'Wyoming' },
    { id: 8, firstName: 'Aaron', lastName: 'Jinglehiemer', age: 22, location: 'Utah' }
  ];
}

function getPatients() {
  return [
    { nid: '123454/12/12345', firstName: 'John', gender: 'M', age: 25, location: 'Chamanculo' },
    { nid: '223454/12/12345', firstName: 'Ward', gender: 'M', age: 31, location: 'Alto Maer' },
    { nid: '323454/12/12345', firstName: 'Colleen', gender: 'F', age: 21, location: 'Xipamanine' },
    { nid: '423454/12/12345', firstName: 'Madelyn', gender: 'F', age: 18, location: 'Museu' },
    { nid: '523454/12/12345', firstName: 'Ella', gender: 'M', age: 18, location: 'HCM' },
    { nid: '623454/12/12345', firstName: 'Landon', gender: 'F', age: 11, location: 'Jose Macamo' },
    { nid: '723454/12/12345', firstName: 'Haley', gender: 'F', age: 35, location: 'Mavalane' },
    { nid: '823454/12/12345', firstName: 'Aaron', gender: 'F', age: 22, location: 'Utah' }
  ];
}

function getTests() {
  return [
    {date: '1/05/2017', requisition: 2 , nid: '823454/12/12345', age: 25, gender: 'F', visit: 'Ambulatorio ', 
        testsorders: ['Urineanalysis', 'Pregnacy', 'HB', 'BS'] }
  ];
}