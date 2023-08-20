var botao = document.getElementById('button');
var nome = document.getElementById('input-name');
var idade = document.getElementById('input-age');
var verdade1 = document.getElementById('input-verdade')
var cor = document.getElementById('input-cor')
var resultText = document.getElementById('result-body')


botao.addEventListener('click', function () {

    var corpo = {
        name: nome.value,
        age: idade.value,
        verdade: verdade1.value,
        corFavorita: cor
    }

    fetch('http://ec2-3-87-245-85.compute-1.amazonaws.com:3000/user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(corpo),

        }).then((data) => {

            fetch('http://ec2-3-87-245-85.compute-1.amazonaws.com:3000/user').then((data) => {
            resultText.innerHTML = data.json();
            })
            
        })
})


