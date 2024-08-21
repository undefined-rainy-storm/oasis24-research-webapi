var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let MapElement = class MapElement extends LitElement {
    constructor() {
        super(...arguments);
        this.type = 'kakao';
    }
    render() {
        return html `
      <div id="map-wrapper"
        style="width: 500px; height: 500px;"
      >loading</div>
    `;
    }
    firstUpdated() {
        const map = new kakao.maps.Map(this.shadowRoot.getElementById('map-wrapper') ?? new HTMLDivElement(), {
            center: new kakao.maps.LatLng(33.450701, 126.570667),
            level: 3
        });
    }
};
__decorate([
    property()
], MapElement.prototype, "type", void 0);
MapElement = __decorate([
    customElement('map-element')
], MapElement);
export { MapElement };
//# sourceMappingURL=map.polyfill.js.map