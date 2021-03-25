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
      safe-area-inset-bottom
      v-model="writeModal"
      closeable
      :overlay="false"
      duration="0.2"
      position="bottom"
      :style="{ height: '100%' }"
    >
      <!-- @close="$router.push('/detail'),active=0" -->
      <div
        style="
          height: 44px;
          position: absolute;
          width: 100%;
          background: #ffda44;
        "
      ></div>
      <van-tabs v-model="active1" background="#ffda44" color="#333">
        <van-tab title="支出" name="expend">
          <div :style="{ height: wHeight + 'px', overflow: 'scroll' }">
            <van-row class="iconList" style="padding: 1rem 1.5rem">
              <van-col span="6">
                <van-icon
                  @click="editInfo('cy')"
                  name="friends-o"
                  size="2rem"
                />
                <p>餐饮</p>
              </van-col>
              <van-col span="6">
                <van-icon @click="editInfo('gw')" name="fire-o" size="2rem" />
                <p>购物</p>
              </van-col>
              <van-col span="6">
                <van-icon
                  @click="editInfo('ry')"
                  name="comment-o"
                  size="2rem"
                />
                <p>日用</p>
              </van-col>
              <van-col span="6">
                <van-icon
                  @click="editInfo('jt')"
                  name="point-gift-o"
                  size="2rem"
                />
                <p>交通</p>
              </van-col>
            </van-row>
          </div>
        </van-tab>
        <van-tab title="收入" name="income">
          <van-row class="iconList" style="padding: 1rem 1.5rem">
            <van-col span="6">
              <van-icon @click="editInfo('cy')" name="friends-o" size="2rem" />
              <p>餐饮</p>
            </van-col>
            <van-col span="6">
              <van-icon @click="editInfo('gw')" name="fire-o" size="2rem" />
              <p>购物</p>
            </van-col>
            <van-col span="6">
              <van-icon @click="editInfo('ry')" name="comment-o" size="2rem" />
              <p>日用</p>
            </van-col>
            <van-col span="6">
              <van-icon
                @click="editInfo('jt')"
                name="point-gift-o"
                size="2rem"
              />
              <p>交通</p>
            </van-col>
          </van-row>
        </van-tab>
        <van-popup
          safe-area-inset-bottom
          id="numModal"
          v-model="numModal"
          position="bottom"
          :style="{ height: '40%' }"
        >
          <div
            :class="{ numTitle: true, numTitle_fixed: isFixed }"
            style="display: flex; justify-content: space-between"
          >
            <p>
              备注：<input
                placeholder="点击写备注..."
                type="text"
                v-model="remark"
                @focus="showInput"
                @blur="hideInput"
              />
            </p>
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
              ><van-button
                type="default"
                style="width: 100%; height: 100%"
                @click="dateModal = true"
                >{{ dateVal }}</van-button
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
                @click="moneyVal('')"
              >
                <img
                  src="@/assets/del.png"
                  style="width: 2rem"
                  alt=""
                /> </van-button
            ></van-col>
            <van-col span="6" :style="{ height: numH + 'px' }"
              ><van-button
                type="default"
                style="width: 100%; height: 100%"
                @click="saveInfo"
                >完成</van-button
              ></van-col
            >
          </van-row>
        </van-popup>
        <van-popup
          safe-area-inset-bottom
          :overlay="false"
          id="dateModal"
          v-model="dateModal"
          position="bottom"
        >
          <van-datetime-picker
            @confirm="getSelectDate"
            @cancel="dateModal = false"
            v-model="currentDate"
            type="date"
            title="选择年月日"
            :min-date="minDate"
            :max-date="maxDate"
          />
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
      active1: "expend",
      writeModal: false,
      numModal: false,
      dateModal: false,
      wHeight: "",
      numH: "",
      money: 0,
      remark: "",
      isFixed: false,
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date(),
      dateVal: "今天",
      pageMonth:parseInt(this.$store.state.month)-1,
    };
  },
  created(){
    //数据初始化
    this.$store.commit('changeBook',JSON.parse(localStorage.totalInfo))
    this.$store.commit('changeDate',{
      year:this.getDate().split("/")[0],
      month:this.getDate().split("/")[1]
    })
  },
  methods: {
    //弹起记账本
    accounts() {
      this.active1 = "expend";
      this.writeModal = true;
      this.wHeight = window.screen.height - 44;
      if (this.$store.state.accountBook.length < 1) {
        setTimeout(() => {
          this.$router.push("/chart");
        }, 300);
      }
    },
    //选择记账类型&&记账信息
    editInfo(val) {
      //初始化数据
      //当前时间
      let nowDateTime = this.getDate();
      this.dateVal = "今天";
      this.money = 0;
      this.remark = "";
      if (this.numModal) {
      } else {
        this.numModal = true;
      }
      let data = {
        icon: val,
        date: nowDateTime,
        money: "",
        type: this.active1,
        remark: "",
      };
      localStorage.setItem("subInfo", JSON.stringify(data));
      setTimeout(() => {
        let height = document.getElementById("numModal").clientHeight;
        this.numH = (height - 44) / 4;
        console.log((height - 44) / 4);
      }, 100);
    },
    //输入价格
    moneyVal(val) {
      let aaa = this.money.toString();
      if (this.money == 0 && val != ".") {
        this.money = val;
      } else if (val == "") {
        if (aaa.length <= 1 && aaa == "0") {
          this.money = "0";
        } else {
          this.money = aaa.substring(0, this.money.length - 1);
        }
      } else {
        if (aaa.indexOf(".") != -1 && val == ".") {
        } else {
          if (this.money.length < 9) {
            this.money = this.money + val;
          } else {
          }
        }
      }
    },
    //聚焦输入框
    showInput() {
      this.isFixed = true;
    },
    //失焦输入框
    hideInput() {
      this.isFixed = false;
    },
    //获取时间选择器的时间
    getSelectDate(val) {
      //当前时间
      let nowDateTime = this.getDate();
      //选择时间
      let d = new Date(val);
      let datetime =
        d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate();
      //判断周几

      //注入页面数据
      this.dateVal = nowDateTime == datetime ? "今天" : datetime;
      this.dateModal = false;
      //注入ls数据
      let lsInfo = JSON.parse(localStorage.subInfo);
      lsInfo.date = nowDateTime == datetime ? nowDateTime : datetime;
      // lsInfo.weekDay = this.getWeek(nowDateTime == datetime ? nowDateTime : datetime)
      localStorage.setItem("subInfo", JSON.stringify(lsInfo));
    },
    //保存输入信息
    saveInfo() {
      if (this.money) {
        let lsInfo = JSON.parse(localStorage.subInfo);
        lsInfo.money = this.money;
        lsInfo.remark = this.remark;
        localStorage.setItem("subInfo", JSON.stringify(lsInfo));
        this.setTotalInfo(lsInfo);
      } else {
        alert("请输入金额");
      }
    },

    /* 一些公用或计算方法 */
    //获取当前时间
    getDate() {
      let nowDate = new Date();
      let nowDateTime =
        nowDate.getFullYear() + "/" +
        ((nowDate.getMonth() + 1) >=10 ? (nowDate.getMonth() + 1) : "0"+(nowDate.getMonth() + 1)) +
        "/" +
        nowDate.getDate();
        console.log(nowDateTime)
      return nowDateTime;
    },
    //判断日期是周几
    getWeek(date) {
      let weekDay = [
        "星期天",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六",
      ];
      let myDate = new Date(Date.parse(date));
      return weekDay[myDate.getDay()];
    },
    //对单条记账信息进行汇总和存储
    setTotalInfo(info) {
      console.log(info);
      //拆分单条记账信息
      let month = info.date.split("/")[1]; //月
      let days = info.date.split("/")[2].length == 2 ? info.date.split("/")[2] : "0" + info.date.split("/")[2]; //日
      let type = info.type; //收入或者支出
      let money = info.money; //金额
      //判断组
      let isMonth = "false"; //判断账本里有没有当月信息
      let isDay = "false"; //判断当月里有没有当天信息

      //获取历史账本
      let lsTotalInfo = this.$store.state.accountBook;
      //判断月
      lsTotalInfo.map((item, index) => {
        if (item.month == parseInt(month)) {
          isMonth = index;
          // break;
        }
      });
      //判断日
      if (isMonth == "false") {
        //新建月份数据
        let data = {
          month: month,
          monthIncome: type == "income" ? money : 0,
          monthExpend: type == "expend" ? money : 0,
          days: [
            {
              day: days,
              date: (month.length == 2 ? month : "0" + month) + "月" + days + "日",
              weekDay: this.getWeek(info.date),
              income: type == "income" ? money : 0,
              expend: type == "expend" ? money : 0,
              info: [],
            },
          ],
        };
        data.days[0].info.push(info);
        lsTotalInfo.push(data);
        // localStorage.setItem("monthExpend",lsTotalInfo[0].monthExpend)
        // localStorage.setItem("monthIncome",lsTotalInfo[0].monthIncome)
        /* this.$store.commit("changeMonthInfo",{
          monthExpend:lsTotalInfo[this.pageMonth].monthExpend,
          monthIncome:lsTotalInfo[this.pageMonth].monthIncome
        }) */
      } else {
        console.log(days);
        let datas = lsTotalInfo[isMonth].days;
        datas.map((item, index) => {
          console.log(item.day);
          if (item.day == days) {
            isDay = index;
          }
        });
        //判断日_2
        if (isDay == "false") {
          console.log("没有这一天的信息，新建");
          let datas = lsTotalInfo[isMonth].days;
          let data = {
            day: days,
            date: (month.length == 2 ? month : "0" + month) + "月" + days + "日",
            weekDay: this.getWeek(info.date),
            income: type == "income" ? money : 0,
            expend: type == "expend" ? money : 0,
            info: [],
          };
          datas.push(data);
          data.info.push(info);
        } else {
          console.log("有这一天的信息，插入");
          let income_total = 0;
          let expend_total = 0;

          //插入同一天不同记录
          let data = lsTotalInfo[isMonth].days[isDay];
          data.info.push(info);
          console.log(data);
          //计算当天总金额
          data.info.map((item) => {
            if (item.type == "income") {
              income_total += parseFloat(item.money);
            } else {
              expend_total += parseFloat(item.money);
            }
          });
          if (type == "income") {
            data.income = income_total;
          } else {
            data.expend = expend_total;
          }
          let month_inTotal = 0;
          let month_exTotal = 0;
          //计算当月总金额
          lsTotalInfo[isMonth].days.map((item) => {
            month_inTotal += parseFloat(item.income);
            month_exTotal += parseFloat(item.expend);
          });
          console.log(month_inTotal, month_exTotal);
          lsTotalInfo[isMonth].monthIncome = month_inTotal;
          lsTotalInfo[isMonth].monthExpend = month_exTotal;
        }
        //倒叙每月信息
        lsTotalInfo[isMonth].days.sort(this.compare('day'))
        // localStorage.setItem("monthExpend",lsTotalInfo[isMonth].monthExpend)
        // localStorage.setItem("monthIncome",lsTotalInfo[isMonth].monthIncome)
        this.$store.commit("changeMonthInfo",{
          monthExpend:lsTotalInfo[isMonth].monthExpend,
          monthIncome:lsTotalInfo[isMonth].monthIncome
        })
      }
      console.log(lsTotalInfo);
      //计算本月总金额&&
      
      localStorage.setItem("totalInfo", JSON.stringify(lsTotalInfo));
      this.$store.state.accountBook = lsTotalInfo;
      this.$router.push("/detail");
      this.active = 0;
      this.numModal = false;
      this.writeModal = false;
    },

    //计算当天和当月的收入支出
    countTotalInfo() {
      // let data = JSON.parse(localStorage.totalInfo)
    },
    //倒叙方法
    compare(property) {
      return function (obj1, obj2) {
        return  obj2[property] - obj1[property] ;
      };
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
/deep/.van-tabs__wrap {
  padding: 0 100px;
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
  .numTitle_fixed {
    position: relative;
    bottom: 0;
    width: calc(100% - 16px);
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
