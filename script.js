function add() {
  var a = document.getElementById("add");
  var b = document.getElementById("menos");
  var x = document.getElementById("add-contato");
  if (x.style.display === "block") {    
    x.style.display = "none";
    b.style.display = "none"; 
    a.style.display = "block"; 
    
  } else {
    x.style.display = "block";    
    b.style.display = "block";    
    a.style.display = "none";    
  }
}

function menos() {
  var a = document.getElementById("add");
  var b = document.getElementById("menos");
  var x = document.getElementById("add-contato");
  if (x.style.display === "none") {    
    x.style.display = "block";
    b.style.display = "block"; 
    a.style.display = "none"; 
    
  } else {
    x.style.display = "none";    
    b.style.display = "none";    
    a.style.display = "block";    
  }
}

function redefinir() {
  var r = document.getElementById("redefinir-config");
  if (r.style.display === "block") {    
    r.style.display = "none";    
  }
  else {
    r.style.display = "block";     
  }
}

function bateria() {
  var sb = document.getElementById("bateria-config");
  if (sb.style.display === "block") {    
    sb.style.display = "none";    
  }
  else {
    sb.style.display = "block";     
  }
}

function pega_localizacao_lindinha() {
  const http = new XMLHttpRequest()

  http.open("GET", "https://api.tomtom.com/locationHistory/1/history/position/4f20eec7-3272-4f7a-af07-1f589ff35a4f/?key=BfojARiLVFmRJd4nq1MkcM98hc4zG1qF", false)
  http.send( null )
  var data=JSON.parse(http.responseText)

  return JSON.stringify(data.objectState.geometry.coordinates)
}

function pega_localizacao_docinho() {
  const http = new XMLHttpRequest()
  
  http.open("GET", "https://api.tomtom.com/locationHistory/1/history/position/38f8b444-bb5d-4153-a6cd-ff278aafaca8/?key=BfojARiLVFmRJd4nq1MkcM98hc4zG1qF", false)
  http.send( null )
  var data=JSON.parse(http.responseText)

  return JSON.stringify(data.objectState.geometry.coordinates)
}

function pega_localizacao_florzinha () {
  const http = new XMLHttpRequest()

  http.open("GET", "https://api.tomtom.com/locationHistory/1/history/position/e63d77b0-b630-49b0-8f9a-34f2ffdf6309/?key=BfojARiLVFmRJd4nq1MkcM98hc4zG1qF", false)
  http.send( null )
  var data=JSON.parse(http.responseText)

  return JSON.stringify(data.objectState.geometry.coordinates)

}

function perfilativo() {
  var i1 = document.getElementById("i1");
  var i1a = document.getElementById("i1ativo");
  var b1 = document.getElementById("bolinha-menu");
  var active = document.getElementsByClassName("active");
  if (b1.style.display === "none")  {    
    b1.style.display = "block";
    i1a.style.display = "block"; 
    i1.style.display = "none";     
  } 
  else {
    b1.style.display = "block";    
    i1a.style.display = "block";    
    i1.style.display = "none";    
  }
}



