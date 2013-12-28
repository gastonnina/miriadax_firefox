function retornarLienzo(x) {
    var canvas = document.getElementById(x);
    //var canvas = $('#'+x);
    if (canvas.getContext) {
        var lienzo = canvas.getContext("2d");
        return lienzo;
    } else
        return false;
}

function dibujar() {

    var lienzo = retornarLienzo('lienzo');
    //console.dir("---->" + lienzo);
    if (lienzo) {

        // Valor del reloj
        var minuto = document.getElementById("minuto").innerHTML;
        var segundo = document.getElementById("segundo").innerHTML;

        // Longitudes de las manecillas del reloj
        var minutero = 60;
        var segundero = 80;
        var radio = 100;

        // Defino lí­mites en pí­xeles
        var minx = 0;
        var maxx = 250;
        var miny = 0;
        var maxy = 250;

        // Centro del recuadro
        cx = minx + (maxx - minx) / 2;
        cy = miny + (maxy - miny) / 2;

        // Borrar lienzo
        lienzo.clearRect(0, 0, 250, 250);
        lienzo.strokeStyle = "rgb(0,0,0)";
        lienzo.lineWidth = 1;

        // Dibujar el cí­rculo del reloj
        lienzo.beginPath();
        lienzo.arc(cx, cy, radio, 0, Math.PI * 2, false);
        lienzo.stroke();

        // Dibujar el centro de las manecillas
        lienzo.beginPath();
        lienzo.arc(cx, cy, 5, 0, Math.PI * 2, false);
        lienzo.fill();

        // Dibujar el minutero
        lienzo.beginPath();
        lienzo.lineWidth = 2;
        lienzo.moveTo(cx, cy); // posiciono el lápiz en el centro del recuadro
        angulo = 2 * Math.PI * (minuto / 60); // calculo el ángulo del minutero
        // Calculo los desplazamientos para el minutero
        dx = minutero * Math.sin(angulo);
        dy = -minutero * Math.cos(angulo);
        lienzo.lineTo(cx + dx, cy + dy);
        lienzo.stroke();
        lienzo.lineWidth = 1;

        // Dibujar el segundero
        lienzo.beginPath();
        lienzo.moveTo(cx, cy); // posiciono el lápiz en el centro del recuadro
        angulo = 2 * Math.PI * (segundo / 60); // calculo el ángulo del segundero
        // Calculo los desplazamientos para el segundero
        dx = segundero * Math.sin(angulo);
        dy = -segundero * Math.cos(angulo);
        lienzo.lineTo(cx + dx, cy + dy);
        lienzo.stroke();

        // Dibujar los marcadores cada 1 minuto
        lienzo.beginPath();
        for (i = 0; i < 60; i += 1) {
            lienzo.moveTo(cx, cy);
            angulo = 2 * Math.PI * (i / 60);
            px = (radio - 5) * Math.sin(angulo);
            py = -(radio - 5) * Math.cos(angulo);
            lienzo.moveTo(cx + px, cy + py);
            dx = 5 * Math.sin(angulo);
            dy = -5 * Math.cos(angulo);
            lienzo.lineTo(cx + px + dx, cy + py + dy);
        }
        lienzo.stroke();

        // Dibujar los marcadores cada 5 minutos
        lienzo.beginPath();
        lienzo.lineWidth = 2;
        //lienzo.strokeStyle="rgb(0,0,0)";
        for (i = 0; i < 60; i += 5) {
            lienzo.moveTo(cx, cy);
            angulo = 2 * Math.PI * (i / 60);
            px = (radio - 5) * Math.sin(angulo);
            py = -(radio - 5) * Math.cos(angulo);
            lienzo.moveTo(cx + px, cy + py);
            dx = 5 * Math.sin(angulo);
            dy = -5 * Math.cos(angulo);
            lienzo.lineTo(cx + px + dx, cy + py + dy);
        }
        lienzo.stroke();
    }
}