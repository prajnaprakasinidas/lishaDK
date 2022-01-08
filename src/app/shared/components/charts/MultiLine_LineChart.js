import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


am4core.useTheme(am4themes_animated);
am4core.addLicense("CH258896422");

export default class MultiLine_LineChart extends Component {
  componentDidMount() {

    console.log("this is props ", this.props)

    let info = this.props

    // let card_name = info['name'];

    let chart_id = info['chart_id'];
    let data = info['graph-data'];

    console.log("cardname"); //Avgsession_barchart
    console.log("data", data);


    // Create chart instance
    let chart = am4core.create(chart_id, am4charts.XYChart);

    chart.data = data
    chart.fontSize = 12;
    // Create category axis
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.line.strokeOpacity = 0.2; // for reducing the x axis opacity 
    categoryAxis.renderer.line.stroke = am4core.color("#707070"); // for changing the x axis color
    categoryAxis.renderer.labels.template.fill = "#757575"; //TO CHANGE COLOR OF X AXIS LABELS
    // categoryAxis.renderer.minGridDistance = 30;
    categoryAxis.dataFields.category = "year";
    categoryAxis.renderer.opposite = false;
    categoryAxis.tooltip.disabled = true;
    categoryAxis.startLocation = 0.5;
    categoryAxis.endLocation = 0;


    // Create value axis
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    // valueAxis.renderer.minGridDistance = 30;
    valueAxis.renderer.line.strokeOpacity = 0; // for reducing the x axis opacity 
    valueAxis.renderer.line.stroke = am4core.color("#707070"); // for changing the Y axis color
    valueAxis.renderer.grid.template.strokeWidth = 0; //disable horizontal lines
    valueAxis.renderer.labels.template.fill = "#757575"; //TO CHANGE COLOR OF Y AXIS LABELS
    valueAxis.renderer.line.strokeOpacity = 0.2; // for reducing the Y axis opacity 
    valueAxis.tooltip.disabled = true; // for disabling to the y axis tooltip

    // Create series
    let series1 = chart.series.push(new am4charts.LineSeries());
    series1.dataFields.valueY = "google";
    series1.dataFields.categoryX = "year";
    series1.name = "Google";
    series1.tooltipText = "{name} in {categoryX}: {valueY}";
    series1.tooltip.getFillFromObject = false;
    series1.tooltip.background.fill = am4core.color("#213345");
    series1.tooltip.background.cornerRadius = 5;
    series1.tooltip.label.padding(10, 10, 10, 10);
    series1.tooltip.label.fontSize = 12;
    series1.tooltip.pointerOrientation = "vertical";
    series1.tooltip.label.minWidth = 150;
    series1.fill = am4core.color("#11A1FD");
    series1.stroke = am4core.color("#11A1FD");
    series1.fillOpacity = 0.1;
    series1.tensionX = 0.8;
    var shadow = series1.tooltip.background.filters.getIndex(0);
    shadow.dx = 3;
    shadow.dy = 10;
    shadow.blur = 10;
    shadow.color = am4core.color("#14567829");
    series1.legendSettings.valueText = "{valueY}";

    let series2 = chart.series.push(new am4charts.LineSeries());
    series2.dataFields.valueY = "facebook";
    series2.dataFields.categoryX = "year";
    series2.name = 'Facebook';
    series2.tooltipText = "{name} in {categoryX}: {valueY}";
    series2.tooltip.getFillFromObject = false;
    series2.tooltip.background.fill = am4core.color("#213345");
    series2.tooltip.background.cornerRadius = 5;
    series2.tooltip.label.padding(10, 10, 10, 10);
    series2.tooltip.label.fontSize = 12;
    series2.tooltip.pointerOrientation = "vertical";
    series2.tooltip.label.minWidth = 150;
    series2.fill = am4core.color("#7D9EB5");
    series2.stroke = am4core.color("#7D9EB5");
    series2.fillOpacity = 0.1;
    series2.tensionX = 0.8;
    var shadow = series2.tooltip.background.filters.getIndex(0);
    shadow.dx = 3;
    shadow.dy = 10;
    shadow.blur = 10;
    shadow.color = am4core.color("#14567829");
    series2.legendSettings.valueText = "{valueY}";

    let series3 = chart.series.push(new am4charts.LineSeries());
    series3.dataFields.valueY = "instagram";
    series3.dataFields.categoryX = "year";
    series3.name = 'Instagram';
    series3.tooltipText = "{name} in {categoryX}: {valueY}";
    series3.tooltip.getFillFromObject = false;
    series3.tooltip.background.fill = am4core.color("#213345");
    series3.tooltip.background.cornerRadius = 5;
    series3.tooltip.label.padding(10, 10, 10, 10);
    series3.tooltip.label.fontSize = 12;
    series3.tooltip.pointerOrientation = "vertical";
    series3.tooltip.label.minWidth = 150;
    series3.fill = am4core.color("#5A75F9");
    series3.stroke = am4core.color("#5A75F9");
    series3.fillOpacity = 0.1;
    series3.tensionX = 0.8;
    var shadow = series3.tooltip.background.filters.getIndex(0);
    shadow.dx = 3;
    shadow.dy = 10;
    shadow.blur = 10;
    shadow.color = am4core.color("#14567829");
    series3.legendSettings.valueText = "{valueY}";

    let series4 = chart.series.push(new am4charts.LineSeries());
    series4.dataFields.valueY = "twitter";
    series4.dataFields.categoryX = "year";
    series4.name = 'Twitter';
    series4.tooltipText = "{name} in {categoryX}: {valueY}";
    series4.tooltip.getFillFromObject = false;
    series4.tooltip.background.fill = am4core.color("#213345");
    series4.tooltip.background.cornerRadius = 5;
    series4.tooltip.label.padding(10, 10, 10, 10);
    series4.tooltip.label.fontSize = 12;
    series4.tooltip.pointerOrientation = "vertical";
    series4.tooltip.label.minWidth = 150;
    series4.fill = am4core.color("#07C180");
    series4.stroke = am4core.color("#07C180");
    series4.fillOpacity = 0.1;
    series4.tensionX = 0.8;
    var shadow = series4.tooltip.background.filters.getIndex(0);
    shadow.dx = 3;
    shadow.dy = 10;
    shadow.blur = 10;
    shadow.color = am4core.color("#14567829");
    series4.legendSettings.valueText = "{valueY}";

    let series5 = chart.series.push(new am4charts.LineSeries());
    series5.dataFields.valueY = "linkedin";
    series5.dataFields.categoryX = "year";
    series5.name = 'Linkedin';
    series5.tooltipText = "{name} in {categoryX}: {valueY}";
    series5.tooltip.getFillFromObject = false;
    series5.tooltip.background.fill = am4core.color("#213345");
    series5.tooltip.background.cornerRadius = 5;
    series5.tooltip.label.padding(10, 10, 10, 10);
    series5.tooltip.label.fontSize = 12;
    series5.tooltip.pointerOrientation = "vertical";
    series5.tooltip.label.minWidth = 150;
    series5.fill = am4core.color("#FF9931");
    series5.stroke = am4core.color("#FF9931");
    series5.fillOpacity = 0.1;
    series5.tensionX = 0.8;
    var shadow = series5.tooltip.background.filters.getIndex(0);
    shadow.dx = 3;
    shadow.dy = 10;
    shadow.blur = 10;
    shadow.color = am4core.color("#14567829");
    series5.legendSettings.valueText = "{valueY}";

    let fillModifier = new am4core.LinearGradientModifier();
    fillModifier.opacities = [1, 1, 0];
    fillModifier.offsets = [0, 0.5, 1];
    fillModifier.gradient.rotation = 90;
    series1.segments.template.fillModifier = fillModifier;
    series2.segments.template.fillModifier = fillModifier;
    series3.segments.template.fillModifier = fillModifier;
    series4.segments.template.fillModifier = fillModifier;
    series5.segments.template.fillModifier = fillModifier;

    // Add chart cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.behavior = "zoomY";

    // add legend
    chart.legend = new am4charts.Legend();
    chart.legend.useDefaultMarker = true;
    let marker = chart.legend.markers.template.children.getIndex(0);
    marker.cornerRadius(12, 12, 12, 12);

    let markerTemplate = chart.legend.markers.template;
    markerTemplate.width = 15;
    markerTemplate.height = 15;


    chart.cursor = new am4charts.XYCursor();
    chart.padding(10, 0, 0, 0);


  }

  render() {
    let chart_class = this.props.chart_class;
    let chart_id = this.props.chart_id;
    return (
      <div>
        <div id={chart_id} className={chart_class}></div>
      </div>
    )
  }
}
