import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


am4core.useTheme(am4themes_animated);
am4core.addLicense("CH258896422");


export default class Linegraph_sparkline extends Component {
  componentDidMount() {
    console.log("this is props ", this.props)

    let info = this.props

    // let card_name = info['name'];
    let card_id = info['card_id'];
    let data = JSON.parse(info['graph-data']);

    console.log("cardname"); //Avgsession_barchart
    console.log("data", data);

    let chart = am4core.create(card_id, am4charts.XYChart);

    // Add data
    chart.data = data;
    chart.colors.list = [
      am4core.color("#11A1FD"),
      am4core.color("#b3e1fe"),
    ];



    // Create axes
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;
    dateAxis.renderer.minGridDistance = 0;
    dateAxis.renderer.grid.template.strokeWidth = 0;


    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    dateAxis.renderer.grid.template.disabled = true; //vline
    valueAxis.renderer.grid.template.disabled = true; //hline
    dateAxis.renderer.labels.template.fontSize = 0;
    valueAxis.renderer.labels.template.disabled = true;
    dateAxis.cursorTooltipEnabled = false;
    valueAxis.cursorTooltipEnabled = false;
    dateAxis.renderer.grid.template.disabled = true;
    dateAxis.renderer.labels.template.disabled = true;

    valueAxis.renderer.grid.template.disabled = true;
    valueAxis.renderer.baseGrid.disabled = true;
    valueAxis.renderer.labels.template.disabled = true;

    // Remove padding
    chart.paddingBottom = -20;
    chart.paddingTop = -0;
    chart.paddingLeft = -15;
    chart.paddingRight = -15;

    dateAxis.renderer.inside = true;

    // Create series
    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = "value";
    series.dataFields.dateX = "date";
    series.strokeWidth = 1;
    series.fillOpacity = 0.2;
    series.tooltipText = "{dateX}: {valueY}";
    series.tensionX = 0.77;
    chart.dateFormatter.dateFormat = { month: "long", day: "numeric" };
    series.tooltip.getFillFromObject = false;
    series.tooltip.background.fill = am4core.color("#213345");
    series.tooltip.background.stroke = am4core.color("#213345");
    series.tooltip.label.fill = am4core.color("#ffffff");
    series.tooltip.label.fontSize = 12;

    series.stroke = am4core.color("#11A1FD");
    series.fill = am4core.color("#11A1FD");

    let fillModifier = new am4core.LinearGradientModifier();
    fillModifier.opacities = [1, 0];
    fillModifier.offsets = [0, 1];
    fillModifier.gradient.rotation = 90;
    series.segments.template.fillModifier = fillModifier;
   
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.behavior = "zoomX";
    chart.cursor.behavior = "zoomY";
    chart.cursor.lineX.disabled = true;
  }


  render() {

    let card_class = this.props.card_class;
    let card_id = this.props.card_id;

    return (
      <div id={card_id} className={card_class}></div>
    )
  }
}
