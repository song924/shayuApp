<template>
  <div id="app">
    <Home></Home>
  </div>
</template>
<script>
import Home from "./views/Home.vue";
export default {
  data() {
    return {};
  },
  components: {
    Home,
  },
  methods: {
    // 记账按钮功能
    accounts() {},
  },
};
</script>

<style lang="less">
p {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
