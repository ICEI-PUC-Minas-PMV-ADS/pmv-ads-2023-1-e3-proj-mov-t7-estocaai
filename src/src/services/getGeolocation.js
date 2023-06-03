export const getGeolocation = (destination1 ,destination2, destination3) => {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?origin=${destination1}&destination=${destination2}&waypoints=${destination3}&key=AIzaSyA9gDzEJ-0yzGfVKvC82X7gfK2G8S2RIs8`;

  const result = fetch(url)
  .then(response => response.json())
  .then((data) => {
    const fastest_Route = data.routes[0];
    const distance = data.routes[0].legs.reduce((total, leg) => total + leg.distance.value, 0);
  
    return {
      fastest_Route,
      distance
    }
  })
  .catch(err => {
    return err
  })

  return result;
}