"use strict";

// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('storage')); // 指定图表的配置项和数据

var option = {
  grid: {
    x: 25,
    y: 20,
    x2: 30,
    y2: 20
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      // 坐标轴指示器，坐标轴触发有效
      type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'

    }
  },
  xAxis: {
    data: ["恭喜发财", "恭喜发财", "恭喜发财", "恭喜发财", "恭喜发财", "恭喜发财"]
  },
  yAxis: {},
  series: [{
    name: '销量',
    type: 'bar',
    barWidth: '4px',
    itemStyle: {
      color: '#37A1F7',
      borderRadius: [5, 5, 0, 0]
    },
    data: [5, 20, 36, 10, 10, 20]
  }]
}; // 使用刚指定的配置项和数据显示图表。

myChart.setOption(option);
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    autoplay: true,
    dots: true
  });
});