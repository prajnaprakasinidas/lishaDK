import React, { Component } from 'react'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


am4core.useTheme(am4themes_animated);
am4core.addLicense("CH258896422");

export class MetricsLineChart extends Component {
  componentDidMount() {


    let info = this.props

    // let card_name = info['name'];

    let card_id = info['card_id'];
    let data = info['graph-data'];



    console.log("cardname"); //Avgsession_barchart
    console.log("data --------------- 0000000000000000000000", data);


    // Create chart instance
    let chart = am4core.create(card_id, am4charts.XYChart);

    chart.data = data
    chart.fontSize = 12;
    // Create axes
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.line.strokeOpacity = 0.2; // for reducing the x axis opacity 
    dateAxis.renderer.line.stroke = am4core.color("#707070"); // for changing the x axis color
    dateAxis.renderer.labels.template.fill = "#757575"; //TO CHANGE COLOR OF X AXIS LABELS
    dateAxis.renderer.minGridDistance = 30;
    dateAxis.tooltip.disabled = true;
    dateAxis.startLocation = 0.5;
    dateAxis.endLocation = 0;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.minGridDistance = 30;
    valueAxis.renderer.line.strokeOpacity = 0; // for reducing the x axis opacity 
    valueAxis.renderer.line.stroke = am4core.color("#707070"); // for changing the Y axis color
    valueAxis.renderer.grid.template.strokeWidth = 0; //disable horizontal lines
    valueAxis.renderer.labels.template.fill = "#757575"; //TO CHANGE COLOR OF Y AXIS LABELS
    valueAxis.renderer.line.strokeOpacity = 0.2; // for reducing the Y axis opacity 
    valueAxis.tooltip.disabled = true; // for disabling to the y axis tooltip

    // Create series
    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = "value";
    series.dataFields.dateX = "date";
    series.strokeWidth = 1;
    series.fillOpacity = 0.2;
    series.tensionX = 0.77;
    chart.dateFormatter.dateFormat = { month: "long", day: "numeric" };

    var tooltipHTML =
      `
    <div class="w-100 d-flex flex-column justify-space-between" style="width: 100%">
      <div class="text-left d-flex flex-column justify-start" style="width: 150px; padding:10px">
        <span style="font-size: 13px; color: #fff; font-weight: 400">{value}</span>
        <span style="font-size: 12px; color: #7D9EB5; font-weight: 300">Current Date: {date}</span>
       
      </div>
    </div>
    `;

    // Tooltip 
    series.tooltip.getFillFromObject = false;
    series.tooltip.background.fill = am4core.color("#213345");
    series.tooltip.background.stroke = am4core.color("#213345");
    series.tooltip.background.cornerRadius = 5;
    // series.tooltip.background.strokeOpacity = 0;
    series.tooltip.label.minWidth = 150;
    series.tooltip.label.padding(0, 0, 0, 0);
    series.tooltip.label.fontSize = 12;
    // series.tooltip.position = "pointer";
    series.tooltip.pointerOrientation = "vertical";
    series.tooltipHTML = tooltipHTML;
    var shadow = series.tooltip.background.filters.getIndex(0);
    shadow.dx = 3;
    shadow.dy = 10;
    shadow.blur = 10;
    shadow.color = am4core.color("#14567829");

    let fillModifier = new am4core.LinearGradientModifier();
    fillModifier.opacities = [1, 0];
    fillModifier.offsets = [0, 1];
    fillModifier.gradient.rotation = 90;
    series.segments.template.fillModifier = fillModifier;

    // Add cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.behavior = "zoomX";
    chart.cursor.behavior = "zoomY";
    chart.cursor.lineX.disabled = true;



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
