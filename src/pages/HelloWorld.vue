<template>
  <div class="hello">
    <!-- 门 -->
    <div class="door-container">
      <div class="door">
        <img src="@/assets/door_l.png" height="100%" alt="">
        <img src="@/assets/door_r.png" height="100%" alt="">
      </div>
      <img class="title" src="@/assets/title.png" width="500px" alt="">
    </div>
    <!-- 地图 -->
    <div class="map">
      <p class="text">你对广东的寺庙了解多少</p>
      <div ref="chart" style="width: 100%; height: 800px;"></div>
    </div>
    <!-- 文本 -->
    <div class="text0">
			<p>蜂拥而至的年轻游客们，无一例外都有着自己的烦恼和焦虑。有人求大厂offer，有人求考编上岸，有人求考研成功，还有人求身体健康。事业、学业、财运、姻缘，乃至于生活中的琐碎小事，都成为了原本六根清净的佛祖服务范畴。</p>
			<p>探究原因，年轻人前往寺庙打卡，主要在于缓解压力和寻求安慰。上学难、就业难、结婚难，龟速上涨的工资跟不上房价的脚步，这些都是摆在当下年轻人眼前的现实难题。当个人努力难以实现阶层跨越，年轻人选择将更多的目光投向“玄学”。尽管大家都知道玄学并不会真正地改变现实处境，但在迷茫和焦虑的情绪面前，玄学却是一剂高效的心理安慰。</p>
			<p>传统上，寺庙常常是用来祈求姻缘和家庭幸福的地方。但如今，越来越多的年轻人却选择在寺庙里祈求财富和事业成功。一些寺庙甚至特意举办了拜财神的活动，吸引着大量的年轻人前来参加。</p>
		</div>
    <div class="paragraph">
      <div class="part">
        <H2>对传统文化的认同</H2>
        <p>佛教作为中国传统文化的重要组成部分，具有深厚的历史渊源和文化内涵。年轻人在追求个性化的同时，也会关注传统文化的保护、发扬和传承。</p>
      </div>
      <div class="part">
        <H2>精神寄托和信仰需求</H2>
        <p>社会变革和经济发展带来了物质生活水平的提高，但也带来了精神空虚和焦虑。年轻人信佛，或许是在寻找宗教信仰所带来的安慰和满足，以满足他们对于灵魂层面的需求。</p>
      </div>
      <div class="part">
        <H2>心理调节和健康管理</H2>
        <p>佛教强调内心修行和身心健康的平衡。年轻人在追求事业成功的同时，也需要注重身体和心理的健康。因此，信佛可以帮助他们调节情绪，缓解压力，并提高身心健康的水平。</p>
      </div>
      <div class="part">
        <H2>社交需求和团体认同</H2>
        <p>年轻人在信佛过程中，还可以结识志同道合的朋友，建立起属于自己的社交圈和团体认同。这不仅能够满足社交需求，还可以为他们提供学习、成长和发展的机会。</p>
      </div>
    </div>
  </div>
</template>

<script>
import guangdong from '@/assets/guangdong.json';
const simiaoData = {
  广州市: { num: 100, txt: '暂无' },
};
export default {
  name: 'HelloWorld',
  data() {
    return {};
  },
  mounted() {
    this.$echarts.registerMap('guangdong', guangdong);
    const chart = this.$echarts.init(this.$refs.chart);
    chart.setOption({
      tooltip: {
        trigger: 'item',
        formatter: function (params) {
          const cityName = params.name;
          const data = simiaoData[cityName];
          if (data) {
            return `${cityName}<br>寺庙个数：${data.num}<br>备注信息：${data.txt}`;
          }
          return cityName;
        },
      },
      series: [
        {
          name: '广东省',
          type: 'map',
          map: 'guangdong',
          roam: false,
          label: {
            show: true
          },
          emphasis: {
            itemStyle: {
              areaColor: 'rgb(218,206,191)',
            }
          },
        },
      ],
    });
  },
}
</script>

<style lang="less" scoped>
.door {
  height: 90vh;
}
// 开门动画
.door img:first-child {
  -webkit-animation: swing-left-fwd 2s ease-in-out both 1s;
  animation: swing-left-fwd 2s ease-in-out both 1s;
}

.door img:last-child {
  -webkit-animation: swing-right-fwd 2s ease-in-out both 1s;
  animation: swing-right-fwd 2s ease-in-out both 1s;
}
@-webkit-keyframes swing-left-fwd {
  0% {
    -webkit-transform: rotateY(0);
    -webkit-transform-origin: 20%;
  }
  100% {
    -webkit-transform: rotateY(-120deg);
    -webkit-transform-origin: 20%;
  }
}
@keyframes swing-left-fwd {
  0% {
            transform: rotateY(0);
            transform-origin: 20%;
  }
  100% {
            transform: rotateY(-120deg);
            transform-origin: 20%;
  }
}
@-webkit-keyframes swing-right-fwd {
  0% {
    -webkit-transform: rotateY(0);
    -webkit-transform-origin: 80%;
  }
  100% {
    -webkit-transform: rotateY(120deg);
    -webkit-transform-origin: 80%;
  }
}
@keyframes swing-right-fwd {
  0% {
            transform: rotateY(0);
            transform-origin: 80%;
  }
  100% {
            transform: rotateY(120deg);
            transform-origin: 80%;
  }
}

.title {
  margin-top: -30%;
}

.map {
  margin-top: 50px;
  .text {
    font-size: 1.5rem;
    font-weight: bold;
  }
}

.text0 {
  margin: 0 150px;
  text-align: left;
  font-weight: normal;
  font-size: 1rem;
}
.paragraph {
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  margin: 100px auto;
  padding-bottom: 100px;
  .part {
    width: 50%;
    padding: 0 50px;
    h2 {
      font-weight: bold;
    }
    p {
      text-align: left;
    }
  }
}
</style>
