function function5(){
    const idprefactura = parseInt(document.getElementById('idprefactura').value)
    //console.log(typeof(idprefactura));
    cinco = idprefactura / 100 * 5
    const personalizado = document.getElementById("idpersonalizado").innerHTML=cinco
    return cinco
  
}

function function10(){
    const idprefactura = parseInt(document.getElementById('idprefactura').value)
    //console.log(typeof(idprefactura));
    cinco = idprefactura / 100 * 10
    const personalizado = document.getElementById("idpersonalizado").innerHTML=cinco
    return cinco
  
}

function function15(){
    const idprefactura = parseInt(document.getElementById('idprefactura').value)
    //console.log(typeof(idprefactura));
    cinco = idprefactura / 100 * 15
    const personalizado = document.getElementById("idpersonalizado").innerHTML=cinco
    return cinco
}

function calculando(){
    const idprefactura = parseFloat(document.getElementById('idprefactura').value)
    const suma = idprefactura + cinco
    const resultado = document.getElementById("idresultado").innerHTML=suma
    
}