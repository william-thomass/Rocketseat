

let students =[
  { name:'João',
    noteOne:7,
    noteTwo:8,
},
  {
    name:'Maria',
    noteOne:8,
    noteTwo:8,
  },
  {
    name:'Pedro',
    noteOne:6,
    noteTwo:5,
  },
]

function average(noteOne, noteTwo)
{   let media = (noteOne + noteTwo) /2
  if (media >= 7){
    return `${media.toFixed(2)} , 
    Parabéns você passou!`
  }else 
  {
   return `${media.toFixed(2)}, 
   infelizmente não passou,Tente novamente!`
  }
   
  
}

function printStudent(student){
  return `
  O aluno(a) ${student.name} possui a média de ${average(student.noteOne, student.noteTwo)} `

}

for(let student of students){
  let avgMessage = printStudent(student)
  alert(avgMessage)

}

