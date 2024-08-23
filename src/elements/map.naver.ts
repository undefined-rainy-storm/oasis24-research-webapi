import { LitElement, html } from 'lit'
import { customElement, state } from 'lit/decorators.js'

@customElement('map-wrapper-naver')
class MapWrapperNaver extends LitElement {
  // Lit Properties and Methods (override)
  @state() lat: Number
  @state() lng: Number
  @state() zoom: Number
  map: naver.maps.Map | undefined
  draws: { [id: string]: naver.maps.Polygon } = {}
  drawsKeyGenerator: number = 0

  static override get properties() {
    return {
      lat: { type: Number },
      lng: { type: Number },
      zoom: { type: Number },
    }
  }

  constructor(
    lat: Number = 35.17679,
    lng: Number = 126.90681,
    zoom: Number = 16,
  ) {
    super()
    this.lat = lat
    this.lng = lng
    this.zoom = zoom
  }

  override render = () => {
    return html`
      <div
        id="map-box"
        style="width: 100%; height: 400px;"
      >
      </div>
    `
  }

  override firstUpdated = () => {
    const maoBoxElement = this.shadowRoot!.getElementById('map-box')

    this.map = new naver.maps.Map(maoBoxElement!, {
      center: new naver.maps.LatLng(this.lat as number, this.lng as number),
      zoom: this.zoom as number
    })
  }

  // Custom Methods
  /*
    How to use
    const element: HTMLElement
    element.[methodName]()
  */

  addPath = (
    key: String | undefined,
    paths: Array<[Number, Number]>
  ) => {
    if (key === undefined) {
      key = new String(this.drawsKeyGenerator++)
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'map-wrapper-naver': MapWrapperNaver
  }
}
