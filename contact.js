function initMap(){
    let birou ={lat:46.637441, lng:27.729337}
    let map = new google.maps.Map(
        document.getElementById("map"),{zoom:15,center:birou});
    let marker = new google.maps.Marker({
        position:birou,
        animation:google.maps.Animation.BOUNCE
      });
      
      marker.setMap(map);
}