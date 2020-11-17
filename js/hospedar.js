document.querySelector('form').addEventListener('submit', Exibir)

const campos = [
    document.querySelector('#name'),
    document.querySelector('#email'),
    document.querySelector('#birthday'),
    document.querySelector('#quantity'),
    document.querySelector('#trip_date')   
]

function Calcular(){

}

function Exibir(evento){
    evento.preventDefault()

    Calcular();

    const result = document.querySelector('#result')
    
    const table = document.createElement('table')
    table.id = 'tabela'

    const thead = document.createElement('thead')
    thead.id = 'cabecalho'

    if(!document.querySelector('#cabecalho')){
        const tr = document.createElement('tr')
        const tn = ['Nome','Email','Data de nascimento','Quantidade de pessoas','Data da viagem','Local de hospedagem','valor total da hospedagem','valor total do translado','valor final']

        tn.forEach((dados)=>{
            const th = document.createElement('th')
            th.textContent = dados
            tr.appendChild(th)
        })

        thead.appendChild(tr)

        table.appendChild(thead)
    }
    
    const tbody = document.createElement('tbody')
    const tr = document.createElement('tr')

    campos.forEach((dados) => {
        
        const td = document.createElement('td')

        td.textContent = dados.value

        tr.appendChild(td)

    })

    const td = document.createElement('td')

    td.textContent = document.querySelector('input[name=place]:checked').value

    tr.appendChild(td)

    tbody.appendChild(tr)

    table.appendChild(tbody)

    result.appendChild(table)
}