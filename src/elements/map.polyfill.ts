import { LitElement, html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'

type MapElementMapType = 'kakao' // | 'naver' | 'google' | 'openstreetmap'

@customElement('map-element')
export class MapElement extends LitElement {

  @property()
  type: MapElementMapType = 'kakao'


  override render() {
    return html`
      <div id="map-wrapper"
        style="width: 500px; height: 500px;"
      >loading</div>
    `
  }

  override firstUpdated() {
    const map = new kakao.maps.Map(
      this.shadowRoot!.getElementById('map-wrapper') ?? new HTMLDivElement(),
      {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3
      }
    )
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'map-element': MapElement
  }
}
