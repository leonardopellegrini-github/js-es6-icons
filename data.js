const icone = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];


// funzione per generare gli elementi
function creaElementi(icons){

	//indico il contenitore dentro al quale andranno messe le icone
	const contenitore = document.querySelector('.quadentro');

	for (const key in icons) {

    //inserisco dentro al contenitore l'html con le key
    contenitore.innerHTML += 
    `
		<div class="col-3 d-flex justify-content-center spazio-icona">
			<div>
         <i  class="fa-solid ${icons[key].prefix}${icons[key].name} ${icons[key].color}"></i>
			</div>
			<div>
        <h3>${icons[key].name}</h2>
			</div>
    </div>

    `;


  }


}

creaElementi(icone);

//quando seleziono una categoria, mi stampa solo quella selezionata

function selezionaCategoria() {

	let valore = document.getElementById('selezionatore').value;
	let name = (icone['color']);

	console.log(valore);
	console.log(name);
	
	if (valore == 'user') {
		console.log("Hai selezionato user");
	} else if (valore == 'animal'){
		console.log("Hai selezionato animal");
	} else if  (valore == 'vegetable'){
	console.log("Hai selezionato vegetable");
  } else{
		console.log("Hai selezionato tutti");
	}
}

selezionaCategoria();