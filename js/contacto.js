const hide = () => {
    setTimeout(() => {
        document.querySelector('#mensajesValidacion').style.display = 'none';
    }, 3000);

}


btnEnviar.addEventListener('click', (e) => {
    e.preventDefault();

    let email = document.querySelector('#txtEmail').value;
    let mensaje = document.querySelector('#txtMensaje').value;

    let regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if ((!email || email === '') || (!mensaje || mensaje === '')) {
        document.querySelector('#mensajesValidacion').style.display = 'block';
        document.querySelector('#mensajesValidacion').innerHTML = '<p>Todos los campos son requeridos.</p>';
        hide();
    } else if (!regex.test(email)) {
        document.querySelector('#mensajesValidacion').style.display = 'block';
        document.querySelector('#mensajesValidacion').innerHTML = '<p>Ingrese un email valido.</p>';
        hide();
    } else {
        document.querySelector('#mensajesExito').style.display = 'block';
        document.querySelector('#mensajesExito').innerHTML = '<p>Validaciones exitosas.</p>';
        form.reset();
    }
});