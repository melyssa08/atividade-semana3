var botao = document.getElementById('button');
var nome = document.getElementById('input-name');
var idade = document.getElementById('input-age');
var verdade1 = document.getElementById('input-verdade')
var cor = document.getElementById('input-cor')
var resultText = document.getElementById('result-body')


document.getElementById("form").addEventListener("submit", function(event) {
  event.preventDefault();

  
  if (verdade1.value == "true") {
    var corpo = {
      name: nome.value,
      age: parseInt(idade.value),
      corFavorita: cor.value,
      verdade: true
  }
  } else {
    var corpo = {
      name: nome.value,
      age: parseInt(idade.value),
      corFavorita: cor.value,
      verdade: false
  }
  }

    fetch('http://ec2-34-225-133-106.compute-1.amazonaws.com:3000/user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(corpo),

        }).then((data) => {
          fetch('http://ec2-34-225-133-106.compute-1.amazonaws.com:3000/user').then((result) => {
            return result.json()
          }).then((resultOficial) => {
            console.log(resultOficial)
            resultText.innerHTML = resultOficial
          })
            
        })
});




