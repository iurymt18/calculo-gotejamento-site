function cair(){
    var gota = document.getElementById('gota')
    gota.classList.add('gota-animation')
    setTimeout(()=>{
        gota.classList.remove('gota-animation')

    },500)

    }
   

function calcular(){
    var option = document.getElementById('option').value
    if(option=='Horas'){
        var tempo = Number(document.getElementById('tempo').value)
        var volume =Number(document.getElementById('volume').value)
        var resultado = (volume) / (3 * tempo)
        var resultadomg = resultado * 3
        var res = document.getElementById('res').innerHTML = resultado.toFixed(2) + ' Gotas por minuto <br>'+ resultadomg.toFixed(2) +' Microgotas por minuto'

    }else{
        var tempo = Number(document.getElementById('tempo').value)
        var volume =Number(document.getElementById('volume').value)
        var resultado = (volume * 20) / tempo
        var resultadomg = resultado * 3
        var res = document.getElementById('res').innerHTML = resultado.toFixed(2) + ' Gotas por minuto <br>'+ resultadomg.toFixed(2) +' Microgotas por minuto'

    }
    
    cair()    
        
}