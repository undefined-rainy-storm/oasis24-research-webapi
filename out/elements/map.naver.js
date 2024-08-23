var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
let MapWrapperNaver = class MapWrapperNaver extends LitElement {
    static get properties() {
        return {
            lat: { type: Number },
            lng: { type: Number },
            zoom: { type: Number },
        };
    }
    constructor(lat = 35.17679, lng = 126.90681, zoom = 16) {
        super();
        this.draws = {};
        this.drawsKeyGenerator = 0;
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
            const mapBoxElement = this.shadowRoot.getElementById('map-box');
            if (mapBoxElement)
                this.htmlElement = mapBoxElement;
            this.map = new naver.maps.Map(mapBoxElement, {
                center: new naver.maps.LatLng(this.lat, this.lng),
                zoom: this.zoom
            });
            this.htmlElement?.addEventListener('onGeoLocationUpdate', (e) => {
                if ('detail' in e) {
                    console.log(e.detail);
                }
            });
        };
        // Custom Methods
        /*
          How to use
          const element: HTMLElement
          element.[methodName]()
        */
        this.addPath = (key, paths) => {
            if (key === undefined) {
                key = new String(this.drawsKeyGenerator++);
            }
            const latLngs = [];
            for (const each of paths) {
                latLngs.push(new naver.maps.LatLng(each[0], each[1]));
            }
            if (this.map) {
                this.draws[key] = new naver.maps.Polyline({
                    map: this.map,
                    path: latLngs
                });
            }
            else {
                throw new Error('This <map-wrapper> object not constructed completly: broken map object binding');
            }
        };
        this.lat = lat;
        this.lng = lng;
        this.zoom = zoom;
    }
};
__decorate([
    state()
], MapWrapperNaver.prototype, "lat", void 0);
__decorate([
    state()
], MapWrapperNaver.prototype, "lng", void 0);
__decorate([
    state()
], MapWrapperNaver.prototype, "zoom", void 0);
MapWrapperNaver = __decorate([
    customElement('map-wrapper-naver')
], MapWrapperNaver);
//# sourceMappingURL=map.naver.js.map