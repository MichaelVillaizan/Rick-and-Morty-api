const RaMapi = "https://rickandmortyapi.com/api";
const containerch = document.querySelector('#containerch')
function traerCH(){
    const pagina = Math.floor(Math.random() * (42 - 1) + 1);
    const personaje = Math.floor(Math.random() * (20 - 1) + 1);
    fetch(`${RaMapi}/character?page=${pagina}`)
        .then((response)=> response.json())
        .then((results)=>{
            console.log(pagina)
            console.log(personaje)
            const template =  `
                        <div class="result-div">
                        <img src=${results.results[personaje].image} class="ch-icon" alt="">
                        <p>${results.results[personaje].name}</p>
                        <p>${results.results[personaje].origin.name}</p>
                        </div>`;
                console.log(results.results[personaje].image)
                containerch.innerHTML = template       ;      
        
                });
            
            }   
traerCH();

