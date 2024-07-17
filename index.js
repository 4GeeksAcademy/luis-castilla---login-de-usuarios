let usuarios = [];

function menuDeInicio() {
    do {
      const OPCION = prompt("Seleccione una opción:\n1. Registrarse\n2. Iniciar sesión\n3. Salir del sistema");
      const EMAIL = prompt("Ingrese su email:");
      const PASSWORD = prompt("Ingrese su contraseña:");

        switch (OPCION) {
            case '1':
                for (let usuario of usuarios) {
                    if (usuario.email === EMAIL) {
                        alert("El email ya está registrado, Vuelva a intentarlo.");
                        return;
                    }
                }
                registrarUsuario(EMAIL,PASSWORD);
                break;
            case '2':
                ingresarSeision(EMAIL,PASSWORD);
                break;
            case '3':
                alert("Saliendo del sistema.");
                break;
            default:
                alert("Opción no válida, por favor vuelva a intentarlo.");
        }
    } while (OPCION !== '3');
}
menuDeInicio();

function registrarUsuario(email,password) {
    let nuevousuario = {
        email: email,
        password: password,
        productos: []
    };
    
    usuarios.push(nuevousuario);
    alert("Registro exitoso.");
}

function ingresarSeision() {
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
    do {
        const OPCION = prompt("Seleccione una opción:\n1. Agregar producto\n2. Consultar productos\n3. Cerrar sesión");

        switch (OPCION) {
            case '1':
                const PRODUCTO = prompt("Ingrese el nombre del producto que desea agregar:");
                usuario.productos.push(PRODUCTO);
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
    } while (OPCION !== '3');
}



