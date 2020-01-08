function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16.8,
          center: {lat: 59.938734, lng: 30.323069},
          disableDefaultUI: true
        }),
        image = {
          url: "../img/map-pin.png",
          scaledSize: new google.maps.Size(65, 54)
        }

        marker = new google.maps.Marker({
            position: {lat: 59.938734, lng: 30.323069},
            map: map,
            icon: image,
            animation: google.maps.Animation.DROP
        });
      }
