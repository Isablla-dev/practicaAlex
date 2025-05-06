document.getElementById('userForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    //obtener los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellidos').value;
    const edad = document.getElementById('edad').value;
    const telefono = document.getElementById('telefono').value;

    try{
        //enviar datos al servidor 
        const response = await fetch('http://localhost:3000/api/usuarios', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify({ nombre, appelidos, edad, telefono })
        });
    }catch(error){

    }
})