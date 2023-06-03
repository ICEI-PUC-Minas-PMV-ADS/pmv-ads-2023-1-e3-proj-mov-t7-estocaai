import { getRouteMetrics } from "../../services/googleMapsService";
import polyline from "@mapbox/polyline";

export const formatCoordinates = (data) => {
    const { latitude, longitude } = data;
    return `${latitude},${longitude}`;
};


export const traceRoute = async (origin, destination) => {
    if (origin && destination) {
      const originFormated = formatCoordinates(origin.coordinates);
      const destinationFormated = formatCoordinates(destination);

      try {
        const { distance, fastest_Route } = await getRouteMetrics(
          originFormated,
          destinationFormated
        );
        const decodedPolyline = polyline.decode(
          fastest_Route.overview_polyline.points
        );
        const coordinates = decodedPolyline.map(([latitude, longitude]) => ({
          latitude,
          longitude,
        }));

        return { coordinates:coordinates, distance: distance }
      } catch (e) {
        console.log(e);
      }
    } else {
    //   dispatch({type: "MESSAGE03"})
    }
  };