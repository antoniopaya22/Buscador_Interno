"use strict";
class Indexador {

    constructor() {

    }

    readFiles() {
        var webs = ["index.html", "aficiones.html", "github.html", "multimedia.html", "sew.html"];
        this.indexar(webs, this);
    }
    addDataToTable(data, url, tag) {
        data = data.split("<" + tag + ">");
        for (let i = 1; i < data.length; i++) {
            var datos = data;
            datos = datos[i].split("</" + tag + ">")[0];
            $("#tabla").html($("#tabla").html() + "<tr><td><a href='" + url + "'>" + datos + "</a></td></tr>");
        }
    }

    indexar(webs,indexador) {
        for (let i = 0; i < webs.length; i++) {
            $.get(webs[i], function (data) {
                var datos = "";
                datos = data.split("<main>")[1];
                datos = datos.split("</main>")[0];
                indexador.addDataToTable(datos, webs[i], "h2");
                indexador.addDataToTable(datos, webs[i], "h3");
                indexador.addDataToTable(datos, webs[i], "h4");
                //indexador.addDataToTable(datos, webs[i], "p");
            }, "html");
        }
    }

    
}

var index = new Indexador();
index.readFiles()
