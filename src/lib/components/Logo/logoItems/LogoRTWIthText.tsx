import Vue, { CreateElement, VNode } from 'vue';
import {ILogoComponent} from "./logoItems.interface";
import { Component, Prop } from "vue-property-decorator";
@Component
class logoRTWithTextClass extends Vue{
  @Prop({ default: null }) width: string;
  @Prop({ default: null }) height: string;
  @Prop({ default: null }) color: string;
  @Prop({ default: null }) background: string;
  @Prop({ default: null }) topFillColor: string;
  @Prop({ default: null }) bottomFillColor: string;
  render(h: CreateElement): VNode {
    const textHeight = '27.5%';
    return <div class="rt-logo">
      <svg width={this.width} height={this.height} viewBox="0 0 120 200" version="1.1"
           xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient x1="50%" y1="57.8446634%" x2="24.6450551%" y2="13.8233183%"
                          id={`rt${this._uid}-linearGradient-1`}>
            <stop stop-color={this.topFillColor} offset="0%"></stop>
            <stop stop-color={this.topFillColor} offset="100%"></stop>
          </linearGradient>
          <linearGradient x1="75.221027%" y1="86.4122836%" x2="-25.8533839%" y2="35.1093425%"
                          id={`rt${this._uid}-linearGradient-2`}>
            <stop stop-color={this.bottomFillColor} offset="0%"></stop>
            <stop stop-color={this.bottomFillColor} offset="100%"></stop>
          </linearGradient>
          <path
            d="M6.6980198,50.5461386 C8.08415842,50.9817822 9.47128713,50.9881188 11,51 L88,51 L37,0 C27.5920792,9.35049505 22.0940594,15.8807921 17.5257426,20.4352475 C13.4683168,24.4807921 10.6960396,27.2590099 8.12772277,29.8649505 C4.89207921,33.0906931 2.73762376,35.2411881 2.72772277,35.2510891 C1.14158416,36.9322772 0.173267327,39.3481188 0.173267327,41.8293069 C0.173267327,45.7223762 2.55940594,48.9005941 5.94752475,50.2926733 C6.07029703,50.3441584 6.53762376,50.510495 6.6980198,50.5461386 Z"
            id={`rt${this._uid}path-3`}></path>
        </defs>
        <g id="UI" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="logo" transform="translate(-210.000000, -575.000000)">
            <g id="white" transform="translate(100.000000, 200.000000)">
              <g id="dropshadow" transform="translate(0.000000, 375.000000)">
                <g id="white">
                  <g id="dropshadow(200)" transform="translate(110.000000, 0.000000)">
                    <g id="logo/shadow/200">
                      <g id="logo/shadow/200/lower/orange" transform="translate(4.000000, 149.000000)">
                        <mask id="mask-4" fill="white">
                          <use href={`#rt${this._uid}path-3`}></use>
                        </mask>
                        <g fill-rule="evenodd">
                          <use fill={`url(#rt${this._uid}-linearGradient-1)`}
                               href={`#rt${this._uid}path-3`}></use>
                          <use fill-opacity="1" fill={`url(#rt${this._uid}-linearGradient-2)`}
                               href={`#rt${this._uid}path-3`}></use>
                        </g>
                      </g>
                      <g fill={this.topFillColor} fill-rule="evenodd">
                        <path
                          d="M6.71980198,184.262178 C6.73564356,184.242376 88.3049505,103.586139 120,72 L50,0 L10.4445545,41.6958416 C-1.34158416,53.4839604 0.252475248,61.1968317 0.252475248,77.0285149 L0.252475248,185.349307 C0.252475248,191.755248 4.28415842,197.18495 9.94752475,199.291881 C6.55940594,197.901782 4.17326733,194.721584 4.17326733,190.828515 C4.17326733,188.349307 5.14158416,185.933465 6.71980198,184.262178 Z"
                          id="Fill-10"></path>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>

      <svg height={textHeight} class="rt-logo__rt-text" viewBox="0 0 171 23" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="Logo" transform="translate(-168.000000, -1437.000000)" fill={this.color}>
            <g id="Group-27-Copy" transform="translate(125.000000, 1393.000000)">
              <g id="Group-11" transform="translate(43.070905, 44.228760)">
                <polygon id="Fill-7" points="133.243817 6.3124933 128.639834 6.3124933 123.140308 11.8827578 123.140308 6.3124933 119.247005 6.3124933 119.247005 21.6608003 123.140308 21.6608003 123.140308 15.3173588 128.732899 21.6608003 133.429313 21.6608003 126.198984 13.4299593"></polygon>
                <path d="M9.70205952,10.4592857 L4.07858761,10.4592857 L4.07858761,3.65130242 L9.70205952,3.65130242 C12.5445705,3.65130242 13.8424087,5.01294145 13.8424087,7.05518816 C13.8424087,9.09743488 12.5445705,10.4592857 9.70205952,10.4592857 M9.82558258,4.26325641e-14 L1.24344979e-14,4.26325641e-14 L1.24344979e-14,21.6608215 L4.07858761,21.6608215 L4.07858761,14.1105882 L9.82558258,14.1105882 C14.7074931,14.1105882 17.9207848,11.6040115 17.9207848,7.05518816 C17.9207848,2.50636481 14.7074931,4.26325641e-14 9.82558258,4.26325641e-14" id="Fill-9"></path>
                <path d="M27.1268273,18.4426042 C24.8405931,18.4426042 22.7085513,16.8026214 22.7085513,13.9865621 C22.7085513,11.1707146 24.8405931,9.53094363 27.1268273,9.53094363 C29.4134845,9.53094363 31.5453148,11.1707146 31.5453148,13.9865621 C31.5453148,16.8026214 29.4134845,18.4426042 27.1268273,18.4426042 M27.1268273,5.87921756 C22.9249281,5.87921756 18.7534867,8.60270744 18.7534867,13.9865621 C18.7534867,19.371264 22.9249281,22.0939066 27.1268273,22.0939066 C31.3291495,22.0939066 35.5001679,19.371264 35.5001679,13.9865621 C35.5001679,8.60270744 31.3291495,5.87921756 27.1268273,5.87921756" id="Fill-11"></path>
                <path d="M45.4396497,18.4426042 C43.0914425,18.4426042 41.3612736,16.7407672 41.3612736,13.9865621 C41.3612736,11.2634958 43.153204,9.53094363 45.4396497,9.53094363 C46.8299187,9.53094363 48.0351146,10.1806242 48.9928413,11.6348327 L52.3298675,9.71629431 C51.2175255,7.33363784 48.8075567,5.87921756 45.4705305,5.87921756 C41.1138045,5.87921756 37.4062091,9.09754079 37.4062091,13.9865621 C37.4062091,18.8757952 40.9285199,22.0939066 45.4705305,22.0939066 C48.7455837,22.0939066 50.9393871,20.6089829 52.4842714,17.9786979 L49.2709797,16.214795 C48.3439222,17.514368 47.3553147,18.4426042 45.4396497,18.4426042" id="Fill-13"></path>
                <path d="M86.8916832,15.0080455 C86.7063986,17.3597749 86.2423411,17.885959 85.4390181,17.885959 C84.8899328,17.885959 84.631888,17.825164 84.2562425,17.7264515 L84.2759132,21.6982517 C84.2759132,21.6982517 84.7598528,21.8465323 85.6556065,21.8465323 C88.961752,21.8465323 90.1978286,19.7115043 90.5068478,15.162681 L90.8776285,9.80932976 L95.2648122,9.80932976 L95.2648122,21.6300427 L99.1581153,21.6300427 L99.1581153,6.31245093 L87.5403908,6.31245093 L86.8916832,15.0080455 Z" id="Fill-15"></path>
                <path d="M71.5851455,11.9445907 C72.1412108,10.211403 73.6863066,8.85018767 75.7254947,8.85018767 C77.8884173,8.85018767 79.3406593,10.0258405 79.7112285,11.9445907 L71.5851455,11.9445907 Z M75.8490177,5.8792811 C71.3998609,5.8792811 67.7846963,9.12853143 67.7846963,13.9866256 C67.7846963,18.8449317 71.3998609,22.0939701 75.6637331,22.0939701 C79.0316401,22.0939701 81.1634705,20.8253242 82.7083548,18.1952511 L79.6183747,16.6478377 C78.6606479,17.8548413 77.7955635,18.7521504 75.7254947,18.7521504 C73.4392605,18.7521504 71.7704301,17.266803 71.523384,14.9150736 L83.3263931,14.9150736 L83.3263931,13.5536464 C83.3263931,9.06667726 80.236413,5.8792811 75.8490177,5.8792811 L75.8490177,5.8792811 Z" id="Fill-17"></path>
                <path d="M105.1379,11.9445907 C105.694177,10.211403 107.239062,8.85018767 109.27825,8.85018767 C111.440961,8.85018767 112.893203,10.0258405 113.263983,11.9445907 L105.1379,11.9445907 Z M109.401773,5.8792811 C104.952404,5.8792811 101.337451,9.12853143 101.337451,13.9866256 C101.337451,18.8449317 104.952404,22.0939701 109.216277,22.0939701 C112.584184,22.0939701 114.716014,20.8253242 116.26111,18.1952511 L113.171341,16.6478377 C112.213614,17.8548413 111.348318,18.7521504 109.27825,18.7521504 C106.991804,18.7521504 105.323185,17.266803 105.076139,14.9150736 L116.879148,14.9150736 L116.879148,13.5536464 C116.879148,9.06667726 113.789168,5.8792811 109.401773,5.8792811 L109.401773,5.8792811 Z" id="Fill-19"></path>
                <polygon id="Fill-21" points="53.6953473 9.71623076 58.2682386 9.71623076 58.2682386 21.6608639 62.1611186 21.6608639 62.1611186 9.71623076 66.734433 9.71623076 66.734433 6.31255685 53.6953473 6.31255685"></polygon>
                <path d="M141.158578,18.442816 C138.871921,18.442816 136.740091,16.8026214 136.740091,13.9867739 C136.740091,11.1709264 138.871921,9.53094363 141.158578,9.53094363 C143.445024,9.53094363 145.577066,11.1709264 145.577066,13.9867739 C145.577066,16.8026214 143.445024,18.442816 141.158578,18.442816 M141.158578,5.87921756 C136.956468,5.87921756 132.785238,8.60270744 132.785238,13.9867739 C132.785238,19.371264 136.956468,22.0941184 141.158578,22.0941184 C145.360689,22.0941184 149.531919,19.371264 149.531919,13.9867739 C149.531919,8.60270744 145.360689,5.87921756 141.158578,5.87921756" id="Fill-23"></path>
                <polygon id="Fill-25" points="165.022684 6.30959124 160.797307 17.0586595 156.57193 6.30959124 151.483372 6.30959124 151.483372 21.6299368 155.183987 21.6299368 155.183987 11.9313302 159.286053 21.6299368 162.308561 21.6299368 166.410626 11.9313302 166.410626 21.6299368 170.111453 21.6299368 170.111453 6.30959124"></polygon>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>;

  }
}

export const logoRTWithText:ILogoComponent = {
  name: 'logoRtWithText',
  component: logoRTWithTextClass
}
