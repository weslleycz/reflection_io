document.getElementById("vid").onchange = function() {
  var file = this.files[0];
  var blobURL = URL.createObjectURL(file);
  
  document.getElementById("embed-video").innerHTML = '<video width="1000" controls>'
  +'<source src="'+ blobURL +'" id="video_here">'
  +'Seu navegador não suporta vídeo HTML5.</video>';
  
  document.querySelector("video").play();
}