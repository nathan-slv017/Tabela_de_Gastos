let  nome = document.querySelector('#nome');
let valor = document.querySelector('#valor');

document.addEventListener('click', (e) =>{
    e.preventDefault()
    calcula(e)
})


function calcula(e){
    const el = e.target
    if(el.classList.contains('calcular')){
        verificanome()
    }
}

function verificanome(){
    if(typeof nome.value == 'string' || !typeof nome.value == 'number'){
        console.log('nome possivel');
    }else{
        console.log('nome recusado')
    }
}