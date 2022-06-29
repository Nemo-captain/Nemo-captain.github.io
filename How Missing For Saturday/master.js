const getInputValue = ()=>{
    return document.getElementById('dia').value
}

let resultado = document.getElementById("resultado");

const changeValue = ()=> {

for (const elemento in diasDeSemana) {
    if (Object.hasOwnProperty.call(diasDeSemana, elemento)) {
        const element = diasDeSemana[elemento];
        if (element == getInputValue()) {
            let total = 7 - elemento;
            resultado.innerHTML = `Faltan ${total} días para el sábado`;
            if (total == 0) {
                resultado.innerHTML = `Un momento... ¡Ya es sábado! <br> <b>¡¡¡FELIZ SÁBADO!!!</b>`
            }
        }
    }
}

}

/*
    *Resolvimos el problema. Excelente compañero. El primer problema está resuelto. Pudimos pulir un poco más el código, pero se viene algo interesante: Necesitamos un código a prueba de tontos. ¿Qué pasa si alguien ingresa "SABADO" o alǵun día de semana con tildes o alguna mayuscula? Exacto. el codigo se rompe.
*/


const diasDeSemana = 
{
    1: 'domingo', 
    2: 'lunes',
    3: 'martes',
    4: 'miercoles',
    5: 'jueves',
    6: 'viernes',
    7: 'sabado'
}