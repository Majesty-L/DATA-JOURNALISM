<template>
  <div class="header">
    <a-menu class="nav" v-model="current" mode="horizontal" @click="onClick">
      <a-menu-item key="home"> 首页 </a-menu-item>
      <a-menu-item key="page_1"> 寺庙游 </a-menu-item>
      <a-menu-item key="page_2"> 祈福信物 </a-menu-item>
      <a-menu-item key="page_3"> 拜财神 </a-menu-item>
      <a-menu-item key="page_4"> oto模式 </a-menu-item>
    </a-menu>
  </div>
</template>

<script>
export default {
  data() {
    const current = [location.pathname?.split('/')[1] || 'home'];
    return {
      current,
    }
  },
  methods: {
    onClick(v) {
      this.$emit('change', v);
    },
  }
}
</script>

<style scoped>

.nav {
  background: none;
  border: 0;
  padding: 10px;
  display: flex;
}
</style>