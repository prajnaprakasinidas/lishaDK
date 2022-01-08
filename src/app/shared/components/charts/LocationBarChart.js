import React, { Component } from 'react'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

export class LocationBarChart extends Component {
  componentDidMount() {
    am4core.useTheme(am4themes_animated);
    am4core.addLicense("CH258896422");

    let info = this.props

    // let card_name = info['name'];
    let card_id = info['card_id'];
    let data = info['graph-data'];
    let chart = am4core.create(card_id, am4charts.XYChart);

    chart.data = data;

    chart.fontSize = 12;
    chart.colors.list = [
      am4core.color("#11A1FD"),
    ];

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "name";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;
    categoryAxis.renderer.grid.template.disabled = true;
    categoryAxis.renderer.labels.template.rotation = -45;
    categoryAxis.renderer.labels.template.horizontalCenter = "right";
    categoryAxis.renderer.labels.template.verticalCenter = "middle";
    categoryAxis.renderer.labels.template.disabled = true;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.line.strokeOpacity = 0.2;
    valueAxis.min = 0;


    // Remove padding
    chart.paddingBottom = 10;
    chart.paddingTop = 10;
    chart.paddingLeft = 0;
    chart.paddingRight = 0;
    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = "points";
    series.dataFields.categoryX = "name";

    series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
    series.tooltip.getFillFromObject = false;
    series.tooltip.background.fill = am4core.color("#213345");
    series.tooltip.background.stroke = am4core.color("#213345");
    series.tooltip.background.cornerRadius = 5;
    series.tooltip.label.padding(10, 10, 10, 10);
    series.tooltip.label.fontSize = 13;
    series.tooltip.autoTextColor = false;
    series.tooltip.label.fill = am4core.color("#fff");
    series.tooltip.pointerOrientation = "vertical";
    series.tooltip.label.minWidth = 150;
    var shadow = series.tooltip.background.filters.getIndex(0);
    shadow.dx = 3;
    shadow.dy = 10;
    shadow.blur = 10;
    shadow.color = am4core.color("#14567829");
    series.columns.template.fillOpacity = .6;



    let columnTemplate = series.columns.template;
    columnTemplate.width = 5;
    columnTemplate.column.cornerRadiusTopLeft = 20;
    columnTemplate.column.cornerRadiusTopRight = 20;
    columnTemplate.strokeWidth = .6;
    columnTemplate.strokeOpacity = 0;



    series.columns.template.events.on("hit", function (ev) {
      let series = ev.target.dataItem.component;
      series.slices.each(function (item) {
        if (item.isActive && item != ev.target) {
          item.isActive = false;
        }
      })
    });
  }

  render() {
    let card_class = this.props.card_class;
    let card_id = this.props.card_id;

    return (
      <div id={card_id} className={card_class}></div>
    )
  }
}
