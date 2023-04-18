const hide = () => {
    setTimeout(() => {
        document.querySelector('#mensajesValidacion').style.display = 'none';
    }, 3000);

}


btnEnviar.addEventListener('click', (e) => {
    e.preventDefault();

    let identificacion = document.querySelector('#txtIdentificacion').value;
    let paciente = document.querySelector('#txtPaciente').value;
    let desc = document.querySelector('#txtDesc').value;

    let identificacion_regex = /^[0][1-7][-][0-9]{4}[-][0-9]{4}$/i;

    if ((!identificacion || identificacion === '') || (!paciente || paciente === '') || (!desc || desc === '')) {
        document.querySelector('#mensajesValidacion').style.display = 'block';
        document.querySelector('#mensajesValidacion').innerHTML = '<p>Todos los campos son requeridos.</p>';
        hide();
    } else if (!identificacion_regex.test(identificacion)) {
        document.querySelector('#mensajesValidacion').style.display = 'block';
        document.querySelector('#mensajesValidacion').innerHTML = '<p>Formato de cedula invalido.</p>';
        hide();
    } else {
        document.querySelector('#mensajesExito').style.display = 'block';
        document.querySelector('#mensajesExito').innerHTML = '<p>Validaciones exitosas.</p>';
        form.reset();
    }
});