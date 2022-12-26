function PoneTuNombre (){
    let nombre = '';
    while(nombre === ''){
        nombre = prompt("¿como te llamas?");

        if (nombre){
            alert("Bienvenido" + nombre);
        }else{
            alert("dato incorrecto");
        }
    }

}

let vainilla, chocolate, dleche, frutilla;


obtieneNombrePersona();
obtieneNombreHelado();
imprimeNombreHelado();


function obtieneNombreHelado(){
    for (let kghelado = 0;
         kghelado < 2;
         kghelado++) {

        switch (kghelado) {
            case 1:
                vainilla = prompt('Helado de vainilla');
                break;

            case 2:
                chocolate = prompt('Helado de chocolate');
                break;

            case 3:
                dleche = prompt('Helado de dulce de leche');
                break;

            case 4:
                frutilla = prompt('Helado de frutilla al agua');
                break;
        }
    }
}
function imprimeNombreHelado (){
    for (let cantidadDeHelado = 0;
         cantidadDeHelado < 4;
         cantidadDeHelado++) {

        switch (cantidadDeHelado){
            case 1 :
                alert('vainilla: ' + vainilla);
                break;
            case 2 :
                alert('chocolate: ' + chocolate);
                break;
            case 3 :
                alert('dleche: ' + dleche);
                break;
            case 4 :
                alert('frutilla: ' + frutilla);
                break;
        }
    }
}
