document.querySelector('form').addEventListener('submit', Exibir)

const campos = [
    document.querySelector('#name'),
    document.querySelector('#email'),
    document.querySelector('#birthday'),
    document.querySelector('#quantity'),
    document.querySelector('#trip_date'),
]

function Calcular(){
     let val = campos[3].value * 9500
     campos.push(val)
     val = campos[3].value * 33500
     campos.push(val)
     val = campos[6] + campos[7]
     campos.push(val)
}

function DateValidation(){
    if(Date.now()-Date.parse(campos[2].value) < 568080000000){
        alert('O responsável deve ser maior de idade (18 anos)')
        return true;
    }

    if(Date.parse(campos[4].value) < Date.now()){
        alert('Não é possível marcar a viagem para a data escolhida\n (A data já passou)')
        return true;
    }
}

function Exibir(evento){
    evento.preventDefault()

    if(DateValidation()){
        return;
    }

    campos.push(document.querySelector('input[name=place]:checked'))
    Calcular();

    const result = document.querySelector('#result')
    
    let table = 0;
    let tbody =0;

    if(!document.querySelector('thead')){
        table = document.createElement('table')
        table.classList.add('table','table-hover','text-center','table-borderless','shadow')

        const thead = document.createElement('thead')
        thead.classList.add('bg-primary','text-warning')

        const tr = document.createElement('tr')

        const tn = ['Nome do responsável','Email do responsável','Data de nascimento','Quantidade de pessoas','Data da viagem','Local de hospedagem','Valor total da hospedagem','Valor total do translado','Valor final']

        tn.forEach((dados)=>{
            const th = document.createElement('th')
            th.textContent = dados
            tr.appendChild(th)
        })

        thead.appendChild(tr)

        table.appendChild(thead)

        tbody = document.createElement('tbody')

        table.appendChild(tbody)
    }
    else{
        table = document.querySelector('table')
        tbody = document.querySelector('tbody')
    }
    
    const tr = document.createElement('tr')

    campos.forEach((dados) => {
        
        const td = document.createElement('td')

        if(dados instanceof HTMLElement){
            td.textContent = dados.value
        }
        else{
            td.textContent = dados
        }
        tr.appendChild(td)

    })

    tbody.appendChild(tr)
  
    table.appendChild(tbody)
    
    result.appendChild(table)

    this.reset()
    campos.splice(5,8)
}