const logo = document.getElementById('itau')

logo.addEventListener('click', function(){
  alert('Estou aqui!')
})

function replaceCPF(value){
  return value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

const cpfInput = document.getElementById('cpf')


//função validadora de CPF
function validarCPF(cpf) {	
	cpf = cpf.replace(/[^\d]+/g,'');	
	if(cpf == '') return false;	
	// Elimina CPFs invalidos conhecidos	
	if (cpf.length != 11 || 
		cpf == "00000000000" || 
		cpf == "11111111111" || 
		cpf == "22222222222" || 
		cpf == "33333333333" || 
		cpf == "44444444444" || 
		cpf == "55555555555" || 
		cpf == "66666666666" || 
		cpf == "77777777777" || 
		cpf == "88888888888" || 
		cpf == "99999999999")
			return false;		
	// Valida 1o digito	
	add = 0;	
	for (i=0; i < 9; i ++)		
		add += parseInt(cpf.charAt(i)) * (10 - i);	
		rev = 11 - (add % 11);	
		if (rev == 10 || rev == 11)		
			rev = 0;	
		if (rev != parseInt(cpf.charAt(9)))		
			return false;		
	// Valida 2o digito	
	add = 0;	
	for (i = 0; i < 10; i ++)		
		add += parseInt(cpf.charAt(i)) * (11 - i);	
	rev = 11 - (add % 11);	
	if (rev == 10 || rev == 11)	
		rev = 0;	
	if (rev != parseInt(cpf.charAt(10)))
		return false;		
	return true;   
}

//referencio o input
const validate = document.getElementById('nome');

// verificamos os eventos do nosso input
validate.addEventListener('keyup', function(){
  //recebe valor do input nome
  let nomeValor = document.getElementById('nome').value
  // estou criando uma variavel e recebendo validação de email
  let emailValor = document.getElementById("email").validity.valid
  console.log(emailValor)
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

  fetch('https://webhook.site/a68c396c-4bfd-46aa-85cd-db88fe194ab0', {
    method: 'POST',
    body: JSON.stringify({
      nome,
      email,
    })
  }).then( response => response.json()).catch( e => console.log(e));
})