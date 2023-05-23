<template>
  <div class="hello">
    <p class="text">你对广东的寺庙了解多少</p>
    <div class="map">
      <!-- 地图 -->
      <div class="left">
        <div class="chart" ref="chart"></div>
      </div>
      <!-- 文本 -->
      <div class="right">
        <div class="text0">
          <p>蜂拥而至的年轻游客们，无一例外都有着自己的烦恼和焦虑。有人求大厂offer，有人求考编上岸，有人求考研成功，还有人求身体健康。事业、学业、财运、姻缘，乃至于生活中的琐碎小事，都成为了原本六根清净的佛祖服务范畴。</p>
          <p>探究原因，年轻人前往寺庙打卡，主要在于缓解压力和寻求安慰。上学难、就业难、结婚难，龟速上涨的工资跟不上房价的脚步，这些都是摆在当下年轻人眼前的现实难题。当个人努力难以实现阶层跨越，年轻人选择将更多的目光投向“玄学”。尽管大家都知道玄学并不会真正地改变现实处境，但在迷茫和焦虑的情绪面前，玄学却是一剂高效的心理安慰。</p>
          <p>传统上，寺庙常常是用来祈求姻缘和家庭幸福的地方。但如今，越来越多的年轻人却选择在寺庙里祈求财富和事业成功。一些寺庙甚至特意举办了拜财神的活动，吸引着大量的年轻人前来参加。</p>
        </div>
        <div class="paragraph">
          <a-card class="part" title="对传统文化的认同">
            <p>佛教作为中国传统文化的重要组成部分，具有深厚的历史渊源和文化内涵。年轻人在追求个性化的同时，也会关注传统文化的保护、发扬和传承。</p>
          </a-card>
          <a-card class="part" title="精神寄托和信仰需求">
            <p>社会变革和经济发展带来了物质生活水平的提高，但也带来了精神空虚和焦虑。年轻人信佛，或许是在寻找宗教信仰所带来的安慰和满足，以满足他们对于灵魂层面的需求。</p>
          </a-card>
          <a-card class="part" title="心理调节和健康管理">
            <p>佛教强调内心修行和身心健康的平衡。年轻人在追求事业成功的同时，也需要注重身体和心理的健康。因此，信佛可以帮助他们调节情绪，缓解压力，并提高身心健康的水平。</p>
          </a-card>
          <a-card class="part" title="社交需求和团体认同">
            <p>年轻人在信佛过程中，还可以结识志同道合的朋友，建立起属于自己的社交圈和团体认同。这不仅能够满足社交需求，还可以为他们提供学习、成长和发展的机会。</p>
          </a-card>
        </div>
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
    return {
    };
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
.hello {
  padding-top: 100px;
  height: 100vh;
  overflow: hidden;
  .text {
    font-size: 1.5rem;
    font-weight: bold;
  }
  .map {
    display: flex;
    margin: 50px;
    .left {
      width: 50%;
      .chart {
        width: 100%; 
        height: 800px;
      }
    }
    .right {
      width: 50%;
      margin: 50px;
      .text0 {
        margin: 0 50px;
        text-align: left;
        font-weight: normal;
        font-size: 1rem;
        text-indent: 2rem;
      }
      .paragraph {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        margin: 50px;
        .part {
          width: 50%;
          height: 200px;
          background: none;
          border: 0;
          p {
            opacity: 0;
          }
          p:hover {
            opacity: 1;
            text-align: left;
            text-indent: 2rem;
          }
        }
      }
    }
  }
}

</style>
