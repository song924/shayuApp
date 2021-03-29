<template>
  <div id="detail">
    <van-nav-bar placeholder>
      <template #left>
        <!-- 返回 -->
      </template>
      <template #title>
        <img src="@/assets/syjz.png" alt="" style="height:1.5rem;">
      </template>
      <template #right>
        <!-- <van-icon name="search" size="18" /> -->
      </template>
    </van-nav-bar>
    <van-row class="total" style="">
      <van-col span="8" @click="showDate=true">
         <p>{{$store.state.year}}</p>
        <p style="border-right: 1px solid #000">
          {{$store.state.month}}<span style="font-size: 12px; font-weight: normal">月<van-icon name="play" style="" /></span>
        </p>
      </van-col>
      <van-col span="8">
        <p>收入</p>
        <p>
          <!-- 12315.<span style="font-size: 12px; font-weight: normal">22</span> -->
          {{$store.state.monthIncome}}
        </p>
      </van-col>
      <van-col span="8">
        <p>支出</p>
        <p>
          <!-- 10235.<span style="font-size: 12px; font-weight: normal">13</span> -->
          {{$store.state.monthExpend}}
        </p>
      </van-col>
      <van-popup v-model="showDate" position="bottom">
        <van-datetime-picker
            @confirm="selectDate"
            @cancel="showDate=false"
            v-model="currentDate"
            :min-date="minDate"
            :max-date="maxDate"
            type="year-month"
            title="选择年月"
          />
      </van-popup>
    </van-row>
    <div
      class="detailList"
      :style="{ height: wHeight + 'px', overflow: 'scroll' }"
    >
      <div class="subList" v-for="(item, month) in $store.state.list.days" :key="month">
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
            <van-button square type="danger" @click="delDay(month)" text="删除" />
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
            <van-button square type="danger" @click="delDayInfo(month,index)" text="删除" />
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
      showDate:false,
      currentDate:false,
      list: this.$store.state.list.days,
      pageMonth:parseInt(this.$store.state.month)-1,
      wHeight: 100,
      loading: false,
      finished: true,
      monthExpend:localStorage.monthExpend ? localStorage.monthExpend : 0,
      monthIncome:localStorage.monthIncome ? localStorage.monthIncome : 0,
      minDate: new Date(2021, 0),
      maxDate: new Date(2021, 11),
      
    };
  },
  created() {},
  mounted() {
    console.log(window.screen.height);
    this.wHeight = window.screen.height - 156;
  },
  methods: {
    //删除天
    delDay(month){
      console.log("删除第几天",month)
     /*  let day = this.$store.state.accountBook
      let expend = day[this.pageMonth].days[i].expend
      let income = day[this.pageMonth].days[i].income
      day[this.pageMonth].monthExpend = day[this.pageMonth].monthExpend - parseFloat(expend)
      day[this.pageMonth].monthIncome = day[this.pageMonth].monthIncome - parseFloat(income) */
      this.computeMoney(month)
      

      
    },
    //删除同一天不同信息
    delDayInfo(i,info){
      console.log("删除当天的第几条信息",info)
      /* let month = this.$store.state.accountBook
      let expend = month[this.pageMonth].days[i].expend //当天
      let income = month[this.pageMonth].days[i].income //当天
      let dayInfo = month[this.pageMonth].days[i].info[info] //当天记录金额 */
      
      this.computeMoney(i,info)
     /*  month[this.pageMonth].monthExpend = month[this.pageMonth].monthExpend - month[this.pageMonth].days[i].expend
      month[this.pageMonth].monthIncome = month[this.pageMonth].monthIncome - month[this.pageMonth].days[i].income

      month[this.pageMonth].days[i].info.splice(info,1) */
      /* if(month[this.pageMonth].days[i].info.length){

      }else{
        this.delDay(i)
      } */
      // localStorage.setItem("totalInfo",JSON.stringify(month))
    },
    //选择年月日
    selectDate(val){
      let d = new Date(val);
      let datetime =
        d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate();
      console.log(datetime)
      this.$store.commit('changeDate',{
          year:d.getFullYear(),
          month:(d.getMonth() + 1) >= 10 ? (d.getMonth() + 1) : "0" + (d.getMonth() + 1)
      })
      // this.list = this.$store.state.accountBook[parseInt((d.getMonth() + 1))-1].days,
      this.$store.commit("changeList",parseInt((d.getMonth() + 1))-1)
      this.$store.commit("changeMonthInfo",{
        monthExpend:this.$store.state.accountBook[parseInt((d.getMonth() + 1))-1].monthExpend,
        monthIncome:this.$store.state.accountBook[parseInt((d.getMonth() + 1))-1].monthIncome
      })
      this.showDate = false
    },
    //计算总收入支出方法
    computeMoney(month,sub){
        let day = this.$store.state.accountBook/* JSON.parse(localStorage.totalInfo) */
        let expend = day[this.pageMonth].days[month].expend
        let income = day[this.pageMonth].days[month].income
        if(sub||sub == 0){
          let dayInfo = day[this.pageMonth].days[month].info[sub] //当天记录金额
          if(dayInfo.type == "expend"){
              day[this.pageMonth].days[month].expend = expend - parseFloat(dayInfo.money)
              day[this.pageMonth].monthExpend = day[this.pageMonth].monthExpend - parseFloat(dayInfo.money)
          }else{
              day[this.pageMonth].days[month].income = income - parseFloat(dayInfo.money)
               day[this.pageMonth].monthIncome = day[this.pageMonth].monthIncome - parseFloat(dayInfo.money)
          }
          
          console.log("expend",day[this.pageMonth].days[month].expend )
          console.log("income",day[this.pageMonth].days[month].income )

          day[this.pageMonth].days[month].info.splice(sub,1)
          if(day[this.pageMonth].days[month].info.length){

          }else{
            day[this.pageMonth].days.splice(month,1)
          }
          
        }else{
          day[this.pageMonth].monthExpend = day[this.pageMonth].monthExpend - parseFloat(expend)
          day[this.pageMonth].monthIncome = day[this.pageMonth].monthIncome - parseFloat(income)
          
          day[this.pageMonth].days.splice(month,1)
          
        }

        this.$store.commit("changeMonthInfo",{
              monthExpend:day[this.pageMonth].monthExpend,
              monthIncome:day[this.pageMonth].monthIncome
        })
        console.log("monthExpend",day[this.pageMonth].monthExpend)
        console.log("monthIncome",day[this.pageMonth].monthIncome)
        

        
        localStorage.setItem("totalInfo",JSON.stringify(day))
    }
  },
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
