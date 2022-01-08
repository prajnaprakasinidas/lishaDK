import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


am4core.useTheme(am4themes_animated);
am4core.addLicense("CH258896422");


export default class LineChart extends Component {
  componentDidMount() {
    let info = this.props;

    let card_id = info['card_id'];
    let data = info['graph-data'];

    console.log("cardname"); //Avgsession_barchart
    console.log("data", data);

    let chart = am4core.create(card_id, am4charts.XYChart);
    chart.fontFamily = "Ubuntu";//TO CHANGE FONT SIZE OF CHART LABELS
    chart.fontSize = 12;//TO CHANGE FONT SIZE OF CHART LABELS
    chart.data = data;
    // chart.colors.list = [
    //   am4core.color("#11A1FD"),
    //   am4core.color("#FF9931"),
    // ];


    // Create axes
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    // dateAxis.min = 0;
    dateAxis.startLocation = 0.5;
    dateAxis.endLocation = 0;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    // valueAxis.min = 0;
    valueAxis.renderer.line.strokeOpacity = 0.2; // for reducing the Y axis opacity 

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
    series.tooltip.label.fontSize = 12;


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

    // LEGENDS
    chart.legend = new am4charts.Legend();
    chart.legend.useDefaultMarker = true;
    var markerTemplate = chart.legend.markers.template;
    let marker = chart.legend.markers.template.children.getIndex(0);
    marker.cornerRadius(12, 12, 12, 12);
    markerTemplate.width = 13;
    markerTemplate.height = 13;
    markerTemplate.stroke = am4core.color("#ccc");

    // CHART COLORSET
    var colorSet = new am4core.ColorSet();
    colorSet.list = ["#CC3333", "#cd3737", "#cd3737", "#ce3b3b", "#cf3f3f", "#d04343", "#d14747", "#d24b4b", "#F5D6D6", "#FAEBEB"].map(function (color) {
      return new am4core.color(color);
    });
    chart.colors = colorSet;

  }


  render() {

    let card_class = this.props.card_class;
    let card_id = this.props.card_id;

    return (
      <div id={card_id} className={card_class}></div>
    )
  }
}
