/*eslint-disable*/

export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoibWlsaS1teW5hbWUiLCJhIjoiY2t1Z3NzNDQ1MjUweTJwbXZ0Y3A4MWdlNiJ9.Dgu3nwLahgy6W_VFdK8QEQ';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mili-myname/ckugt6v1h19m817pfp7s6y2wi',
    //   center: [-118.07341334, 34.180641],
    //   zoom: 5,
    //   interactive: false,
    scrollZoom: false,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      rigth: 100,
    },
  });
};
