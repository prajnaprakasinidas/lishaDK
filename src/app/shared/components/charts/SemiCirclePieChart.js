import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


am4core.useTheme(am4themes_animated);
am4core.addLicense("CH258896422");


export default class SemiCirclePieChart extends Component {
    componentDidMount() {
        let info = this.props;

        let chart_id = info['chart_id'];
        let data = info['graph-data'];

        am4core.useTheme(am4themes_animated);

        var chart = am4core.create(chart_id, am4charts.PieChart);
        chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

        chart.data = data;
        chart.fontFamily = "Ubuntu";//TO CHANGE FONT SIZE OF CHART LABELS
        chart.fontSize = 12;//TO CHANGE FONT SIZE OF CHART LABELS

        chart.radius = am4core.percent(70);
        chart.innerRadius = am4core.percent(40);
        chart.startAngle = 180;
        chart.endAngle = 360;

        var series = chart.series.push(new am4charts.PieSeries());
        series.dataFields.value = "value";
        series.dataFields.category = "country";

        series.slices.template.cornerRadius = 0;
        series.slices.template.innerCornerRadius = 0;
        series.slices.template.draggable = true;
        series.slices.template.inert = true;

        series.hiddenState.properties.startAngle = 90;
        series.hiddenState.properties.endAngle = 90;

        series.labels.template.disabled = true;
        series.ticks.template.disabled = true;

        var tooltipHTML =
            `
      <div class="w-100 d-flex flex-column justify-space-between" style="width: 100%">
        <div class="text-left d-flex flex-column justify-start" style="width: 150px; padding:10px">
          <span style="font-size: 13px; color: #fff; font-weight: 400">{value}</span>
          <span style="font-size: 12px; color: #7D9EB5; font-weight: 300">{country}</span>
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

        var colorSet = new am4core.ColorSet();
        colorSet.list = ["#11A1FD", "#FF9931", "#5A75F9", "#07C180", "#D51F30", "#4CC3FD", "#E96E7A", "#8298FB", "#3CD795", "#FFB866"].map(function (color) {
            return new am4core.color(color);
        });
        series.colors = colorSet;

        // Add chart cursor
        chart.cursor = new am4charts.XYCursor();
        chart.cursor.behavior = "zoomY";


    }


    render() {

        let chart_class = this.props.chart_class;
        let chart_id = this.props.chart_id;

        return (
            <div id={chart_id} className={chart_class}></div>
        )
    }
}
