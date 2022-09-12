function rodandohr() {
    var display = document.getElementById("display");

    var horario = new Date();
    var hora = atualizandotp(horario.getHours()) + ":" + atualizandotp(horario.getMinutes()) + ":" + atualizandotp(horario.getSeconds());

    display.textContent = (hora);
}

function atualizandotp(numero) {
    switch (numero) {
        case 0 :
            numero = "0" + numero;
            break;
        case 1:
            numero = "0" + numero;
            break;
        case 2:
            numero = "0" + numero;
            break;
        case 3:
            numero = "0" + numero;
            break;
        case 4:
            numero = "0" + numero;
            break;
        case 5:
            numero = "0" + numero;
            break;
        case 6:
            numero = "0" + numero;
            break;
        case 7:
            numero = "0" + numero;
            break;
        case 8:
            numero = "0" + numero;
            break;
        case 9:
            numero = "0" + numero;
        default:
            break;
    }
    return numero;
}

rodandohr();
setInterval(rodandohr, 1000);
