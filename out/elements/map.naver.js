var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
let MapWrapperNaver = class MapWrapperNaver extends LitElement {
    static get properties() {
        return {
            lat: { type: Number },
            lng: { type: Number },
            zoom: { type: Number },
        };
    }
    constructor(lat, lng, zoom) {
        super();
        this.render = () => {
            return html `
      <div
        id="map-box"
        style="width: 100%; height: 400px;"
      >
      </div>
    `;
        };
        this.firstUpdated = () => {
            const maoBoxElement = this.shadowRoot.getElementById('map-box');
            this.map = new naver.maps.Map(maoBoxElement, {
                center: new naver.maps.LatLng(this.lat, this.lng),
                zoom: this.zoom
            });
        };
        this.lat = lat;
        this.lng = lng;
        this.zoom = zoom;
    }
};
MapWrapperNaver = __decorate([
    customElement('map-wrapper-naver')
], MapWrapperNaver);
//# sourceMappingURL=map.naver.js.map