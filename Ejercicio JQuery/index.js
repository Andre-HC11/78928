/* #btnEventos id con el cual se asigna al botón para que de acuerdo a los clics realize la función de ver o de ocultar los parrafos */
$(document).ready(function() {
    $("#btnEventos").dblclick(function() { /* evento doble clic*/
        $("p").show().css({
            "background-color": "cyan",
            "font-size": "20px"
        }); /* mostramos texto y cambiamos fondo con css*/
        /*Un solo elemento css*/
        /* .css({"background-color", "cyan");*/
        /*Multiples elementos css*/
        /*.css({"background-color": "yellow", "font-size": "200%"});*/
    });
});


$(document).ready(function() {
    $("#btnEventos").click(function() { /* Evento clic*/
        $("p").hide(); /* ocultamos etiquetas P o parrafos al dar clic*/
    });
});

$(document).ready(function() {
    $("#btnRestaurar").click(function() { /* Evento clic*/
        location.reload(); /* dejamos la página como al inicio*/
    });
});