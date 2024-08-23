import { LitElement } from 'lit';
declare global {
    interface WindowEventMap {
        'onGeoLocationUpdate': CustomEvent;
    }
}
declare class MapWrapperNaver extends LitElement {
    lat: Number;
    lng: Number;
    zoom: Number;
    map: naver.maps.Map | undefined;
    draws: {
        [id: string]: naver.maps.Polyline;
    };
    drawsKeyGenerator: number;
    htmlElement: HTMLElement | undefined;
    static get properties(): {
        lat: {
            type: NumberConstructor;
        };
        lng: {
            type: NumberConstructor;
        };
        zoom: {
            type: NumberConstructor;
        };
    };
    constructor(lat?: Number, lng?: Number, zoom?: Number);
    render: () => import("lit-html").TemplateResult<1>;
    firstUpdated: () => void;
    addPath: (key: String | undefined, paths: Array<[Number, Number]>) => void;
}
declare global {
    interface HTMLElementTagNameMap {
        'map-wrapper-naver': MapWrapperNaver;
    }
}
export {};
//# sourceMappingURL=map.naver.d.ts.map