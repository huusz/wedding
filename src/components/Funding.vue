<template>
  <div class="funding">
    <div class="description">location</div>
    <h2 class="h2">
      오시는 길
    </h2>
    <img src="~@/assets/images/cat.png" class="cat" />
    <div class="location-description">
      <h1>{{ name }}</h1>
      <p>{{ address }}</p>
      <input type="text" v-model="address" hidden />
      <button
        class="copy-button"
        type="button"
        v-clipboard:copy="address"
        v-clipboard:success="onCopy"
        v-clipboard:error="onError"
      >
        주소 복사하기
      </button>
    </div>
    <naver-maps
      :height="height"
      :width="width"
      :mapOptions="mapOptions"
      :initLayers="initLayers"
      @load="onLoad"
    >
      <naver-info-window class="info-window" @load="onWindowLoad" :isOpen="info" :marker="marker">
        <div class="info-window-container">
          <h1>{{ name }}</h1>
          <p>{{ address }}</p>
        </div>
      </naver-info-window>
      <naver-marker
        :lat="37.55668529114703"
        :lng="126.83697636941304"
        @click="onMarkerClicked"
        @load="onMarkerLoaded"
        
      />
    </naver-maps>
    <img src="~@/assets/images/leaves.png" class="leaves" />
    <ul>
      <li>
        <h3>주차장</h3>
        <p>더뉴컨벤션 지하 4층 ~ 지상 1층</p>
      </li>
      <li>
        <h3>지하철</h3>
        <p>5호선(방화행)발산역 하차 7번출구</p>
      </li>
      <li>
        <h3>버스(발산역하차)</h3>
        <p>파랑(간선) - 601, 605, 642, 652</p><br/>
        <p>초록(지선) - 6629, 6630, 6632, 6642, 6643, 6645, 6657</p><br/>
        <p>공항버스 - (김포공항)6000, (인천공항)6001, 6003, 6008</p><br/>
        <p>일반버스 - 1, 2, 6, 60, 60-3, 66, 69, 88, 631</p><br/>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Divider',
  data() {
    return {
      address: '서울특별시 강서구 공항대로36길 57',
      name: '더뉴컨벤션',
      width: '100%',
      height: 300,
      marker: null,
      map: null,
      info: false,
      mapOptions: {
        lat: 37.55668529114703,
        lng: 126.83697636941304,
        zoom: 16,
        zoomControl: false,
      },
      initLayers: ['BACKGROUND', 'BACKGROUND_DETAIL', 'POI_KOREAN', 'TRANSIT'],
    };
  },
  methods: {
    onLoad(vue) {
      this.map = vue;
    },
    onWindowLoad() {},
    onMarkerLoaded(vue) {
      this.marker = vue.marker;
    },
    onMarkerClicked() {
      this.info = !this.info;
    },
    onCopy: function(e) {
      alert('주소가 복사되었어요: ' + e.text);
    },
    onError: function() {
      alert('오류가 발생했습니다.');
    },
    // funding() {
    //   window.open("https://qr.kakaopay.com/281006024440075866043384");
    // },
  },
};
</script>

<style lang="scss" scoped>
.funding {
  padding-top: 48px;
  padding-bottom: 72px;
  padding-left: $padding-vertical;
  padding-right: $padding-vertical;
  text-align: center;
  color: #295138;

  .location-description {
    margin-bottom: 32px;
    h1 {
      color: #202121;
      line-height: 32px;
      font-size: 16px;
      margin-bottom: 8px;
    }
    p {
      margin: 0;
      line-height: 24px;
    }
    .copy-button {
      text-decoration: underline;
      color: #295238;
      background-color: transparent;
      padding: 8px 0;
    }
  }
  .description {
    font-size: 12px;
    letter-spacing: 6px;
    margin-bottom: 30px;
  }
  .cat {
    width: 85px;
    margin-top: 16px;
    margin-bottom: 32px;
  }
  .leaves {
    width: 45px;
    margin-top: 32px;
    margin-bottom: 0px;
  }
  .h2 {
    font-size: 16px;
    font-weight: normal;
    margin-bottom: 24px;
    color: #295138;
  }
  p {
    margin-bottom: 32px;
    line-height: 24px;
    color: #202121;
  }
  .link {
    display: inline-block;
    margin-top: 24px;
    color: #295238;
  }
  .info-window-container {
    padding: 10px;
    width: 210px;
    height: 60px;
    color: #202121;

    h1 {
      font-size: 15px;
      font-weight: 700;
    }

    p {
      font-size: 14px;
      line-height: 26px;
      margin: 0;
    }
  }

  ul {
    margin: 26px 0;
    li {
      margin-bottom: 40px;
      h3 {
        margin-bottom: 16px;
      }
      p {
        line-height: 16px;
        margin: 0;
      }
    }
  }
}
</style>
