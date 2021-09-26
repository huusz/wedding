<template>
  <div class="live">
    <p class = "desc">
      소리를 켜주세요!
    </p>
    <img src="~@/assets/images/hands.png" class="hands" />
    <div>
      <p class = "header">
        "우리 손 잡을까요?"<br />
      </p>
      <p>
        각자의 삶을 열심히 살아온 저희가,<br />
        이제는 손을 잡고 함께 나란히 걸어가려 합니다.<br />
        사랑한다는 말이 어울리는 사람과 함께<br />
        오래도록 있는 힘을 다해 행복해지겠습니다.<br />
        기쁨이 가득한 결혼 소식을 이렇게 알려드립니다.
      </p>
      <br />
      <br />
      <p class = "header">
        22년 3월 5일 토요일<br />
        오후 1시 40분<br />
        더뉴컨벤션웨딩홀<br />
      </p>
      <br />
      <br />
      <p>
        김승남 장은영 장남 김동환<br />
        장형식 정현숙 차녀 장진영<br />
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Divider",
  methods: {},
};
</script>

<style lang="scss" scoped>
.live {
  padding-top: 48px;
  padding-bottom: 68px;
  padding-left: $padding-vertical;
  padding-right: $padding-vertical;
  text-align: center;
  .hands {
    width: 75px;
    margin-bottom: 16px;
  }
  p {
    margin-bottom: 16px;
    line-height: 24px;
    &.desc {
      color: #295238;
      font-size: 10px;
      opacity: 0.6;
      margin-bottom: 36px;
    }
    &.header {
      color: #295238;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
