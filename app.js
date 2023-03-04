//Definicion Variables
var counter;
var Y = 0;
var x1 = 0;
var x2 = 0;
var err = 0;
var E = 0;
var w1 = 0;
var w2 = 0;
var y1 = 0;
var y2 = 0;
var y3 = 0;
var y4 = 0;
var nErrores = 0;
//Evaluacion de salidas

function evaluacion() {
    document.getElementById("resultados").innerHTML = "";
    if (document.getElementById("error").value == "" || document.getElementById("FactorA").value == "" || document.getElementById("peso1").value == "" || document.getElementById("peso2").value == "") {
        alert("Ingrese todos los valores porfavor.")
    } else {
        err = parseFloat(document.getElementById("error").value);
        E = parseFloat(document.getElementById("FactorA").value);
        w1 = parseFloat(document.getElementById("peso1").value);
        w2 = parseFloat(document.getElementById("peso2").value);
        counter = 0;
        for (var i = 0; i < 1000; i++) {
            nErrores = 0;
            counter++;
            y1 = (Math.tanh(1 * w1 + 1 * w2 - (err)));
            y2 = (Math.tanh(1 * w1 + -1 * w2 - (err)));
            y3 = (Math.tanh(-1 * w1 + 1 * w2 - (err)));
            y4 = (Math.tanh(-1 * w1 + -1 * w2 - (err)));
            if (y4 >= 0) {
                Y = -1;
                x1 = -1;
                x2 = -1;
                nErrores++;
            };
            if (y3 < 0) {
                Y = 1;
                x1 = -1;
                x2 = 1;
                nErrores++;
            };
            if (y2 < 0) {
                Y = 1;
                x1 = 1;
                x2 = -1;
                nErrores++;
            };
            if (y1 < 0) {
                Y = 1;
                x1 = 1;
                x2 = 1;
                nErrores++;
            }
            if (nErrores == 1) {
                w1 = w1 + (2 * E * Y * x1);
                w2 = w2 + (2 * E * Y * x2);
                err = err + (2 * E * Y * (-1));
            } else {
                break;
            }
        }
        if (nErrores >= 1) {
            alert("No se pudo entrenar la neurona con los valores ingresados, por favor ingrese otros valores e intentelo nuevamente.");
        } else {

            document.getElementById("resultados").innerHTML = "<p>La neurona fue entrenada en " + counter + " intentos y estos fueron los resultados:</p><p>y1 = " + y1 + "<br>y2 = " + y2 + "<br>y3 = " + y3 + "<br>y4 = " + y4 + "</p>";

        }
    }
}
