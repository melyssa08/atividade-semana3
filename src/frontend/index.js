var botao = document.getElementById('button');
var nome = document.getElementById('input-name');
var idade = document.getElementById('input-age');
var verdade1 = document.getElementById('input-verdade')
var cor = document.getElementById('input-cor')
var resultText = document.getElementById('result-body')


botao.addEventListener('click', function () {

  if (verdade.value == "true") {
    var corpo = {
      name: nome.value,
      age: parseInt(idade.value),
      verdade: true,
      corFavorita: cor.value
  }
  } else {
    var corpo = {
      name: nome.value,
      age: parseInt(idade.value),
      verdade: false,
      corFavorita: cor.value
  }
  }

    fetch('http://ec2-54-82-36-2.compute-1.amazonaws.com:3000/user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(corpo),

        }).then((data) => {

            fetch('http://ec2-54-82-36-2.compute-1.amazonaws.com:3000/user').then((data) => {
            resultText.innerHTML = data.json();
            })
            
        })
})


