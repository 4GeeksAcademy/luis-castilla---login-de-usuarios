const usuarios = [];

function inicio () {
    let opcion;
    do {
        opcion = prompt("seleccione una opcion:\n1. registrarse\n2. iniciar sesion\n3. salir del sistema");

        switch (opcion) {
            case "1":
                registrar(email,password);
                break;
            case "2":
                ingresar(email,password);
                break;
            case "3":
                alert("saliendo del sistema");
                break;
            default:
                alert("opcion invalidad, vuelva a intentarlo")
                break;
        }
    } while (opcion !== "3");
}
inicio();

let email = prompt("por favor ingrese su correo");
let password = prompt("por favor ingrese su contraseña");

function registrar (email,password) {

    for (let usuario of usuarios) {
        if ( usuario.email === email) {
            alert("el usuario ya se encuentra registrado !")
            return;
        }
    }

    let nuevousuario = {
        email: email,
        password: password,
        productos: []
    };

    usuario.push(nuevousuario);
    alert("el usuario a sido registrado con exito !!");
}

function ingresar(email,password) {

    for (let usuario of usuarios) {
        if ( usuario.email === email && usuario.password === password ) {
            alert("bienvenido al sistema");
            gestiondeproductos(usuario);
            return;
        }
    }
    alert("usuario o contraseña incorrectos, vuelva a intentarlo");
}

function gestiondeproductos(usuario) {
    let opcion;
    do {
        opcion = prompt("elija una de las opciones:\n1. ingresar productos\n2. consultar producto\n3. salir del sistema.");
        switch (opcion) {
            case "1":
                let producto = prompt("por favor ingrese el producto que desea agregar");
                usuario.producto.push(producto);
                alert("el producto fue agregado con exito");
                break;
            case "2":
                if ( usuario.productos.length === 0 ) {
                    alert("no se encontraron productos en la lista")
                }
                    alert("productos:\n" + usuario.productos.join("\n"));
                break;
            case "3":
                alert("saliendo del sistema.");
                break;
        
            default:
                alert("opcion invalidad, por favor vuelva a intentarlo");
                break;
        }
    } while (opcion !== "3");
}

