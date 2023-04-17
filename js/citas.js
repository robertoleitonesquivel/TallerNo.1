const hide = () => {
    setTimeout(() => {
        document.querySelector('#mensajesValidacion').style.display = 'none';
    }, 3000);

}


btnCitas.addEventListener('click', (e) => {
    e.preventDefault();

    let tipo = document.querySelector('#txtTipoServicio').value;
    let fecha = document.querySelector('#txtFecha').value;
   

    if ((!tipo || tipo === '') || (!fecha || fecha === '')) {
        document.querySelector('#mensajesValidacion').style.display = 'block';
        document.querySelector('#mensajesValidacion').innerHTML = '<p>Todos los campos son requeridos.</p>';
        hide();
    }else{
        document.querySelector('#mensajesExito').style.display = 'block';
        document.querySelector('#mensajesExito').innerHTML = '<p>Validaciones exitosas.</p>';
        form.reset();
    }
});