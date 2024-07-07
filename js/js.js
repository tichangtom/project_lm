$(window).load(function () {
	$(".loading").fadeOut()
})

/****/
/****/
$(document).ready(function () {
	var whei = $(window).width()
	$("html").css({ fontSize: whei / 20 })
	$(window).resize(function () {
		var whei = $(window).width()
		$("html").css({ fontSize: whei / 20 })
	});
});

$(function () {

	echarts_1();
	echarts_2();
	echarts_3();

	function echarts_1() {
		var myChart = echarts.init(document.getElementById('echart1'));
		option = {
			tooltip: {

				trigger: 'axis',
				axisPointer: {
					lineStyle: {
						color: '#57617B'
					}
				},
				formatter: '{b}日	:<br/> 高风险号码数{c}'
			},

			grid: {
				left: '0',
				right: '20',
				top: '10',
				bottom: '0',
				containLabel: true
			},
			xAxis: [{
				type: 'category',
				boundaryGap: false,
				axisLine: {
					show: false,
					lineStyle: {
						color: 'rgba(255,255,255,.6)'
					}
				},
				data: ['6.1', '6.2', '6.3', '6.4', '6.5', '6.6']
			}],
			yAxis: [{
				axisLabel: {
					show: true,
					textStyle: {
						color: 'rgba(255,255,255,.6)'
					}
				},
				axisLine: {
					show: false,

				},
				splitLine: {
					lineStyle: {
						type: 'dotted',
						color: 'rgba(255,255,255,.1)'
					}
				}
			}],
			series: [{
				name: '生产情况',
				type: 'line',
				smooth: true,
				symbol: 'circle',
				symbolSize: 5,
				showSymbol: false,
				lineStyle: {
					normal: {
						width: 2
					}
				},

				areaStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
							offset: 0,
							color: 'rgba(98, 201, 141, 0.5)'
						}, {
							offset: 1,
							color: 'rgba(98, 201, 141, 0.1)'
						}], false),
						shadowColor: 'rgba(0, 0, 0, 0.1)',
						shadowBlur: 10
					}
				},
				itemStyle: {
					normal: {
						color: '#4cb9cf',
						borderColor: 'rgba(98, 201, 141,0.27)',
						borderWidth: 12
					}
				},
				data: [10091, 53060, 23070, 19054, 25080, 26040]
			}]
		};

		// 使用刚指定的配置项和数据显示图表。
		myChart.setOption(option);
		window.addEventListener("resize", function () {
			myChart.resize();
		});
	}
	function echarts_2() {
		// 基于准备好的dom，初始化echarts实例
		var myChart = echarts.init(document.getElementById('echart2'));
		option = {
			tooltip: {
				trigger: 'axis'
			},
			radar: {
				indicator: [{
					name: 'A类',
					max: 100,
					num: 35,
				}, {
					name: 'B类',
					max: 100,
					num: 33,
				}, {
					name: 'C类',
					max: 100,
					num: 10,
				}, {
					name: 'D类',
					max: 100,
					num: 50,
				}, {
					name: 'E类',
					max: 100,
					num: 30,
				}, {
					name: 'F类',
					max: 100,
					num: 40,
				}],
				splitNumber: 4,
				nameGap: 0,
				axisLine: { //指向外圈文本的分隔线样式
					lineStyle: {
						color: '#2c353d'
					}
				},
				splitLine: {
					lineStyle: {
						color: ['#2c353d'],
						width: 1
					}
				},
				splitArea: {
					areaStyle: {
						color: ['transparent']
					}
				},
				name: {
					color: 'rgba(255,255,255,.8)',

				},
			},
			series: [{
				type: 'radar',
				tooltip: {
					trigger: 'item'
				},
				symbol: 'none',
				itemStyle: {
					normal: {
						color: '#096e32',
						borderColor: '#46ff91'
					}
				},
				areaStyle: {
					color: ['#096e32'],
					opacity: 0.4
				},
				data: [{
					value: [60, 33, 10, 50, 80, 100],
				}]
			},]
		};
		// 使用刚指定的配置项和数据显示图表。
		myChart.setOption(option);
		window.addEventListener("resize", function () {
			myChart.resize();
		});
	}
	function echarts_3() {
		var myChart = echarts.init(document.getElementById('echart3'));
		option = {
			tooltip: {

				trigger: 'axis',
				axisPointer: {
					lineStyle: {
						color: '#57617B'
					}
				},
				formatter: '{b}:<br/> 涉案风险号码数{c}'
			},

			grid: {
				left: '0',
				right: '20',
				top: '10',
				bottom: '0',
				containLabel: true
			},
			xAxis: [{
				type: 'category',
				boundaryGap: false,
				axisLine: {
					show: false,
					lineStyle: {
						color: 'rgba(255,255,255,.6)'
					}
				},
				data: ['6h', '5h', '4h', '3h', '2h', '1h']
			}],
			yAxis: [{
				axisLabel: {
					show: true,
					textStyle: {
						color: 'rgba(255,255,255,.6)'
					}
				},
				axisLine: {
					show: false,

				},
				splitLine: {
					lineStyle: {
						type: 'dotted',
						color: 'rgba(255,255,255,.1)'
					}
				}
			}],
			series: [{
				name: '产量统计',
				type: 'line',
				//smooth: true,
				symbol: 'circle',
				symbolSize: 5,
				//showSymbol: false,
				lineStyle: {
					normal: {
						width: 2
					}
				},

				areaStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
							offset: 0,
							color: 'rgba(98, 201, 141, 0.5)'
						}, {
							offset: 1,
							color: 'rgba(98, 201, 141, 0.1)'
						}], false),
						shadowColor: 'rgba(0, 0, 0, 0.1)',
						shadowBlur: 10
					}
				},
				itemStyle: {
					normal: {
						color: '#4cb9cf',
						borderColor: 'rgba(98, 201, 141,0.27)',
						borderWidth: 12
					}
				},
				data: [1330, 880, 1020, 960, 410, 691]
			}]
		};

		// 使用刚指定的配置项和数据显示图表。
		myChart.setOption(option);
		window.addEventListener("resize", function () {
			myChart.resize();
		});
	}
})












