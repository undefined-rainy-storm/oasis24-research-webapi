import { LitElement, html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'

type MapWrapperMapType = 'kakao' // | 'naver' | 'google' | 'openstreetmap'

@customElement('map-wrapper-kakao')
export class MapWrapperKakao extends LitElement {

  @property()
  type: MapWrapperMapType = 'kakao'


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
    'map-wrapper-kakao': MapWrapperKakao
  }
}
