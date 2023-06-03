import { getRouteMetrics } from "../../services/googleMapsService";
import polyline from "@mapbox/polyline";

export const getPosition = (data) => {
  const latitude = data?.geometry.location.lat || 0;
  const longitude = data?.geometry.location.lng || 0;
  
  return { latitude, longitude }
};

export const formatCoordinates = (data) => {
    const { latitude, longitude } = data;
    return `${latitude},${longitude}`;
};


export const traceRoute = async (origin, destination, wayPoints) => {
    if (origin && destination) {
      const originFormated = formatCoordinates(origin.coordinates);
      const destinationFormated = formatCoordinates(destination.coordinates);
      let wayPointsFormated = null;

      if(wayPoints.length > 0){
        wayPointsFormated = wayPoints.map(wayPoint => formatCoordinates(wayPoint.coordinates))
        console.log("new wayPoints")
        console.log(wayPointsFormated)
  
      }

      try {
        const { distance, fastest_Route } = await getRouteMetrics(
          originFormated,
          destinationFormated,
          wayPointsFormated
        );
        const decodedPolyline = polyline.decode(
          fastest_Route.overview_polyline.points
        );
        const coordinates = decodedPolyline.map(([latitude, longitude]) => ({
          latitude,
          longitude,
        }));

        return { coordinates, distance }
      } catch (e) {
        console.log(e);
      }
    } else {
    //   dispatch({type: "MESSAGE03"})
    }
  };