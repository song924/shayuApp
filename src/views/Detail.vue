<template>
  <div id="detail">
    <van-nav-bar placeholder>
      <template #left>
        <!-- 返回 -->
      </template>
      <template #title>
        <!-- <img src="@/assets/syjz.png" alt="" style="height:1.5rem;"> -->
      </template>
      <template #right>
        <!-- <van-icon name="search" size="18" /> -->
      </template>
    </van-nav-bar>
    <van-row class="total" style="">
      <van-col span="8">
        <!--  <p>2017年</p>
        <p style="border-right: 1px solid #000">
          06<span style="font-size: 12px; font-weight: normal">月<van-icon name="play" style="" /></span>
        </p>
      </van-col>
      <van-col span="8">
        <p>收入</p>
        <p>
          12315.<span style="font-size: 12px; font-weight: normal">22</span>
        </p>
      </van-col>
      <van-col span="8">
        <p>支出</p>
        <p>
          10235.<span style="font-size: 12px; font-weight: normal">13</span>
        </p> -->
      </van-col>
    </van-row>
    <div
      class="detailList"
      :style="{ height: wHeight + 'px', overflow: 'scroll' }"
    >
      <div class="subList" v-for="(item, i) in list" :key="i">
        <van-swipe-cell>
          <div class="listTitle">
            <p>
              <span style="margin-right: 0.6rem">{{ item.date }}</span
              >{{ item.weekDay }}
            </p>
            <p>
              <span v-if="item.income" style="margin-right: 0.6rem">收入：{{ item.income }}</span
              ><span>支出：{{ item.expend }}</span>
            </p>
          </div>
          <template #right>
            <van-button square type="danger" text="删除" />
          </template>
        </van-swipe-cell>

        <van-swipe-cell v-for="(info, index) in item.info" :key="index">
          <van-cell :border="false">
            <img src="" alt="" />
            <div
              :class="{ listInfo: true, Bnone: index == item.info.length - 1 }"
            >
              <div>{{ info.remark }}</div>
              <div>{{ info.type == 'expend' ? '-'+info.money : info.money }}</div>
            </div>
          </van-cell>
          <template #right>
            <van-button square type="danger" text="删除" />
          </template>
        </van-swipe-cell>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: JSON.parse(localStorage.totalInfo)[0].days,
      wHeight: 100,
      loading: false,
      finished: true,
    };
  },
  created() {},
  mounted() {
    console.log(window.screen.height);
    this.wHeight = window.screen.height - 156;
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.van-hairline--bottom::after {
  border-bottom-width: 0;
}
/deep/.van-nav-bar__content {
  background: #ffda44;
  border-bottom: 0;
  .van-nav-bar__title {
    color: #fff;
    display: flex;
  }
}
.van-icon-play {
  transform: rotate(90deg);
  margin-left: 0.3rem;
}

.total {
  height: 60px;
  background: #ffda44;
  padding: 0 1.2rem;
  .van-col {
    padding: 0 1rem;
    p {
      line-height: 26px;
      text-align: left;
      &:first-of-type {
        font-size: 12px;
      }
      &:last-of-type {
        font-size: 18px;
        font-weight: 500;
      }
    }
  }
}

.detailList {
  .van-cell {
    padding: 0;
  }
  .van-button {
    height: 100% !important;
  }
  .listTitle {
    display: flex;
    justify-content: space-between;
    padding: 0.2rem 0.8rem;
    line-height: 1.5rem;
    font-size: 12px;
    border-bottom: 1px solid #ebedf0;
    color: rgb(150, 150, 150);
  }
  .van-cell__value--alone {
    display: flex;
    padding-left: 0.8rem;
    img {
      width: 1rem;
      height: 1rem;
      border: 1px solid #ebedf0;
      margin: auto 0;
      margin-right: 1rem;
    }
    .listInfo {
      display: flex;
      justify-content: space-between;
      width: 100%;
      border-bottom: 1px solid #ebedf0;
      line-height: 3rem;
      padding-right: 0.8rem;
    }
    .Bnone {
      border: none;
    }
  }
}
</style>
