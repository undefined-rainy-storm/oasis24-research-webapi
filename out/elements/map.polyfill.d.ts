import { LitElement } from 'lit';
type MapWrapperMapType = 'kakao';
export declare class MapWrapper extends LitElement {
    type: MapWrapperMapType;
    render(): import("lit-html").TemplateResult<1>;
    firstUpdated(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'map-wrapper': MapWrapper;
    }
}
export {};
//# sourceMappingURL=map.polyfill.d.ts.map