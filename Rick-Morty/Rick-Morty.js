const app = document.querySelector('.app');
const URL_API = 'https://rickandmortyapi.com/api/character';

const xhr = new XMLHttpRequest();

function cuandoCargue()
{;
    if(this.readyState === 4 && this.status === 200)
    {
        const data = JSON.parse(this.response);
        console.log('DATA: '+ data);
        let datitos = data.results;

            for (let i = 0; i < datitos.length; i++) {
                const element = datitos[i];
                console.log(element.image);
                app.innerHTML += `
                <div class="card">
                    <h1>Name: ${element.name}</h1>
                    <h1>Especie: ${element.species}</h1>
                    <h1>Status: ${element.status}</h1>
                    <h1>Image:</h1><img src=${element.image}>
                <div>
                `
                console.log(datitos);
                
            }
    }
}

xhr.addEventListener('load', cuandoCargue);
xhr.open('GET', `${URL_API}`);
xhr.send();






/* const app = document.querySelector('.app');
const API_URL = "https://rickandmortyapi.com/api/character/519";

const xhr = new XMLHttpRequest();

function onRequestHandler()
{
    if(this.readyState === 4 && this.status === 200)
    {
        const data = JSON.parse(this.response);
        console.log(data);
        app.innerHTML = `<h3>Name:</h3>
        <p>${data.name}</p>
        <img src="${data.image}">
        <h3>Gender:</h3>
        <p>${data.gender}</p>
        <h3>Episode:</h3>   
        <p>${data.episode}</p>`;
    }
}

xhr.addEventListener('load', onRequestHandler);
xhr.open('GET', `${API_URL}`);
xhr.send() */
