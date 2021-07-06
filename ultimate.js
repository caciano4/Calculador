function calcular(tipo, valor) {
    if (tipo === 'acao') {
        if (valor === 'c') {
            document.getElementById('resultado').value = ''
        }
        if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {
            document.getElementById('resultado').value += valor
        }
        if (valor === '=') {
            var valor_campo = eval(document.getElementById('resultado').value)
            document.getElementById('resultado').value = valor_campo
        }
        // if(o valor é no começo){
        //     então coloque um ponto antes do 0 no resultado
        // }
    }
    else if (tipo === 'valor') {
        document.getElementById('resultado').value += valor
    }
}