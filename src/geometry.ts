const watchPositionHandler = (pos: GeolocationPosition) => {}

const geometryWatchdog = () => {
  navigator.geolocation.watchPosition(watchPositionHandler)
}
