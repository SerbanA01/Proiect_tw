document.addEventListener("DOMContentLoaded", function() {
    var image = document.getElementById("model_agenti");
    if(image){
    var pulseInterval;
    function pulseImage() {
      image.style.opacity = (image.style.opacity === "1") ? "0.5" : "1";
    }
    function startPulsing() {
      pulseInterval = setInterval(pulseImage, 500); 
    }
  
    function stopPulsing() {
      clearInterval(pulseInterval); 
      image.style.opacity = "1"; 
    }
    setTimeout(startPulsing, 2000);
    }

    document.addEventListener("keydown", e=> {
        var container = document.getElementById("spatiu_grau");
        let wheatImage = document.createElement('img');
        wheatImage.src = "C:\\Users\\serba\\OneDrive\\Desktop\\proiect tw\\spic_grau2.png";

        wheatImage.style.width = "50px";
        wheatImage.style.border = "1px dotted green";
        wheatImage.style.boxShadow = "2px 2px 5px rgba(0, 0, 0, 0.5)";
        container.appendChild(wheatImage);

      });
  });
  