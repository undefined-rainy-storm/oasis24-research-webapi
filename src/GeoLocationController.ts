class GeoLocationController {
  watchTracerId: number | undefined

  constructor() {}

  _watchSuccessHandler = (pos: GeolocationPosition) => {
    const onGeoLocationUpdateEvent = new CustomEvent('onGeoLocationUpdate', { detail: pos })
    document.dispatchEvent(onGeoLocationUpdateEvent)
  }

  _watchFailHandler = (err: GeolocationPositionError) => {

  }

  startTrace = () => {
    if (this.watchTracerId) return
    this.watchTracerId = navigator.geolocation.watchPosition(this._watchSuccessHandler, this._watchFailHandler)
  }

  stopTrace = () => {
    if (this.watchTracerId == undefined) return
    navigator.geolocation.clearWatch(this.watchTracerId)
    this.watchTracerId = undefined
  }

  isAvailable = (): boolean => {
    return 'geolocation' in navigator
  }
}
