
export const formatCoordinates = (data) => {
    const { latitude, longitude } = data;
    return `${latitude},${longitude}`;
};


const traceRoute = async (origin, destination) => {
    if (origin && destination) {
      setShowDirection(true);

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

        setFastestRoute(coordinates);
        setDistance(distance);
        console.log(decodedPolyline)

        mapRef.current?.fitToCoordinates(fastestRoute, {
          edgePadding: {
            top: 370,
            right: 60,
            bottom: 40,
            left: 60,
          },
        });
      } catch (e) {
        console.log(e);
      }
    } else {
      dispatch({type: "MESSAGE03"})
    }
  };