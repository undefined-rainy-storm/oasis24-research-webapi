import { LitElement } from 'lit';
declare class MapWrapperNaver extends LitElement {
    lat: Number;
    lng: Number;
    zoom: Number;
    map: naver.maps.Map | undefined;
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
    constructor(lat: Number, lng: Number, zoom: Number);
    render: () => import("lit-html").TemplateResult<1>;
    firstUpdated: () => void;
}
declare global {
    interface HTMLElementTagNameMap {
        'map-wrapper-naver': MapWrapperNaver;
    }
}
export {};
//# sourceMappingURL=map.naver.d.ts.map