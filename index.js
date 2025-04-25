const sampleData = [
  'alex', 'francis', 'aaron'
];

function findName(array, name){
  return array.filter(item => item === name)[0];
}

console.log(findName(sampleData, 'alex'));

module.exports = {
  sampleData: sampleData,
  findName: findName,
}