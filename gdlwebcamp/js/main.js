var api = 'AIzaSyDWMYlUbPi7ULIDre_ndTPCMmUjK6TIpR0';

  function initMap() {
    var latlng = {
      lat: -33.4431238,
      lng: -70.6519881
    };
    var map = new google.maps.Map(document.getElementById('mapa'), {
      'center': latlng,
      'zoom': 14,
      'mapTypeId': google.maps.MapTypeId.ROADMAP
    });

    var contenido = '<h2>GDLWEBCAMP</h2>'+
                    '<p>Del 10 al 12 de Diciembre</p>'+
                    '<p>Visitanos!</p>';

    var informacion = new google.maps.InfoWindow({
      content: contenido
    });

    var marker = new google.maps.Marker({
      position: latlng,
      map: map,
      title: 'GDLWEBCAMP'
    });

    marker.addListener('click', function() {
      informacion.open(map, marker);
    });
  }

(function() {
  'use strict';

  var regalo = document.getElementById('regalo');
  document.addEventListener('DOMContentLoaded', function() {

    // CAMPOS DATOS USUARIO
    var nombre = document.getElementById('nombre');
    var apellido = document.getElementById('apellido');
    var email = document.getElementById('email');

    // CAMPOS PASES
    var pase_dia = document.getElementById('pase_dia');
    var pase_dosdias = document.getElementById('pase_dosdias');
    var pase_completo = document.getElementById('pase_completo');

    // BOTONES Y DIVS
    var calcular = document.getElementById('calcular');
    var errordiv = document.getElementById('error');
    var botonregistro = document.getElementById('btnregistro');
    var lista_productos = document.getElementById('lista-productos');
    var suma = document.getElementById('suma-total');

    // EXTRAS

    var camisas = document.getElementById('camisa_evento');
    var etiquetas = document.getElementById('etiquetas');

    calcular.addEventListener('click', calcularmontos);

    pase_dia.addEventListener('input', mostrardias);
    pase_dosdias.addEventListener('input', mostrardias);
    pase_completo.addEventListener('input', mostrardias);

    nombre.addEventListener('blur', validarcampos);
    apellido.addEventListener('blur', validarcampos);
    email.addEventListener('blur', validarcampos);
    email.addEventListener('blur', validarmail);

    function validarcampos() {
      if (this.value === '') {
        errordiv.style.display = 'block';
        errordiv.innerHTML = 'Este campo es obligatorio';
        this.style.border = '1px solid red';
        errordiv.style.border = '1px solid red';
      } else {
        errordiv.style.display = 'none';
        this.style.border = '1px solid #cccccc';
      }
    }

    function validarmail() {
      if (this.value.indexOf('@') > -1) {
        errordiv.style.display = 'none';
        this.style.border = '1px solid #cccccc';
      } else {
        errordiv.style.display = 'block';
        errordiv.innerHTML = 'Email no válido';
        this.style.border = '1px solid red';
        errordiv.style.border = '1px solid red';
      }
    }

    function calcularmontos(event) {
      event.preventDefault();
      if (regalo.value === '') {
        alert('Debes seleccionar un regalo');
        regalo.focus();
      } else {
        var boletodia = parseInt(pase_dia.value, 10) || 0,
            boleto2dias = parseInt(pase_dosdias.value, 10) || 0,
            boletocompleto = parseInt(pase_completo.value, 10) || 0,
            cantcamisas = parseInt(camisas.value, 10) || 0,
            cantetiquetas = parseInt(etiquetas.value, 10) || 0;

        var montototal = (boletodia * 30) + (boleto2dias * 45) + (boletocompleto * 50) + ((cantcamisas * 10) * .93) + (cantetiquetas * 2);

        var listadoproductos = [];

        if (boletodia >= 1) {
        listadoproductos.push(boletodia + ' pases por días');
        }
        if (boleto2dias >= 1) {
        listadoproductos.push(boleto2dias + ' pases por 2 días');
        }
        if (boletocompleto >= 1) {
        listadoproductos.push(boletocompleto + ' pases completos');
        }
        if (cantcamisas >= 1) {
        listadoproductos.push(cantcamisas + ' camisas');
        }
        if (cantetiquetas >= 1) {
        listadoproductos.push(cantetiquetas + ' etiquetas');
        }

        lista_productos.style.display = 'block';

        lista_productos.innerHTML = '';
        for (var i = 0; i < listadoproductos.length; i++) {
          lista_productos.innerHTML += listadoproductos[i] + '<br/>';
        }
        suma.innerHTML = '$ ' + montototal.toFixed(2);

      }
    }

    function mostrardias() {
      var boletodia = parseInt(pase_dia.value, 10) || 0,
          boleto2dias = parseInt(pase_dosdias.value, 10) || 0,
          boletocompleto = parseInt(pase_completo.value, 10) || 0;

      var diaselegidos = [];

      if (boletodia > 0) {
        diaselegidos.push('viernes');
      }
      if (boleto2dias > 0) {
        diaselegidos.push('viernes', 'sabado');
      }
      if (boletocompleto > 0) {
        diaselegidos.push('viernes', 'sabado', 'domingo');
      }
      for (var i = 0; i < diaselegidos.length; i++) {
          document.getElementById(diaselegidos[i]).style.display = 'block';
      }
      var dias = document.querySelectorAll('.contenido-dia');
      if (diaselegidos.length == 0) {
        for (var i = 0; i < dias.length; i++) {
          dias[i].style.display = 'none';
        }
      }
    }


  }); // DOM CONTENT LOADED
})();
