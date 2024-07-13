const usuarios = [];

function inicio() {
    let opcion;
    do {
      opcion = prompt("Seleccione una opción:\n1. Registrarse\n2. Iniciar sesión\n3. Salir del sistema");

        switch (opcion) {
            case '1':
                registrar();
                break;
            case '2':
                ingresar();
                break;
            case '3':
                alert("Saliendo del sistema.");
                break;
            default:
                alert("Opción no válida, por favor vuelva a intentarlo.");
        }
    } while (opcion !== '3');
}
inicio();

function registrar() {

    let email = prompt("Ingrese su email:");
    let password = prompt("Ingrese su contraseña:");

    for (let usuario of usuarios) {
        if (usuario.email === email) {
            alert("El email ya está registrado, Vuelva a intentarlo.");
            return;
        }
    }

    let nuevousuario = {
        email: email,
        password: password,
        productos: []
    };
    
    usuarios.push(nuevousuario);
    alert("Registro exitoso.");
}

function ingresar() {

    let email = prompt("Ingrese su email:");
    let password = prompt("Ingrese su contraseña:");

    for (let usuario of usuarios) {
        if (usuario.email === email && usuario.password === password) {
            alert("Bienvenido al sistema.");
            gestiondeproductos(usuario);
            return;
        }
    }

    alert("Usuario o contraseña incorrectos. Vuelva a intentarlo");
}

function gestiondeproductos(usuario) {
    let opcion;
    do {
        opcion = prompt("Seleccione una opción:\n1. Agregar producto\n2. Consultar productos\n3. Cerrar sesión");

        switch (opcion) {
            case '1':
                let producto = prompt("Ingrese el nombre del producto que desea agregar:");
                usuario.productos.push(producto);
                alert("Producto agregado.");
                break;
            case '2':
                if (usuario.productos.length === 0) {
                    alert("No se encontraron productos en la lista.");
                } else {
                    alert("Productos: \n" + usuario.productos.join("\n"));
                }
                break;
            case '3':
                alert("Sesión cerrada.");
                break;
            default:
                alert("Opción no válida. Vuelva a intentarlo");
        }
    } while (opcion !== '3');
}



