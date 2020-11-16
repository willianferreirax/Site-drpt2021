document.querySelector('form').addEventListener('submit', Exibir)

function Calcular(){

}

function Exibir(evento){
    evento.preventDefault()

    Calcular();

    const result = document.querySelector('#result')



    const table = document.createElement('table')

    const thead = document.createElement('thead')

    const tr = document.createElement('tr')

    const th = document.createElement('th')
    th.textContent = 'Nome'

    tr.appendChild(th)

    th.textContent = 'Email'

    tr.appendChild(th)

    thead.appendChild(tr)

    table.appendChild(thead)

    result.appendChild(table)
}