import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


am4core.useTheme(am4themes_animated);
am4core.addLicense("CH258896422");


export default class CompareLineChart extends Component {

  componentDidMount() {

    let info = this.props
    let chart_id = info['chart_id'];
    let data = info['graph-data'];

    let chart = am4core.create(chart_id, am4charts.XYChart);
    chart.fontFamily = "Ubuntu"; //TO CHANGE FONT SIZE OF CHART LABELS
    chart.fontSize = 12; //TO CHANGE FONT SIZE OF CHART LABELS

    chart.data = data;

    // Create axes
    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    // dateAxis.renderer.grid.template.strokeWidth = 0; //disable vertical lines
    dateAxis.renderer.line.strokeOpacity = 0.2; // for reducing the x axis opacity 
    dateAxis.renderer.line.stroke = am4core.color("#707070"); // for changing the x axis color
    // dateAxis.renderer.minGridDistance = 30;
    dateAxis.renderer.labels.template.fill = "#757575"; //TO CHANGE COLOR OF X AXIS LABELS
    dateAxis.startLocation = 0.5;
    dateAxis.endLocation = 0;
    dateAxis.tooltip.disabled = true; // for disabling to the x axis tooltip
    dateAxis.renderer.opposite = false;



    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.minGridDistance = 30;
    valueAxis.renderer.line.strokeOpacity = 0; // for reducing the x axis opacity 
    valueAxis.renderer.line.stroke = am4core.color("#707070"); // for changing the Y axis color
    valueAxis.renderer.grid.template.strokeWidth = 0; //disable horizontal lines
    valueAxis.renderer.labels.template.fill = "#757575"; //TO CHANGE COLOR OF Y AXIS LABELS
    valueAxis.renderer.line.strokeOpacity = 0.2; // for reducing the Y axis opacity 
    valueAxis.tooltip.disabled = true; // for disabling to the y axis tooltip
    valueAxis.min = 0;

    // Create series
    var series = chart.series.push(new am4charts.LineSeries());
    series.name = "Current"
    series.dataFields.valueY = "value1";
    series.dataFields.dateX = "date";
    // series.name = metric_1;
    series.strokeWidth = 2;
    series.stroke = "#11A1FD";
    series.fill = "#11A1FD";
    series.fillOpacity = 0.1;
    // series.minBulletDistance = 10;
    series.tensionX = 0.8;

    var tooltipHTML =
      `
      <div class="w-100 d-flex flex-column justify-space-between" style="width: 100%">
        <div class="text-left d-flex flex-column justify-start" style="width: 150px; padding:10px">
          <span style="font-size: 13px; color: #fff; font-weight: 400">{value1}</span>
          <span style="font-size: 12px; color: #7D9EB5; font-weight: 300">{date}</span>
          <hr style="margin: 4px 0"/>
          <span style="font-size: 13px; color: #fff; font-weight: 400">{value2}</span>
          <span style="font-size: 12px; color: #7D9EB5; font-weight: 300">{series2.name}</span>
        </div>
      </div>
      `;

    // Tooltip 
    series.tooltip.getFillFromObject = false;
    series.tooltip.background.fill = am4core.color("#213345");
    series.tooltip.background.stroke = am4core.color("#213345");
    series.tooltip.background.cornerRadius = 5;
    series.tooltip.label.minWidth = 150;
    series.tooltip.label.padding(0, 0, 0, 0);
    series.tooltip.label.fontSize = 12;
    series.tooltip.position = "pointer";
    // series.tooltip.pointerOrientation = "vertical";
    series.tooltipHTML = tooltipHTML;
    var shadow = series.tooltip.background.filters.getIndex(0);
    shadow.dx = 3;
    shadow.dy = 10;
    shadow.blur = 10;
    shadow.color = am4core.color("#14567829");


    // Create series
    var series2 = chart.series.push(new am4charts.LineSeries());
    series2.name = "Previous";
    series2.dataFields.valueY = "value2";
    series2.dataFields.dateX = "date";
    series2.strokeWidth = 2;
    series2.stroke = series.stroke;
    series2.stroke = "#FF9931";
    series2.fill = "#FF9931";
    series2.fillOpacity = 0.2;
    series2.tensionX = 0.8;
    // series2.bullets.push(new am4charts.CircleBullet());

    // Lineargradient
    let fillModifier = new am4core.LinearGradientModifier();
    fillModifier.opacities = [1, 1, 0];
    fillModifier.offsets = [0, 0.5, 1];
    fillModifier.gradient.rotation = 90;
    series.segments.template.fillModifier = fillModifier;
    series2.segments.template.fillModifier = fillModifier;

    // Add chart cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.behavior = "zoomY";


    // LEGEND
    chart.legend = new am4charts.Legend();
    chart.legend.useDefaultMarker = true;
    chart.legend.labels.template.text = "{name}";
    chart.legend.labels.template.fill = "#213345";
    chart.legend.fill = "rgba(112, 112, 112, 0.1)";
    chart.legend.opacity = 1;
    var markerTemplate = chart.legend.markers.template;
    let marker = chart.legend.markers.template.children.getIndex(0);
    marker.cornerRadius(12, 12, 12, 12);
    markerTemplate.width = 13;
    markerTemplate.height = 13;

  }


  render() {

    let chart_class = this.props.chart_class;
    let chart_id = this.props.chart_id;

    return (
      <div id={chart_id} className={chart_class}></div>
    )
  }
}