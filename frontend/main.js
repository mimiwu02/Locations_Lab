window.onload = function(){
  console.log("Here I am");


  var lat      = " ";
  var lon      = " ";
  var form     = document.querySelector(".form-page");
  var history  = document.querySelector(".history");
  var nav      = navigator.geolocation; // get back nav object
  var check    = document.getElementById('check-in');
  var textArea = document.getElementById('new-note');
  var submit   = document.getElementById('submit-btn');
  // var endpoint = "https://maps.googleapis.com/maps/api/js?key="+ GOOGLEMAPS_API_KEY;
  var newEntry = {}; //stores the lat/long and the user's notes
  form.style.display="none"; //on page load form section is not displayed
  check.addEventListener('click', function(ev){
    ev.preventDefault();
    history.style.display="none";
    form.style.display="flex";
    nav.getCurrentPosition(function(position) {
      lat = position.coords.latitude;
      lon = position.coords.longitude;

      console.log('USER LAT: ' + lat + ' DEG');
      console.log('USER LON: ' + lon + ' DEG');

      initMap();
    },

    function(positionError){
        console.log(positionError);
    },{timeout:6000});

    function initMap() {
      var map =  new google.maps.Map(document.querySelector('.map-current'),{
        center: {lat: lat, lng: lon},
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true
      });
      var marker = new google.maps.Marker({
        position: {lat: lat , lng : lon}
      });

      marker.setMap(map);

      map.setTilt(45);
      console.log(map);

    }
});
};
