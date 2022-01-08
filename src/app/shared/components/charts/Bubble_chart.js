import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.addLicense("CH258896422");

export default class Bubble_chart extends Component {
   componentDidMount(){
    // console.log("this is props ", this.props)

    let info = this.props

    let card_id = info['card_id'];
    let data = JSON.parse(info['graph-data']);

    console.log("cardname", card_id);
    console.log("data", data);
    
    let chart = am4core.create(card_id, am4charts.XYChart);
    chart.maskBullets = false;
    
    let xAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    let yAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    
    yAxis.dataFields.category = "weekday";
    xAxis.renderer.minGridDistance = 40;
    xAxis.dataFields.category = "hour";
    
    xAxis.renderer.grid.template.disabled = true;
    yAxis.renderer.grid.template.disabled = true;
    xAxis.renderer.axisFills.template.disabled = true;
    yAxis.renderer.axisFills.template.disabled = true;
    yAxis.renderer.ticks.template.disabled = true;
    xAxis.renderer.ticks.template.disabled = true;
    
    yAxis.renderer.inversed = true;
    
    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryY = "weekday";
    series.dataFields.categoryX = "hour";
    series.dataFields.value = "value";
    series.columns.template.disabled = true;
    series.sequencedInterpolation = true;
    series.tooltip.label.fontSize = 12;
    series.tooltip.getFillFromObject = false;
    series.tooltip.background.fill = am4core.color("#213345");
    series.tooltip.background.stroke = am4core.color("#213345");
    series.tooltip.label.fill = am4core.color("#ffffff");
    series.tooltip.label.fontSize = 12;
    
    let bullet = series.bullets.push(new am4core.Circle());
    bullet.tooltipText = "{weekday},\n {hour}: {value.workingValue.formatNumber('#.')}";
    bullet.strokeWidth = 3;
    bullet.stroke = am4core.color("#8298FB");
    bullet.strokeOpacity = 0;
    bullet.fill = am4core.color("#8298FB")
    
    bullet.adapter.add("tooltipY", function(tooltipY, target) {
      return -target.radius + 1;
    })
    
    series.heatRules.push({
      property: "radius",
      target: bullet,
      min: 2,
      max: 30
    });
    
    bullet.hiddenState.properties.scale = 0.01;
    bullet.hiddenState.properties.opacity = 1;
    
    let hoverState = bullet.states.create("hover");
    hoverState.properties.strokeOpacity = 1;
    chart.data = data
    chart.fontFamily = "Ubuntu";//TO CHANGE FONT SIZE OF CHART LABELS
    chart.fontSize = 12;//TO CHANGE FONT SIZE OF CHART LABELS
    chart.colors.list = [
      am4core.color("#4CC3FD"),
      am4core.color("#4CC3FD")
    ];
    setInterval(function(){
        series.dataItems.each(function(dataItem){
            dataItem.value += dataItem.value * Math.random() * 0.3;        
        })
    }, 3000)
    
   }
    render() {
      let card_class = this.props.card_class;
      let card_id = this.props.card_id;
        return (
            <div>
            <div id={card_id} className={card_class}></div>
            </div>
        )
    }
}
