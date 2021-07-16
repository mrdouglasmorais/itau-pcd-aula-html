const logo = document.getElementById('itau')

logo.addEventListener('click', function(){
  alert('Estou aqui!')
})

//referencio o input
const validate = document.getElementById('nome');

// verificamos os eventos do nosso input
validate.addEventListener('keyup', function(){
  //recebe valor do input nome
  let nomeValor = document.getElementById('nome').value
  // estou criando uma variavel e recebendo validação de email
  let emailValor = document.getElementById("email").validity.valid
  let eValido = document.getElementById('validate')
  if (nomeValor.length > 10 && emailValor.length > 10){
    eValido.innerHTML = `<p>e valido</p>`
  }
})


const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(e){
  e.preventDefault()
  let nome = document.getElementById('nome').value;
  let email = document.getElementById('email').value;
  console.log(nome.length)

  // fetch('https://webhook.site/a68c396c-4bfd-46aa-85cd-db88fe194ab0', {
  //   method: 'POST',
  //   body: JSON.stringify({
  //     nome,
  //     email,
  //   })
  // }).then( response => response.json()).catch( e => console.log(e));
})