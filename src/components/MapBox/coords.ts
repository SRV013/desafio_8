export const MAPBOX_TOKEN =
  "pk.eyJ1IjoiYmVuamFoZW5sZXkiLCJhIjoiY2wzNHYxMTc0MDA1bTNicGNxZDB0bDlhayJ9.D3sJZ0xb27ISehSHAGvaIg";

export async function getCoordsFromLocation(value) {
  const data = await fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${value}.json?access_token=${MAPBOX_TOKEN}`
  ).then((r) => r.json());
  console.log(value);
  
  const [lng, lat] = data.features[0].geometry.coordinates;
  const newCoords = [lng, lat];
  return newCoords;
}