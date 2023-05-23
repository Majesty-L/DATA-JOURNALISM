<template>
  <div class="hello">
    <!-- 门 -->
    <div class="door-container">
      <div class="door">
        <img class="static" src="@/assets/door_full.png" height="100%"  alt="">
        <img class="turn_l" src="@/assets/door_l.png" height="100%"  alt="">
        <img class="turn_r" src="@/assets/door_r.png" height="100%"  alt="">
      </div>
    </div>
    <!-- 标题 -->
    <img class="title" src="@/assets/title.png" width="500px" alt="">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {};
  },
}
</script>

<style lang="less" scoped>
.hello {
  height: 100vh;
  padding-top: 50px;
  overflow: hidden;
  .door-container {
    display: flex;
    justify-content: center;
    text-align: left;
    .door {
      height: 90vh;
      width: 90vh;
      perspective: 1000px;
      position: relative;
      .static {
        position: absolute;
        z-index: 2;
      }
    }
  }
}
// 开门动画
.door .turn_l {
  -webkit-animation: swing-left-fwd 2s ease-in-out both 1s;
  animation: swing-left-fwd 2s ease-in-out both 1s;
  position: absolute;
  z-index: 3;
}

.door .turn_r {
  -webkit-animation: swing-right-fwd 2s ease-in-out both 1s;
  animation: swing-right-fwd 2s ease-in-out both 1s;
  position: absolute;
  z-index: 3;
}
@-webkit-keyframes swing-left-fwd {
  0% {
    -webkit-transform: rotateY(0);
    -webkit-transform-origin: 20%;
  }
  100% {
    -webkit-transform: rotateY(-80deg);
    -webkit-transform-origin: 20%;
  }
}
@keyframes swing-left-fwd {
  0% {
    transform: rotateY(0);
    transform-origin: 20%;
  }
  100% {
    transform: rotateY(-80deg);
    transform-origin: 20%;
  }
}
@-webkit-keyframes swing-right-fwd {
  0% {
    -webkit-transform: rotateY(0);
    -webkit-transform-origin: 80%;
  }
  100% {
    -webkit-transform: rotateY(80deg);
    -webkit-transform-origin: 80%;
  }
}
@keyframes swing-right-fwd {
  0% {
    transform: rotateY(0);
    transform-origin: 80%;
  }
  100% {
    transform: rotateY(80deg);
    transform-origin: 80%;
  }
}

.title {
  margin-top: -40vh;
  z-index: 2;
}
</style>
