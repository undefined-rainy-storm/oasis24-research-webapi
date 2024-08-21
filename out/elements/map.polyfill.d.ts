import { LitElement } from 'lit';
type MapElementMapType = 'kakao';
export declare class MapElement extends LitElement {
    type: MapElementMapType;
    render(): import("lit-html").TemplateResult<1>;
    firstUpdated(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'map-element': MapElement;
    }
}
export {};
//# sourceMappingURL=map.polyfill.d.ts.map