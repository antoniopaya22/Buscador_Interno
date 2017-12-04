function readFiles()
{
    var webs = ["index.html","aficiones.html","github.html","multimedia.html","sew.html"];
    indexar(webs);
}

function indexar(webs){
  for (let i = 0; i < webs.length; i++) {
    $.get(webs[i], function(data) {
        var datos = "";
        datos = data.split("<main>")[1];
        datos = datos.split("</main>")[0];
        addDataToTable(datos,webs[i],"h2");
        addDataToTable(datos,webs[i],"h3");
        addDataToTable(datos,webs[i],"h4");
    }, "html");
  }
}

function addDataToTable(data,url,tag){
  data = data.split("<"+tag+">");
  for (let i = 1; i < data.length; i++) {
    datos = data;
    datos = datos[i].split("</"+tag+">")[0];
    $("#tabla").html($("#tabla").html()+"<tr><td><a href='"+url+"'>"+datos+"</a></td></tr>");
  }
}

readFiles()
