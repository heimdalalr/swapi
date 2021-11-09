const getButton = document.querySelector('button');

const baseURL = "https://swapi.dev/api/"

function clickEventHandler(event) {
    axios.get(`${baseURL}planets/?search=Alderaan`).then(res=> {
        const alderaan = res.data.results[0];
        const body = document.querySelector('body');
        const resultHeader = document.createElement('h2');
        body.appendChild(resultHeader);

        for (let i=0; i<alderaan.residents.length; i++) {
            axios.get(alderaan.residents[i]).then(resident=> {

                switch (true){
                    case resultHeader.textContent === '':
                        resultHeader.textContent = resident.data.name;
                        break;
                    default:
                        resultHeader.textContent += `, ${resident.data.name}`;
                }
                
            })
        }
    })
}

getButton.addEventListener('click', clickEventHandler);