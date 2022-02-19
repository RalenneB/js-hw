// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: 59.334591, lng: 18.06324 }; //stockholm
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: uluru,
    mapTypeId: 'satellite'
  });

//   const image = {
//     url: "https://www.pngall.com/wp-content/uploads/2017/05/Map-Marker-Free-Download-PNG.png",
//     // size: new google.maps.Size(20, 32),
//     // origin: new google.maps.Point(0, 0),
//     // The anchor for this image is the base of the flagpole at (0, 32).
//     // anchor: new google.maps.Point(0, 32),
//     scale: .1
//   };

  const svgMarker = {
    path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
    fillColor: "blue",
    fillOpacity: 0.6,
    strokeWeight: 0,
    rotation: 0,
    scale: 10,
    anchor: new google.maps.Point(15, 30),
  };

//   new google.maps.Marker({
//     position: map.getCenter(),
//     icon: svgMarker,
//     map: map,
//   });

  
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
    icon: svgMarker,
  });
}

//   const cuteMarker =

//44.42214647089377, 26.01328661386504
