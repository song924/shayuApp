<template>
  <div id="home">
    <router-view />
    <van-tabbar v-model="active" active-color="#FFDA44" placeholder>
      <van-tabbar-item to="/detail" icon="home-o">明细</van-tabbar-item>
      <van-tabbar-item to="/chart" icon="search">图表</van-tabbar-item>
      <div
        style="position: relative; top: -1.75rem; z-index: 1"
        @click="accounts"
      >
        <div
          style="
            padding: 0.3rem;
            border-radius: 50%;
            border: 1px solid #ebedf0;
            display: flex;
            background: #fff;
          "
        >
          <van-icon
            size="1.5rem"
            name="plus"
            style="margin: auto; border-radius: 50%; display: flex"
          />
        </div>
        <p
          style="
            margin: 0;
            font-size: 0.5rem;
            text-align: center;
            margin-top: 0.15rem;
          "
        >
          记账
        </p>
      </div>
      <van-tabbar-item to="/bbs" icon="friends-o">社区</van-tabbar-item>
      <van-tabbar-item to="/user" icon="setting-o">我的</van-tabbar-item>
    </van-tabbar>
    <van-popup
      v-model="writeModal"
      closeable
      :overlay="false"
      duration="0.2"
      position="bottom"
      :style="{ height: '100%' }"
    >
      <van-tabs v-model="active1" background="#ffda44" color="#333">
        <van-tab title="支出">
          <div :style="{ height: wHeight + 'px', overflow: 'scroll' }">
            <van-row class="iconList" style="padding: 1rem 1.5rem">
              <van-col span="6">
                <van-icon @click="editInfo" name="friends-o" size="2rem" />
                <p>餐饮</p>
              </van-col>
              <van-col span="6">
                <van-icon name="fire-o" size="2rem" />
                <p>购物</p>
              </van-col>
              <van-col span="6">
                <van-icon name="comment-o" size="2rem" />
                <p>日用</p>
              </van-col>
              <van-col span="6">
                <van-icon name="point-gift-o" size="2rem" />
                <p>交通</p>
              </van-col>
            </van-row>
            <van-row class="iconList" style="padding: 1rem 1.5rem">
              <van-col span="6">
                <van-icon name="friends-o" size="2rem" />
                <p>餐饮</p>
              </van-col>
              <van-col span="6">
                <van-icon name="fire-o" size="2rem" />
                <p>购物</p>
              </van-col>
              <van-col span="6">
                <van-icon name="comment-o" size="2rem" />
                <p>日用</p>
              </van-col>
              <van-col span="6">
                <van-icon name="point-gift-o" size="2rem" />
                <p>交通</p>
              </van-col>
            </van-row>
            <van-row class="iconList" style="padding: 1rem 1.5rem">
              <van-col span="6">
                <van-icon name="friends-o" size="2rem" />
                <p>餐饮</p>
              </van-col>
              <van-col span="6">
                <van-icon name="fire-o" size="2rem" />
                <p>购物</p>
              </van-col>
              <van-col span="6">
                <van-icon name="comment-o" size="2rem" />
                <p>日用</p>
              </van-col>
              <van-col span="6">
                <van-icon name="point-gift-o" size="2rem" />
                <p>交通</p>
              </van-col>
            </van-row>
            <van-row class="iconList" style="padding: 1rem 1.5rem">
              <van-col span="6">
                <van-icon name="friends-o" size="2rem" />
                <p>餐饮</p>
              </van-col>
              <van-col span="6">
                <van-icon name="fire-o" size="2rem" />
                <p>购物</p>
              </van-col>
              <van-col span="6">
                <van-icon name="comment-o" size="2rem" />
                <p>日用</p>
              </van-col>
              <van-col span="6">
                <van-icon name="point-gift-o" size="2rem" />
                <p>交通</p>
              </van-col>
            </van-row>
            <van-row class="iconList" style="padding: 1rem 1.5rem">
              <van-col span="6">
                <van-icon name="friends-o" size="2rem" />
                <p>餐饮</p>
              </van-col>
              <van-col span="6">
                <van-icon name="fire-o" size="2rem" />
                <p>购物</p>
              </van-col>
              <van-col span="6">
                <van-icon name="comment-o" size="2rem" />
                <p>日用</p>
              </van-col>
              <van-col span="6">
                <van-icon name="point-gift-o" size="2rem" />
                <p>交通</p>
              </van-col>
            </van-row>
            <van-row class="iconList" style="padding: 1rem 1.5rem">
              <van-col span="6">
                <van-icon name="friends-o" size="2rem" />
                <p>餐饮</p>
              </van-col>
              <van-col span="6">
                <van-icon name="fire-o" size="2rem" />
                <p>购物</p>
              </van-col>
              <van-col span="6">
                <van-icon name="comment-o" size="2rem" />
                <p>日用</p>
              </van-col>
              <van-col span="6">
                <van-icon name="point-gift-o" size="2rem" />
                <p>交通</p>
              </van-col>
            </van-row>
            <van-row class="iconList" style="padding: 1rem 1.5rem">
              <van-col span="6">
                <van-icon name="friends-o" size="2rem" />
                <p>餐饮</p>
              </van-col>
              <van-col span="6">
                <van-icon name="fire-o" size="2rem" />
                <p>购物</p>
              </van-col>
              <van-col span="6">
                <van-icon name="comment-o" size="2rem" />
                <p>日用</p>
              </van-col>
              <van-col span="6">
                <van-icon name="point-gift-o" size="2rem" />
                <p>交通</p>
              </van-col>
            </van-row>
            <van-row class="iconList" style="padding: 1rem 1.5rem">
              <van-col span="6">
                <van-icon name="friends-o" size="2rem" />
                <p>餐饮</p>
              </van-col>
              <van-col span="6">
                <van-icon name="fire-o" size="2rem" />
                <p>购物</p>
              </van-col>
              <van-col span="6">
                <van-icon name="comment-o" size="2rem" />
                <p>日用</p>
              </van-col>
              <van-col span="6">
                <van-icon name="point-gift-o" size="2rem" />
                <p>交通</p>
              </van-col>
            </van-row>
            <van-row class="iconList" style="padding: 1rem 1.5rem">
              <van-col span="6">
                <van-icon name="friends-o" size="2rem" />
                <p>餐饮</p>
              </van-col>
              <van-col span="6">
                <van-icon name="fire-o" size="2rem" />
                <p>购物</p>
              </van-col>
              <van-col span="6">
                <van-icon name="comment-o" size="2rem" />
                <p>日用</p>
              </van-col>
              <van-col span="6">
                <van-icon name="point-gift-o" size="2rem" />
                <p>交通</p>
              </van-col>
            </van-row>
            <van-row class="iconList" style="padding: 1rem 1.5rem">
              <van-col span="6">
                <van-icon name="friends-o" size="2rem" />
                <p>餐饮</p>
              </van-col>
              <van-col span="6">
                <van-icon name="fire-o" size="2rem" />
                <p>购物</p>
              </van-col>
              <van-col span="6">
                <van-icon name="comment-o" size="2rem" />
                <p>日用</p>
              </van-col>
              <van-col span="6">
                <van-icon name="point-gift-o" size="2rem" />
                <p>交通</p>
              </van-col>
            </van-row>
          </div>
        </van-tab>
        <van-tab title="收入">收入</van-tab>
        <van-popup
          id="numModal"
          v-model="numModal"
          position="bottom"
          :style="{ height: '40%' }"
        >
          <div
            class="numTitle"
            style="display: flex; justify-content: space-between"
          >
            <p>备注：<input placeholder="点击写备注..." type="text" /></p>
            <p>{{ money }}</p>
          </div>
          <van-row>
            <van-col span="6" :style="{ height: numH + 'px' }"
              ><van-button
                type="default"
                style="width: 100%; height: 100%"
                @click="moneyVal('7')"
                >7</van-button
              ></van-col
            >
            <van-col span="6" :style="{ height: numH + 'px' }"
              ><van-button
                type="default"
                style="width: 100%; height: 100%"
                @click="moneyVal('8')"
                >8</van-button
              ></van-col
            >
            <van-col span="6" :style="{ height: numH + 'px' }"
              ><van-button
                type="default"
                style="width: 100%; height: 100%"
                @click="moneyVal('9')"
                >9</van-button
              ></van-col
            >
            <van-col span="6" :style="{ height: numH + 'px' }"
              ><van-button type="default" style="width: 100%; height: 100%"
                >今天</van-button
              ></van-col
            >
          </van-row>
          <van-row>
            <van-col span="6" :style="{ height: numH + 'px' }"
              ><van-button
                type="default"
                style="width: 100%; height: 100%"
                @click="moneyVal('4')"
                >4</van-button
              ></van-col
            >
            <van-col span="6" :style="{ height: numH + 'px' }"
              ><van-button
                type="default"
                style="width: 100%; height: 100%"
                @click="moneyVal('5')"
                >5</van-button
              ></van-col
            >
            <van-col span="6" :style="{ height: numH + 'px' }"
              ><van-button
                type="default"
                style="width: 100%; height: 100%"
                @click="moneyVal('6')"
                >6</van-button
              ></van-col
            >
            <van-col span="6" :style="{ height: numH + 'px' }"
              ><van-button type="default" style="width: 100%; height: 100%"
                >+</van-button
              ></van-col
            >
          </van-row>
          <van-row>
            <van-col span="6" :style="{ height: numH + 'px' }"
              ><van-button
                type="default"
                style="width: 100%; height: 100%"
                @click="moneyVal('1')"
                >1</van-button
              ></van-col
            >
            <van-col span="6" :style="{ height: numH + 'px' }"
              ><van-button
                type="default"
                style="width: 100%; height: 100%"
                @click="moneyVal('2')"
                >2</van-button
              ></van-col
            >
            <van-col span="6" :style="{ height: numH + 'px' }"
              ><van-button
                type="default"
                style="width: 100%; height: 100%"
                @click="moneyVal('3')"
                >3</van-button
              ></van-col
            >
            <van-col span="6" :style="{ height: numH + 'px' }"
              ><van-button type="default" style="width: 100%; height: 100%"
                >-</van-button
              ></van-col
            >
          </van-row>
          <van-row>
            <van-col span="6" :style="{ height: numH + 'px' }"
              ><van-button
                type="default"
                style="width: 100%; height: 100%"
                @click="moneyVal('.')"
                >.</van-button
              ></van-col
            >
            <van-col span="6" :style="{ height: numH + 'px' }"
              ><van-button
                type="default"
                style="width: 100%; height: 100%"
                @click="moneyVal('0')"
                >0</van-button
              ></van-col
            >
            <van-col span="6" :style="{ height: numH + 'px' }"
              ><van-button
                type="default"
                style="width: 100%; height: 100%"
                @click="moneyVal('j')"
                >j</van-button
              ></van-col
            >
            <van-col span="6" :style="{ height: numH + 'px' }"
              ><van-button type="default" style="width: 100%; height: 100%"
                >完成</van-button
              ></van-col
            >
          </van-row>
        </van-popup>
      </van-tabs>
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      active1: 0,
      writeModal: false,
      numModal: false,
      wHeight: "",
      numH: "",
      money: 0,
    };
  },
  methods: {
    //弹起记账本
    accounts() {
      this.writeModal = true;
      this.wHeight = window.screen.height - 44;
    },
    //选择记账类型&&记账信息
    editInfo() {
      this.numModal = true;

      setTimeout(() => {
        let height = document.getElementById("numModal").clientHeight;
        this.numH = (height - 44) / 4;
        console.log((height - 44) / 4);
      }, 100);
    },
    //输入价格
    moneyVal(val) {
      if (this.money == 0 && val != ".") {
        this.money = val;
      } else if (val == "j") {
        let aaa = this.money.toString();
        this.money = aaa.substring(0, this.money.length - 1);
      } else {
        this.money = this.money + val;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.van-hairline--top-bottom .van-icon-plus::before {
  margin: auto;
  background: #ffda44;
  border-radius: 50%;
  padding: 0.56rem;
}
/deep/.van-popup__close-icon {
  color: #fff;
}
/deep/.van-popup__close-icon--top-right {
  top: 12px;
}

.iconList {
  .van-col--6 {
    height: 4rem;
    p {
      font-size: 12px;
    }
    .van-icon {
      border-radius: 50%;
      background: #ebedf0;
      padding: 0.4rem;
      margin-bottom: 0.2rem;
    }
    .icon_active {
      background: #ffda44;
    }
  }
}
#numModal {
  .numTitle {
    background: #ebedf0;
    height: 26px;
    line-height: 26px;
    border-top: 1px solid #ccc;
    padding: 8px;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    p {
      &:first-of-type {
        font-size: 14px;
        width: 80%;
        text-align: left;
        input {
          border: 0;
          padding: 0;
          width: 80%;
          background: #ebedf0;
        }
      }
      &:last-of-type {
        font-size: 20px;
        font-weight: 500;
      }
    }
  }
  .van-row {
    .van-col {
      border-left: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
      &:first-of-type {
        border-left: 0;
      }
      .van-button--default {
        border: 0;
        font-size: 18px;
        background: #ebedf0;
        border-radius: 0;
      }
    }
    &:last-of-type {
      .van-col {
        border-bottom: 0;
        &:last-of-type {
          .van-button--default {
            background: #ffda44;
          }
        }
      }
    }
  }
}
</style>
