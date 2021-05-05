

function gastos() {
    let gastoToal = 0
    document.addEventListener('click', function(e){
        const el = e.target
        if(el.classList.contains('calcular')){
            e.preventDefault()
            calc()
            console.log('okay')
        }
    })

    function makeStaff(){
        const gastos = document.querySelector('.gastos');
        const gastoNome = document.querySelector('#nome');
        const gastoValor = document.querySelector('#valor');
        const saldo = document.querySelector('.saldo');

        gastoToal += Number(gastoValor.value)

        gastos.innerHTML += `<div class="CP">
        <div class="compra"> ${gastoNome.value} -</div>
        <div class="valor">R$:${gastoValor.value},00</div>
    </div>`

    saldo.innerHTML = `Você Gastou R$:${gastoToal},00`

    }

    function calc() {
        nomesCoerente()
        valorCoerente()
        if(nomesCoerente() && valorCoerente() === true){
        add()
        makeStaff()
        clear()
        }
        function nomesCoerente() {
            const gastoNome = document.querySelector('#nome');
            const erro = document.querySelector('.erroNome');
            let permitido = true
    
            if(gastoNome.value === ''){
                permitido = false
                erro.innerHTML = `informe um nome`
                setInterval(() =>{
                    erro.innerHTML = ``
                }, 4000)
            }
            return permitido
        }
    
        function valorCoerente(){
            const gastoValor = document.querySelector('#valor');
            const erroValor = document.querySelector('.erroValor')
            let permitido = true
    
            if(gastoValor.value === ''){
                permitido = false
                erroValor.innerHTML = `informe um numero`
                setInterval(() =>{
                    erroValor.innerHTML = ``
                }, 4000);
            }
            return permitido
        }
    
        function clear(){
            const gastoNome = document.querySelector('#nome');
            const gastoValor = document.querySelector('#valor');  
            gastoValor.value = ``
            gastoNome.value = ``
        }
        function add(){
            const divAdd = document.querySelector('.add');
            divAdd.innerHTML = `Tarefa adicionada`
            setInterval(() => {
                divAdd.innerHTML = ``
            }, 4000)
        }
    }
   
}
gastos()