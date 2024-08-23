"use strict";
class GeoLocationController {
    constructor() {
        this._watchSuccessHandler = (pos) => {
            const onGeoLocationUpdateEvent = new CustomEvent('onGeoLocationUpdate', { detail: pos });
            document.dispatchEvent(onGeoLocationUpdateEvent);
        };
        this._watchFailHandler = (err) => {
        };
        this.startTrace = () => {
            if (this.watchTracerId)
                return;
            this.watchTracerId = navigator.geolocation.watchPosition(this._watchSuccessHandler, this._watchFailHandler);
        };
        this.stopTrace = () => {
            if (this.watchTracerId == undefined)
                return;
            navigator.geolocation.clearWatch(this.watchTracerId);
            this.watchTracerId = undefined;
        };
        this.isAvailable = () => {
            return 'geolocation' in navigator;
        };
    }
}
//# sourceMappingURL=GeoLocationController.js.map