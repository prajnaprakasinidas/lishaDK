import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import * as am4plugins_forceDirected from "@amcharts/amcharts4/plugins/forceDirected";


am4core.useTheme(am4themes_animated);
am4core.addLicense("CH258896422");


export default class ForceDirectedPieChart extends Component {
    componentDidMount() {

        let info = this.props;
        let chart_id = info['chart_id'];
        let data = info['graph-data'];

        var chart = am4core.create(chart_id, am4plugins_forceDirected.ForceDirectedTree);
        var networkSeries = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries())

        chart.data = data;

        networkSeries.dataFields.value = "value";
        networkSeries.dataFields.name = "name";
        networkSeries.dataFields.children = "children";
        networkSeries.manyBodyStrength = -20;
        networkSeries.links.template.strength = 0.8;
        networkSeries.minRadius = am4core.percent(2);

        networkSeries.nodes.template.label.text = "{name}"
        networkSeries.fontSize = 12;

        networkSeries.nodes.template.label.disabled = true;
        networkSeries.nodes.template.circle.fillOpacity = 0.2;
        networkSeries.nodes.template.outerCircle.disabled = true;
        networkSeries.nodes.template.layout = "absolute";
        networkSeries.nodes.template.togglable = true;

        var pieChart = networkSeries.nodes.template.createChild(am4charts.PieChart);
        pieChart.isMeasured = false;
        pieChart.propertyFields.data = "pie";
        pieChart.horizontalCenter = "middle";
        pieChart.verticalCenter = "middle";
        pieChart.chartContainer.minWidth = undefined;
        pieChart.chartContainer.minHeight = undefined;


        pieChart.adapter.add("radius", function (radius, target) {
            var radius = target.parent.outerCircle.pixelRadius;
            target.width = radius * 2;
            target.height = radius * 2;

            target.chartContainer.minWidth = undefined;
            target.chartContainer.minHeight = undefined;

            return radius;
        });

        chart.events.on("maxsizechanged", function () {
            pieChart.clones.each(function (clone) {
                clone.radius = clone.radius;
            })
        })

        var pieSeries = pieChart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.category = "category";
        pieSeries.dataFields.value = "value";
        pieSeries.labels.template.disabled = true;
        pieSeries.ticks.template.disabled = true;
        pieSeries.slices.template.stroke = am4core.color("#fff");
        pieSeries.slices.template.strokeWidth = 1;

        var tooltipHTML =
            `
      <div class="w-100 d-flex flex-column justify-space-between" style="width: 100%">
        <div class="text-left d-flex flex-column justify-start" style="width: 150px; padding:10px">
          <span style="font-size: 13px; color: #fff; font-weight: 400">{value}</span>
          <span style="font-size: 12px; color: #7D9EB5; font-weight: 300">{name}</span>

        </div>
      </div>
      `;

        // Tooltip 
        pieSeries.tooltip.getFillFromObject = false;
        pieSeries.tooltip.background.fill = am4core.color("#213345");
        pieSeries.tooltip.background.stroke = am4core.color("#213345");
        pieSeries.tooltip.background.cornerRadius = 5;
        pieSeries.tooltip.label.minWidth = 150;
        pieSeries.tooltip.label.padding(0, 0, 0, 0);
        pieSeries.tooltip.label.fontSize = 12;
        pieSeries.tooltip.position = "pointer";
        // series.tooltip.pointerOrientation = "vertical";
        pieSeries.tooltipHTML = tooltipHTML;
        var shadow = pieSeries.tooltip.background.filters.getIndex(0);
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
        pieChart.colors = colorSet;
        pieSeries.colors = colorSet;

        // Add chart cursor
        chart.cursor = new am4charts.XYCursor();
        chart.cursor.behavior = "zoomY";

    }


    render() {

        let chart_class = this.props.chart_class;
        let chart_id = this.props.chart_id;

        return (
            <div id={chart_id} className={chart_class} ></div>
        )
    }
}