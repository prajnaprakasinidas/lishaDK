import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


am4core.useTheme(am4themes_animated);
am4core.addLicense("CH258896422");


export default class MultipleValueAxes extends Component {
  componentDidMount() {
    // let info = this.props;

    // let card_id = info['card_id'];
    // let data = JSON.parse(info['graph-data']);

    // console.log("cardname"); //Avgsession_barchart
    // console.log("data", data);

    // let chart = am4core.create(card_id, am4charts.XYChart);

    // Create chart instance
    var chart = am4core.create("chartdiv", am4charts.XYChart);
    chart.fontFamily = "Ubuntu";//TO CHANGE FONT SIZE OF CHART LABELS
    chart.fontSize = 12;//TO CHANGE FONT SIZE OF CHART LABELS
    // chart.colors.list = [
    //   am4core.color("#07C180"),
    //   am4core.color("#5A75F9"),
    // ];
    //

    var colorSet = new am4core.ColorSet();
    colorSet.list = ["#5A75F9", "#07C180", "#D51F30", "#4CC3FD", "#E96E7A", "#8298FB", "#3CD795", "#FFB866"].map(function (color) {
      return new am4core.color(color);
    });
    chart.colors = colorSet;

    // Increase contrast by taking evey second color
    // chart.colors.step = 2;

    // Add data
    chart.data = generateChartData();

    // Create axes
    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.startLocation = 0.5;
    dateAxis.endLocation = 0;
    dateAxis.renderer.line.strokeOpacity = 0.2; // for reducing the x axis opacity 
    dateAxis.renderer.line.stroke = am4core.color("#707070"); // for changing the x axis color
    dateAxis.renderer.minGridDistance = 50;
    dateAxis.renderer.labels.template.fill = "#757575"; //TO CHANGE COLOR OF X AXIS LABELS
    dateAxis.tooltip.disabled = true; // for disabling to the y axis tooltip

    // Create series
    function createAxisAndSeries(field, name, opposite, bullet) {
      var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.renderer.grid.template.strokeWidth = 0; //disable vertical lines
      valueAxis.tooltip.disabled = true; // for disabling to the y axis tooltip
      if (chart.yAxes.indexOf(valueAxis) != 0) {
        valueAxis.syncWithAxis = chart.yAxes.getIndex(0);
      }

      var series = chart.series.push(new am4charts.LineSeries());
      series.dataFields.valueY = field;
      series.dataFields.dateX = "date";
      series.strokeWidth = 2;
      series.yAxis = valueAxis;
      series.name = name;
      series.tensionX = 0.8;
      series.showOnInit = true;
      series.fillOpacity = 0.1;

      var tooltipHTML =
        `
      <div class="w-100 d-flex flex-column justify-space-between" style="width: 100%">
        <div class="text-left d-flex flex-column justify-start" style="width: 150px; padding:10px">
          <span style="font-size: 13px; color: #fff; font-weight: 400">{valueY}</span>
          <span style="font-size: 12px; color: #7D9EB5; font-weight: 300">{name}</span>
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

      // Lineargradient
      let fillModifier = new am4core.LinearGradientModifier();
      fillModifier.opacities = [1, 1, 0];
      fillModifier.offsets = [0, 0.2, 1];
      fillModifier.gradient.rotation = 90;
      series.segments.template.fillModifier = fillModifier;

      valueAxis.renderer.line.strokeOpacity = 1;
      valueAxis.renderer.line.strokeWidth = 2;
      valueAxis.renderer.line.stroke = series.stroke;
      valueAxis.renderer.labels.template.fill = series.stroke;
      valueAxis.renderer.opposite = opposite;
    }

    createAxisAndSeries("visits", "Visits", false);
    createAxisAndSeries("views", "Views", true);



    // Add chart cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.behavior = "zoomY";

    // Add legend
    chart.legend = new am4charts.Legend();
    chart.legend.useDefaultMarker = true;
    chart.legend.labels.template.text = "{name}";
    chart.legend.fill = "rgba(112, 112, 112, 0.1)";
    chart.legend.opacity = 1;
    var markerTemplate = chart.legend.markers.template;
    let marker = chart.legend.markers.template.children.getIndex(0);
    marker.cornerRadius(12, 12, 12, 12);
    markerTemplate.width = 13;
    markerTemplate.height = 13;

    // generate some random data, quite different range
    function generateChartData() {
      var chartData = [];
      var firstDate = new Date();
      firstDate.setDate(firstDate.getDate() - 100);
      firstDate.setHours(0, 0, 0, 0);

      var visits = 1600;
      var views = 8700;

      for (var i = 0; i < 15; i++) {
        var newDate = new Date(firstDate);
        newDate.setDate(newDate.getDate() + i);

        visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
        views += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);

        chartData.push({
          date: newDate,
          visits: visits,
          views: views
        });
      }
      return chartData;
    }


  }


  render() {

    // let card_class = this.props.card_class;
    // let card_id = this.props.card_id;

    return (
      // <div id={card_id} className={card_class}></div>
      <div id="chartdiv" className="icz-sectionchart"></div>
    )
  }
}
