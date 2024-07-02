mapboxgl.accessToken = mapToken;
        const map = new mapboxgl.Map({
            style: 'mapbox://styles/mapbox/light-v11',
            container: 'map', // container ID
            center: coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
            zoom: 9 // starting zoom
        });

        const marker = new mapboxgl.Marker({color: "black"})
    .setLngLat(coordinates)
    .addTo(map);