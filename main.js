const form = document.getElementById('form-validar');


function validanumero(valorA, valorB) {
    return valorB > valorA
}

form.addEventListener('submit', function(e) {
    let formEvalido = false;
    e.preventDefault();
    const valorA = document.getElementById('campo-A');
    const valorB = document.getElementById('campo-B');
    const mensagemSucesso = `Formulário validado com sucesso! <b>Valor de A: ${valorA.value}</b> é menor que o <b>Valor de B: ${valorB.value}</b>`;
    const mensagemErro = `Formulário negado! <b>Valor de A: ${valorA.value}</b> é maior que o <b>Valor de B: ${valorB.value}</b>`;


    formEvalido = validanumero(valorA.value, valorB.value)
    if (formEvalido) {
        const containerMensagemSucesso =  document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        document.querySelector('.error-message').style.display = 'none';
        valorA.style.border = 'none';
        valorB.style.border = 'none';

        valorA.value = '';
        valorB.value = '';
    } else {
        const containerMensagemErro =  document.querySelector('.error-message');
        containerMensagemErro.innerHTML = mensagemErro;
        valorA.style.border = '2px solid red';
        valorB.style.border = '2px solid red';
        document.querySelector('.error-message').style.display = 'block';
        document.querySelector('.success-message').style.display = 'none';
        

        valorA.value = '';
        valorB.value = '';
    }
})

