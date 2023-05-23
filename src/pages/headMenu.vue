<template>
  <div class="header">
    <a-menu class="nav" v-model="current" mode="horizontal" @click="onClick">
      <a-menu-item key="home"> 首页 </a-menu-item>
      <a-menu-item key="page_1"> 地图 </a-menu-item>
      <a-menu-item key="page_2"> 寺庙游 </a-menu-item>
      <a-menu-item key="page_3"> 祈福信物 </a-menu-item>
      <a-menu-item key="page_4"> 拜财神 </a-menu-item>
      <a-menu-item key="page_5"> oto模式 </a-menu-item>
    </a-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: ['home'],
    }
  },
  watch: {
    $route(val) {
      this.current = [val.name] || 'home';
    },
  },
  methods: {
    onClick(v) {
      this.$emit('change', v);
    },
  }
}
</script>

<style scoped>
.header {
  position: relative;
  z-index:100 !important
}
.nav {
  background: none;
  border: 0;
  padding: 10px;
  display: flex;
  position: fixed;
}
</style>