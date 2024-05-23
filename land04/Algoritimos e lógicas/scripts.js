

const patients = [
  { name:"Luiz",
    age: 20,
    weight:100,
    height:190,

  },
  {
    name:"João",
    age: 30,
    weight:80,
    height:170,
  },
  {
    name:"Maria",
    age: 18,
    weight:60,
    height:160,
  },
]

let patientsNames = []

//Para um patient de pactients faz algo no bloco
/*for(let patient of patients){
  patientsNames.push(patient.name)
  patientsNames.push(patient.age)
  patientsNames.push(patient.weight)
  patientsNames.push(patient.height)
}
*/

function printPatientIMC(teste){
  alert(`
  Paciente ${teste.name} possui o IMC de ${(teste.weight / ((teste.height / 100) ** 2)).toFixed(2)}`)
}

for (let teste of patients){
  printPatientIMC(teste)
}



