function Activar(){
    var windows = document.getElementById('windowsIcon');
    var Tablero = document.getElementById('Tablero');
    var windowsIcon2 = document.getElementById('windowsIcon2');

    Tablero.classList.add("activar");
    windows.classList.add("desactivar");
    windowsIcon2.classList.add("activar");
}
function Desactivar(){
    var windows = document.getElementById('windowsIcon');
    var Tablero = document.getElementById('Tablero');
    var windowsIcon2 = document.getElementById('windowsIcon2');

    Tablero.classList.remove("activar");
    windows.classList.remove("desactivar");
    windowsIcon2.classList.remove("activar");
}
function OpenWindow(){
    var Carpeta = document.getElementById('Carpeta');
    var CarpetaS = document.getElementById('CarpetaS');
    var Window = document.getElementById('Window');

    Carpeta.classList.add("desactivar");
    CarpetaS.classList.add("activar");
    Window.classList.add("activar");
}
function CloseWindow(){
    var Carpeta = document.getElementById('Carpeta');
    var CarpetaS = document.getElementById('CarpetaS');
    var Window = document.getElementById('Window');

    Carpeta.classList.remove("desactivar");
    CarpetaS.classList.remove("activar");
    Window.classList.remove("activar");
}
function maximizar(){
    var botonMaximizar = document.getElementById('maximizar');
    var Max = document.getElementById('Max');
    var Window = document.getElementById('Window');

    Window.classList.add("maximizar");
    Max.classList.add("activar");
    botonMaximizar.classList.add("desactivar");
}
function minimizar(){
    var botonMaximizar = document.getElementById('maximizar');
    var Max = document.getElementById('Max');
    var Window = document.getElementById('Window');

    Window.classList.remove("maximizar");
    Max.classList.remove("activar");
    botonMaximizar.classList.remove("desactivar");
}