$().ready(function(){
  let div = $("div");
  let paragrafo = $("<p> Conte�do do Paragr�fo adicionado</p>");
  div.prepend(paragrafo);
  div.append("Conteudo adicionado firetamente na Div via Jquery");
  $("#p02").text("Pedro h Portella");
  $("#p03").html("<strong>Palavra em Negrito</strong>");
});
