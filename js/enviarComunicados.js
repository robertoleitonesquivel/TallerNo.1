const hide = () => {
    setTimeout(() => {
        document.querySelector('#mensajesValidacion').style.display = 'none';
    }, 3000);

}


btnEnviar.addEventListener('click', (e) => {
    e.preventDefault();

    let asunto = document.querySelector('#txtAsunto').value;
    let mensaje = document.querySelector('#txtMensaje').value;

    if ((!asunto || asunto === '') || (!mensaje || mensaje === '')) {
        document.querySelector('#mensajesValidacion').style.display = 'block';
        document.querySelector('#mensajesValidacion').innerHTML = '<p>Todos los campos son requeridos.</p>';
        hide();
    } else {
        document.querySelector('#mensajesExito').style.display = 'block';
        document.querySelector('#mensajesExito').innerHTML = '<p>Validaciones exitosas.</p>';
        form.reset();
    }
});