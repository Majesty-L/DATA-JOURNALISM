<template>
  <div class="page">
    <div class="title">在上班和上进之间，年轻人选择了上香</div>
    <div class="display_first">
      <span
        class="paragraph">春节假期之后，随着防疫政策的放开，旅游业的发展也迎来了一个小高峰。马蜂窝发布的2023春季“旅游蜂向标”的研究数据显示，在今年春季，寺庙旅游成为了人们新的心头好，各地寺庙的平均热度涨幅高达138%。走在大街小巷，许多人身上也挂满了各式各样的手串吊坠，信仰神佛之风席卷全国。
        走进社会的年轻人越来越多，与之相对的就是走进寺庙的年轻人也猛地多了起来。相比于以前，庙堂前零星几个虔诚跪拜的中老年游客，近年来，寺庙相关景区熙熙攘攘的，多了很多年轻面孔。</span>
      <div class="chart_first" ref="chart_first"></div>
    </div>
    <div class="display_second">
      <span
        class="paragraph">携程网的数据也显示，今年以来，与寺庙相关的门票订单同比增长310%，而进入二月之后，在预订门票的群体中，90、00后占比将近50%。每到周末，寺庙相关景区的门票订单就大幅增加，以2月为例，寺庙景区周末日均订单较平日上涨150%，而其他的如主题乐园，周末日均订单较平日仅上涨75%。</span>
    </div>
    <div class="display_third">
      <span
        class="paragraph">游乐园也许仍然还是世界上最快乐的地方，但它们的存在好像已经不能够满足和安慰这届年轻人了，焦虑和压力好像拥有了更好的去处。正如互联网的热梗所说，“在上班和上进之间，90后选择了上香；在求人和求己之间，00后选择了求佛；在作用和作为之间，你选择了作法；在关系和体系之间，我选择了佛系”。</span>
    </div>
    <div class="display_fourth">
      <span
        class="paragraph">随着寺庙旅游业如火如荼地开展，全国各地都掀起了一股求佛上香的热潮。以今年来说，灵隐寺，雍和宫，寒山寺等寺庙景区涌进了大批年轻人，他们正在成为点燃寺庙旺盛香火的主力军。“年轻人挤爆寺庙”“上香比上学还认真”“灵隐寺十八籽手串限购”等话题频频占据微博热搜。</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'siMiaoYou',
  data() {
    return {};
  },
  mounted() {
    this.createFirst();
  },
  methods: {
    createFirst() {
      const colors = ['#5470C6', '#EE6666'];
      const chart = this.$echarts.init(this.$refs.chart_first);
      chart.setOption({
        color: colors,
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        title: {
          text: '31-40岁年龄段占比最高，18-23岁年龄段偏好度（TGI）最高',
          textStyle: {
            fontSize: 16
          },
          right: '0'
        },
        // 图例
        legend: {
          data: ['TGI', 'Percent'],
          left: '0'
        },
        // x 轴
        xAxis: [
          {
            type: 'category',
            axisTick: {
              alignWithLabel: true
            },
            data: ['18-23岁', '24-30岁', '31-40岁', '41-50岁', '51岁+']
          }
        ],
        // y 轴
        yAxis: [
          {
            type: 'value',
            name: 'TGI',
            position: 'right',
            alignTicks: true,
            axisLine: {
              show: true,
              lineStyle: {
                color: colors[0],
              }
            },
            axisLabel: {
              formatter: '{value}'
            }
          },
          {
            type: 'value',
            name: '占比',
            position: 'left',
            alignTicks: true,
            axisLine: {
              show: true,
              lineStyle: {
                color: colors[1]
              }
            },
            axisLabel: {
              formatter: '{value} %'
            }
          }
        ],
        // 系列，一种数据一个系列
        series: [
          {
            name: 'TGI',
            type: 'bar',
            data: [30, 25, 20, 17, 7], // 在这改数据
            barWidth: 20, // 设置柱状图的宽度为 20
          },
          {
            name: 'Percent',
            type: 'line',
            yAxisIndex: 1,
            data: [16, 25, 33, 14, 9] // 在这改数据
          }
        ]
      });

    },
  },
}
</script>
<style lang="less" scoped>
.page {
  margin: 50px 200px;
  text-align: left;

  .title {
    font-size: 1rem;
    font-weight: bold;
  }

  .paragraph {
    display: block;
    text-indent: 2rem;
    font-size: 1rem;
  }

  .display_first {
    margin-top: 32px;
    height: 550px;
    .chart_first {
      margin: 50px auto; 
      height: 400px; 
      width: 800px;
    }
  }

  .display_second {
    margin-top: 32px;
    height: 500px;
  }

  .display_third {
    margin-top: 32px;
    height: 500px;
  }

  .display_fourth {
    margin-top: 32px;
    height: 500px;
  }
}
</style>