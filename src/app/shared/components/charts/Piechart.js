import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

export default class Piechart extends Component {

  componentDidMount(props) {

    console.log("this is props ", this.props)

    let info = this.props

    let card_id = info['card_id'];
    let data = JSON.parse(info['graph-data']);

    console.log("cardname", card_id);
    console.log("data", data);

    let chart = am4core.create(card_id, am4charts.PieChart);

    // Add data
    chart.data = data

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "value";
    pieSeries.dataFields.category = "name";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeOpacity = 1;

    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;
    pieSeries.ticks.template.disabled = true;
    // remove label
    pieSeries.alignLabels = false;
    pieSeries.labels.template.text = "";

    pieSeries.alignLabels = false;
    pieSeries.labels.template.propertyFields.disabled = "disabled";
    pieSeries.ticks.template.propertyFields.disabled = "disabled";
    pieSeries.tooltip.getFillFromObject = false;
    pieSeries.tooltip.background.fill = am4core.color("#213345");
    pieSeries.tooltip.background.stroke = am4core.color("#213345");
    pieSeries.tooltip.label.fill = am4core.color("#ffffff");
    pieSeries.tooltip.label.fontSize = 12;

    chart.legend = new am4charts.Legend();

    chart.legend.labels.template.maxWidth = 150;

    chart.legend.paddingBottom = 0;
    chart.legend.paddingTop = 0;
    chart.legend.paddingLeft = 0;
    chart.legend.paddingRight = 0;
    chart.legend.labels.template.fontSize = 12;
    chart.legend.labels.template.fontFamily = "Ubuntu";
    let markerTemplate = chart.legend.markers.template;
    markerTemplate.width = 10;
    markerTemplate.height = 10;
    chart.legend.valueLabels.template.disabled = true; //value label hide
    // Remove padding
    chart.paddingBottom = 0;
    chart.paddingTop = 0;
    chart.paddingLeft = 0;
    chart.paddingRight = 0;

    pieSeries.slices.template.events.on("hit", function (ev) {
      let series = ev.target.dataItem.component;
      series.slices.each(function (item) {
        if (item.isActive && item != ev.target) {
          item.isActive = false;
        }
      })
    });

    // color 
    var colorSet = new am4core.ColorSet();
    colorSet.list = ["#b5c1fc", "#8498fb", "#536ff9", "#697de3", "#2246f7", "#082cdd", "#0622ac"].map(function (color) {
      return new am4core.color(color);
    });
    pieSeries.colors = colorSet;

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
