<template>
  <div class="celebrate">
    <div class="description">how to celebrate</div>
    <h2 class="h2">두 사람에게 축하의 마음 전하는 방법</h2>
    <img src="~@/assets/images/flower.png" class="flower" />
    <div class="account">
      <div>
        <input type="text" v-model="bankAccountBride" hidden />
        <button
          class="copy-button"
          type="button"
          v-clipboard:copy="bankAccountBride"
          v-clipboard:success="onCopy"
          v-clipboard:error="onError"
        >
          <Button>신부에게 전하기</Button>
        </button>
        <p class="account-description">우리 1002-849-189695<br /></p>
      </div>

      <div>
        <p class="black">
          <input type="text" v-model="bankAccountGroom" hidden />
          <button
            class="copy-button"
            type="button"
            v-clipboard:copy="bankAccountGroom"
            v-clipboard:success="onCopy"
            v-clipboard:error="onError"
          >
            <Button>신랑에게 전하기</Button>
          </button>
        </p>
        <p class="account-description">우리 1002-849-189695<br /></p>
      </div>
      <!-- <img src="~@/assets/images/cat.png" class="cat" /> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Celebrate',
  props: {},
  methods: {
    onCopy: function(e) {
      alert('계좌번호가 복사되었어요: ' + e.text);
    },
    onError: function() {
      alert('오류가 발생했습니다.');
    },
  },
  data: function() {
    return {
      bankAccountGroom: '1002849189695',
      bankAccountBride: '1002849189695',
    };
  },
};
</script>

<style lang="scss" scoped>
.celebrate {
  padding-top: 32px;
  padding-bottom: 50px;
  padding-left: $padding-vertical;
  padding-right: $padding-vertical;
  text-align: center;
  color: #295138;
  cursor: pointer;
  .description {
    font-size: 12px;
    letter-spacing: 6px;
    margin-bottom: 30px;
  }
  .h2 {
    font-size: 16px;
    font-weight: normal;
    margin-bottom: 24px;
  }
  p {
    line-height: 24px;
    word-break: break-word;

    &.black {
      color: #202121;
    }

    button {
      background-color: transparent;
    }
  }
  .flower {
    width: 70px;
    margin-bottom: 32px;
  }

  .account {
    .copy-button {
      background-color: transparent;
    }

    .account-description {
      margin-bottom: 32px;
      line-height: 24px;
      color: #202121;
    }
  }
}
</style>
