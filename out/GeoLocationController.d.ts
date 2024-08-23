declare class GeoLocationController {
    watchTracerId: number | undefined;
    constructor();
    _watchSuccessHandler: (pos: GeolocationPosition) => void;
    _watchFailHandler: (err: GeolocationPositionError) => void;
    startTrace: () => void;
    stopTrace: () => void;
    isAvailable: () => boolean;
}
//# sourceMappingURL=GeoLocationController.d.ts.map