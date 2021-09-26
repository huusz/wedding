<template>
  <div class="intro-movie">
    <div class="image">
      <h1>결혼합니다</h1>
      <img src="~@/assets/images/divider1.png" />
      <div class="name">
        <h2><span>진</span><span>영</span></h2>
        <h2><span>동</span><span>환</span></h2>
      </div>
    </div>
    <div class="audio">
      <img src="~@/assets/images/main_temp.png" alt="메인이미지" class="main-image"/>
      <audio
        src="/wedding/intro.mp4"
        :autoplay="getOS() !== 'iOS'"
        controls
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "IntroMovie",
  methods: {
    getOS() {
      var userAgent = window.navigator.userAgent,
        platform = window.navigator.platform,
        macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"],
        windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"],
        iosPlatforms = ["iPhone", "iPad", "iPod"],
        os = null;

      if (macosPlatforms.indexOf(platform) !== -1) {
        os = "Mac OS";
      } else if (iosPlatforms.indexOf(platform) !== -1) {
        os = "iOS";
      } else if (windowsPlatforms.indexOf(platform) !== -1) {
        os = "Windows";
      } else if (/Android/.test(userAgent)) {
        os = "Android";
      } else if (!os && /Linux/.test(platform)) {
        os = "Linux";
      }

      return os;
    },
  },
};
</script>

<style lang="scss" scoped>
.intro-movie {
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-height: 780px;
  background-color: #ffffff;

  .image {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding-left: $padding-vertical;
    padding-right: $padding-vertical;
    justify-content: center;
    align-items: center;
    color: #242424;
    opacity: 0.85;
    font-weight: 700;

    img {
      max-width: 100%;
      max-height: 100%;
    }

    h1 {
      font-size: 40px;
      margin: 48px 0 32px;
    }

    .name {
      margin: 18px 0;

      h2 {        
        span {
          display: inline-block;
          font-size: 28px;
          padding: 6px 8px;
        }
      }
    }
  }

  .audio {
    width: 100vw;
    height: 100vw;
    max-width: 460px;
    max-height: 460px;

    .main-image {
      width: 100%;
    }

    audio {
      width: 100%;
      height: 24px;

      &::-webkit-media-controls-play-button,
      &::-webkit-media-controls-panel {
        background-color: #fffdf9;
        color: #fffdf9;
     }
    }
  }
}
</style>
