const logo = document.getElementById('itau')

logo.addEventListener('click', function(){
  alert('Estou aqui!')
})

const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(e){
  e.preventDefault()

  let nome = document.getElementById('nome').value;
  let email = document.getElementById('email').value;

  fetch('https://webhook.site/a68c396c-4bfd-46aa-85cd-db88fe194ab0', {
    method: 'POST',
    body: JSON.stringify({
      nome,
      email,
    })
  }).then( response => response.json()).catch( e => console.log(e));
})