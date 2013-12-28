$(function() {
    localStorage.m = (localStorage.m || "0");
    localStorage.s = (localStorage.s || "0");
    localStorage.c = (localStorage.c || "0.000");
    localStorage.log = (localStorage.log || '');

    var t, cl = $("#crono");
    var btnCambiar = $('#cambiar');
    var m = $('#minuto');
    var s = $('#segundo');
    var c = $('#censegundo');
    var cad = '', tmp_log = new Array();

    function incr() {
        localStorage.c = +localStorage.c + 0.01;
        minuto = parseInt(m.html());
        segundo = parseInt(s.html());
        censegundo = parseInt(c.html());
        if (censegundo === 99) {
            censegundo = "00";
            if (segundo === 59) {
                segundo = "00";
                minuto = minuto + 1;

            }
            else {
                segundo = segundo + 1;
                if (segundo < 10) {
                    segundo = "0" + segundo;
                }
            }
            m.html(minuto);
            s.html(segundo);
            c.html(censegundo);
            dibujar(); // Renderizo el reloj
        } else {
            censegundo = parseInt(censegundo) + 1;
            //console.log("--a-->" + censegundo);
            if (censegundo < 10) {
                censegundo = "0" + censegundo;
            }
            //console.log("---->" + censegundo);
            c.html(censegundo);
        }
    }
    function mostrar() {
        cl.html((+localStorage.c).toFixed(2));

        //dibujar(); // Renderizo el reloj
    }
    ;
    function mostrarLog() {
        /**/
        if (localStorage.log.length > 0) {
            tmp_log = localStorage.log.split(',');
        } else {
            tmp_log = new Array();
        }

        cad = '';
        //console.dir(tmp_log);
        tmp_log = tmp_log.reverse();
        $.each(tmp_log, function(key, value) {
            //console.log('%s: %s', key, value)
            cad += "<li>" + value + "</li>";
        });

        $('#crono_log').html(cad);
        /**/
    }
    function arrancar() {
        btnCambiar.html('Pause');
        $("#inicializar").prop('disabled', true);
        t = setInterval(function() {
            incr();
            mostrar()
        }, 10);
    }
    ;
    function parar() {
        btnCambiar.html('Play');
        clearInterval(t);
        t = undefined;
        if (localStorage.log.length > 0)
            localStorage.log += ',';
        localStorage.log += m.html() + ':' + s.html() + '.' + c.html();
        mostrar();
        mostrarLog();
        $("#inicializar").prop('disabled', false);
    }
    ;
    function cambiar() {
        if (!t)
            arrancar();
        else
            parar();
    }
    ;
    $('#lienzo').on('swipeLeft',cambiar);
    $("#cambiar").on('click', cambiar);
    $("#inicializar").on('swipeRight', function() {
        $("#inicializar").prop('disabled', true);
        localStorage.log = '';
        localStorage.c = "0.00";
        mostrar();
        $('#crono_log').html('');
        $('#minuto').html('0');
        $('#segundo').html('0');
    });
    $("#inicializar").on('click', function() {
        $("#inicializar").prop('disabled', true);
        localStorage.log = '';
        localStorage.c = "0.00";
        mostrar();
        $('#crono_log').html('');
        $('#minuto').html('0');
        $('#segundo').html('0');
    });
    mostrar();
    dibujar(); // Renderizo el reloj
            
});