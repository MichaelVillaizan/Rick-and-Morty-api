const RaMapi = "https://rickandmortyapi.com/api";
const containerch = document.querySelector('#containerch')
function traerCH(){
    fetch(`${RaMapi}/character`)
        .then((response)=> response.json())
        .then((results)=>{
            
            for(let i=1; i<=results.info.pages ;i++){
                fetch(`${RaMapi}/character?page=${i}`)
                .then((response)=> response.json())
                .then((results)=>{
                    for(let j=0; j<20 ;j++) {
                        const template =  `
                        <div>
                        <img src=${results.results[j].image} class="ch-icon" alt="">
                        <p>${results.results[j].name}</p>
                        <p>${results.results[j].origin.name}</p>
                        </div>`;
                        console.log(results.results[j].image)
                        containerch.innerHTML += template}}); 
                }});}   

const epis = traerCH();