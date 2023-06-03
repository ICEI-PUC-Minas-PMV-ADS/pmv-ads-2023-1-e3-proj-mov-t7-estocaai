import { GOOGLE_MAPS_API_KEY } from "../constants"

export const getCurrentGeolocation = (latitude, longitude) => {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_MAPS_API_KEY}`;
    
    const result = fetch(url)
    .then(response => response.json())
    .then((data) => {
    if (data.status === 'OK') {
        const address = data.results[0].formatted_address;
        console.log('Endereço encontrado:', address);
        return address;
      } else {
        console.log('Nenhum resultado encontrado.');
        return null;
      }
    
    })
    .catch(err => {
        console.log('Nenhum resultado encontrado.');
      return err
    })
  
    return result;
  }

  export const getRouteMetrics = (origin, destination, wayPointsFormated) => {
    let url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${GOOGLE_MAPS_API_KEY}`;
    if(wayPointsFormated){
      url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&waypoints=${wayPointsFormated[0]}&destination=${destination}&key=${GOOGLE_MAPS_API_KEY}`;
    }
  
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