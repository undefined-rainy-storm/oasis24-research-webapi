import { LitElement, html } from 'lit'
import { customElement, state } from 'lit/decorators.js'

declare global {
  interface WindowEventMap {
    'onGeoLocationUpdate': CustomEvent
  }
}

@customElement('map-wrapper-naver')
class MapWrapperNaver extends LitElement {
  // Lit Properties and Methods (override)
  @state() lat: Number
  @state() lng: Number
  @state() zoom: Number
  map: naver.maps.Map | undefined
  draws: { [id: string]: naver.maps.Polyline } = {}
  drawsKeyGenerator: number = 0
  htmlElement: HTMLElement | undefined
  
  keyPolylineNavigating = 'polylineNavigating'
  keyPolylineMovingTraced = 'polylineMovingTraced'

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
    const mapBoxElement = this.shadowRoot!.getElementById('map-box')
    if (mapBoxElement) this.htmlElement = mapBoxElement

    this.setPath(this.keyPolylineMovingTraced, [])
    this.setPath(this.keyPolylineNavigating, [])

    this.map = new naver.maps.Map(mapBoxElement!, {
      center: new naver.maps.LatLng(this.lat as number, this.lng as number),
      zoom: this.zoom as number
    })
    this.htmlElement?.addEventListener('onGeoLocationUpdate', (e: Event) => {
      if ('detail' in e) {
        console.log(e.detail)
      }
    })
  }

  // Custom Methods
  /*
    How to use
    const element: HTMLElement
    element.[methodName]()
  */

  setPath = (
    key: String | undefined,
    paths: Array<[Number, Number]>
  ) => {
    if (key === undefined) {
      key = new String(this.drawsKeyGenerator++)
    }
    const latLngs: Array<naver.maps.LatLng> = []
    for (const each of paths) {
      latLngs.push(new naver.maps.LatLng(each[0] as number, each[1] as number))
    }
    if (this.map) {
      this.draws[key as string] = new naver.maps.Polyline({
        map: this.map,
        path: latLngs
      })
    } else {
      throw new Error('This <map-wrapper> object not constructed completly: broken map object binding')
    }
  }
  addPath = (
    key: String,
    paths: [Number, Number]
  ) => {
    if (!(key as string in this.draws)) {
      throw new Error(`key ${key} not in this.draws`)
    }
    const draw: naver.maps.Polyline = this.draws[key as string]
    const kvoArray = draw.getPath()
    kvoArray.push(new naver.maps.LatLng(paths[0] as number, paths[1] as number))
    draw.setPath(kvoArray)
  }

  setPolylineNavigating = (path: Array<[Number, Number]>) => {
    this.setPath(this.keyPolylineNavigating, path)
  }
  setPolylineMovingTraced = (path: Array<[Number, Number]>) => {
    this.setPath(this.keyPolylineMovingTraced, path)
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'map-wrapper-naver': MapWrapperNaver
  }
}
