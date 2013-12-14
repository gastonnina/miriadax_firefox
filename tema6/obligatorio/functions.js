/* 
    Created on : Dec 14, 2013, 5:04:37 PM
    Author     : Gaston Nina <gastonnina@gmail.com>
*/
// Declaracion un objeto
var glo = new Object();
glo = {
    /**
     * Variable de retorna de tabla
     * @type String, html
     */
    cad: '',
    /**
     * Variable manejada para variables
     * @type String, variable
     */
    v_class: 'no_str',
    /**
     * Recogemos el valor en una variable para no sobre cargar la funcion
     * @type @exp;window@pro;location
     */
    loc: window.location,
    /**
     * Funcion que comprueba si un elemento es scring o no
     * @param {string, obj} ele, objeto a evaluar
     * @returns {String}, Elemento en caso de ser string o texto por defecto
     */
    isString: function(ele) {
        if (typeof (ele) === 'string') {
            this.v_class = 'str';
            return ele;
        } else {
            this.v_class = 'no_str';
            return 'no es imprimible';
        }
    },
    /**
     * Funcion que dibuja la tabla por metodo For In
     * @returns {undefined}
     */
    drawTable: function() {
        this.cad += '<table id="tabla_2">';
        for (ele  in this.loc) {
            // Consultamos sobre si el elmento es un string
            this.text_tring = this.isString(this.loc[ele]);
            this.cad += '<tr><td class="col1">' + ele + '</td>\n\
                <td class="' + this.v_class + '">' + this.text_tring + '</td>';
        }
        this.cad += '</table>';
        // Asignamos la cadena html al div
        document.getElementById('tabla_dom_2').innerHTML = this.cad;
    }
};

// Si tienen habilitado Firebug aqui pueden ver sus valores
//console.dir(glo.loc);
window.onload = function() {
    console.time('Metodo For In');
    glo.drawTable();
    console.timeEnd('Metodo For In');
};