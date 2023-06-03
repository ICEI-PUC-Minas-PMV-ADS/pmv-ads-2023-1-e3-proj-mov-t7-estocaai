import { GOOGLE_MAPS_API_KEY } from "../constants"

export const getCurrentGeolocation = (latitude, longitude) => {
    console.log("=== getCurrentGeolocation 222")
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_MAPS_API_KEY}`;


    console.log(url);
  
    const result = fetch(url)
    .then(response => response.json())
    .then((data) => {
      console.log("data");
      console.log(data);
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
