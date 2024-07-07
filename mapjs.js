function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 10,
      center: { lat: 28.534222, lng: 77.257278},
    });
    
    setMarkers(map);
    }
    
    // Data for the markers consisting of a name, a LatLng and a zIndex for the
    // order in which these markers should display on top of each other.
    const ngos = [
    ["All-we-need", 28.554226, 77.257278, 4],
    ["Carer", 28.544262, 77.267288, 5],
    ["Helpy", 28.524241, 77.277263, 3],
    ["V-desire", 28.564257, 77.287289, 2],
    ["we-need", 28.534229, 77.297278, 1],
    ];
    
    function setMarkers(map) {
    
    const image = {
      url: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
      // This marker is 20 pixels wide by 32 pixels high.
      size: new google.maps.Size(20, 32),
      // The origin for this image is (0, 0).
      origin: new google.maps.Point(0, 0),
      // The anchor for this image is the base of the flagpole at (0, 32).
      anchor: new google.maps.Point(0, 32),
    };
    
    const shape = {
      coords: [1, 1, 1, 20, 18, 20, 18, 1],
      type: "poly",
    };
    
    for (let i = 0; i < ngos.length; i++) {
      const ngo = ngos[i];
    
      new google.maps.Marker({
        position: { lat: ngo[1], lng: ngo[2] },
        map,
        icon: image,
        shape: shape,
        title: ngo[0],
        zIndex: ngo[3],
      });
    }
    }
    
    window.initMap = initMap;