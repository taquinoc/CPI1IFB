
function validar(){
	var nome = formuser.nome.value;
	//aqui ele quer receber o valor da variável (nome no caso)
	var email = formuser.email.value;
	//aqui recebe o email
	var senha = formuser.senha.value;

	if(nome == ""){
		alert('Preencha o campo nome, por gentileza');
		formuser.nome.focus();
		//Focus para focar, ele te direciona onde não foi preenchido
		return false;
		//O return false, vai fazer o retorno do valor para falso
		//Ou seja, vai mostrar que o valor digitado em vazio, vai retornar como falso

	}
	//o IndexOf analisa o conteúdo e ver se possui o seguinte caractere
	//no final é verificado se ele possui ao menos 1 @ (arroba)
	else if(email =="" || email.indexOf('@') == -1){
		alert('Preencha o campo do e-mail corretamente, por gentileza');
		formuser.email.focus();
		return false;
	}

	else if(senha =="" || senha.length < 5){
		alert('Preencha o campo de senha, por gentileza com ao menos 5 caracteres');
		formuser.senha.focus();
		return false;
	}

		
	alert ('Seja bem vindo '+nome+' você agora será encaminhado para o nosso questionário');


}



// Começamos com uma 'Self-Executing Anonymous Functions', esse parttern nos ajuda a não poluir o global namespace;
;(function(){
 
// doc é um 'cache' para o objeto global documento, assim nao precisamos subir toda hora para acessar esse objeto, ja que agora temos ele local;
var doc = document,
 
// Um array que contem todos os inputs com a class .resposta. (.querySelectorAll nao está disponivel em todos os navegadores, entao caso vc precise vc pode usar outra maneira para conseguir os inputs, ex.: .getElementsByClassName())
respostaUsuario = doc.querySelectorAll('input.resposta'),
 
// A lista de respostas corretas;
respostaCorreta = ['b', 'a', 'd','b','d','a','d','a','c','c','b','a','d','b','c'];
 
// Um pequeno dicionário para feedback;
resposta = {
'certa': 'Sua resposta esta certa',
'errada': 'Resposta correta: '
},
 
// O botao que será clicado para verificar suas respostas;
btn = doc.getElementById('button');
 
// Funcao chamada para verificar as resposas;
function Corrigir() {
 
// Variaveis locais, incluindo um caching para a quantidade de inputs na pagina
var i,
len = respostaUsuario.length;
 
for( i = 0; i < len; i++ ) {
 
// Ao inves de usar document.write segue uma maneira melhor de mostrar seus resultados;
var d = doc.createElement('div'),
text;
 
// Se a resposta do usuário estiver correta;
if (respostaUsuario[i].value == respostaCorreta[i]) {
 
// Criamos um texto para mostrar para ele;
text = doc.createTextNode(resposta.certa);
d.appendChild(text);
 
// Colocamos esse texto logo apos o input;
respostaUsuario[i].parentNode.insertBefore(d, respostaUsuario[i].nextSibling);
 
} else {
 
// Caso ele erre, criamos um texto de erro e adicionando a mensagem abaixo do input;
text = doc.createTextNode(resposta.errada + respostaCorreta[i]);
d.appendChild(text);
respostaUsuario[i].parentNode.insertBefore(d, respostaUsuario[i].nextSibling);
}
}
}
 
// Aqui vamos ouvir o evento de click no botao; Quando ele for clicado vamos executar a funcao Corrigir;
button.addEventListener("click", Corrigir, false);
})();




		











