
let workshops = ["Escolha uma opção", "HTML", "JAVA", "C#", "PHP"];
let qtdParticipantes = 0;

function loadWorkshops(){

	let msg = "";

	for(let i = 0; i < workshops.length; i++){

		msg += "<option value='"+i+"'>"+workshops[i]+"</option>";
		
	}

	//$('#workshops').html(msg);
	document.getElementById('works').innerHTML = msg;
	document.getElementById('works2').innerHTML = msg;


}

let participantes = [];

function registraParticipante () {

	if(qtdParticipantes < 15){

		let val = validaIdade($('#idade').val());

		if(val == true){

			participantes.push($('#nif').val());
			participantes.push($('#nome').val());
			participantes.push($('#morada').val());
			participantes.push($('#idade').val());
			participantes.push($('#telefone').val());
			participantes.push($('#works').val());

			alert("Registo efetuado com sucesso!")

		}else{
			alert("Não tem idade minima para participar!");
		}


	}else{
		alert("Atingiu o limite de participantes!");
	}
	
}

function validaIdade (idade) {
	
	let validacao = true;

	if( idade < 16 ){
		validacao = false;
	}

	return validacao;
}

function listagem(){

	let msg = "";

	for(let i = 0; i<participantes.length; i+=6){

		msg += "<tr><td>"+participantes[i]+"</td>";
		msg += "<td>"+participantes[i+1]+"</td>";
		msg += "<td>"+participantes[i+2]+"</td>";
		msg += "<td>"+participantes[i+3]+"</td>";
		msg += "<td>"+participantes[i+4]+"</td>";
		msg += "<td>"+workshops[participantes[i+5]]+"</td></tr>";
	}

	$('#tabelaInscritos').html(msg);

	$('#tableParticipantes').css({
		display: 'block',
		border: '2px'
	});

	$('#btn').attr({
		onclick: 'hideTable()'
	});
}

function hideTable(){

	$('#btn').attr({
		onclick: 'listagem()'
	});

	$('#tableParticipantes').css({
		display: 'none'
	});

}

function filtragem(escolha){


	let msg = "";

	for(let i = 0; i<participantes.length; i+=6){

		if(escolha == participantes[i+5]){

		msg += "<tr><td>"+participantes[i]+"</td>";
		msg += "<td>"+participantes[i+1]+"</td>";
		msg += "<td>"+participantes[i+2]+"</td>";
		msg += "<td>"+participantes[i+3]+"</td>";
		msg += "<td>"+participantes[i+4]+"</td>";
		msg += "<td>"+workshops[participantes[i+5]]+"</td></tr>";


		}

		
	}

	$('#tabelaInscritos').html(msg);

	$('#tableParticipantes').css({
		display: 'block',
		border: '2px'
        
	});

}


$(document).ready(function(){
	loadWorkshops();
})