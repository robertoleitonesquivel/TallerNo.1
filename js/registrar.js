const hide = () => {
    setTimeout(() => {
        document.querySelector('#mensajesValidacion').style.display = 'none';
    }, 3000);

}


btnRegistrar.addEventListener('click', (e) => {
    e.preventDefault();

    let identificacion = document.querySelector('#txtIdentificacion').value;
    let nombre = document.querySelector('#txtNombre').value;
    let apellidos = document.querySelector('#txtApellidos').value;
    let telefono = document.querySelector('#txtTelefono').value;
    let email = document.querySelector('#txtEmail').value;
    let password = document.querySelector('#txtPassword').value;

    let email_regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    let telefono_regex = /^[0-9]{4}[-][0-9]{4}$/i;
    let identificacion_regex = /^[0][1-7][-][0-9]{4}[-][0-9]{4}$/i;

    if ((!identificacion || identificacion === '') || (!nombre || nombre === '') || (!apellidos || apellidos === '') || (!email || email === '') || (!password || password === '')) {
        document.querySelector('#mensajesValidacion').style.display = 'block';
        document.querySelector('#mensajesValidacion').innerHTML = '<p>Todos los campos son requeridos.</p>';
        hide();
    } else if (!identificacion_regex.test(identificacion)) {
        document.querySelector('#mensajesValidacion').style.display = 'block';
        document.querySelector('#mensajesValidacion').innerHTML = '<p>Formato de cedula invalido.</p>';
        hide();
    } else if (telefono && !telefono_regex.test(telefono)) {
        document.querySelector('#mensajesValidacion').style.display = 'block';
        document.querySelector('#mensajesValidacion').innerHTML = '<p>Formato de telefono invalido.</p>';
        hide();
    } else if (!email_regex.test(email)) {
        document.querySelector('#mensajesValidacion').style.display = 'block';
        document.querySelector('#mensajesValidacion').innerHTML = '<p>Por favor ingrese un email válido.</p>';
        hide();
    }else{
        document.querySelector('#mensajesExito').style.display = 'block';
        document.querySelector('#mensajesExito').innerHTML = '<p>Validaciones exitosas.</p>';
        form.reset();
    }
});