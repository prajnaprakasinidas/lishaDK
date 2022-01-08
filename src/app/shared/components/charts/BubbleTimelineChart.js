import React, { Component } from 'react'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


am4core.useTheme(am4themes_animated);
am4core.addLicense("CH258896422");

export default class BubbleTimelineChart extends Component {
  componentDidMount() {

    let yearData = {};
    let firstYear = 1950;
    let lastYear = 2020;

    for (var year = firstYear; year < lastYear; year++) {
      let data = []
      yearData[year] = data;

      for (var i = 0; i < 50; i++) {
        if (year == firstYear) {
          data.push({ x: Math.round(Math.random() * 180 - 90), y: Math.round(Math.random() * 140 - 70), radius: Math.round(Math.random() * 1000) });
        }
        else {
          let previous = yearData[year - 1][i];
          data.push({ x: previous.x + Math.round(Math.random() * 8 - 4), y: previous.y + Math.round(Math.random() * 8 - 4), radius: Math.abs(previous.radius + Math.round(Math.random() * 200 - 100)) });
        }
      }
    }


    let chart = am4core.create("twitter_performance_chart", am4charts.XYChart);
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.behavior = "zoomXY";

    chart.fontFamily = "Ubuntu"; //TO CHANGE FONT SIZE OF CHART LABELS
    chart.fontSize = 12; //TO CHANGE FONT SIZE OF CHART LABELS

    // Create axes
    let xAxis = chart.xAxes.push(new am4charts.ValueAxis());
    xAxis.min = -100;
    xAxis.max = 100;
    xAxis.keepSelection = true;
    xAxis.renderer.grid.template.above = true;
    xAxis.tooltip.disabled = true;

    let yAxis = chart.yAxes.push(new am4charts.ValueAxis());
    yAxis.min = -100;
    yAxis.max = 100;
    yAxis.keepSelection = true;
    yAxis.renderer.grid.template.above = true;
    yAxis.tooltip.disabled = true; 

    // Create color series
    // top left
    let series1 = chart.series.push(new am4charts.LineSeries());
    series1.dataFields.valueX = "ax";
    series1.dataFields.valueY = "ay";
    series1.strokeOpacity = 0;
    series1.fillOpacity = 1;
    series1.ignoreMinMax = true;
    series1.fill = am4core.color("#11A1FD");
    series1.fillOpacity = 0.5;
    series1.data = [{
      "ax": -1000,
      "ay": 0
    }, {
      "ax": 0,
      "ay": 0
    }, {
      "ax": 0,
      "ay": 1000
    }, {
      "ax": -1000,
      "ay": 1000
    }]

    // bottom left
    let series2 = chart.series.push(new am4charts.LineSeries());
    series2.dataFields.valueX = "ax";
    series2.dataFields.valueY = "ay";
    series2.strokeOpacity = 0;
    series2.ignoreMinMax = true;
    series2.fill = am4core.color("#FF9931");
    series2.fillOpacity = 0.5;
    series2.data = [{
      "ax": -1000,
      "ay": 0
    }, {
      "ax": 0,
      "ay": 0
    }, {
      "ax": 0,
      "ay": -1000
    }, {
      "ax": -1000,
      "ay": -1000
    }]

    // bottom right
    let series3 = chart.series.push(new am4charts.LineSeries());
    series3.dataFields.valueX = "ax";
    series3.dataFields.valueY = "ay";
    series3.strokeOpacity = 0;
    series3.fill = am4core.color("#5A75F9");
    series3.ignoreMinMax = true;
    series3.fillOpacity = 0.5;
    series3.data = [{
      "ax": 1000,
      "ay": 0
    }, {
      "ax": 0,
      "ay": 0
    }, {
      "ax": 0,
      "ay": -1000
    }, {
      "ax": 1000,
      "ay": -1000
    }]

    // top right
    let series4 = chart.series.push(new am4charts.LineSeries());
    series4.dataFields.valueX = "ax";
    series4.dataFields.valueY = "ay";
    series4.strokeOpacity = 0;
    series4.fill = am4core.color("#07C180");
    series4.ignoreMinMax = true;
    series4.fillOpacity = 0.5
    series4.data = [{
      "ax": 1000,
      "ay": 0
    }, {
      "ax": 0,
      "ay": 0
    }, {
      "ax": 0,
      "ay": 1000
    }, {
      "ax": 1000,
      "ay": 1000
    }]


    // bubble series

    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueX = "x";
    series.dataFields.valueY = "y";
    series.dataFields.value = "radius";
    series.strokeOpacity = 0;
    series.tooltip.getFillFromObject = false;
    series.tooltip.background.fill = am4core.color("#213345");
    series.tooltip.background.cornerRadius = 5;
    series.tooltip.label.padding(10, 10, 10, 10);
    series.tooltip.label.fontSize = 12;
    series.tooltip.pointerOrientation = "vertical";
    series.tooltip.label.minWidth = 150;
        var shadow = series.tooltip.background.filters.getIndex(0);
        shadow.dx = 3;
        shadow.dy = 10;
        shadow.blur = 10;
        shadow.color = am4core.color("#14567829");

    
    

    let bullet = series.bullets.push(new am4core.Circle());
    bullet.fill = am4core.color("#ffffff");
    bullet.strokeOpacity = 0;
    bullet.strokeWidth = 2;
    bullet.fillOpacity = 0.5;
    bullet.stroke = am4core.color("#ffffff");
    bullet.hiddenState.properties.opacity = 0;
    bullet.tooltipText = "value:{value.value} x:{valueX.value} y:{valueY.value}";
    

    bullet.events.on("over", function (event) {
      let target = event.target;
      chart.cursor.triggerMove({ x: target.pixelX, y: target.pixelY }, "hard");
      chart.cursor.lineX.y = target.pixelY;
      chart.cursor.lineY.x = target.pixelX - chart.plotContainer.pixelWidth;
      xAxis.tooltip.disabled = true;
      yAxis.tooltip.disabled = true;
    })

    bullet.events.on("out", function (event) {
      chart.cursor.triggerMove(event.pointer.point, "none");
      chart.cursor.lineX.y = 0;
      chart.cursor.lineY.x = 0;
      xAxis.tooltip.disabled = true;
      yAxis.tooltip.disabled = true;
    })

    series.heatRules.push({ target: bullet, min: 2, max: 30, property: "radius" });
    series.data = yearData[firstYear];


    let label = chart.plotContainer.createChild(am4core.Label)
    label.fontSize = 30;
    label.fillOpacity = 0.4;
    label.align = "center";
    label.zIndex = 1000;


    let sliderContainer = chart.bottomAxesContainer.createChild(am4core.Container);
    sliderContainer.width = am4core.percent(100);
    sliderContainer.layout = "horizontal";


    let playButton = sliderContainer.createChild(am4core.PlayButton);
    playButton.valign = "middle";
    playButton.events.on("toggled", function (event) {
      if (event.target.isActive) {
        playSlider();
      }
      else {
        stopSlider();
      }
    })

    let slider = sliderContainer.createChild(am4core.Slider);
    slider.valign = "middle";
    slider.margin(0, 0, 0, 0);
    slider.marginLeft = 30;
    slider.height = 15;


    let sliderAnimation = slider.animate({ property: "start", to: 1 }, 80000, am4core.ease.linear).pause();
    sliderAnimation.events.on("animationended", function () {
      playButton.isActive = false;
    })

    slider.events.on("rangechanged", function () {
      let year = firstYear + Math.round(slider.start * (lastYear - firstYear - 1));
      let data = yearData[year];
      for (var i = 0; i < series.data.length; i++) {
        let dataContext = series.data[i];
        dataContext.x = data[i].x;
        dataContext.y = data[i].y;
        dataContext.radius = data[i].radius;
      }

      chart.invalidateRawData();

      label.text = year.toString();
    })


    function playSlider() {
      if (slider) {
        if (slider.start >= 1) {
          slider.start = 0;
          sliderAnimation.start();
        }

        sliderAnimation.setProgress(slider.start);

        sliderAnimation.resume();
        playButton.isActive = true;
      }
    }

    function stopSlider() {
      sliderAnimation.pause();
      playButton.isActive = false;
    }

    setTimeout(function () {
      playSlider()
    }, 2000);

    this.chart = chart;

  }

  render() {
    return (
      <div>
        <div id="twitter_performance_chart" className="icz-sectionbigchart" />
      </div>
    )
  }
}
