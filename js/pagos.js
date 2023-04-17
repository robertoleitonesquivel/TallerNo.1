const hide = () => {
    setTimeout(() => {
        document.querySelector('#mensajesValidacion').style.display = 'none';
    }, 3000);

}


btnPagos.addEventListener('click', (e) => {
    e.preventDefault();

    let card = document.querySelector('#txtCarNumber').value;
    let fecha = document.querySelector('#txtExpirationDate').value;
    let code = document.querySelector('#txtSecurityCode').value;

    let card_regex = /^[0-9]{16}$/i;
    let fecha_regex = /^[0-9]{2}[/][0-9]{2}$/i;
    let code_regex = /^[0-9]{3}$/i;

    if ((!card || card === '') || (!fecha || fecha === '') || (!code || code === '')) {
        document.querySelector('#mensajesValidacion').style.display = 'block';
        document.querySelector('#mensajesValidacion').innerHTML = '<p>Todos los campos son requeridos.</p>';
        hide();
    } else if (!card_regex.test(card)) {
        document.querySelector('#mensajesValidacion').style.display = 'block';
        document.querySelector('#mensajesValidacion').innerHTML = '<p>Formato de tarjeta invalido.</p>';
        hide();
    } else if (!fecha_regex.test(fecha)) {
        document.querySelector('#mensajesValidacion').style.display = 'block';
        document.querySelector('#mensajesValidacion').innerHTML = '<p>Formato de fecha invalido.</p>';
        hide();
    } else if (!code_regex.test(code)) {
        document.querySelector('#mensajesValidacion').style.display = 'block';
        document.querySelector('#mensajesValidacion').innerHTML = '<p>Codigo invalido.</p>';
        hide();
    }else{
        document.querySelector('#mensajesExito').style.display = 'block';
        document.querySelector('#mensajesExito').innerHTML = '<p>Validaciones exitosas.</p>';
        form.reset();
    }
});