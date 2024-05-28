const randomNumber = Math.round(Math.random()*10)
let xAttempts = 1


function handleClick(event){
  event.preventDefault()

  const number = document.querySelector('#number')
  
  
  if(Number(number.value) == randomNumber){
    document.querySelector(".screen1").classList.add("hide")
    document.querySelector(".screen2").classList.remove("hide")

    document.querySelector(".screen2 h1").innerHTML = `acertou em ${xAttempts} tentativas`

    

    


  }else{
    const button = document.querySelector('.screen2 button')
    button.addEventListener('click', function(){
    document.querySelector(".screen2").classList.add("hide")
    document.querySelector(".screen1").classList.remove("hide")
    
    xAttempts = 1
  })
    
  }

  number.value = ""  
  xAttempts++
}